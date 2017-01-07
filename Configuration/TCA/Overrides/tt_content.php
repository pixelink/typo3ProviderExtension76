<?php
if (!defined('TYPO3_MODE')) {
    die ('Access denied.');
}


// add spaceBefore and spaceAfter fields to every content Element
$temporaryColumns = array(
    'px_space_before' => array(
        'exclude' => 1,
        'label' => 'Space before element',
        'config' => array(
            'type' => 'select',
            'items' => array(),
            'size' => 1,
            'maxitems' => 1,
        )
    ),
    'px_space_after' => array(
        'exclude' => 1,
        'label' => 'Space after element',
        'config' => array(
            'type' => 'select',
            'items' => array(),
            'size' => 1,
            'maxitems' => 1,
        )
    ),
    'px_additional_css_class' => array(
        'exclude' => 1,
        'label' => 'Additional CSS class',
        'config' => array(
            'type' => 'input',
            'size' => 80
        )
    )
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
    'tt_content',
    $temporaryColumns
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
    'tt_content',
    'px_space_before, px_space_after, px_additional_css_class',
    '',
    'after:layout'
);