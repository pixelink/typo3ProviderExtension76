# Add Application Context
# You need to extend your .htaccess for working application context

# SetEnvIf Host ".*" TYPO3_CONTEXT=Production
# SetEnvIf Host "staging.domain.de" TYPO3_CONTEXT=Production/Staging
# SetEnvIf Host "www.\.livedomain\.de" TYPO3_CONTEXT=Production
# SetEnvIf Host "devdomain.dev" TYPO3_CONTEXT=Development

[applicationContext = Production]
    config {
        absRefPrefix = /
        baseURL = //www.livedomain.de/
    }
[end]
[applicationContext = Production/Staging]
    config {
        absRefPrefix = /
        baseURL = https://staging.domain.de/
    }
[end]
[applicationContext = Development]
    config {
        absRefPrefix = /
        baseURL = http://devdomain.dev/
    }
[end]


# Basic configuration
config {

    doctype = html5
    renderCharset = utf-8
    metaCharset = utf-8
    additionalHeaders = Content-Type:text/html;charset=utf-8

    index_enable = 1

    #make links across multiple page trees possible
    typolinkCheckRootline = 1
    typolinkEnableLinksAcrossDomains = 1

    linkVars = L(0-10)
    language = de
    locale_all = de_DE.UTF-8
    htmlTag_langKey = de
    sys_language_uid = 0
    sys_language_overlay = 0
    sys_language_mode = content_fallback
    defaultGetVars {
        L = 0
    }

    spamProtectEmailAddresses = 2
    spamProtectEmailAddresses_atSubst = (at)

    # TYPO3 debugging information
    contentObjectExceptionHandler = 0
}