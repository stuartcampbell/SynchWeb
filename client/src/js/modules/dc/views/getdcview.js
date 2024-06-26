define(['views/getview',
    'modules/dc/datacollections',
    'modules/types/gen/dc/datacollections',
    'modules/types/sm/dc/datacollections',
    'modules/types/tomo/dc/datacollections',
    'modules/types/pow/dc/datacollections',
    'modules/types/saxs/dc/datacollections',
    'modules/types/xpdf/dc/datacollections',
    
], function(GetView,
    DCList,
    GenericDCList, SMDCList, TomoDCList, POWDCList, SAXSDCList, XPDFDCList
    ){


    return {

        DCView: new GetView({
            views: {
                mx: DCList,
                sm: SMDCList,
                gen: GenericDCList,
                tomo: TomoDCList,
                pow: POWDCList,
                saxs: SAXSDCList,
                xpdf: XPDFDCList,
            },
            default: GenericDCList,
        })

    }


})