import { Manifest } from "deno-slack-sdk/mod.ts";
import { SendSMSDefinition } from "./functions/send_sms.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
  name: "SMS",
  description: "Send SMS",
  icon: "assets/sms-icon.png",
  workflows: [],
  functions: [SendSMSDefinition],
  outgoingDomains: ["api.twilio.com"],
  datastores: [],
  botScopes: [
    "commands",
    "chat:write",
    "chat:write.public",
    "datastore:read",
    "datastore:write",
    "chat:write.customize",
  ],
});
