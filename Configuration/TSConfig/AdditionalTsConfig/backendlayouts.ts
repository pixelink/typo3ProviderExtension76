# Backend Layouts

mod.web_layout.BackendLayouts {

    # Full Page
    fullpage {
        title = Full page
        icon = EXT:$extension_name$/Resources/Public/Icons/full_page.png
        config {
            backend_layout {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                            }
                        }
                    }
                }
            }
        }
    }

    # Page with sidebar rechts
    subpageRightSidebar {
        title = Subpage with sidebar right
        icon = EXT:$extension_name$/Resources/Public/Icons/content_left_sidebar_right.png
        config {
            backend_layout {
                colCount = 4
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                                colspan = 3
                            }
                            2 {
                                name = Sidebar
                                colPos = 50
                            }
                        }
                    }
                }
            }
        }
    }

    # Page with sidebar left
    subpageLeftSidebar {
        title = Subpage with sidebar left
        icon = EXT:$extension_name$/Resources/Public/Icons/content_right_sidebar_left.png
        config {
            backend_layout {
                colCount = 2
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Sidebar
                                colPos = 1
                            }
                            2 {
                                name = Content
                                colPos = 0
                            }
                        }
                    }
                }
            }

        }
    }

    subpage_narrow {
        title = Subpage with full width and narrow content width
        icon = EXT:$extension_name$/Resources/Public/Icons/full_page_narrow.png
        config {
            backend_layout {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Content
                                colPos = 0
                            }
                        }
                    }
                }
            }
        }
    }

}
