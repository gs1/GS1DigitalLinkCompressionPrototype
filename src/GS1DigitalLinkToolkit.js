class GS1DigitalLinkToolkit {
	
	// constructor sets up various data resources shared by multiple methods
	constructor() {
		
		// list of all GS1 Application Identifiers as defined in GS1 General Specifications v18
		var aitable=[{"title":"Serial Shipping Container Code (SSCC) ","label":"SSCC","shortcode":"sscc","ai":"00","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{18})"},{"title":"Global Trade Item Number (GTIN)","label":"GTIN","shortcode":"gtin","ai":"01","format":"N14","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["22","10","21"],"regex":"(\\d{12,14}|\\d{8})"},{"title":"GTIN of contained trade items","label":"CONTENT","ai":"02","format":"N14","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{14})"},{"title":"Batch or lot number","label":"BATCH/LOT","shortcode":"lot","ai":"10","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Production date (YYMMDD)","label":"PROD DATE","ai":"11","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Due date (YYMMDD)","label":"DUE DATE","ai":"12","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Packaging date (YYMMDD)","label":"PACK DATE","ai":"13","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Best before date (YYMMDD)","label":"BEST BEFORE or BEST BY","ai":"15","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Sell by date (YYMMDD)","label":"SELL BY","ai":"16","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Expiration date (YYMMDD)","label":"USE BY OR EXPIRY","shortname":"exp","ai":"17","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Internal product variant","label":"VARIANT","ai":"20","format":"N2","type":"D","fixedLength":true,"regex":"(\\d{2})"},{"title":"Serial number","label":"SERIAL","shortcode":"ser","ai":"21","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Consumer product variant","label":"CPV","shortcode":"cpv","ai":"22","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Additional product identification assigned by the manufacturer","label":"ADDITIONAL ID","ai":"240","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Customer part number","label":"CUST. PART NO.","ai":"241","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Made-to-Order variation number","label":"MTO VARIANT","ai":"242","format":"N..6","type":"D","fixedLength":false,"regex":"(\\d{0,6})"},{"title":"Packaging component number","label":"PCN","ai":"243","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Secondary serial number","label":"SECONDARY SERIAL","ai":"250","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Reference to source entity","label":"REF. TO SOURCE ","ai":"251","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Document Type Identifier (GDTI)","label":"GDTI","shortcode":"gdti","ai":"253","format":"N13+X..17","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,17})"},{"title":"GLN extension component","label":"GLN EXTENSION COMPONENT","shortcode":"glnx","ai":"254","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Coupon Number (GCN)","label":"GCN","shortcode":"gcn","ai":"255","format":"N13+N..12","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})(\\d{0,12})"},{"title":"Variable count of items (variable measure trade item)","label":"VAR. COUNT","ai":"30","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3100","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3101","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3102","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3103","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3104","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3105","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3110","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3111","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3112","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3113","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3114","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3115","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3120","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3121","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3122","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3123","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3124","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3125","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3130","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3131","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3132","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3133","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3134","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3135","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3140","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3141","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3142","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3143","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3144","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3145","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3150","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3151","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3152","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3153","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3154","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3155","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3160","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3161","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3162","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3163","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3164","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3165","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3200","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3201","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3202","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3203","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3204","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3205","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3210","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3211","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3212","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3213","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3214","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3215","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3220","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3221","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3222","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3223","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3224","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3225","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3230","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3231","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3232","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3233","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3234","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3235","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3240","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3241","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3242","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3243","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3244","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3245","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3250","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3251","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3252","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3253","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3254","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3255","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3260","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3261","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3262","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3263","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3264","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3265","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3270","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3271","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3272","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3273","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3274","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3275","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3280","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3281","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3282","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3283","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3284","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3285","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3290","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3291","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3292","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3293","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3294","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3295","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3300","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3301","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3302","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3303","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3304","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3305","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3310","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3311","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3312","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3313","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3314","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3315","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3320","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3321","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3322","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3323","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3324","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3325","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3330","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3331","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3332","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3333","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3334","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3335","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3340","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3341","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3342","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3343","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3344","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square metres","label":"AREA (m^2), log","ai":"3345","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3350","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3351","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3352","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3353","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3354","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3355","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3360","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3361","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3362","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3363","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3364","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3365","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3370","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3371","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3372","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3373","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3374","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3375","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3400","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3401","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3402","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3403","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3404","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3405","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3410","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3411","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3412","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3413","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3414","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3415","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3420","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3421","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3422","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3423","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3424","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3425","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3430","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3431","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3432","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3433","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3434","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3435","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3440","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3441","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3442","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3443","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3444","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3445","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3450","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3451","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3452","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3453","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3454","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3455","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3460","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3461","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3462","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3463","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3464","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3465","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3470","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3471","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3472","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3473","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3474","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3475","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3480","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3481","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3482","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3483","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3484","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3485","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3490","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3491","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3492","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3493","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3494","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3495","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3500","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3501","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3502","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3503","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3504","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3505","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3510","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3511","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3512","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3513","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3514","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3515","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3520","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3521","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3522","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3523","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3524","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3525","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3530","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3531","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3532","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3533","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3534","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square inches","label":"AREA (in^2), log","ai":"3535","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3540","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3541","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3542","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3543","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3544","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3545","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3550","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3551","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3552","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3553","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3554","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3555","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3560","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3561","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3562","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3563","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3564","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3565","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3570","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3571","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3572","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3573","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3574","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3575","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3600","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3601","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3602","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3603","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3604","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3605","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3610","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3611","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3612","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3613","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3614","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3615","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3620","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3621","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3622","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3623","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3624","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3625","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3630","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3631","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3632","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3633","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3634","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3635","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3640","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3641","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3642","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3643","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3644","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3645","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3650","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3651","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3652","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3653","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3654","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3655","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3660","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3661","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3662","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3663","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3664","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3665","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3670","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3671","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3672","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3673","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3674","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3675","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3680","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3681","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3682","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3683","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3684","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3685","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3690","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3691","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3692","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3693","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3694","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3695","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Count of trade items","label":"COUNT","ai":"37","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3900","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3901","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3902","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3903","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3904","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3905","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3906","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3907","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3908","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3909","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3910","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3911","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3912","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3913","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3914","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3915","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3916","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3917","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3918","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3919","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3920","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3921","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3922","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3923","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3924","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3925","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3926","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3927","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3928","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3929","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3930","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3931","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3932","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3933","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3934","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3935","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3936","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3937","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3938","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3939","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3940","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3941","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3942","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3943","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Customer's purchase order number","label":"ORDER NUMBER","ai":"400","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Identification Number for Consignment (GINC)","label":"GINC","shortcode":"ginc","ai":"401","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Shipment Identification Number (GSIN)","label":"GSIN","shortcode":"gsin","ai":"402","format":"N17","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{17})"},{"title":"Routing code","label":"ROUTE","ai":"403","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Ship to - Deliver to Global Location Number","label":"SHIP TO LOC","ai":"410","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Bill to - Invoice to Global Location Number","label":"BILL TO ","ai":"411","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Purchased from Global Location Number","label":"PURCHASE FROM","ai":"412","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Ship for - Deliver for - Forward to Global Location Number","label":"SHIP FOR LOC","ai":"413","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Identification of a physical location - Global Location Number","label":"LOC No","shortcode":"gln","ai":"414","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["254"],"regex":"(\\d{13})"},{"title":"Global Location Number of the invoicing party","label":"PAY TO","shortcode":"payto","ai":"415","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"GLN of the production or service location","label":"PROD/SERV LOC","ai":"416","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"},{"title":"Ship to - Deliver to postal code within a single postal authority","label":"SHIP TO POST","ai":"420","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Ship to - Deliver to postal code with ISO country code","label":"SHIP TO POST","ai":"421","format":"N3+X..9","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,9})"},{"title":"Country of origin of a trade item","label":"ORIGIN","ai":"422","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country of initial processing","label":"COUNTRY - INITIAL PROCESS.","ai":"423","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"},{"title":"Country of processing","label":"COUNTRY - PROCESS.","ai":"424","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country of disassembly","label":"COUNTRY - DISASSEMBLY","ai":"425","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"},{"title":"Country covering full process chain","label":"COUNTRY - FULL PROCESS","ai":"426","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"},{"title":"Country subdivision Of origin","label":"ORIGIN SUBDIVISION","ai":"427","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"},{"title":"NATO Stock Number (NSN)","label":"NSN","ai":"7001","format":"N13","type":"D","fixedLength":true,"regex":"(\\d{13})"},{"title":"UN/ECE meat carcasses and cuts classification","label":"MEAT CUT","ai":"7002","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Expiration date and time","label":"EXPIRY TIME","shortname":"expdt","ai":"7003","format":"N10","type":"D","fixedLength":true,"regex":"(\\d{10})"},{"title":"Active potency","label":"ACTIVE POTENCY","ai":"7004","format":"N..4","type":"D","fixedLength":false,"regex":"(\\d{0,4})"},{"title":"Catch area","label":"CATCH AREA","ai":"7005","format":"X..12","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,12})"},{"title":"First freeze date ","label":"FIRST FREEZE DATE","ai":"7006","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"},{"title":"Harvest date","label":"HARVEST DATE","ai":"7007","format":"N6..12","type":"D","fixedLength":false,"regex":"(\\d{6,12})"},{"title":"Species for fishery purposes","label":"AQUATIC SPECIES","ai":"7008","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"},{"title":"Fishing gear type","label":"FISHING GEAR TYPE","ai":"7009","format":"X..10","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,10})"},{"title":"Production method","label":"PROD METHOD","ai":"7010","format":"X..2","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,2})"},{"title":"Refurbishment lot ID","label":"REFURB LOT","ai":"7020","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Functional status","label":"FUNC STAT","ai":"7021","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Revision status","label":"REV STAT","ai":"7022","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Individual Asset Identifier (GIAI) of an assembly","label":"GIAI - ASSEMBLY","ai":"7023","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 0","ai":"7030","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 1","ai":"7031","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 2","ai":"7032","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 3","ai":"7033","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 4","ai":"7034","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 5","ai":"7035","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 6","ai":"7036","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 7","ai":"7037","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 8","ai":"7038","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 9","ai":"7039","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Germany PZN","label":"NHRN PZN","ai":"710","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - France CIP","label":"NHRN CIP","ai":"711","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Spain CN","label":"NHRN CN","ai":"712","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Brasil DRN","label":"NHRN DRN","ai":"713","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"National Healthcare Reimbursement Number (NHRN) - Portugal AIM","label":"NHRN AIM","ai":"714","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Roll products (width, length, core diameter, direction, splices)","label":"DIMENSIONS","ai":"8001","format":"N14","type":"D","fixedLength":true,"regex":"(\\d{14})"},{"title":"Cellular mobile telephone identifier","label":"CMT No","ai":"8002","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Returnable Asset Identifier (GRAI)","label":"GRAI","shortcode":"grai","ai":"8003","format":"N14+X..16","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{14})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,16})"},{"title":"Global Individual Asset Identifier (GIAI)","label":"GIAI","shortcode":"giai","ai":"8004","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Identification of an individual trade item piece","label":"ITIP","shortcode":"itip","ai":"8006","format":"N14+N2+N2","type":"I","fixedLength":true,"checkDigit":"14","qualifiers":["22","10","21"],"regex":"(\\d{14})(\\d{2})(\\d{2})"},{"title":"International Bank Account Number (IBAN) ","label":"IBAN","ai":"8007","format":"X..34","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,34})"},{"title":"Date and time of production","label":"PROD TIME","ai":"8008","format":"N8+N..4","type":"D","fixedLength":false,"regex":"(\\d{8})(\\d{0,4})"},{"title":"Component/Part Identifier (CPID)","label":"CPID","shortcode":"cpid","ai":"8010","format":"Y..30","type":"I","fixedLength":false,"qualifiers":["8011"],"regex":"([\\x23\\x2D\\x2F\\x30-\\x39\\x41-\\x5A]{0,30})"},{"title":"Component/Part Identifier serial number (CPID SERIAL)","label":"CPID SERIAL","shortcode":"cpsn","ai":"8011","format":"N..12","type":"Q","fixedLength":false,"regex":"(\\d{0,12})"},{"title":"Software version","label":"VERSION","ai":"8012","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"},{"title":"Global Model Number (GMN)","label":"GMN (for medical devices, the default, global data title is BUDI-DI )","ai":"8013","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Global Service Relation Number - Provider","label":"GSRN - PROVIDER","shortcode":"gsrnp","ai":"8017","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"},{"title":"Global Service Relation Number - Recipient","label":"GSRN - RECIPIENT","shortcode":"gsrn","ai":"8018","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"},{"title":"Service Relation Instance Number (SRIN)","label":"SRIN","shortcode":"srin","ai":"8019","format":"N..10","type":"Q","fixedLength":false,"regex":"(\\d{0,10})"},{"title":"Payment slip reference number","label":"REF No","ai":"8020","format":"X..25","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,25})"},{"title":"Coupon code identification for use in North America","ai":"8110","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Loyalty points of a coupon","label":"POINTS","ai":"8111","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"},{"title":"Paperless coupon code identification for use in North America","ai":"8112","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Extended Packaging URL ","label":"PRODUCT URL","ai":"8200","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"},{"title":"Information mutually agreed between trading partners","label":"INTERNAL","ai":"90","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"},{"title":"Company internal information","label":"INTERNAL","ai":"91","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"92","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"93","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"94","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"95","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"96","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"97","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"98","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"},{"title":"Company internal information","label":"INTERNAL","ai":"99","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"}];

		// Element Strings with predefined length using GS1 Application Identifiers, as defined in GS1 Gen Specs - see Figure 7.8.4-2 of GS1 Gen Specs v18 at https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf
		var fixedLengthTable={"00":20,"01":16,"02":16,"03":16,"04":18,"11":8,"12":8,"13":8,"14":8,"15":8,"16":8,"17":8,"18":8,"19":4,"20":4,"31":10,"32":10,"33":10,"34":10,"35":10,"36":10,"41":16};

		// tableP indicates for any initial two digits, what is the total length of the numeric AI key, e.g. "80":4 --> all AI keys beginning with 80 are four digit AI keys, 80xx
		var tableP = {"00":2,"01":2,"02":2,"10":2,"11":2,"12":2,"13":2,"15":2,"16":2,"17":2,"20":2,"21":2,"22":2,"23":3,"24":3,"25":3,"30":2,"31":4,"32":4,"33":4,"34":4,"35":4,"36":4,"37":2,"39":4,"40":3,"41":3,"42":3,"70":4,"71":3,"72":4,"80":4,"81":4,"82":4,"90":2,"91":2,"92":2,"93":2,"94":2,"95":2,"96":2,"97":2,"98":2,"99":2};

		// tableF indicates the expected format for the value of each AI.  C1=number of fixed-length digits; C2=maximum number of variable-length digits; C4=maximum number of variable-length alphanumeric characters
		var tableF= {"00":{"C1":18},"01":{"C1":14},"02":{"C1":14},"11":{"C1":6},"12":{"C1":6},"13":{"C1":6},"15":{"C1":6},"16":{"C1":6},"17":{"C1":6},"20":{"C1":2},"3100":{"C1":6},"3101":{"C1":6},"3102":{"C1":6},"3103":{"C1":6},"3104":{"C1":6},"3105":{"C1":6},"3110":{"C1":6},"3111":{"C1":6},"3112":{"C1":6},"3113":{"C1":6},"3114":{"C1":6},"3115":{"C1":6},"3120":{"C1":6},"3121":{"C1":6},"3122":{"C1":6},"3123":{"C1":6},"3124":{"C1":6},"3125":{"C1":6},"3130":{"C1":6},"3131":{"C1":6},"3132":{"C1":6},"3133":{"C1":6},"3134":{"C1":6},"3135":{"C1":6},"3140":{"C1":6},"3141":{"C1":6},"3142":{"C1":6},"3143":{"C1":6},"3144":{"C1":6},"3145":{"C1":6},"3150":{"C1":6},"3151":{"C1":6},"3152":{"C1":6},"3153":{"C1":6},"3154":{"C1":6},"3155":{"C1":6},"3160":{"C1":6},"3161":{"C1":6},"3162":{"C1":6},"3163":{"C1":6},"3164":{"C1":6},"3165":{"C1":6},"3200":{"C1":6},"3201":{"C1":6},"3202":{"C1":6},"3203":{"C1":6},"3204":{"C1":6},"3205":{"C1":6},"3210":{"C1":6},"3211":{"C1":6},"3212":{"C1":6},"3213":{"C1":6},"3214":{"C1":6},"3215":{"C1":6},"3220":{"C1":6},"3221":{"C1":6},"3222":{"C1":6},"3223":{"C1":6},"3224":{"C1":6},"3225":{"C1":6},"3230":{"C1":6},"3231":{"C1":6},"3232":{"C1":6},"3233":{"C1":6},"3234":{"C1":6},"3235":{"C1":6},"3240":{"C1":6},"3241":{"C1":6},"3242":{"C1":6},"3243":{"C1":6},"3244":{"C1":6},"3245":{"C1":6},"3250":{"C1":6},"3251":{"C1":6},"3252":{"C1":6},"3253":{"C1":6},"3254":{"C1":6},"3255":{"C1":6},"3260":{"C1":6},"3261":{"C1":6},"3262":{"C1":6},"3263":{"C1":6},"3264":{"C1":6},"3265":{"C1":6},"3270":{"C1":6},"3271":{"C1":6},"3272":{"C1":6},"3273":{"C1":6},"3274":{"C1":6},"3275":{"C1":6},"3280":{"C1":6},"3281":{"C1":6},"3282":{"C1":6},"3283":{"C1":6},"3284":{"C1":6},"3285":{"C1":6},"3290":{"C1":6},"3291":{"C1":6},"3292":{"C1":6},"3293":{"C1":6},"3294":{"C1":6},"3295":{"C1":6},"3300":{"C1":6},"3301":{"C1":6},"3302":{"C1":6},"3303":{"C1":6},"3304":{"C1":6},"3305":{"C1":6},"3310":{"C1":6},"3311":{"C1":6},"3312":{"C1":6},"3313":{"C1":6},"3314":{"C1":6},"3315":{"C1":6},"3320":{"C1":6},"3321":{"C1":6},"3322":{"C1":6},"3323":{"C1":6},"3324":{"C1":6},"3325":{"C1":6},"3330":{"C1":6},"3331":{"C1":6},"3332":{"C1":6},"3333":{"C1":6},"3334":{"C1":6},"3335":{"C1":6},"3340":{"C1":6},"3341":{"C1":6},"3342":{"C1":6},"3343":{"C1":6},"3344":{"C1":6},"3345":{"C1":6},"3350":{"C1":6},"3351":{"C1":6},"3352":{"C1":6},"3353":{"C1":6},"3354":{"C1":6},"3355":{"C1":6},"3360":{"C1":6},"3361":{"C1":6},"3362":{"C1":6},"3363":{"C1":6},"3364":{"C1":6},"3365":{"C1":6},"3370":{"C1":6},"3371":{"C1":6},"3372":{"C1":6},"3373":{"C1":6},"3374":{"C1":6},"3375":{"C1":6},"3400":{"C1":6},"3401":{"C1":6},"3402":{"C1":6},"3403":{"C1":6},"3404":{"C1":6},"3405":{"C1":6},"3410":{"C1":6},"3411":{"C1":6},"3412":{"C1":6},"3413":{"C1":6},"3414":{"C1":6},"3415":{"C1":6},"3420":{"C1":6},"3421":{"C1":6},"3422":{"C1":6},"3423":{"C1":6},"3424":{"C1":6},"3425":{"C1":6},"3430":{"C1":6},"3431":{"C1":6},"3432":{"C1":6},"3433":{"C1":6},"3434":{"C1":6},"3435":{"C1":6},"3440":{"C1":6},"3441":{"C1":6},"3442":{"C1":6},"3443":{"C1":6},"3444":{"C1":6},"3445":{"C1":6},"3450":{"C1":6},"3451":{"C1":6},"3452":{"C1":6},"3453":{"C1":6},"3454":{"C1":6},"3455":{"C1":6},"3460":{"C1":6},"3461":{"C1":6},"3462":{"C1":6},"3463":{"C1":6},"3464":{"C1":6},"3465":{"C1":6},"3470":{"C1":6},"3471":{"C1":6},"3472":{"C1":6},"3473":{"C1":6},"3474":{"C1":6},"3475":{"C1":6},"3480":{"C1":6},"3481":{"C1":6},"3482":{"C1":6},"3483":{"C1":6},"3484":{"C1":6},"3485":{"C1":6},"3490":{"C1":6},"3491":{"C1":6},"3492":{"C1":6},"3493":{"C1":6},"3494":{"C1":6},"3495":{"C1":6},"3500":{"C1":6},"3501":{"C1":6},"3502":{"C1":6},"3503":{"C1":6},"3504":{"C1":6},"3505":{"C1":6},"3510":{"C1":6},"3511":{"C1":6},"3512":{"C1":6},"3513":{"C1":6},"3514":{"C1":6},"3515":{"C1":6},"3520":{"C1":6},"3521":{"C1":6},"3522":{"C1":6},"3523":{"C1":6},"3524":{"C1":6},"3525":{"C1":6},"3530":{"C1":6},"3531":{"C1":6},"3532":{"C1":6},"3533":{"C1":6},"3534":{"C1":6},"3535":{"C1":6},"3540":{"C1":6},"3541":{"C1":6},"3542":{"C1":6},"3543":{"C1":6},"3544":{"C1":6},"3545":{"C1":6},"3550":{"C1":6},"3551":{"C1":6},"3552":{"C1":6},"3553":{"C1":6},"3554":{"C1":6},"3555":{"C1":6},"3560":{"C1":6},"3561":{"C1":6},"3562":{"C1":6},"3563":{"C1":6},"3564":{"C1":6},"3565":{"C1":6},"3570":{"C1":6},"3571":{"C1":6},"3572":{"C1":6},"3573":{"C1":6},"3574":{"C1":6},"3575":{"C1":6},"3600":{"C1":6},"3601":{"C1":6},"3602":{"C1":6},"3603":{"C1":6},"3604":{"C1":6},"3605":{"C1":6},"3610":{"C1":6},"3611":{"C1":6},"3612":{"C1":6},"3613":{"C1":6},"3614":{"C1":6},"3615":{"C1":6},"3620":{"C1":6},"3621":{"C1":6},"3622":{"C1":6},"3623":{"C1":6},"3624":{"C1":6},"3625":{"C1":6},"3630":{"C1":6},"3631":{"C1":6},"3632":{"C1":6},"3633":{"C1":6},"3634":{"C1":6},"3635":{"C1":6},"3640":{"C1":6},"3641":{"C1":6},"3642":{"C1":6},"3643":{"C1":6},"3644":{"C1":6},"3645":{"C1":6},"3650":{"C1":6},"3651":{"C1":6},"3652":{"C1":6},"3653":{"C1":6},"3654":{"C1":6},"3655":{"C1":6},"3660":{"C1":6},"3661":{"C1":6},"3662":{"C1":6},"3663":{"C1":6},"3664":{"C1":6},"3665":{"C1":6},"3670":{"C1":6},"3671":{"C1":6},"3672":{"C1":6},"3673":{"C1":6},"3674":{"C1":6},"3675":{"C1":6},"3680":{"C1":6},"3681":{"C1":6},"3682":{"C1":6},"3683":{"C1":6},"3684":{"C1":6},"3685":{"C1":6},"3690":{"C1":6},"3691":{"C1":6},"3692":{"C1":6},"3693":{"C1":6},"3694":{"C1":6},"3695":{"C1":6},"3940":{"C1":4},"3941":{"C1":4},"3942":{"C1":4},"3943":{"C1":4},"3941":{"C1":4},"3942":{"C1":4},"3943":{"C1":4},"402":{"C1":17},"410":{"C1":13},"411":{"C1":13},"412":{"C1":13},"413":{"C1":13},"414":{"C1":13},"415":{"C1":13},"416":{"C1":13},"422":{"C1":3},"424":{"C1":3},"426":{"C1":3},"7001":{"C1":13},"7003":{"C1":10},"7006":{"C1":6},"8001":{"C1":14},"8006":{"C1":18},"8017":{"C1":18},"8018":{"C1":18},"8111":{"C1":4},"242":{"C2":6},"255":{"C1":13,"C2":12},"30":{"C2":8},"37":{"C2":8},"3900":{"C2":15},"3901":{"C2":15},"3902":{"C2":15},"3903":{"C2":15},"3904":{"C2":15},"3905":{"C2":15},"3906":{"C2":15},"3907":{"C2":15},"3908":{"C2":15},"3909":{"C2":15},"3910":{"C1":3,"C2":15},"3911":{"C1":3,"C2":15},"3912":{"C1":3,"C2":15},"3913":{"C1":3,"C2":15},"3914":{"C1":3,"C2":15},"3915":{"C1":3,"C2":15},"3916":{"C1":3,"C2":15},"3917":{"C1":3,"C2":15},"3918":{"C1":3,"C2":15},"3919":{"C1":3,"C2":15},"3920":{"C2":15},"3921":{"C2":15},"3922":{"C2":15},"3923":{"C2":15},"3924":{"C2":15},"3925":{"C2":15},"3926":{"C2":15},"3927":{"C2":15},"3928":{"C2":15},"3929":{"C2":15},"3930":{"C1":3,"C2":15},"3931":{"C1":3,"C2":15},"3932":{"C1":3,"C2":15},"3933":{"C1":3,"C2":15},"3934":{"C1":3,"C2":15},"3935":{"C1":3,"C2":15},"3936":{"C1":3,"C2":15},"3937":{"C1":3,"C2":15},"3938":{"C1":3,"C2":15},"3939":{"C1":3,"C2":15},"423":{"C1":3,"C2":12},"425":{"C1":3,"C2":12},"7004":{"C2":4},"7007":{"C1":6,"C2":6},"8008":{"C1":8,"C2":4},"8011":{"C2":12},"8019":{"C2":10},"10":{"C4":20},"21":{"C4":20},"22":{"C4":20},"240":{"C4":30},"241":{"C4":30},"243":{"C4":20},"250":{"C4":30},"251":{"C4":30},"253":{"C1":13,"C4":17},"254":{"C4":20},"400":{"C4":30},"401":{"C4":30},"403":{"C4":30},"420":{"C4":20},"421":{"C1":3,"C4":9},"427":{"C4":3},"7002":{"C4":30},"7005":{"C4":12},"7008":{"C4":3},"7009":{"C4":10},"7010":{"C4":2},"7020":{"C4":20},"7021":{"C4":20},"7022":{"C4":20},"7023":{"C4":30},"7030":{"C1":3,"C4":27},"7031":{"C1":3,"C4":27},"7032":{"C1":3,"C4":27},"7033":{"C1":3,"C4":27},"7034":{"C1":3,"C4":27},"7035":{"C1":3,"C4":27},"7036":{"C1":3,"C4":27},"7037":{"C1":3,"C4":27},"7038":{"C1":3,"C4":27},"7039":{"C1":3,"C4":27},"710":{"C4":20},"711":{"C4":20},"712":{"C4":20},"713":{"C4":20},"714":{"C4":20},"7230":{"C4":30},"7231":{"C4":30},"7232":{"C4":30},"7233":{"C4":30},"7234":{"C4":30},"7235":{"C4":30},"7236":{"C4":30},"7237":{"C4":30},"7238":{"C4":30},"7239":{"C4":30},"8002":{"C4":20},"8003":{"C1":14,"C4":16},"8004":{"C4":30},"8007":{"C4":24},"8009":{"C4":50},"8010":{"C4":30},"8012":{"C4":20},"8013":{"C4":30},"8020":{"C4":25},"8110":{"C4":70},"8112":{"C4":70},"8200":{"C4":70},"90":{"C4":30},"91":{"C4":90},"92":{"C4":90},"93":{"C4":90},"94":{"C4":90},"95":{"C4":90},"96":{"C4":90},"97":{"C4":90},"98":{"C4":90},"99":{"C4":90}};

		// tableOpt contains optimisations for pre-defined sequences of GS1 Application Identifiers
		// we'll initially use 0A-0F through 9A-9F to keep Ah - Eh unallocated and reserve Fh for support for non-GS1 keys from the URI query string
		var tableOpt = {"0A":["01","22"],"0B":["01","10"],"0C":["01","21"],"0D":["01","17"],"0E":["01","7003"],"0F":["01","30"],"1A":["01","10","21","17"],"1B":["01","15"],"1C":["01","11"],"1D":["01","16"],"1E":["01","91"],"1F":["01","10","15"],"2A":["01","3100"],"2B":["01","3101"],"2C":["01","3102"],"2D":["01","3103"],"2E":["01","3104"],"2F":["01","3105"],"3A":["01","3200"],"3B":["01","3201"],"3C":["01","3202"],"3D":["01","3203"],"3E":["01","3204"],"3F":["01","3205"],"9A":["8010","8011"],"9B":["8017","8019"],"9C":["8018","8019"],"9D":["414","254"],"A0":["01","3920"],"A1":["01","3921"],"A2":["01","3922"],"A3":["01","3923"],"A4":["01","3924"],"A5":["01","3925"],"A6":["01","3926"],"A7":["01","3927"],"A8":["01","3928"],"A9":["01","3929"],"C0":["255","3900"],"C1":["255","3901"],"C2":["255","3902"],"C3":["255","3903"],"C4":["255","3904"],"C5":["255","3905"],"C6":["255","3906"],"C7":["255","3907"],"C8":["255","3908"],"C9":["255","3909"],"CA":["255","3940"],"CB":["255","3941"],"CC":["255","3942"],"CD":["255","3943"]}


		// safeBase64Alphabet is a modified URI-safe Base64 alphabet used in the compression methods for converting the binary string to/from an alphanumeric representation that contains no characters that are restricted in URIs
		var safeBase64Alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

		var hexAlphabet="0123456789ABCDEF";

		var tableOptReverse={};
		var tableOptKeys = Object.keys(tableOpt);
		for (var i in tableOptKeys) {
			tableOptReverse[JSON.stringify(tableOpt[tableOptKeys[i]].sort())]=tableOptKeys[i];
		}

