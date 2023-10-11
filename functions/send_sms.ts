import { DefineFunction, Schema, SlackFunction } from "deno-slack-sdk/mod.ts";

export const SendSMSDefinition = DefineFunction({
  callback_id: "send_sms",
  title: "Send SMS",
  description: "Send an SMS message to a specified mobile number",
  source_file: "functions/send_sms.ts",
  input_parameters: {
    properties: {
      mobileNumber: {
        type: Schema.types.string,
        description: "Mobile number to send the SMS to",
      },
      messageText: {
        type: Schema.types.string,
        description: "Message to be sent",
      },
    },
    required: ["mobileNumber", "messageText"],
  },
  output_parameters: {
    properties: {},
    required: [],
  },
});

export default SlackFunction(
  SendSMSDefinition,
  async ({ inputs, env }) => { // Using the "env" context property
    try {
      const mobileNumber = inputs.mobileNumber;
      const messageText = inputs.messageText;

      // Access the environment variables using the env context property
      const twilioAccountSid = env["TWILIO_ACCOUNT_SID"];
      const twilioAuthToken = env["TWILIO_AUTH_TOKEN"];
      const twilioFromNumber = env["TWILIO_FROM_NUMBER"];

      const smsData = new URLSearchParams({
        "From": twilioFromNumber,
        "To": mobileNumber,
        "Body": messageText,
      });

      const smsResponse = await fetch(
        "https://api.twilio.com/2010-04-01/Accounts/" + twilioAccountSid +
          "/Messages.json",
        {
          method: "POST",
          headers: {
            "Authorization": "Basic " +
              btoa(twilioAccountSid + ":" + twilioAuthToken),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: smsData,
        },
      );

      if (!smsResponse.ok) {
        // Return status code from Twilio
        throw new Error(
          `Failed to send SMS. Status Code: ${smsResponse.status}`,
        );
      }
    } catch (error) {
      // Error logging with status code
      console.error(error.message);
    }

    return { outputs: {} };
  },
);
