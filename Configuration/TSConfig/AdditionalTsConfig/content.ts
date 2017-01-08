# These file extends the content elements
# in particular we are predefining new layout styles
# rename the headline labels
# and add a field for spaceBefore and spaceAfter

# Header layouts
###########################################################################################
TCEFORM {
    tt_content {
        layout {
            addItems {
                100 = To change edit TSConfig/AdditionalTsConfig/Content.ts
                110 = Your New Layout ...
            }
        }

        header_layout {
            altLabels {
                1 = Main Headline H1 (1 per page!)
                2 = To change edit TSConfig/AdditionalTsConfig/Content.ts
                3 = Headline H3
                4 = Headline H4
                5 = Headline H5
                100 = Dont show headline in frontend
            }
        }

        # space before CE
        # name css class as the key e.g spaceBeforexx
        px_space_before {
            addItems {
                spaceBeforeDefault = -none-
                spaceBefore20 = 20px
                spaceBefore40 = 40px
                spaceBefore60 = 60px
                spaceBefore70 = 70px
            }
        }

        # space after CE
        # name css class as the key e.g spaceAfterxx
        px_space_after {
            addItems {
                spaceAfterDefault = -none-
                spaceAfter20 = 20px
                spaceAfter40 = 40px
                spaceAfter60 = 60px
                spaceAfter70 = 70px
            }
        }
    }
}