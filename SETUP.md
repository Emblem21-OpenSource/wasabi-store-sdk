# Setting up WasabiStore

## Installation

`npm add wasabi-store-sdk --save` or `yarn add wasabi-store-sdk`

## Create an Account

Go to [https://www.wasabi.com](https://www.wasabi.com) and click on the green "*TRY IT FREE*" button and follow the instructions in the confirmation email to complete acount creation.

## Setup Credentials

Once you complete the user registration, you'll be in the Wasabi console.  Click on the three-dots in the upper-right hand corner, and click on "*My Profile*" and then click on the red "*CREATE NEW ACCESS KEY*" button.

This will bring up a pop-up with your credentials already populated.  To properly use WasabiStore, you'll have to save these values within the various methods of credential storage below.

### Credential Storage

You can populate authentication credentials by adding the following section to your `~/.aws/credentials` file:

```
[wasabiStore]
aws_access_key_id = <YOUR_ACCESS_KEY_ID>
aws_secret_access_key = <YOUR_SECRET_ACCESS_KEY>
```

### Environment Variables

You can also populate authentication credentials at the command line when you run wasabiStore

`AWS_ACCESS_KEY_ID=xxxx AWS_SECRET_ACCESS_KEY=xxx ./wasabiStore`

### Instance Arguments

You can also pass credential values into individual WasabiStore instances.

```javascript
const WasabiStore = require('wasabi-store')
const wasabiStoreInstance = WasabiStore('accessKeyGoesHere', 'secretAccessKeyGoesHere')
```
