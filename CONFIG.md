# Custom Configurations

The default config [config.txt](lua/data/stargate/config.txt) holds all data which is necessary for the pack.

You can create your own `custom_config.txt` in the same directory and add the necessary data to the sections like in [config.txt](lua/data/stargate/config.txt). Every parameter is already explained for you in config.txt. **The values set inside the custom config will overwrite the default ones in config.txt!**

For example, if you want to increase the ZPM's maximum capacity, then your custom config would look like this (lines starting with a `#` are comments, they will be ignored by the game):
```
# We are changing the capacity! Horray for life support cheating!
[zpm_mk3]
capacity = 10000000
```