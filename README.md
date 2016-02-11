# typo3ProviderExtension76
Provider Extension for TYPO3 v. 7.6 with fluid styled content usage
It's defined for usage of one Default, a OneCol and TwoCol Backend Layout.
The Backend Layouts are not created, you have to do this by your own in the TYPO3 Backend.

For usage edit following files:

> ext_emconf - set title, description, author, author_email and dependicies, in our case typo3 and fluid_styled_content
> ext_tables.php (replace TypoScriptName)
> Configuration/TypoScript/constants.txt (replace YourExtFolder with foldername of your extension)
> Configuration/TypoScript/setup.txt (replace YourExtFolder with foldername of your extension). Add additional TS via <INCLUDE_TYPOSCRIPT...> just add filename.ts within the AdditionalTS path