//		console.log("tableOptReverse[JSON.stringify(['01','22'].sort())]="+tableOptReverse[JSON.stringify(["01","22"].sort())]);

		var aiRegex={};
		var aiShortCode={};
		var aiQualifiers={};
		var aiCheckDigitPosition={};

		for (var a in aitable) {
			if (aitable[a] !== undefined) {
		
				aiRegex[aitable[a].ai] = aitable[a].regex;

				if (aitable[a].shortcode !== undefined) {
				aiShortCode[aitable[a].ai] = aitable[a].shortcode;
				}
		
				if (aitable[a].qualifiers !== undefined) {
				aiQualifiers[aitable[a].ai] = aitable[a].qualifiers;
				}
		
				if (aitable[a].checkDigit !== undefined) {
				aiCheckDigitPosition[aitable[a].ai] = aitable[a].checkDigit;
				}
			}
		}
		



		function getIdentifiers(ai) {
			return ai.type == "I";
		}

		function getQualifiers(ai) {
			return ai.type == "Q";
		}

		function getDataAttributes(ai) {
			return ai.type == "D";
		}

		function getFixedLength(ai) {
			return ai.fixedLength == true;
		}

		function getVariableLength(ai) {
			return ai.fixedLength == false;
		}

		function getMatchesKeyword(keyword) {
			return function(ai) {
				return ai.title.indexOf(keyword) > -1;
			}
		}

		function getMatchesAI(num) {
			return function(el) {
				return el.ai == num;
			}
		}

		function byLength(length) {
			return function(element) {
				return element.ai.length == length;
			}
		}



		function getAIs(list) {
			var rv=[];
			for (var i in list) {
				rv.push(list[i].ai);
			} 
			return rv;
		}
		
		
		var identifiers=aitable.filter(getIdentifiers);
		var qualifiers=aitable.filter(getQualifiers);
		var dataAttributes=aitable.filter(getDataAttributes);
		var fixedLength=aitable.filter(getFixedLength);
		var variableLength=aitable.filter(getVariableLength);


		var identifierMap={};
		for (var i in identifiers) {
		 identifierMap[identifiers[i].ai]=identifiers[i];
		}

		var qualifierMap={};
		for (var q in qualifiers) {
			if (qualifiers[q] !== undefined) {
				qualifierMap[qualifiers[q].ai]=qualifiers[q];
			}
		}

		var attributeMap={};
		for (var a in dataAttributes) {
			if (dataAttributes[a] !== undefined) {
				attributeMap[dataAttributes[a].ai]=dataAttributes[a];
			}
		}


		var fixedLengthMap={};
		for (var f in fixedLength) {
			if (fixedLength[f] !== undefined) {
				fixedLengthMap[fixedLength[f].ai]=fixedLength[f];
			}
		}

		var variableLengthMap={};
		for (var v in variableLength) {
			if (variableLength[v] !== undefined) {
				variableLengthMap[variableLength[v].ai]=variableLength[v];
			}
		}

		var aiMaps={}
		aiMaps.identifiers=Object.keys(identifierMap);
		aiMaps.qualifiers=Object.keys(qualifierMap);
		aiMaps.dataAttributes=Object.keys(attributeMap);
		aiMaps.fixedLength=Object.keys(fixedLengthMap);
		aiMaps.variableLength=Object.keys(variableLengthMap);


		// TODO - not yet making checks on invalid and mandatory associations of GS1 Application Identifiers

		// from GS1 Gen Specs Figure 4.14.1-1. Invalid pairs of element strings
		// this table is symmetrical
		var invalidAssociations=[
		{"rule":"All occurrences of GTIN SHALL have one value.  It is for example not allowed to include GTINs of other packaging levels.","condition1":"01","condition2":["01"]},
		{"rule":"GTIN of contained trade items is intended to list the trade items contained in a logistic unit, and SHALL NOT be used to identify the contents of a trade item","condition1":"02","condition2":["01"]},
		{"rule":"The count of units contained SHALL only be used with GTIN of contained trade items.","condition1":"37","condition2":["01"]},
		{"rule":"A trade item SHALL NOT be identified as a coupon.","condition1":"255","condition2":["01"]},
		{"rule":"Only one ship to postal code SHALL be applied on the same physical entity","condition1":"420","condition2":["421"]},
		{"rule":"Country of origin, initial processing, processing, or disassembly SHALL NOT be used in combination with country of full porcessing, since this would lead to ambiguous data.","condition1":"426","condition2":["422","423","424","425"]},
		{"rule":"The element strings coupon value, percentage discount of a coupon and loyalty points of a coupon SHALL NOT be applied in combination.","condition1":"390\d","condition2":["394\d","8111"]},
		{"rule":"Only one amount patable element string SHALL be applied on a payment slip.","condition1":"391\d","condition2":["390\d"]},
		{"rule":"Only one amount payable element string SHALL be applied on a variable measure trade item.","condition1":"392\d","condition2":["393\d"]},
		{"rule":"The element strings percentage discount of a coupon and the loyalty points of a coupon SHALL NOT be applied in combination.","condition1":"394\d","condition2":["8111"]},
		{"rule":"The GTIN SHALL NOT be used in combination with the identification of an individual trade item piece.  The GTIN of the trade item to which the individual trade item piece belongs is contained in the element string","condition1":"8006","condition2":["01"]},
		{"rule":"Only one Global Service Relation Number (recipient of provider) SHALL be applied at one time for identification of an individual in a given service relationship","condition1":"8018","condition2":["8017"]},
		];

		// need to also have mandatory association table and forbidden association table from GS1 Gen Specs

		// from Figure 4.14.2-1. Mandatory association of element strings
		// this table is not symmetrical - it's one-way, given condition, require OR, AND, XOR to be satisfied where specified
		var mandatoryAssociations=[
		{"designation":"GTIN of a variable measure trade item scanned at POS","rule":"The GTIN of a variable measure trade item scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure ; Note: Master data will be needed to determine whether the GTIN represents a variable measure trade item scanned at POS. Also see the note below this table.","condition":["01"],"conditionN1":"0","OR":["30","3\d{3}"]},

		{"designation":"GTIN of a variable measure trade item not scanned at POS","rule":"The GTIN of a variable measure trade item not scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure; or * the dimensions of a roll product. Note: The first position of the GTIN is '9' for such trade items. Also see the note below this table.","condition":["01","02"],"conditionN1":"9","OR":["30","3\d{3}","8001"]},
		{"designation":"GTIN of a custom trade item.","rule":"The GTIN of a custom trade item SHALL be used in combination with the Made-to-Order variation number. Note: The first position of the GTIN is '9' for such trade items.","condition":["01"],"conditionN1":"9","EXACTLY":["242"]},

		{"designation":"GTIN of contained trade items","rule":"The GTIN of contained trade items SHALL occur in combination with an SSCC and the count of the trade items.","condition":["02"],"AND":["00","37"]},
		{"designation":"Batch/lot number","rule":"Batch/lot number SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.","condition":["10"],"XOR":["01","02","8006"]},
		{"designation":"Production date, packaging date, best before date, sell by date, expiration date (of a trade item)","rule":"These dates SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.","condition":["11","13","15","16","17"],"XOR":["01","02","8006"]},

		{"designation":"Due date","rule":"The due date SHALL occur in combination with the payment slip reference number and the GLN of the invoicing party","condition":["12"],"AND":["8020","415"]},

		{"designation":"Expiration date (of a coupon)","rule":"The expiration date of a coupon SHALL occur in combination with the GCN.","condition":["17"],"EXACTLY":["255"]},

		{"designation":"","rule":"","condition":["20"],"XOR":["01","02","8006"]},
		{"designation":"","rule":"","condition":["21"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["22"],"EXACTLY":["01"]},
		{"designation":"","rule":"","condition":["240"],"XOR":["01","02","8006"]},
		{"designation":"","rule":"","condition":["241"],"XOR":["01","02","8006"]},

		// *** 242 rule has N1=9 condition on 01,02,8006

		{"designation":"","rule":"","condition":["243"],"EXACTLY":["01"]},

		{"designation":"","rule":"","condition":["250"],"AND":["21"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["251"],"XOR":["01","8006"]},

		{"designation":"","rule":"","condition":["254"],"EXACTLY":["414"]},

		{"designation":"","rule":"","condition":["30"],"XOR":["01","02"]},
		{"designation":"","rule":"","condition":["3\d{3}"],"XOR":["01","02"]},
		{"designation":"","rule":"","condition":["3\d{3}"],"OR":["00","01"]},
		{"designation":"","rule":"","condition":["337\d"],"EXACTLY":["01"]},
		{"designation":"","rule":"","condition":["37"],"EXACTLY":["02"]},
		{"designation":"","rule":"","condition":["390\d"],"AND":["8020","415"]},
		{"designation":"","rule":"","condition":["390\d"],"EXACTLY":["255"]},



		];

		
		var shortCodeToNumeric = {};
		  for(var key in aiShortCode){
			shortCodeToNumeric[aiShortCode[key]] = key;
		}
		
		
		// exposed as public variables that can be accessed by methods
		this.aitable = aitable; 
		this.aiCheckDigitPosition = aiCheckDigitPosition;
		this.aiRegex = aiRegex;
		this.aiMaps = aiMaps;
		this.aiShortCode = aiShortCode;
		this.aiQualifiers = aiQualifiers;
		this.shortCodeToNumeric = shortCodeToNumeric;
		this.tableP = tableP;
		this.tableF = tableF;
		this.tableOpt = tableOpt;
		this.tableOptReverse = tableOptReverse;
		this.safeBase64Alphabet = safeBase64Alphabet;
		this.hexAlphabet = hexAlphabet;

		this.twoDigitAIs =getAIs(aitable.filter(byLength(2)));
		this.threeDigitAIs = getAIs(aitable.filter(byLength(3)));
		this.fourDigitAIs = getAIs(aitable.filter(byLength(4)));

		this.groupSeparator= String.fromCharCode(29);
		
	}

	// calculate the expected GS1 Check Digit for a given AI
	// e.g. calculateCheckDigit('01','01234567890128');
	calculateCheckDigit(ai,gs1IDValue) {
		var counter=0;
		var reversed="";
		var total=0;
		var l;
		if (this.aiCheckDigitPosition[ai] == "L") {
			l = gs1IDValue.length;
		} else {
			l = parseInt(this.aiCheckDigitPosition[ai]);
		}
		var multiplier;
		for (var i=l-2; i>=0; i--) {
			var d=gs1IDValue.substring(i,(i+1));
			if ((counter % 2) == 0) {
				multiplier=3;
			} else {
				multiplier=1;
			}
			total+=(d*multiplier);
			counter++;
		}
		var expectedCheckDigit=(10-(total%10))%10;
		return expectedCheckDigit;
	}



	// returns true if the GS1 Check Digit is valid (or not applicable)
	// throws an error if an invalid check digit is present
	// e.g. verifyCheckDigit('01','01234567890128');
	verifyCheckDigit(ai,gs1IDValue) {
		var expectedCheckDigit;
		var rv=true;

			var checkDigitPosition=this.aiCheckDigitPosition[ai];
			if (checkDigitPosition !== undefined) {
				expectedCheckDigit = this.calculateCheckDigit(ai,gs1IDValue);
				if (checkDigitPosition == "L") {
					checkDigitPosition=gs1IDValue.length;
				} else {
					checkDigitPosition=parseInt(checkDigitPosition);
				}
				var actualCheckDigit = parseInt(gs1IDValue.charAt(checkDigitPosition-1));
	
				if (actualCheckDigit !== expectedCheckDigit) { 
					rv=false;
					throw new Error("INVALID CHECK DIGIT:  An invalid check digit was found for the primary identification key ("+ai+")"+gs1IDValue+" ; the correct check digit should be "+expectedCheckDigit+" at position "+checkDigitPosition);
				}

		}
		return rv;
	}

	// tests the syntax of a value against the regular expression (expected format)
	// throws an error when invalid syntax is detected
	// e.g. verifySyntax('01','01234567890128');
	verifySyntax(ai,value) {
		var re = new RegExp("^"+this.aiRegex[ai]+"$");
		if (!(re.test(value))) {
			throw "SYNTAX ERROR: invalid syntax for value of ("+ai+") : "+value;
		}
	}

	// method to percent-encode all reserved characters mentioned in the GS1 Digital Link standard
	percentEncode(input) {
		var charsToEscape="#/%&+,!()*':;<=>?";
		var escaped=[];
		for (var i=0; i<input.length; i++) {
			var testChar = input.substr(i,1);
			if (charsToEscape.indexOf(testChar) > -1) {
				escaped.push("%"+testChar.charCodeAt(0).toString(16).toUpperCase());
			} else {
				escaped.push(testChar);
			}
		}
		return escaped.join("");
	}

	// method to percent-decode all percent-encoded characters
	percentDecode(input) {
		return decodeURIComponent(input);
	}

	padToLength(input,requiredLength) {
		if (input.length < requiredLength) {
			input="0".repeat(requiredLength-input.length)+input;
		}
		return input;
	}


	bin2base64(binstr) {
		var rv="";
		if (binstr.length%6 > 0) {
		 var numberRightPadZeros = 6 - (binstr.length % 6);
		 binstr+= "0".repeat(numberRightPadZeros);
		}
		var numChar = (binstr.length)/6;
		for (var i=0; i<numChar; i++) {
			var binFrag = binstr.substr(6*i,6);
			var base64char = this.safeBase64Alphabet.substr(parseInt(binFrag,2),1);
			rv+=base64char;
		}
		return rv;
	}

	base642bin(base64str) {
		var rv="";
		for (var i=0; i<base64str.length; i++) {
			var dec=this.safeBase64Alphabet.indexOf(base64str.substr(i,1));
			var bin=dec.toString(2);
			if (bin.length < 6) {
				bin="0".repeat(6-bin.length)+bin;
			}
			rv+=bin;
		}
		
		return rv;
	}


	canonical(obj) {
		var rv={};
		var sortedKeys=Object.keys(obj).sort();
		for (var el in sortedKeys ) {
			if (obj.hasOwnProperty(sortedKeys[el])) {
				rv[sortedKeys[el]]=obj[sortedKeys[el]];
			}
		}
		return rv;
	}
	
	binstrToHex(binstr) {
		return parseInt(binstr,2).toString(16).toUpperCase();
	}
	


	// this method will convert either a bracketed element string or an unbracketed element string into an associative array
	// input could be "(01)05412345000013(3103)000189(3923)2172(10)ABC123";
	// or input could be "3103000189010541234500001339232172"+groupSeparator+"10ABC123";
	extractFromGS1elementStrings(elementStrings) {


		// remove symbology identifier if present
		// remove ]C1 or ]e0 or ]d2 or ]Q3
		elementStrings=elementStrings.replace(/^(]C1|]e0|]d2|]Q3)/ , '');

		// check if the initial AI is enclosed within round brackets
		var re=new RegExp("^\\((\\d{2,4}?)\\)");
		if (re.test(elementStrings)) {
			// do this if the input is a bracketed element string
			var r1=new RegExp("\\((\\d{2,4}?)\\)|([^(]+)","g");
			var aikeys = Object.keys(this.aiRegex);
			var obj={};
			var k;
			if (r1.test(elementStrings)) {
				var results=elementStrings.match(r1);
				for (var a in results) {
					if (a%2 == 0) {
						var l=results[a].length;
						k=results[a].substr(1,(l-2));
					} else {
						if (aikeys.includes(k)) {
							var r2=new RegExp("^"+this.aiRegex[k]+"$");
							if (r2.test(results[a])) {
								obj[k]=results[a];
							} else {
								throw new Error("SYNTAX ERROR: invalid syntax for value of ("+k+") : "+results[a]);
							}
						}
					}
				}
			}
			return obj;
		} else {
			// else do this if the input is an unbracketed element string
			// TODO neeed to change logic here to make use of fixedLengthTable and flowchart from GenSpecs

			var elementStringsLength=elementStrings.length;

			const fixedLengths={"00":20,"01":16,"02":16,"03":16,"04":18,"11":8,"12":8,"13":8,"14":8,"15":8,"16":8,"17":8,"18":8,"19":8,"20":4,"31":10,"32":10,"33":10,"34":10,"35":10,"36":10,"41":16}
			const fixedLengthAIs=Object.keys(fixedLengths);
			const gs=String.fromCharCode(29);
			var cursor=0;
			var buffer=[];

			// is any data present?

			do {

			// are the first two digits in table of fixedLengths
			var firstTwoDigits=elementStrings.substr(cursor,2)

			// ai.elementStrings=elementStrings;
			// ai.fixedLengthAIs = fixedLengthAIs;
			// ai.firstTwoDigits = firstTwoDigits;
			if (fixedLengthAIs.indexOf(firstTwoDigits) > -1) {
				// the first two digits are within the array of GS1 Application Identifiers of defined fixed length
	
				// extract the AI and value to the buffer
					var l = fixedLengths[firstTwoDigits];
					buffer.push(elementStrings.substr(cursor,l));
					cursor+=l;
	
				// if the next character is the group separator, move past it
				if (elementStrings.substr(cursor,1) == gs) {
					cursor++;
				}
	
	
	
	
			} else {
				// the first two digits are not within the array of GS1 Application Identifiers of defined fixed length
	
				// if string contains group separator
				var gsloc = elementStrings.substr(cursor).indexOf(gs);
				if (gsloc > -1) {
					// extract the AI and value up to the group separator to the buffer
					buffer.push(elementStrings.substr(cursor).substr(0,gsloc));
					cursor+=gsloc;
					cursor++;
		
		
				} else {
				// extract the AI and value to the buffer
					buffer.push(elementStrings.substr(cursor));
					cursor=elementStringsLength;
				}

			}

			} while (cursor < elementStringsLength);


			// process the buffer;

			var obj={};

			for (var i=0; i<buffer.length; i++) {
				var el = buffer[i];
				var matched=false;
				var aiCandidate=el.substr(0,2);
				if (this.twoDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(2);
					matched=true;
				}
				var aiCandidate=el.substr(0,3);
				if (this.threeDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(3);
					matched=true;
				}
				var aiCandidate=el.substr(0,4);
				if (this.fourDigitAIs.indexOf(aiCandidate) > -1) {
					obj[aiCandidate] = el.substr(4);
					matched=true;
				}
				if (!matched) {
					throw new Error("No matching GS1 AI found for "+el);
				}	
			}

			return obj;
		}
	}

	// this method converts an associative array of GS1 Application Identifiers and their values into a GS1 Digital Link URI
	// set useShortText = true if you wish to use alphabetic mnemonic short names, e.g. /gtin/ instead of /01/
	// set uriStem to a value e.g. 'https://example.org' if you wish to use a specific domain name
	// setting uriStem to null, undefined or "" defaults to 'https://id.gs1.org' as the reference domain
	buildGS1digitalLink(gs1AIarray,useShortText,uriStem) {

		var identifiers=[];
		var qualifiers=[];
		var attributes=[];
		var fixedLengthValues=[];
		var variableLengthValues=[];
		var otherKeys=[];
	
		var valid=true;
		var path="";
		var queryStringArray=[];
		var queryString="";
		var webURI="";
		var canonicalStem="https://id.gs1.org";
		var rv={};

		// Need to remove unwanted trailing slash
		if ((uriStem !== undefined) && (uriStem !== null) && (uriStem !== "") && (uriStem.endsWith("/"))) {
			uriStem=uriStem.substr(0,uriStem.length-1)+path+queryString;				
		}


		for (var a in gs1AIarray) {
			var other=true;
			if (this.aiMaps.identifiers.includes(a)) {
				identifiers.push(a);
				other=false;
			}
			if (this.aiMaps.qualifiers.includes(a)) {
				qualifiers.push(a);
				other=false;
			}
			if (this.aiMaps.dataAttributes.includes(a)) {
				attributes.push(a);
				other=false;
			}
			if (this.aiMaps.fixedLength.includes(a)) {
				fixedLengthValues.push(a);
				other=false;
			}
			if (this.aiMaps.variableLength.includes(a)) {
				variableLengthValues.push(a);
				other=false;
			}
			if (other) {
				otherKeys.push(a);
			}
		}

		// Start building Web URI path expression
		// need exactly one identifier key

		if (identifiers.length !== 1) {
			valid=false;
			throw new Error("The element string should contain exactly one primary identification key - it contained "+identifiers.length+" "+JSON.stringify(identifiers)+"; please check for a syntax error");
		} else {

			this.verifySyntax(identifiers[0],gs1AIarray[identifiers[0]]);

		
			this.verifyCheckDigit(identifiers[0],gs1AIarray[identifiers[0]]);

		

						if (useShortText) {
							// Using short text names
							if (this.aiShortCode[identifiers[0]] !== undefined) {
								path="/"+this.aiShortCode[identifiers[0]]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);			
							} else {
								path="/"+identifiers[0]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);
							}
						} else {
							// Using numeric AIs
							path="/"+identifiers[0]+"/"+this.percentEncode(gs1AIarray[identifiers[0]]);
						}

					// append any data qualifiers in the expected order, as specified in this.aiQualifiers[identifiers[0]]
	
					if (this.aiQualifiers[identifiers[0]] !== undefined) {
						for (var j in this.aiQualifiers[identifiers[0]]) {
							var q=this.aiQualifiers[identifiers[0]][j]
							if (qualifiers.includes(q)) {

						if (useShortText) {
							// Using short text names
							if (this.aiShortCode[q] !== undefined) {
								path+="/"+this.aiShortCode[q]+"/"+this.percentEncode(gs1AIarray[q]);			
							} else {
								path+="/"+q+"/"+this.percentEncode(gs1AIarray[q]);
							}
						} else {
							// Using numeric AIs
							path+="/"+q+"/"+this.percentEncode(gs1AIarray[q]);
						}

							}
						}
					}
	
					// if there are any data attributes, we need to add these to the query string
	
					if (attributes.length >0) {

						for (var k in attributes) {
							var a=attributes[k];
					
							if (useShortText) {
								// Using short text names
								if (this.aiShortCode[a] !== undefined) {
									queryStringArray.push(this.aiShortCode[a]+"="+this.percentEncode(gs1AIarray[a]));			
								} else {
									queryStringArray.push(a+"="+this.percentEncode(gs1AIarray[a]));
								}
							} else {
								// Using numeric AIs
								queryStringArray.push(a+"="+this.percentEncode(gs1AIarray[a]));
							}
					
					
					
						}
						queryString="?"+queryStringArray.join("&");
				
		
					}

				if ((uriStem == null) || (uriStem == "")) {
					// prepare a canonical Web URI
					webURI=canonicalStem+path+queryString;	
				} else {
					webURI=uriStem+path+queryString;
				}

	
				if (otherKeys.length > 0) {
					var queryStringArray=[];
					for (var iok in otherKeys) {
						queryStringArray.push(otherKeys[iok]+"="+gs1AIarray[otherKeys[iok]]);
					}
					if (queryString== "") {
						webURI+="?"+queryStringArray.join("&");
					} else {
						webURI+="&"+queryStringArray.join("&");					
					}
				}
	

		}
			

		return webURI;	
	}


	// this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
	// it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)
	extractFromGS1digitalLink(gs1DigitalLinkURI) {
		var obj={};
		var cursor=0;	
		var queryString="";
		var uriPathInfo="";
		var candidates={};
		
		// strip off https:// or http:// 
		if (gs1DigitalLinkURI.indexOf("http://") == 0) { cursor=7 }
		if (gs1DigitalLinkURI.indexOf("https://") == 0) { cursor=8 }

		var firstSlash = gs1DigitalLinkURI.substr(cursor).indexOf("/");
		var firstQuestionMark = gs1DigitalLinkURI.substr(cursor).indexOf("?");
		
		if (firstQuestionMark > -1) {
			queryString = gs1DigitalLinkURI.substr(cursor).substr(1+firstQuestionMark);
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substring(firstSlash,firstQuestionMark);
		} else {
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substr(firstSlash);
			var firstFragment = uriPathInfo.indexOf("#");
			if (firstFragment > -1) {
				uriPathInfo = uriPathInfo.substring(0,firstFragment);
			}
		}

		// process URI path information
		var pathElements = uriPathInfo.substr(1).split("/");
		var l = pathElements.length;
		var pathElementIndex=l-2;
		while (pathElementIndex >= 0) {
			candidates[pathElements[pathElementIndex]]=this.percentDecode(pathElements[1+pathElementIndex]);
			pathElementIndex-=2;
		}

		
		if (queryString !== "") {
			// if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
			queryString = queryString.replace(new RegExp(";", 'g'),"&");

			var firstFragment = queryString.indexOf("#");
			if (firstFragment > -1) {
				queryString = queryString.substring(0,firstFragment);
			}
			
			
			
			var pairs = queryString.split("&");
			for (var i=0; i<pairs.length; i++) {
				var p = pairs[i].split("=");
				if ((p[0] !== null) && (p[1] !== null)) {
					candidates[p[0]]=this.percentDecode(p[1]);
				}
			}
		}
		
		var allnumeric = new RegExp("^\\d+$");

		// process candidates;
		for (var k in candidates) {
			if (candidates.hasOwnProperty(k)) {
			   if (!(allnumeric.test(k))) {
					// for keys that are not all-numeric, attempt to convert to all-numeric AI equivalent
			   		if (this.shortCodeToNumeric.hasOwnProperty(k)) {
			   			var numkey = this.shortCodeToNumeric[k];
			   			candidates[numkey]=candidates[k];
			   			delete candidates[k];
			   		} else {
			   			// or otherwise remove from candidates map if it doesn't relate to a GS1 Application Identifier
			   			delete candidates[k];
			   		}
			   }
			}
	    }			
				
		for (var k in candidates) {
			if (candidates.hasOwnProperty(k)) {
					this.verifySyntax(k,candidates[k]);
					this.verifyCheckDigit(k,candidates[k]);
					obj[k] = padGTIN(k,candidates[k]);
			}
		}
							
		return obj;

		function padGTIN(ai,value) {
			var newvalue=value;
			// always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
			if ((ai == "01") || (ai == "(01)") || (ai == "02") || (ai == "(02)")) {
				if (value.length==8) { newvalue = '000000'+value; }
				if (value.length==12) { newvalue = '00'+value; }
				if (value.length==13) { newvalue = '0'+value; }
			}
			return newvalue;
		}


	}



	// this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
	// it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)
	extractFromCompressedGS1digitalLink(gs1DigitalLinkURI) {
		var obj={};
		var cursor=0;	
		var queryString="";
		var uriPathInfo="";
		var candidates={};
		let nonGS1AIre = new RegExp("^[0-9]+$","g");
		let nonGS1keyvaluePairs={};

		// strip off https:// or http:// 
		if (gs1DigitalLinkURI.indexOf("http://") == 0) { cursor=7 }
		if (gs1DigitalLinkURI.indexOf("https://") == 0) { cursor=8 }

		var firstSlash = gs1DigitalLinkURI.substr(cursor).indexOf("/");
		var firstQuestionMark = gs1DigitalLinkURI.substr(cursor).indexOf("?");
		
		if (firstQuestionMark > -1) {
			queryString = gs1DigitalLinkURI.substr(cursor).substr(1+firstQuestionMark);
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substring(firstSlash,firstQuestionMark);
		} else {
			uriPathInfo = gs1DigitalLinkURI.substr(cursor).substr(firstSlash);
			var firstFragment = uriPathInfo.indexOf("#");
			if (firstFragment > -1) {
				uriPathInfo = uriPathInfo.substring(0,firstFragment);
			}
		}

		if (queryString !== "") {
			// if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
			queryString = queryString.replace(new RegExp(";", 'g'),"&");

			var firstFragment = queryString.indexOf("#");
			if (firstFragment > -1) {
				queryString = queryString.substring(0,firstFragment);
			}
			
			
			
			var pairs = queryString.split("&");
			for (var i=0; i<pairs.length; i++) {
				var p = pairs[i].split("=");
				if ((p[0] !== null) && (p[1] !== null) && (!(nonGS1AIre.test(p[0])))) {
					nonGS1keyvaluePairs[p[0]]=this.percentDecode(p[1]);
				}
			}
			
		}

		var regexSafeBase64=new RegExp("^[A-Za-z0-9_-]+$");
		var regexNumericKey=new RegExp("^[0-9]+$");

		// remove initial forward slash
		uriPathInfo=uriPathInfo.substr(1);

		if (regexSafeBase64.test(uriPathInfo)) {
			var binstr=this.base642bin(uriPathInfo);
			var obj=this.decompressBinaryToGS1AIarray(binstr);
			
		} else {
			// handle situation where the primary identification key is not compressed
			var index1=uriPathInfo.indexOf("/");
			var index2=uriPathInfo.lastIndexOf("/");
			var gs1primaryKey=uriPathInfo.substr(0,index1);
			var base64segment=uriPathInfo.substr(1+index2);
			var gs1primaryKeyValue=uriPathInfo.substr(1+index1,index2-index1-1);
			var obj=this.decompressBinaryToGS1AIarray(this.base642bin(base64segment));
			if (regexNumericKey.test(gs1primaryKey)) {
				obj[gs1primaryKey]=gs1primaryKeyValue;
			} else {
				if (this.shortCodeToNumeric.hasOwnProperty(gs1primaryKey)) {
				obj[this.shortCodeToNumeric[gs1primaryKey]]=gs1primaryKeyValue;
				}
			}
			
		}

		for (var key in nonGS1keyvaluePairs) {
		obj[key]=nonGS1keyvaluePairs[key];
		}


		return obj;
	}

	

	// this method converts an associative array of GS1 Application Identifiers and their values into concatenated GS1 element strings
	// set brackets=true if you want a human-readable concatenation with round brackets around GS1 Application Identifiers
	// set brackets=false if you don't; in this case the group separator will be used to mark the end of any field that is not defined length, except for the last element string in the concatenation
	buildGS1elementStrings(gs1AIarray,brackets) {
		// if brackets=true, use GS1 Digital Link ordering - identifier, qualifiers then data attributes in numeric order
		var identifiers=[];
		var qualifiers=[];
		var attributes=[];
		var fixedLengthValues=[];
		var variableLengthValues=[];
		var elementStrings=[];
	
		for (var a in gs1AIarray) {
			if (gs1AIarray.hasOwnProperty(a)) {
				if (this.aiMaps.identifiers.includes(a)) {
					identifiers.push(a);
				}
				if (this.aiMaps.qualifiers.includes(a)) {
					qualifiers.push(a);
				}
				if (this.aiMaps.dataAttributes.includes(a)) {
					attributes.push(a);
				}
				if (this.aiMaps.fixedLength.includes(a)) {
					fixedLengthValues.push(a);
				}
				if (this.aiMaps.variableLength.includes(a)) {
					variableLengthValues.push(a);
				}

			}
		}

	

		if (brackets==true) {



			if (identifiers.length !== 1) {
				throw new Error("The associative array should contain exactly one primary identification key - it contained "+identifiers.length+" "+JSON.stringify(identifiers)+"; please check for a syntax error");
			} else {

			this.verifySyntax(identifiers[0],gs1AIarray[identifiers[0]]);
			this.verifyCheckDigit(identifiers[0],gs1AIarray[identifiers[0]]);

			elementStrings = elementStringsPush(elementStrings,"("+identifiers[0]+")",gs1AIarray[identifiers[0]],"");

			// append any valid found qualifiers for that primary identifier to the elementStrings array
			
			if (this.aiQualifiers.hasOwnProperty(identifiers[0])) {
				var qualifiersForPrimary=this.aiQualifiers[identifiers[0]];
				
				for (var qindex in qualifiersForPrimary) {
					if (qualifiers.indexOf(qualifiersForPrimary[qindex]) > -1) {
						elementStrings = elementStringsPush(elementStrings,"("+qualifiersForPrimary[qindex]+")",gs1AIarray[qualifiersForPrimary[qindex]],"");

					}
				}
			}

			// append any found attributes to the elementStrings array
			var sortedAttributes = attributes.sort();
			for (var a in sortedAttributes) {
				elementStrings = elementStringsPush(elementStrings, "("+attributes[a]+")",gs1AIarray[attributes[a]],"");
			}
			

		



			}

		
			
		} else {
		// if brackets=false, concatenate defined-length AIs first, then variable-length AIs
		// identify which AIs in gs1AIarray are defined fixed length

			var fixedLengthPrimaryIdentifier=[];
			var fixedLengthValuesOther=fixedLengthValues.slice(0);;
			
			
			for (var i in fixedLengthValuesOther) {
				if (identifiers.indexOf(fixedLengthValuesOther[i]) > -1) {
					fixedLengthPrimaryIdentifier.push(fixedLengthValuesOther[i]);
					fixedLengthValuesOther.splice(i,1);
				}
			}

			for (var i in fixedLengthPrimaryIdentifier) {
				elementStrings = elementStringsPush(elementStrings,fixedLengthPrimaryIdentifier[i],gs1AIarray[fixedLengthPrimaryIdentifier[i]],"");

			}			

			for (var i in fixedLengthValuesOther) {
				elementStrings = elementStringsPush(elementStrings,fixedLengthValuesOther[i],gs1AIarray[fixedLengthValuesOther[i]],"");
			}			

			for (var i in variableLengthValues) {
				var gs="";
				if (i<(variableLengthValues.length-1)) {
					gs=this.groupSeparator;
				}
				elementStrings = elementStringsPush(elementStrings,variableLengthValues[i],gs1AIarray[variableLengthValues[i]],gs);
			}			
					
		}
		
		return elementStrings.join("");
		
		
		function elementStringsPush(elementStrings,ai,value,gs) {
			var newvalue=value;
			// always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
			if ((ai == "01") || (ai == "(01)") || (ai == "02") || (ai == "(02)")) {
				if (value.length==8) { newvalue = '000000'+value; }
				if (value.length==12) { newvalue = '00'+value; }
				if (value.length==13) { newvalue = '0'+value; }
			}
			elementStrings.push(ai+newvalue+gs);
			return elementStrings;
		}
		
	}


		

	// translate a string of concatenated GS1 element strings into a GS1 Digital Link URI
	gs1ElementStringsToGS1DigitalLink(elementString,useShortText,uriStem) {
			return this.buildGS1digitalLink(this.extractFromGS1elementStrings(elementString),useShortText,uriStem);
	}

	// translate a GS1 Digital Link URI into a string of concatenated GS1 element strings	
	gs1digitalLinkToGS1elementStrings(digitalLinkURI,brackets) {
		return this.buildGS1elementStrings(this.extractFromGS1digitalLink(digitalLinkURI),brackets);
	}

	// translate a GS1 Digital Link URI into a string of concatenated GS1 element strings	
	gs1compressedDigitalLinkToGS1elementStrings(digitalLinkURI,brackets) {
		return this.buildGS1elementStrings(this.extractFromCompressedGS1digitalLink(digitalLinkURI),brackets);
	}


	
	decompressBinaryToGS1AIarray(binstr) {

		var totallength=binstr.length;

		// start at left-most bit position
		var cursor=0;

		// create empty hashtable
		var gs1AIarray={};


		// read h1,h2 and convert binary to hex
//		while ((totallength-cursor) >=6)  {

		while ((totallength-cursor) >8)  {
			
			var h1=this.binstrToHex(binstr.substr(cursor,4));
			var h2=this.binstrToHex(binstr.substr(4+cursor,4));

			var h1h2=""+h1+h2;
//			console.log("h1h2="+h1h2);
			
			cursor+=8;

			var d1=parseInt(h1,16);
			var d2=parseInt(h2,16);

			if ((d1>=0) && (d2>=0) && (d1<=9) && (d2<=9)) {

			// check if h1h2 has entry in table 4
//				console.log("h1h2 is within 00-99, all numeric");

			
				if (this.tableP.hasOwnProperty(h1h2)) {
					var l=this.tableP[h1h2];
					var ai;
					if (l==2) { ai=h1h2; }
					if ((l==3) || (l==4)) { 
						var h3=this.binstrToHex(binstr.substr(cursor,4));
						cursor+=4;
						var d3=parseInt(h3,16);
						if (d3>9) {
							throw new Error("GS1 Application Identifier keys should be all-numeric; "+h1h2+h3+" is not all-numeric");
						}
						ai=h1h2+h3;
					}
					if (l==4) { 
						var h4=this.binstrToHex(binstr.substr(cursor,4));
						cursor+=4;
						ai=h1h2+h3+h4;
						var d4=parseInt(h4,16);
						if (d4>9) {
							throw new Error("GS1 Application Identifier keys should be all-numeric; "+h1h2+h3+h4+" is not all-numeric");
						}

					}



					var tmp=this.decodeBinaryValue(ai,gs1AIarray,binstr,cursor);
					gs1AIarray=tmp.gs1AIarray;
					cursor=tmp.cursor;
	

				} else {
				
					throw new Error("Fail: Unsupported AI (reserved range) - no entry in tableP; h1h2="+h1h2);
				}


			} else {

//				console.log("h1h2 is outside 00-99, using some hex characters");
//				console.log("h1h2="+h1h2);
				
				if (this.tableOpt.hasOwnProperty(h1h2)) {
//					console.log("Hooray! We found the optimisation for h1h2");

					let seq=this.tableOpt[h1h2];					
//					console.log("Sequence is "+JSON.stringify(seq));
					for (let i in seq) {
						let ai=seq[i];
						// console.log(ai);

						var tmp=this.decodeBinaryValue(ai,gs1AIarray,binstr,cursor);
						gs1AIarray=tmp.gs1AIarray;
						cursor=tmp.cursor;
						
						
					}
					
				
				} else {

				if (h1=="F") {
					// handle decompression of non-GS1 key=value pairs
					// console.log("Detected a non-GS1 key=value pair to decompress");
					var bitsIncludingF = binstr.substr(cursor-8,11);
					// console.log("bitsIncludingF="+bitsIncludingF);
					var keyLength=1+parseInt(binstr.substr(cursor-4,7),2);
					// console.log("keyLength="+keyLength);

					cursor+=3;  // 3 extra bits beyond h2

					var keyBits=binstr.substr(cursor,6*keyLength);
					// console.log("keyBits="+keyBits);
					cursor+=6*keyLength;
					
								var key="";
								for (var i=0; i<keyLength; i++) {
									var index = parseInt(keyBits.substr(6*i,6),2);
									// assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet
									key+=this.safeBase64Alphabet.substr(index,1);
								}
								// console.log("Key: "+key);					

					
					
					var encBits=binstr.substr(cursor,3);
					// console.log("encBits="+encBits);
					
					cursor+=3;
					var numChars=1+parseInt(binstr.substr(cursor,7),2);
					cursor+=7;
					if (encBits == '000') {
							// digits only at 3.32 bits per character
								var numBits=Math.ceil(numChars*Math.log(10)/Math.log(2));
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s = parseInt(rbv,2).toString();
								gs1AIarray[key]=s;
								// console.log("String value "+s);					
					}
					if (encBits == '001') {
							// lower case hexadecimal characters
								var numBits=4*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s="";
								for (var i=0; i<numChars; i++) {
									var index=parseInt(rbv.substr(4*i,4),2);
									s+=this.hexAlphabet.substr(index,1);
								}
								gs1AIarray[key]=s.toLowerCase();
								// console.log("String value "+s);					
					}
					if (encBits == '010') {
							// upper case hexadecimal characters
								var numBits=4*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s="";
								for (var i=0; i<numChars; i++) {
									var index=parseInt(rbv.substr(4*i,4),2);
									s+=this.hexAlphabet.substr(index,1);
								}
								gs1AIarray[key]=s.toUpperCase();
								// console.log("String value "+s);					
					}
					if (encBits == '011') {
							// URI safe base64 alphabet at 6 bits per character
								var s="";
								var numBits=6*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								for (var i=0; i<numChars; i++) {
									var index = parseInt(rbv.substr(6*i,6),2);
									// assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet
									s+=this.safeBase64Alphabet.substr(index,1);
								}
								gs1AIarray[key]=s;					
								// console.log("String value "+s);					
					}
					if (encBits == '100') {
							// ASCII at 7 bits per character
								var s="";
								var numBits=7*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								for (var i=0; i<numChars; i++) {
									var asciiCodeValue = parseInt(rbv.substr(7*i,7),2);
									// assume 7 bits encode an ASCII code value in range 0-127
									s+=String.fromCharCode(parseInt(asciiCodeValue));
								}
								gs1AIarray[key]=s;					
								// console.log("String value "+s);
					}
				} else {

					throw new Error("No optimisation defined for hex code hh="+h1h2);
				// else branch 1

				// h1h2 is not in the range 00-99, so h1h2 contains at least one character in range A-F
				// these are being used to represent combinations of Application Identifiers, mainly of defined length
				// table Y indicates their structure

				// lookup h1h2 in table Y and read structure SY

				// process next bits according to structure SY in table Y for H1H2
				}
				}

			}


		}


		return gs1AIarray;
	}


	decodeBinaryValue(ai,gs1AIarray,binstr,cursor) {
			var rv={};
		
					// check if ai is in table X
					if (this.tableF.hasOwnProperty(ai)) {
						var tx = this.tableF[ai];
						gs1AIarray[ai]="";

						// handle fixed-length numeric component, character count = C1		
						if ((tx.hasOwnProperty('C1')) && (tx.C1 > 0)) {
							var b1=Math.ceil(tx.C1*Math.log(10)/Math.log(2));
							var rbv=binstr.substr(cursor,b1);
							cursor+=b1;

									var s=parseInt(rbv,2).toString();
									s=this.padToLength(s,tx.C1);
									gs1AIarray[ai]=s;
								
							// console.log("AI "+ai+" is C1:"+tx.C1+" resulting in value s: "+s);
						}

						// handle variable-length numeric component, max character count = C2		
						if ((tx.hasOwnProperty('C2')) && (tx.C2 > 0)) {
			
							var v2=Math.ceil(Math.log(tx.C2-1)/Math.log(2));				

							var lengthBits=binstr.substr(cursor,v2);
							cursor+=v2;

							var numDigits=1+parseInt(lengthBits,2);

							var numBits=Math.ceil(numDigits*Math.log(10)/Math.log(2)); 
							var rbv=binstr.substr(cursor,numBits);
							cursor+=numBits;
				
							var s=parseInt(rbv,2).toString();
							gs1AIarray[ai]+=s;				

							// console.log("AI "+ai+" is C2:"+tx.C2+" resulting in value s: "+s);

						}
				
				
						// TODO handle fixed-length alphanumeric component, character count=C3
						// to support new AI 723s (certificate reference)
				
			
						// handle variable-length alphanumeric component, max character count = C4		
						if ((tx.hasOwnProperty('C4')) && (tx.C4 > 0)) {
				
							var v3=Math.ceil(Math.log(tx.C4-1)/Math.log(2));
							var encBits=binstr.substr(cursor,3); // TODO change encoding to 3 bit

							// console.log("AI "+ai+" is C4:"+tx.C4);
						
							// console.log("encBits="+encBits);
						
							cursor+=3; 			
					
							var lengthBits=binstr.substr(cursor,v3);
							cursor+=v3;
				
							var numChars=1+parseInt(lengthBits,2);

							var enc=parseInt(encBits,2);
							if (enc==0) { 
							// digits only at 3.32 bits per character
								var numBits=Math.ceil(numChars*Math.log(10)/Math.log(2));
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s = parseInt(rbv,2).toString();
								gs1AIarray[ai]+=s;
							}
						
							if (enc==1) {
							// lower case hexadecimal characters
								var numBits=4*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s="";
								for (var i=0; i<numChars; i++) {
									var index=parseInt(rbv.substr(4*i,4),2);
									s+=this.hexAlphabet.substr(index,1);
								}
								gs1AIarray[ai]+=s.toLowerCase();
							}

							if (enc==2) {
							// upper case hexadecimal characters
								var numBits=4*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								var s="";
								for (var i=0; i<numChars; i++) {
									var index=parseInt(rbv.substr(4*i,4),2);
									s+=this.hexAlphabet.substr(index,1);
								}
								gs1AIarray[ai]+=s.toUpperCase();
							}
						
							if (enc==3) { 
							// URI safe base64 alphabet at 6 bits per character
								var s="";
								var numBits=6*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								for (var i=0; i<numChars; i++) {
									var index = parseInt(rbv.substr(6*i,6),2);
									// assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet
									s+=this.safeBase64Alphabet.substr(index,1);
								}
								gs1AIarray[ai]+=s;					
							}
							if (enc==4) { 
							// ASCII at 7 bits per character
								var s="";
								var numBits=7*numChars;
								var rbv=binstr.substr(cursor,numBits);
								cursor+=numBits;
								for (var i=0; i<numChars; i++) {
									var asciiCodeValue = parseInt(rbv.substr(7*i,7),2);
									// assume 7 bits encode an ASCII code value in range 0-127
									s+=String.fromCharCode(parseInt(asciiCodeValue));
								}
								gs1AIarray[ai]+=s;					
							}

							// console.log("AI "+ai+" is C4:"+tx.C4+" resulting in value s: "+s);

								
						}




	
					}

		rv.gs1AIarray = gs1AIarray;
		rv.cursor = cursor;
		return rv;	
	}	
	

	compressGS1AIarrayToBinary(gs1AIarray,useOptimisations,nonGS1keyvaluePairs) {
		var binstr="";
		var cursor;
		var value;
		
		// console.log("gs1AIarray="+JSON.stringify(gs1AIarray));
		
		// identify candidate optimisations from tableOpt
		var akeysa = Object.keys(gs1AIarray).sort();
		var optimisations=[];
		
		

		if (useOptimisations) {

			var akeys = JSON.stringify(akeysa);

			var candidatesFromTableOpt;

			do {
			candidatesFromTableOpt=findCandidatesFromTableOpt(akeysa,this.tableOpt);

//			console.log("Candidates from tableOpt: "+JSON.stringify(candidatesFromTableOpt));
		
			// pick candidatesFromTableOpt that can save the highest number of AI key characters
		
			let bestCandidate=findBestOptimisationCandidate(candidatesFromTableOpt);


//			console.log("akeysa was "+JSON.stringify(akeysa));

			let v=this.tableOpt[bestCandidate];
//			console.log("v="+JSON.stringify(v));

			// remove 
		
		
		
			if (bestCandidate !== "") {
				akeysa=removeOptimisedKeysFromAIlist(akeysa,this.tableOpt[bestCandidate]);
				optimisations.push(bestCandidate);
			}

		
			// console.log("Optimisation "+bestCandidate+" = "+this.tableOpt[bestCandidate]+" saves encoding of "+(candidatesFromTableOpt[bestCandidate]-2)+" characters");
		
			// console.log("akeysa is now "+JSON.stringify(akeysa));
			// console.log("optimisations is now "+JSON.stringify(optimisations));
		
			// now consider any remaining candidates that share no AIs with maxkey or with each other
		
			candidatesFromTableOpt=findCandidatesFromTableOpt(akeysa,this.tableOpt);
			} while (Object.keys(candidatesFromTableOpt).length > 0)

		
		}

			for (var i in optimisations) {
				let key=optimisations[i];
				binstr+=this.binaryEncodingOfGS1AIKey(key);
				var optArray=this.tableOpt[key];
				for (let i in optArray) {
					let k=optArray[i];
					binstr+=this.binaryEncodingOfValue(gs1AIarray,k);
				}
			}



			for (var i in akeysa) {
			let key=akeysa[i];
				if (gs1AIarray.hasOwnProperty(key)) {
					binstr+=this.binaryEncodingOfGS1AIKey(key);
					binstr+=this.binaryEncodingOfValue(gs1AIarray,key);			
				}
			}


			if (Object.keys(nonGS1keyvaluePairs).length > 0) {
				// console.log("Fantastic!  We have some nonGS1keyvaluePairs to compress");
				for (var key in nonGS1keyvaluePairs) {
					// console.log("Compressing "+key+" = "+nonGS1keyvaluePairs[key]);
					// console.log("Length of key = "+key.length);
					var lengthBits = (key.length-1).toString(2);
					lengthBits=this.padToLength(lengthBits,7);
					// console.log("lengthBits="+lengthBits);
					binstr+="1111"; // 'F' (flag for foreign keys)
					binstr+=lengthBits;
					// console.log("Added 1111 and lengthBits "+lengthBits)
					var binKey="";
					for (var i=0; i<key.length; i++) {
						var index=this.safeBase64Alphabet.indexOf(key.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,6);
							binKey+=binChar;
					}
					binstr+=binKey; // key encoded in binary using 6-bit per character
					// console.log("Encoded binKey = "+binKey);
					var binVal=this.binaryEncodingOfNonGS1Value(nonGS1keyvaluePairs[key]);
					// console.log("Encoded binVal = "+binVal);
					binstr+=binVal;
				}
			
			}


		
			// console.log("binstr="+binstr);



	
		return binstr;
		
		
		function findCandidatesFromTableOpt(akeysa,tableOpt) {	
		var candidatesFromTableOpt={};
		for (let i in tableOpt) {
			let a=tableOpt[i];
			let b=true;
			for (let j in a) {
				if (akeysa.indexOf(a[j]) == -1) {
					b=false;
				}
			} 
			if (b) {
				candidatesFromTableOpt[i]=tableOpt[i].join("").length;
			}
		}
		return candidatesFromTableOpt;
		}
		
		function findBestOptimisationCandidate(candidatesFromTableOpt) {
			let maxkey="";
			let max=0;		
			for (let i in candidatesFromTableOpt) {
				if (candidatesFromTableOpt[i]>max) {
					maxkey=i;
					max=candidatesFromTableOpt[i];
				}
			}
			return maxkey;
		}
		
		function removeOptimisedKeysFromAIlist(akeysa,v) {
			// console.log("Initially akeysa = "+JSON.stringify(akeysa));
			// console.log("v = "+JSON.stringify(v));
			for (let i in v) {
				// console.log("i = "+i);
				// console.log("v[i] = "+v[i]);
				let ind=akeysa.indexOf(v[i]);
				if (ind > -1) {
					akeysa.splice(ind, 1);
				}
			}
			// console.log("Result: akeysa = "+JSON.stringify(akeysa));
			return akeysa;
		}



	}

	binaryEncodingOfGS1AIKey(key) {
				// construct binary encoding of AI key as sequence of 4-bit digits
				// this is now modified to also support hex values of key
				var binAI="";
				for (var i=0; i<key.length; i++) {
					var digit=key.charAt(i);
					var binDigit=parseInt(digit,16).toString(2);
					binDigit=this.padToLength(binDigit,4);
					binAI+=binDigit;
				}
		return binAI;
	}

	binaryEncodingOfValue(gs1AIarray,key) {
				var tx=this.tableF[key]; // expected format for that AI key
				var cursor=0;
				var binstr="";
				var value=gs1AIarray[key];

				if ((tx.hasOwnProperty("C1")) && (tx.C1 > 0)) {
					// handle fixed-length numeric component
					var charstr=value.substr(cursor,tx.C1);
					cursor+=tx.C1;
					var numBits=Math.ceil(tx.C1*Math.log(10)/Math.log(2));
					var binValue=parseInt(charstr).toString(2);
					binValue=this.padToLength(binValue,numBits);
//					console.log("binValue="+binValue);
					binstr+=binValue;
					
					// console.log("binValue="+binValue);
				}

				if ((tx.hasOwnProperty("C2")) && (tx.C2 > 0)) {
					// handle variable-length numeric component

					var charstr=value.substr(cursor);
					cursor+=charstr.length;

					// if tx.C2 = 8

					var v2=Math.ceil(Math.log(tx.C2-1)/Math.log(2));
				
					// v2 = 3 for tx.C2 up to 8 (1-8 represented as v2 = 0-7)
				
					var lengthBits=(charstr.length-1).toString(2);
					lengthBits=this.padToLength(lengthBits,v2)
				
					var binLength=Math.ceil((charstr.length)*Math.log(10)/Math.log(2));
				
					var binValue=parseInt(charstr).toString(2);
					binValue=this.padToLength(binValue,binLength);

					// console.log("lengthBits="+lengthBits);
					// console.log("binValue="+binValue);
					binstr+=lengthBits+binValue;


				}

				if ((tx.hasOwnProperty("C4")) && (tx.C4 > 0)) {
					// handle variable-length alphanumeric component

					var charstr=value.substr(cursor);
					cursor+=charstr.length;

					var v3=Math.ceil(Math.log(tx.C4-1)/Math.log(2));

					var lengthBits=(charstr.length-1).toString(2);
					lengthBits=this.padToLength(lengthBits,v3);
				
					// changee encoding to 3 bit indicator
					// use '000' if all-numeric
					// use '001' if 4-bit - lower case hex
					// use '010' if 4-bit - upper case hex
					// use '011' if 6-bit within URI safe base 64 alphabet
					// use '100' if 7-bit ASCII
				
					var encoding='100'; 
					var regexAllNum=new RegExp("^[0-9]+$");
					var regexHexLower=new RegExp("^[0-9a-f]+$");
					var regexHexUpper=new RegExp("^[0-9A-F]+$");
					var regexSafe64=new RegExp("^[A-Za-z0-9_-]+$");
					if (regexSafe64.test(charstr)) { encoding='011'; } 
					if (regexHexLower.test(charstr)) { encoding='001'; } 
					if (regexHexUpper.test(charstr)) { encoding='010'; } 
					if (regexAllNum.test(charstr)) { encoding='000'; } 
				
					if (encoding == '000') { 
						// handle all-numeric encoding
						var binLength=Math.ceil(charstr.length*Math.log(10)/Math.log(2));
						var binValue=parseInt(charstr).toString(2);
						binValue=this.padToLength(binValue,binLength);

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;					
					}

					if (encoding == '001') { 
						// handle lower-case hex
						var binLength=4*charstr.length;
						var binValue="";
						var uCharstr = charstr.toUpperCase();
						for (var i=0; i<charstr.length; i++) {
							var index=this.hexAlphabet.indexOf(uCharstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,4);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}

					if (encoding == '010') { 
						// handle upper-case hex
						var binLength=4*charstr.length;
						var binValue="";
						var uCharstr = charstr.toUpperCase();
						for (var i=0; i<charstr.length; i++) {
							var index=this.hexAlphabet.indexOf(uCharstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,4);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}


					if (encoding == '011') { 
						// handle URI-safe base 64 encoding
						var binLength=6*charstr.length;
						var binValue="";
						for (var i=0; i<charstr.length; i++) {
							var index=this.safeBase64Alphabet.indexOf(charstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,6);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}

					if (encoding == '100') { // TODO change encoding to 3 bit
						// handle ASCII base 64 encoding
						var binLength=7*charstr.length;
						var binValue="";
						for (var i=0; i<charstr.length; i++) {
							var index=charstr.charAt(i).charCodeAt(0);
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,7);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}


				}
			

		return binstr;
	}

	binaryEncodingOfNonGS1Value(charstr) {

					var lengthBits=(charstr.length-1).toString(2);
					lengthBits=this.padToLength(lengthBits,7);
				
					// changee encoding to 3 bit indicator
					// use '000' if all-numeric
					// use '001' if 4-bit - lower case hex
					// use '010' if 4-bit - upper case hex
					// use '011' if 6-bit within URI safe base 64 alphabet
					// use '100' if 7-bit ASCII
					var binstr="";
					var encoding='100'; 
					var regexAllNum=new RegExp("^[0-9]+$");
					var regexHexLower=new RegExp("^[0-9a-f]+$");
					var regexHexUpper=new RegExp("^[0-9A-F]+$");
					var regexSafe64=new RegExp("^[A-Za-z0-9_-]+$");
					if (regexSafe64.test(charstr)) { encoding='011'; } 
					if (regexHexLower.test(charstr)) { encoding='001'; } 
					if (regexHexUpper.test(charstr)) { encoding='010'; } 
					if (regexAllNum.test(charstr)) { encoding='000'; } 
				
					if (encoding == '000') { 
						// handle all-numeric encoding
						var binLength=Math.ceil(charstr.length*Math.log(10)/Math.log(2));
						var binValue=parseInt(charstr).toString(2);
						binValue=this.padToLength(binValue,binLength);

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;					
					}

					if (encoding == '001') { 
						// handle lower-case hex
						var binLength=4*charstr.length;
						var binValue="";
						var uCharstr = charstr.toUpperCase();
						for (var i=0; i<charstr.length; i++) {
							var index=this.hexAlphabet.indexOf(uCharstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,4);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}

					if (encoding == '010') { 
						// handle upper-case hex
						var binLength=4*charstr.length;
						var binValue="";
						var uCharstr = charstr.toUpperCase();
						for (var i=0; i<charstr.length; i++) {
							var index=this.hexAlphabet.indexOf(uCharstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,4);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}


					if (encoding == '011') { 
						// handle URI-safe base 64 encoding
						var binLength=6*charstr.length;
						var binValue="";
						for (var i=0; i<charstr.length; i++) {
							var index=this.safeBase64Alphabet.indexOf(charstr.charAt(i));
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,6);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}

					if (encoding == '100') { // TODO change encoding to 3 bit
						// handle ASCII base 64 encoding
						var binLength=7*charstr.length;
						var binValue="";
						for (var i=0; i<charstr.length; i++) {
							var index=charstr.charAt(i).charCodeAt(0);
							var binChar=index.toString(2);
							binChar=this.padToLength(binChar,7);
							binValue+=binChar;
						}

						// console.log("encoding="+encoding);
						// console.log("lengthBits="+lengthBits);
						// console.log("binValue="+binValue);
						binstr+=encoding+lengthBits+binValue;
					}
			

		return binstr;
	}


	

	buildCompressedGS1digitalLink(gs1AIarray,useShortText,uriStem,useOptimisations,compressOtherKeyValuePairs,nonGS1keyvaluePairs) {

		var identifiers=[];
		var qualifiers=[];
		var attributes=[];
		var fixedLengthValues=[];
		var variableLengthValues=[];
	
		var valid=true;
		var path="";
		var queryStringArray=[];
		var queryString="";
		var webURI="";
		var canonicalStem="https://id.gs1.org";
		var rv={};

		if (compressOtherKeyValuePairs) {
			// console.log("Hooray! We should compress non-GS1 keys");
			// need to do something with these
			
		} else {
			// do pass-through of query string params
			let akv=[];
			for (let k in nonGS1keyvaluePairs) {
				akv.push(k+"="+nonGS1keyvaluePairs[k]);
			}
			if (akv.length > 0) {
				queryString="?"+akv.join("&");			
			}
		}
		
		if (Object.keys(nonGS1keyvaluePairs).length > 0) {
			// console.log("Excellent! We have some non-GS1 keys");
		}
		

		// Need to remove unwanted trailing slash
		if ((uriStem !== undefined) && (uriStem !== null) && (uriStem !== "") && (uriStem.endsWith("/"))) {
			uriStem=uriStem.substr(0,uriStem.length-1);				
		}

		// console.log("Hello! Binary = ");
		// console.log(this.compressGS1AIarrayToBinary(gs1AIarray,useOptimisations));

		path="/"+this.bin2base64(this.compressGS1AIarrayToBinary(gs1AIarray,useOptimisations,(compressOtherKeyValuePairs ? nonGS1keyvaluePairs : {})));
		
				if ((uriStem == null) || (uriStem == "")) {
					// prepare a canonical Web URI
					webURI=canonicalStem+path+queryString;	
				} else {
					webURI=uriStem+path+queryString;
				}
		
				
		

		return webURI;	
	}


	decompressGS1DigitalLink(compressedDigitalLinkURI,useShortText,uriStem) {
		// extract query string
	
		var gs1AIarray = this.extractFromCompressedGS1digitalLink(compressedDigitalLinkURI);
		// console.log("gs1AIarray="+JSON.stringify(gs1AIarray));
		var uncompressedDL = this.buildGS1digitalLink(gs1AIarray,useShortText,uriStem);	
		// console.log("uncompressedDL="+uncompressedDL);
		return uncompressedDL;
	}

	compressGS1DigitalLink(digitalLinkURI,useShortText,uriStem,uncompressedPrimary,useOptimisations,compressOtherKeyValuePairs) {
		// extract query string
		let firstQuestionMark = digitalLinkURI.indexOf("?");
		let queryString="";
		let nonGS1AIre = new RegExp("^[0-9]+$","g");
		let nonGS1keyvaluePairs={};
		if (firstQuestionMark > -1) {
			queryString = digitalLinkURI.substr(1+firstQuestionMark);
		}
		if (queryString !== "") {
			// if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
			queryString = queryString.replace(new RegExp(";", 'g'),"&");

			var firstFragment = queryString.indexOf("#");
			if (firstFragment > -1) {
				queryString = queryString.substring(0,firstFragment);
			}
			
			
			
			var pairs = queryString.split("&");
			for (var i=0; i<pairs.length; i++) {
				var p = pairs[i].split("=");
				if ((p[0] !== null) && (p[1] !== null) && (!(nonGS1AIre.test(p[0])))) {
					// console.log("p[0]="+p[0]);
					// console.log("regex test = "+nonGS1AIre.test(p[0]));
					nonGS1keyvaluePairs[p[0]]=this.percentDecode(p[1]);
				}
			}
		}

		// console.log("Non-GS1 key=val pairs="+JSON.stringify(nonGS1keyvaluePairs));
		
		
		
		var gs1AIarray=this.extractFromGS1digitalLink(digitalLinkURI);
		// console.log("gs1AIarray="+JSON.stringify(gs1AIarray));
		var compressedDL=this.buildCompressedGS1digitalLink(gs1AIarray,useShortText,uriStem,useOptimisations,compressOtherKeyValuePairs,nonGS1keyvaluePairs);
		// console.log("compressedDL="+compressedDL);
		return compressedDL;
	}


	gs1ElementStringsToCompressedGS1DigitalLink(elementString,useShortText,uriStem,uncompressedPrimary,useOptimisations) {
		if (uncompressedPrimary) {
			var gs1AIarray=this.extractFromGS1elementStrings(elementString);
			var separated=this.separateIDnonID(gs1AIarray);
			return this.buildGS1digitalLink(separated.ID,useShortText,uriStem)+"/"+this.bin2base64(this.compressGS1AIarrayToBinary(separated.nonID,useOptimisations,{}));
					
		} else {
			return this.buildCompressedGS1digitalLink(this.extractFromGS1elementStrings(elementString),useShortText,uriStem,useOptimisations,false,{});

		}
	}
	
	separateIDnonID(gs1AIarray) {
		var rv={};
		var idArray={};
		var nonIDarray={};
		var keys=Object.keys(gs1AIarray);
		for (var i in keys) {
			if (gs1AIarray.hasOwnProperty(keys[i])) {
				if (this.aiMaps.identifiers.indexOf(keys[i]) > -1) {
					idArray[keys[i]] = gs1AIarray[keys[i]];
				} else {
					nonIDarray[keys[i]] = gs1AIarray[keys[i]];
				}
			}
		}
		rv.ID=idArray;
		rv.nonID=nonIDarray;
		return rv;
	}
	




}
