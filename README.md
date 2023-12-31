## SMS Function

This app provides a single function (no workflow) that sends SMS messages using the Twilio API. The function can be used as a step in Slack's next-generation platform Workflow Builder.

<img width="1106" alt="image" src="https://github.com/andrewn-net/sms-function/assets/27248499/b2cff370-9fef-42e3-9588-d81067a04c2a">



## Setup

### Twilio API

Sign up to https://www.twilio.com/messaging/channels/sms to access the Twilio SMS API. You will require an auth token, account ID, and Twilio phone number.


### Clone the Template

Start by cloning this repository:

```zsh
# Clone this project onto your machine
$ slack create sms-function -t andrewn-net/sms-function

# Change into the project directory
$ cd sms-function
```

## Running Your Project Locally

While building your app, you can see your changes appear in your workspace in
real-time with `slack run`. You'll know an app is the development version if the
name has the string `(local)` appended.

```zsh
# Run app locally
$ slack run

Connected, awaiting events
```

To stop running locally, press `<CTRL> + C` to end the process.

## Deploying Your App

Once development is complete, deploy the app to Slack infrastructure using
`slack deploy`:

```zsh
$ slack deploy
```

## Viewing Activity Logs

Activity logs of your application can be viewed live and as they occur with the
following command:

```zsh
$ slack activity --tail
```

## Project Structure

### `.slack/`

Contains `apps.dev.json` and `apps.json`, which include installation details for
development and deployed apps.

### `functions/`

[Functions](https://api.slack.com/automation/functions) are reusable building
blocks of automation that accept inputs, perform calculations, and provide
outputs. Functions can be used independently or as steps in workflows.

### `manifest.ts`

The [app manifest](https://api.slack.com/automation/manifest) contains the app's
configuration. This file defines attributes like app name and description.

### `slack.json`

Used by the CLI to interact with the project's SDK dependencies. It contains
script hooks that are executed by the CLI and implemented by the SDK.

## Resources

To learn more about developing automations on Slack, visit the following:

- [Automation Overview](https://api.slack.com/automation)
- [CLI Quick Reference](https://api.slack.com/automation/cli/quick-reference)
- [Samples and Templates](https://api.slack.com/automation/samples)
