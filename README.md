# typo3ProviderExtension76
Provider Extension for TYPO3 v. 7.6 with fluid styled content usage
**Features**

    - Predefined Backend Layouts
    - Space before and after for each CE
    - Additional CSS class for each CE
    - CE Headline labels roughly edited
    - CE Layouts extended

Some Backend Layouts are already integrated. Home Page not, as this is mostly to individual

**Integrated Backend Layouts**
- Subpage Full Page width
- Subpage Full Page width narrow text length
- Subpage with sidebar right
- Subpage with sidebar left

Replace placeholder to name the providerextension correct
---------------------------------------------------------
At some places the name of the extension must be set, for this we set placeholder wich you can easyly search and replace
The following placeholders must be replaced:

   - $extension_name$ (directory name)
   - $extension_title$ (title of your extension in backend - feel free in your choice)

Furthermore you should edit the following files:

> **ext_emconf** - set title, description, author, author_email and dependicies, in our case typo3 and fluid_styled_content

