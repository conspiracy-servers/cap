# Security Policy

## How do I tell if it's a security vulnerability?

### If it fits into one of the following, it's a vulnerability: 

* A bug in the code which allows a client access to server-only configurations and settings.
* A bug in the code which allows a client to custom execute remote commands and custom Lua code on the server.
* A bug in the code which allows a client access to administrator configurations and settings.
* A bug in the code which allows a client to crash other clients.
* *(This list is possibly incomplete and thus is subject to change in the future.)*

### The following does not count as a security vulnerability:

* A bug in the code which causes your local client to crash.
* A bug in the code which causes in both serverside or clientside Lua/script errors.
* *(This list is possibly incomplete and thus is subject to change in the future.)*

## Supported versions

The [master branch](https://github.com/conspiracy-servers/stargate/tree/master) is the only place which will be given security updates.

Previous [releases](https://github.com/conspiracy-servers/stargate/releases) will not be modified with security patches, instead a new update will be released that contains the patch.

## Reporting a security vulnerability

If you know of or discover a security vulnerability, **do not post it publicly!** Instead, please email [contact@viral32111.com](mailto:contact@viral32111.com) with all the details about it.

Once we have read and acknowledged the vulnerability, you will recieve a reply with details about what's going to happen. Please do not ignore any further emails, as we may require to talk with you back and forth in order to properly patch the vulnerability.

Once the vulnerability has been patched and a new version is released, we will publicly disclose information about the vulnerability. You will of course be given credit (please provide us with a link to one of your online profiles or a contact email for full credit. e.g. Steam, GitHub).
