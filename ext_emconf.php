<?php

$EM_CONF[$_EXTKEY] = array(
    'title' => '$extension_title$',
    'description' => 'Provider Extension',
    'category' => 'templates',
    'author' => 'author name',
    'author_email' => '@',
    'state' => 'stable',
    'internal' => '',
    'uploadfolder' => '0',
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '1.0.0',
    'constraints' => array(
        'depends' => array(
            'typo3' => '6.2.0-7.99.99',
            'fluid_styled_content' => '7.6.0-7.99.99',
        ),
        'conflicts' => array(
        ),
        'suggests' => array(
        ),
    ),
);