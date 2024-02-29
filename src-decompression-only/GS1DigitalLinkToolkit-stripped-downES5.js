"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GS1DigitalLinkToolkit =
/*#__PURE__*/
function () {
  // constructor sets up various data resources shared by multiple methods
  function GS1DigitalLinkToolkit() {
    _classCallCheck(this, GS1DigitalLinkToolkit);

    // list of all GS1 Application Identifiers as defined in GS1 General Specifications v18
    var aitable = [{"title":"Serial Shipping Container Code (SSCC) ","label":"SSCC","shortcode":"sscc","ai":"00","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{18})"     }, {"title":"Global Trade Item Number (GTIN)","label":"GTIN","shortcode":"gtin","ai":"01","format":"N14","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["22", "10", "21"],"regex":"(\\d{12,14}|\\d{8})"     }, {"title":"GTIN of contained trade items","label":"CONTENT","ai":"02","format":"N14","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{14})"     }, {"title":"Batch or lot number","label":"BATCH/LOT","shortcode":"lot","ai":"10","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Production date (YYMMDD)","label":"PROD DATE","ai":"11","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Due date (YYMMDD)","label":"DUE DATE","ai":"12","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Packaging date (YYMMDD)","label":"PACK DATE","ai":"13","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Best before date (YYMMDD)","label":"BEST BEFORE or BEST BY","ai":"15","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Sell by date (YYMMDD)","label":"SELL BY","ai":"16","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Expiration date (YYMMDD)","label":"USE BY OR EXPIRY","shortcode":"exp","ai":"17","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Internal product variant","label":"VARIANT","ai":"20","format":"N2","type":"D","fixedLength":true,"regex":"(\\d{2})"     }, {"title":"Serial number","label":"SERIAL","shortcode":"ser","ai":"21","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Consumer product variant","label":"CPV","shortcode":"cpv","ai":"22","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Additional product identification assigned by the manufacturer","label":"ADDITIONAL ID","ai":"240","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Customer part number","label":"CUST. PART NO.","ai":"241","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Made-to-Order variation number","label":"MTO VARIANT","ai":"242","format":"N..6","type":"D","fixedLength":false,"regex":"(\\d{0,6})"     }, {"title":"Packaging component number","label":"PCN","ai":"243","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Secondary serial number","label":"SECONDARY SERIAL","ai":"250","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Reference to source entity","label":"REF. TO SOURCE ","ai":"251","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Global Document Type Identifier (GDTI)","label":"GDTI","shortcode":"gdti","ai":"253","format":"N13+X..17","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,17})"     }, {"title":"GLN extension component","label":"GLN EXTENSION COMPONENT","shortcode":"glnx","ai":"254","format":"X..20","type":"Q","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Global Coupon Number (GCN)","label":"GCN","shortcode":"gcn","ai":"255","format":"N13+N..12","type":"I","fixedLength":false,"checkDigit":"13","regex":"(\\d{13})(\\d{0,12})"     }, {"title":"Variable count of items (variable measure trade item)","label":"VAR. COUNT","ai":"30","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3100","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3101","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3102","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3103","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3104","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, kilograms (variable measure trade item)","label":"NET WEIGHT (kg)","ai":"3105","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3110","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3111","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3112","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3113","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3114","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres (variable measure trade item)","label":"LENGTH (m)","ai":"3115","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3120","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3121","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3122","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3123","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3124","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres (variable measure trade item)","label":"WIDTH (m)","ai":"3125","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3130","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3131","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3132","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3133","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3134","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres (variable measure trade item)","label":"HEIGHT (m)","ai":"3135","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3140","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3141","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3142","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3143","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3144","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres (variable measure trade item)","label":"AREA (m^2)","ai":"3145","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3150","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3151","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3152","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3153","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3154","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, litres (variable measure trade item)","label":"NET VOLUME (l)","ai":"3155","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3160","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3161","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3162","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3163","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3164","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic metres (variable measure trade item)","label":"NET VOLUME (m^3)","ai":"3165","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3200","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3201","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3202","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3203","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3204","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, pounds (variable measure trade item)","label":"NET WEIGHT (lb)","ai":"3205","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3210","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3211","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3212","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3213","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3214","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches (variable measure trade item)","label":"LENGTH (in)","ai":"3215","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3220","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3221","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3222","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3223","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3224","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet (variable measure trade item)","label":"LENGTH (ft)","ai":"3225","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3230","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3231","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3232","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3233","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3234","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards (variable measure trade item)","label":"LENGTH (yd)","ai":"3235","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3240","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3241","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3242","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3243","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3244","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches (variable measure trade item)","label":"WIDTH (in)","ai":"3245","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3250","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3251","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3252","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3253","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3254","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet (variable measure trade item)","label":"WIDTH (ft)","ai":"3255","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3260","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3261","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3262","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3263","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3264","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yards (variable measure trade item)","label":"WIDTH (yd)","ai":"3265","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3270","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3271","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3272","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3273","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3274","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches (variable measure trade item)","label":"HEIGHT (in)","ai":"3275","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3280","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3281","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3282","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3283","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3284","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet (variable measure trade item)","label":"HEIGHT (ft)","ai":"3285","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3290","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3291","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3292","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3293","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3294","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards (variable measure trade item)","label":"HEIGHT (yd)","ai":"3295","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3300","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3301","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3302","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3303","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3304","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, kilograms","label":"GROSS WEIGHT (kg)","ai":"3305","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3310","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3311","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3312","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3313","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3314","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, metres","label":"LENGTH (m), log","ai":"3315","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3320","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3321","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3322","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3323","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3324","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, metres","label":"WIDTH (m), log","ai":"3325","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3330","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3331","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3332","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3333","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3334","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, metres","label":"HEIGHT (m), log","ai":"3335","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3340","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3341","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3342","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3343","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3344","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square metres","label":"AREA (m^2), log","ai":"3345","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3350","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3351","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3352","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3353","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3354","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, litres","label":"VOLUME (l), log","ai":"3355","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3360","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3361","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3362","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3363","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3364","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic metres","label":"VOLUME (m^3), log","ai":"3365","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3370","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3371","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3372","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3373","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3374","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Kilograms per square metre","label":"KG PER m^2","ai":"3375","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3400","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3401","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3402","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3403","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3404","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic weight, pounds","label":"GROSS WEIGHT (lb)","ai":"3405","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3410","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3411","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3412","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3413","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3414","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, inches","label":"LENGTH (in), log","ai":"3415","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3420","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3421","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3422","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3423","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3424","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, feet","label":"LENGTH (ft), log","ai":"3425","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3430","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3431","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3432","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3433","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3434","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Length or first dimension, yards","label":"LENGTH (yd), log","ai":"3435","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3440","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3441","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3442","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3443","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3444","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, inches","label":"WIDTH (in), log","ai":"3445","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3450","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3451","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3452","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3453","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3454","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, feet","label":"WIDTH (ft), log","ai":"3455","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3460","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3461","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3462","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3463","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3464","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Width, diameter, or second dimension, yard","label":"WIDTH (yd), log","ai":"3465","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3470","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3471","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3472","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3473","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3474","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, inches","label":"HEIGHT (in), log","ai":"3475","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3480","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3481","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3482","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3483","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3484","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, feet","label":"HEIGHT (ft), log","ai":"3485","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3490","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3491","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3492","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3493","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3494","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Depth, thickness, height, or third dimension, yards","label":"HEIGHT (yd), log","ai":"3495","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3500","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3501","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3502","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3503","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3504","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches (variable measure trade item)","label":"AREA (in^2)","ai":"3505","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3510","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3511","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3512","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3513","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3514","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet (variable measure trade item)","label":"AREA (ft^2)","ai":"3515","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3520","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3521","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3522","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3523","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3524","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards (variable measure trade item)","label":"AREA (yd^2)","ai":"3525","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3530","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3531","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3532","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3533","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3534","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square inches","label":"AREA (in^2), log","ai":"3535","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3540","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3541","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3542","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3543","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3544","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square feet","label":"AREA (ft^2), log","ai":"3545","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3550","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3551","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3552","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3553","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3554","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Area, square yards","label":"AREA (yd^2), log","ai":"3555","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3560","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3561","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3562","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3563","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3564","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight, troy ounces (variable measure trade item)","label":"NET WEIGHT (t oz)","ai":"3565","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3570","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3571","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3572","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3573","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3574","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net weight (or volume), ounces (variable measure trade item)","label":"NET VOLUME (oz)","ai":"3575","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3600","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3601","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3602","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3603","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3604","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, quarts (variable measure trade item)","label":"NET VOLUME (qt)","ai":"3605","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3610","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3611","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3612","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3613","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3614","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, gallons U.S. (variable measure trade item)","label":"NET VOLUME (gal.)","ai":"3615","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3620","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3621","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3622","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3623","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3624","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, quarts","label":"VOLUME (qt), log","ai":"3625","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3630","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3631","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3632","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3633","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3634","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, gallons U.S.","label":"VOLUME (gal.), log","ai":"3635","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3640","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3641","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3642","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3643","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3644","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic inches (variable measure trade item)","label":"VOLUME (in^3) ","ai":"3645","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3650","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3651","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3652","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3653","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3654","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic feet (variable measure trade item)","label":"VOLUME (ft^3) ","ai":"3655","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3660","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3661","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3662","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3663","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3664","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Net volume, cubic yards (variable measure trade item)","label":"VOLUME (yd^3) ","ai":"3665","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3670","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3671","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3672","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3673","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3674","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic inches","label":"VOLUME (in^3), log","ai":"3675","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3680","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3681","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3682","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3683","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3684","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic feet","label":"VOLUME (ft^3), log","ai":"3685","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3690","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3691","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3692","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3693","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3694","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Logistic volume, cubic yards","label":"VOLUME (yd^3), log","ai":"3695","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Count of trade items","label":"COUNT","ai":"37","format":"N..8","type":"D","fixedLength":false,"regex":"(\\d{0,8})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3900","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3901","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3902","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3903","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3904","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3905","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3906","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3907","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3908","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable or Coupon value, local currency","label":"AMOUNT","ai":"3909","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3910","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3911","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3912","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3913","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3914","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3915","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3916","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3917","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3918","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code","label":"AMOUNT","ai":"3919","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3920","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3921","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3922","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3923","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3924","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3925","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3926","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3927","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3928","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable, single monetary area (variable measure trade item)","label":"PRICE","ai":"3929","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3930","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3931","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3932","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3933","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3934","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3935","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3936","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3937","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3938","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Applicable amount payable with ISO currency code (variable measure trade item)","label":"PRICE","ai":"3939","format":"N..15","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,15})"     }, {"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3940","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"     }, {"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3941","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"     }, {"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3942","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"     }, {"title":"Percentage discount of a coupon","label":"PRCNT OFF","ai":"3943","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"     }, {"title":"Customer's purchase order number","label":"ORDER NUMBER","ai":"400","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Global Identification Number for Consignment (GINC)","label":"GINC","shortcode":"ginc","ai":"401","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Global Shipment Identification Number (GSIN)","label":"GSIN","shortcode":"gsin","ai":"402","format":"N17","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{17})"     }, {"title":"Routing code","label":"ROUTE","ai":"403","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Ship to - Deliver to Global Location Number","label":"SHIP TO LOC","ai":"410","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"Bill to - Invoice to Global Location Number","label":"BILL TO ","ai":"411","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"Purchased from Global Location Number","label":"PURCHASE FROM","ai":"412","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"Ship for - Deliver for - Forward to Global Location Number","label":"SHIP FOR LOC","ai":"413","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"Identification of a physical location - Global Location Number","label":"LOC No","shortcode":"gln","ai":"414","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["254"],"regex":"(\\d{13})"     }, {"title":"Global Location Number of the invoicing party","label":"PAY TO","shortcode":"payto","ai":"415","format":"N13","type":"I","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"GLN of the production or service location","label":"PROD/SERV LOC","ai":"416","format":"N13","type":"D","fixedLength":true,"checkDigit":"L","regex":"(\\d{13})"     }, {"title":"Ship to - Deliver to postal code within a single postal authority","label":"SHIP TO POST","ai":"420","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Ship to - Deliver to postal code with ISO country code","label":"SHIP TO POST","ai":"421","format":"N3+X..9","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,9})"     }, {"title":"Country of origin of a trade item","label":"ORIGIN","ai":"422","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"     }, {"title":"Country of initial processing","label":"COUNTRY - INITIAL PROCESS.","ai":"423","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"     }, {"title":"Country of processing","label":"COUNTRY - PROCESS.","ai":"424","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"     }, {"title":"Country of disassembly","label":"COUNTRY - DISASSEMBLY","ai":"425","format":"N3+N..12","type":"D","fixedLength":false,"regex":"(\\d{3})(\\d{0,12})"     }, {"title":"Country covering full process chain","label":"COUNTRY - FULL PROCESS","ai":"426","format":"N3","type":"D","fixedLength":true,"regex":"(\\d{3})"     }, {"title":"Country subdivision Of origin","label":"ORIGIN SUBDIVISION","ai":"427","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"     }, {"title":"NATO Stock Number (NSN)","label":"NSN","ai":"7001","format":"N13","type":"D","fixedLength":true,"regex":"(\\d{13})"     }, {"title":"UN/ECE meat carcasses and cuts classification","label":"MEAT CUT","ai":"7002","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Expiration date and time","label":"EXPIRY TIME","shortcode":"expdt","ai":"7003","format":"N10","type":"D","fixedLength":true,"regex":"(\\d{10})"     }, {"title":"Active potency","label":"ACTIVE POTENCY","ai":"7004","format":"N..4","type":"D","fixedLength":false,"regex":"(\\d{0,4})"     }, {"title":"Catch area","label":"CATCH AREA","ai":"7005","format":"X..12","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,12})"     }, {"title":"First freeze date ","label":"FIRST FREEZE DATE","ai":"7006","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Harvest date","label":"HARVEST DATE","ai":"7007","format":"N6..12","type":"D","fixedLength":false,"regex":"(\\d{6,12})"     }, {"title":"Species for fishery purposes","label":"AQUATIC SPECIES","ai":"7008","format":"X..3","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"     }, {"title":"Fishing gear type","label":"FISHING GEAR TYPE","ai":"7009","format":"X..10","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,10})"     }, {"title":"Production method","label":"PROD METHOD","ai":"7010","format":"X..2","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,2})"     }, {"title":"Refurbishment lot ID","label":"REFURB LOT","ai":"7020","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Functional status","label":"FUNC STAT","ai":"7021","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Revision status","label":"REV STAT","ai":"7022","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Global Individual Asset Identifier (GIAI) of an assembly","label":"GIAI - ASSEMBLY","ai":"7023","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 0","ai":"7030","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 1","ai":"7031","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 2","ai":"7032","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 3","ai":"7033","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 4","ai":"7034","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 5","ai":"7035","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 6","ai":"7036","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 7","ai":"7037","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 8","ai":"7038","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"Number of processor with ISO Country Code","label":"PROCESSOR # 9","ai":"7039","format":"X..27","type":"D","fixedLength":false,"regex":"(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"     }, {"title":"National Healthcare Reimbursement Number (NHRN) - Germany PZN","label":"NHRN PZN","ai":"710","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"National Healthcare Reimbursement Number (NHRN) - France CIP","label":"NHRN CIP","ai":"711","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"National Healthcare Reimbursement Number (NHRN) - Spain CN","label":"NHRN CN","ai":"712","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"National Healthcare Reimbursement Number (NHRN) - Brasil DRN","label":"NHRN DRN","ai":"713","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"National Healthcare Reimbursement Number (NHRN) - Portugal AIM","label":"NHRN AIM","ai":"714","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Certification reference # 0","label":"CERT # 0","ai":"7230","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 1","label":"CERT # 1","ai":"7231","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 2","label":"CERT # 2","ai":"7232","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 3","label":"CERT # 3","ai":"7233","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 4","label":"CERT # 4","ai":"7234","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 5","label":"CERT # 5","ai":"7235","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 6","label":"CERT # 6","ai":"7236","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 7","label":"CERT # 7","ai":"7237","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 8","label":"CERT # 8","ai":"7238","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Certification reference # 9","label":"CERT # 9","ai":"7239","format":"X2+X..28","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"     }, {"title":"Roll products (width, length, core diameter, direction, splices)","label":"DIMENSIONS","ai":"8001","format":"N14","type":"D","fixedLength":true,"regex":"(\\d{14})"     }, {"title":"Cellular mobile telephone identifier","label":"CMT No","ai":"8002","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Global Returnable Asset Identifier (GRAI)","label":"GRAI","shortcode":"grai","ai":"8003","format":"N14+X..16","type":"I","fixedLength":false,"checkDigit":"14","regex":"(\\d{14})([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,16})"     }, {"title":"Global Individual Asset Identifier (GIAI)","label":"GIAI","shortcode":"giai","ai":"8004","format":"X..30","type":"I","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Price per unit of measure","label":"PRICE PER UNIT","ai":"8005","format":"N6","type":"D","fixedLength":true,"regex":"(\\d{6})"     }, {"title":"Identification of an individual trade item piece","label":"ITIP","shortcode":"itip","ai":"8006","format":"N14+N2+N2","type":"I","fixedLength":true,"checkDigit":"14","qualifiers":["22", "10", "21"],"regex":"(\\d{14})(\\d{2})(\\d{2})"     }, {"title":"International Bank Account Number (IBAN) ","label":"IBAN","ai":"8007","format":"X..34","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,34})"     }, {"title":"Date and time of production","label":"PROD TIME","ai":"8008","format":"N8+N..4","type":"D","fixedLength":false,"regex":"(\\d{8})(\\d{0,4})"     }, {"title":"Optically Readable Sensor Indicator","label":"OPT SEN","ai":"8009","format":"X..50","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,50})"     }, {"title":"Component/Part Identifier (CPID)","label":"CPID","shortcode":"cpid","ai":"8010","format":"Y..30","type":"I","fixedLength":false,"qualifiers":["8011"],"regex":"([\\x23\\x2D\\x2F\\x30-\\x39\\x41-\\x5A]{0,30})"     }, {"title":"Component/Part Identifier serial number (CPID SERIAL)","label":"CPID SERIAL","shortcode":"cpsn","ai":"8011","format":"N..12","type":"Q","fixedLength":false,"regex":"(\\d{0,12})"     }, {"title":"Software version","label":"VERSION","ai":"8012","format":"X..20","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"     }, {"title":"Global Model Number (GMN)","label":"GMN (for medical devices, the default, global data title is BUDI-DI )","ai":"8013","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Global Service Relation Number - Provider","label":"GSRN - PROVIDER","shortcode":"gsrnp","ai":"8017","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"     }, {"title":"Global Service Relation Number - Recipient","label":"GSRN - RECIPIENT","shortcode":"gsrn","ai":"8018","format":"N18","type":"I","fixedLength":true,"checkDigit":"L","qualifiers":["8019"],"regex":"(\\d{18})"     }, {"title":"Service Relation Instance Number (SRIN)","label":"SRIN","shortcode":"srin","ai":"8019","format":"N..10","type":"Q","fixedLength":false,"regex":"(\\d{0,10})"     }, {"title":"Payment slip reference number","label":"REF No","ai":"8020","format":"X..25","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,25})"     }, {"title":"Identification of pieces of a trade item contained in a logistics unit","label":"ITIP CONTENT","ai":"8026","format":"N14+N2+N2","type":"D","fixedLength":true,"checkDigit":"14","regex":"(\\d{14})(\\d{2})(\\d{2})"     }, {"title":"Coupon code identification for use in North America","ai":"8110","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"     }, {"title":"Loyalty points of a coupon","label":"POINTS","ai":"8111","format":"N4","type":"D","fixedLength":true,"regex":"(\\d{4})"     }, {"title":"Paperless coupon code identification for use in North America","ai":"8112","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"     }, {"title":"Extended Packaging URL ","label":"PRODUCT URL","ai":"8200","format":"X..70","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"     }, {"title":"Information mutually agreed between trading partners","label":"INTERNAL","ai":"90","format":"X..30","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"91","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"92","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"93","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"94","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"95","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"96","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"97","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"98","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }, {"title":"Company internal information","label":"INTERNAL","ai":"99","format":"X..90","type":"D","fixedLength":false,"regex":"([\\x21-\\x22\\x25-\\x2F\\x30-\\x3F\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"     }]; 
    
    // Element Strings with predefined length using GS1 Application Identifiers, as defined in GS1 Gen Specs - see Figure 7.8.4-2 of GS1 Gen Specs v18 at https://www.gs1.org/docs/barcodes/GS1_General_Specifications.pdf 
    var fixedLengthTable = {"00":20,"01":16,"02":16,"03":16,"04":18,"11":8,"12":8,"13":8,"14":8,"15":8,"16":8,"17":8,"18":8,"19":4,"20":4,"31":10,"32":10,"33":10,"34":10,"35":10,"36":10,"41":16     }; 
    
    // tableP indicates for any initial two digits, what is the total length of the numeric AI key, e.g. "80":4 --> all AI keys beginning with 80 are four digit AI keys, 80xx 
    var tableP = {"00":2,"01":2,"02":2,"10":2,"11":2,"12":2,"13":2,"15":2,"16":2,"17":2,"20":2,"21":2,"22":2,"23":3,"24":3,"25":3,"30":2,"31":4,"32":4,"33":4,"34":4,"35":4,"36":4,"37":2,"39":4,"40":3,"41":3,"42":3,"70":4,"71":3,"72":4,"80":4,"81":4,"82":4,"90":2,"91":2,"92":2,"93":2,"94":2,"95":2,"96":2,"97":2,"98":2,"99":2     }; 
    
    // tableF indicates the expected format for the value of each AI.   
    var tableF = {"00":[{  "E":"N",  "L":"18"}],"01":[{  "E":"N",  "L":"14"}],"02":[{  "E":"N",  "L":"14"}],"10":[{  "E":"X",  "M":"20"}],"11":[{  "E":"N",  "L":"6"}],"12":[{  "E":"N",  "L":"6"}],"13":[{  "E":"N",  "L":"6"}],"15":[{  "E":"N",  "L":"6"}],"16":[{  "E":"N",  "L":"6"}],"17":[{  "E":"N",  "L":"6"}],"20":[{  "E":"N",  "L":"2"}],"21":[{  "E":"X",  "M":"20"}],"22":[{  "E":"X",  "M":"20"}],"240":[{  "E":"X",  "M":"30"}],"241":[{  "E":"X",  "M":"30"}],"242":[{  "E":"N",  "M":"6"}],"243":[{  "E":"X",  "M":"20"}],"250":[{  "E":"X",  "M":"30"}],"251":[{  "E":"X",  "M":"30"}],"253":[{  "E":"N",  "L":"13"}, {  "E":"X",  "M":"17"}],"254":[{  "E":"X",  "M":"20"}],"255":[{  "E":"N",  "L":"13"}, {  "E":"N",  "M":"12"}],"30":[{  "E":"N",  "M":"8"}],"3100":[{  "E":"N",  "L":"6"}],"3101":[{  "E":"N",  "L":"6"}],"3102":[{  "E":"N",  "L":"6"}],"3103":[{  "E":"N",  "L":"6"}],"3104":[{  "E":"N",  "L":"6"}],"3105":[{  "E":"N",  "L":"6"}],"3110":[{  "E":"N",  "L":"6"}],"3111":[{  "E":"N",  "L":"6"}],"3112":[{  "E":"N",  "L":"6"}],"3113":[{  "E":"N",  "L":"6"}],"3114":[{  "E":"N",  "L":"6"}],"3115":[{  "E":"N",  "L":"6"}],"3120":[{  "E":"N",  "L":"6"}],"3121":[{  "E":"N",  "L":"6"}],"3122":[{  "E":"N",  "L":"6"}],"3123":[{  "E":"N",  "L":"6"}],"3124":[{  "E":"N",  "L":"6"}],"3125":[{  "E":"N",  "L":"6"}],"3130":[{  "E":"N",  "L":"6"}],"3131":[{  "E":"N",  "L":"6"}],"3132":[{  "E":"N",  "L":"6"}],"3133":[{  "E":"N",  "L":"6"}],"3134":[{  "E":"N",  "L":"6"}],"3135":[{  "E":"N",  "L":"6"}],"3140":[{  "E":"N",  "L":"6"}],"3141":[{  "E":"N",  "L":"6"}],"3142":[{  "E":"N",  "L":"6"}],"3143":[{  "E":"N",  "L":"6"}],"3144":[{  "E":"N",  "L":"6"}],"3145":[{  "E":"N",  "L":"6"}],"3150":[{  "E":"N",  "L":"6"}],"3151":[{  "E":"N",  "L":"6"}],"3152":[{  "E":"N",  "L":"6"}],"3153":[{  "E":"N",  "L":"6"}],"3154":[{  "E":"N",  "L":"6"}],"3155":[{  "E":"N",  "L":"6"}],"3160":[{  "E":"N",  "L":"6"}],"3161":[{  "E":"N",  "L":"6"}],"3162":[{  "E":"N",  "L":"6"}],"3163":[{  "E":"N",  "L":"6"}],"3164":[{  "E":"N",  "L":"6"}],"3165":[{  "E":"N",  "L":"6"}],"3200":[{  "E":"N",  "L":"6"}],"3201":[{  "E":"N",  "L":"6"}],"3202":[{  "E":"N",  "L":"6"}],"3203":[{  "E":"N",  "L":"6"}],"3204":[{  "E":"N",  "L":"6"}],"3205":[{  "E":"N",  "L":"6"}],"3210":[{  "E":"N",  "L":"6"}],"3211":[{  "E":"N",  "L":"6"}],"3212":[{  "E":"N",  "L":"6"}],"3213":[{  "E":"N",  "L":"6"}],"3214":[{  "E":"N",  "L":"6"}],"3215":[{  "E":"N",  "L":"6"}],"3220":[{  "E":"N",  "L":"6"}],"3221":[{  "E":"N",  "L":"6"}],"3222":[{  "E":"N",  "L":"6"}],"3223":[{  "E":"N",  "L":"6"}],"3224":[{  "E":"N",  "L":"6"}],"3225":[{  "E":"N",  "L":"6"}],"3230":[{  "E":"N",  "L":"6"}],"3231":[{  "E":"N",  "L":"6"}],"3232":[{  "E":"N",  "L":"6"}],"3233":[{  "E":"N",  "L":"6"}],"3234":[{  "E":"N",  "L":"6"}],"3235":[{  "E":"N",  "L":"6"}],"3240":[{  "E":"N",  "L":"6"}],"3241":[{  "E":"N",  "L":"6"}],"3242":[{  "E":"N",  "L":"6"}],"3243":[{  "E":"N",  "L":"6"}],"3244":[{  "E":"N",  "L":"6"}],"3245":[{  "E":"N",  "L":"6"}],"3250":[{  "E":"N",  "L":"6"}],"3251":[{  "E":"N",  "L":"6"}],"3252":[{  "E":"N",  "L":"6"}],"3253":[{  "E":"N",  "L":"6"}],"3254":[{  "E":"N",  "L":"6"}],"3255":[{  "E":"N",  "L":"6"}],"3260":[{  "E":"N",  "L":"6"}],"3261":[{  "E":"N",  "L":"6"}],"3262":[{  "E":"N",  "L":"6"}],"3263":[{  "E":"N",  "L":"6"}],"3264":[{  "E":"N",  "L":"6"}],"3265":[{  "E":"N",  "L":"6"}],"3270":[{  "E":"N",  "L":"6"}],"3271":[{  "E":"N",  "L":"6"}],"3272":[{  "E":"N",  "L":"6"}],"3273":[{  "E":"N",  "L":"6"}],"3274":[{  "E":"N",  "L":"6"}],"3275":[{  "E":"N",  "L":"6"}],"3280":[{  "E":"N",  "L":"6"}],"3281":[{  "E":"N",  "L":"6"}],"3282":[{  "E":"N",  "L":"6"}],"3283":[{  "E":"N",  "L":"6"}],"3284":[{  "E":"N",  "L":"6"}],"3285":[{  "E":"N",  "L":"6"}],"3290":[{  "E":"N",  "L":"6"}],"3291":[{  "E":"N",  "L":"6"}],"3292":[{  "E":"N",  "L":"6"}],"3293":[{  "E":"N",  "L":"6"}],"3294":[{  "E":"N",  "L":"6"}],"3295":[{  "E":"N",  "L":"6"}],"3300":[{  "E":"N",  "L":"6"}],"3301":[{  "E":"N",  "L":"6"}],"3302":[{  "E":"N",  "L":"6"}],"3303":[{  "E":"N",  "L":"6"}],"3304":[{  "E":"N",  "L":"6"}],"3305":[{  "E":"N",  "L":"6"}],"3310":[{  "E":"N",  "L":"6"}],"3311":[{  "E":"N",  "L":"6"}],"3312":[{  "E":"N",  "L":"6"}],"3313":[{  "E":"N",  "L":"6"}],"3314":[{  "E":"N",  "L":"6"}],"3315":[{  "E":"N",  "L":"6"}],"3320":[{  "E":"N",  "L":"6"}],"3321":[{  "E":"N",  "L":"6"}],"3322":[{  "E":"N",  "L":"6"}],"3323":[{  "E":"N",  "L":"6"}],"3324":[{  "E":"N",  "L":"6"}],"3325":[{  "E":"N",  "L":"6"}],"3330":[{  "E":"N",  "L":"6"}],"3331":[{  "E":"N",  "L":"6"}],"3332":[{  "E":"N",  "L":"6"}],"3333":[{  "E":"N",  "L":"6"}],"3334":[{  "E":"N",  "L":"6"}],"3335":[{  "E":"N",  "L":"6"}],"3340":[{  "E":"N",  "L":"6"}],"3341":[{  "E":"N",  "L":"6"}],"3342":[{  "E":"N",  "L":"6"}],"3343":[{  "E":"N",  "L":"6"}],"3344":[{  "E":"N",  "L":"6"}],"3345":[{  "E":"N",  "L":"6"}],"3350":[{  "E":"N",  "L":"6"}],"3351":[{  "E":"N",  "L":"6"}],"3352":[{  "E":"N",  "L":"6"}],"3353":[{  "E":"N",  "L":"6"}],"3354":[{  "E":"N",  "L":"6"}],"3355":[{  "E":"N",  "L":"6"}],"3360":[{  "E":"N",  "L":"6"}],"3361":[{  "E":"N",  "L":"6"}],"3362":[{  "E":"N",  "L":"6"}],"3363":[{  "E":"N",  "L":"6"}],"3364":[{  "E":"N",  "L":"6"}],"3365":[{  "E":"N",  "L":"6"}],"3370":[{  "E":"N",  "L":"6"}],"3371":[{  "E":"N",  "L":"6"}],"3372":[{  "E":"N",  "L":"6"}],"3373":[{  "E":"N",  "L":"6"}],"3374":[{  "E":"N",  "L":"6"}],"3375":[{  "E":"N",  "L":"6"}],"3400":[{  "E":"N",  "L":"6"}],"3401":[{  "E":"N",  "L":"6"}],"3402":[{  "E":"N",  "L":"6"}],"3403":[{  "E":"N",  "L":"6"}],"3404":[{  "E":"N",  "L":"6"}],"3405":[{  "E":"N",  "L":"6"}],"3410":[{  "E":"N",  "L":"6"}],"3411":[{  "E":"N",  "L":"6"}],"3412":[{  "E":"N",  "L":"6"}],"3413":[{  "E":"N",  "L":"6"}],"3414":[{  "E":"N",  "L":"6"}],"3415":[{  "E":"N",  "L":"6"}],"3420":[{  "E":"N",  "L":"6"}],"3421":[{  "E":"N",  "L":"6"}],"3422":[{  "E":"N",  "L":"6"}],"3423":[{  "E":"N",  "L":"6"}],"3424":[{  "E":"N",  "L":"6"}],"3425":[{  "E":"N",  "L":"6"}],"3430":[{  "E":"N",  "L":"6"}],"3431":[{  "E":"N",  "L":"6"}],"3432":[{  "E":"N",  "L":"6"}],"3433":[{  "E":"N",  "L":"6"}],"3434":[{  "E":"N",  "L":"6"}],"3435":[{  "E":"N",  "L":"6"}],"3440":[{  "E":"N",  "L":"6"}],"3441":[{  "E":"N",  "L":"6"}],"3442":[{  "E":"N",  "L":"6"}],"3443":[{  "E":"N",  "L":"6"}],"3444":[{  "E":"N",  "L":"6"}],"3445":[{  "E":"N",  "L":"6"}],"3450":[{  "E":"N",  "L":"6"}],"3451":[{  "E":"N",  "L":"6"}],"3452":[{  "E":"N",  "L":"6"}],"3453":[{  "E":"N",  "L":"6"}],"3454":[{  "E":"N",  "L":"6"}],"3455":[{  "E":"N",  "L":"6"}],"3460":[{  "E":"N",  "L":"6"}],"3461":[{  "E":"N",  "L":"6"}],"3462":[{  "E":"N",  "L":"6"}],"3463":[{  "E":"N",  "L":"6"}],"3464":[{  "E":"N",  "L":"6"}],"3465":[{  "E":"N",  "L":"6"}],"3470":[{  "E":"N",  "L":"6"}],"3471":[{  "E":"N",  "L":"6"}],"3472":[{  "E":"N",  "L":"6"}],"3473":[{  "E":"N",  "L":"6"}],"3474":[{  "E":"N",  "L":"6"}],"3475":[{  "E":"N",  "L":"6"}],"3480":[{  "E":"N",  "L":"6"}],"3481":[{  "E":"N",  "L":"6"}],"3482":[{  "E":"N",  "L":"6"}],"3483":[{  "E":"N",  "L":"6"}],"3484":[{  "E":"N",  "L":"6"}],"3485":[{  "E":"N",  "L":"6"}],"3490":[{  "E":"N",  "L":"6"}],"3491":[{  "E":"N",  "L":"6"}],"3492":[{  "E":"N",  "L":"6"}],"3493":[{  "E":"N",  "L":"6"}],"3494":[{  "E":"N",  "L":"6"}],"3495":[{  "E":"N",  "L":"6"}],"3500":[{  "E":"N",  "L":"6"}],"3501":[{  "E":"N",  "L":"6"}],"3502":[{  "E":"N",  "L":"6"}],"3503":[{  "E":"N",  "L":"6"}],"3504":[{  "E":"N",  "L":"6"}],"3505":[{  "E":"N",  "L":"6"}],"3510":[{  "E":"N",  "L":"6"}],"3511":[{  "E":"N",  "L":"6"}],"3512":[{  "E":"N",  "L":"6"}],"3513":[{  "E":"N",  "L":"6"}],"3514":[{  "E":"N",  "L":"6"}],"3515":[{  "E":"N",  "L":"6"}],"3520":[{  "E":"N",  "L":"6"}],"3521":[{  "E":"N",  "L":"6"}],"3522":[{  "E":"N",  "L":"6"}],"3523":[{  "E":"N",  "L":"6"}],"3524":[{  "E":"N",  "L":"6"}],"3525":[{  "E":"N",  "L":"6"}],"3530":[{  "E":"N",  "L":"6"}],"3531":[{  "E":"N",  "L":"6"}],"3532":[{  "E":"N",  "L":"6"}],"3533":[{  "E":"N",  "L":"6"}],"3534":[{  "E":"N",  "L":"6"}],"3535":[{  "E":"N",  "L":"6"}],"3540":[{  "E":"N",  "L":"6"}],"3541":[{  "E":"N",  "L":"6"}],"3542":[{  "E":"N",  "L":"6"}],"3543":[{  "E":"N",  "L":"6"}],"3544":[{  "E":"N",  "L":"6"}],"3545":[{  "E":"N",  "L":"6"}],"3550":[{  "E":"N",  "L":"6"}],"3551":[{  "E":"N",  "L":"6"}],"3552":[{  "E":"N",  "L":"6"}],"3553":[{  "E":"N",  "L":"6"}],"3554":[{  "E":"N",  "L":"6"}],"3555":[{  "E":"N",  "L":"6"}],"3560":[{  "E":"N",  "L":"6"}],"3561":[{  "E":"N",  "L":"6"}],"3562":[{  "E":"N",  "L":"6"}],"3563":[{  "E":"N",  "L":"6"}],"3564":[{  "E":"N",  "L":"6"}],"3565":[{  "E":"N",  "L":"6"}],"3570":[{  "E":"N",  "L":"6"}],"3571":[{  "E":"N",  "L":"6"}],"3572":[{  "E":"N",  "L":"6"}],"3573":[{  "E":"N",  "L":"6"}],"3574":[{  "E":"N",  "L":"6"}],"3575":[{  "E":"N",  "L":"6"}],"3600":[{  "E":"N",  "L":"6"}],"3601":[{  "E":"N",  "L":"6"}],"3602":[{  "E":"N",  "L":"6"}],"3603":[{  "E":"N",  "L":"6"}],"3604":[{  "E":"N",  "L":"6"}],"3605":[{  "E":"N",  "L":"6"}],"3610":[{  "E":"N",  "L":"6"}],"3611":[{  "E":"N",  "L":"6"}],"3612":[{  "E":"N",  "L":"6"}],"3613":[{  "E":"N",  "L":"6"}],"3614":[{  "E":"N",  "L":"6"}],"3615":[{  "E":"N",  "L":"6"}],"3620":[{  "E":"N",  "L":"6"}],"3621":[{  "E":"N",  "L":"6"}],"3622":[{  "E":"N",  "L":"6"}],"3623":[{  "E":"N",  "L":"6"}],"3624":[{  "E":"N",  "L":"6"}],"3625":[{  "E":"N",  "L":"6"}],"3630":[{  "E":"N",  "L":"6"}],"3631":[{  "E":"N",  "L":"6"}],"3632":[{  "E":"N",  "L":"6"}],"3633":[{  "E":"N",  "L":"6"}],"3634":[{  "E":"N",  "L":"6"}],"3635":[{  "E":"N",  "L":"6"}],"3640":[{  "E":"N",  "L":"6"}],"3641":[{  "E":"N",  "L":"6"}],"3642":[{  "E":"N",  "L":"6"}],"3643":[{  "E":"N",  "L":"6"}],"3644":[{  "E":"N",  "L":"6"}],"3645":[{  "E":"N",  "L":"6"}],"3650":[{  "E":"N",  "L":"6"}],"3651":[{  "E":"N",  "L":"6"}],"3652":[{  "E":"N",  "L":"6"}],"3653":[{  "E":"N",  "L":"6"}],"3654":[{  "E":"N",  "L":"6"}],"3655":[{  "E":"N",  "L":"6"}],"3660":[{  "E":"N",  "L":"6"}],"3661":[{  "E":"N",  "L":"6"}],"3662":[{  "E":"N",  "L":"6"}],"3663":[{  "E":"N",  "L":"6"}],"3664":[{  "E":"N",  "L":"6"}],"3665":[{  "E":"N",  "L":"6"}],"3670":[{  "E":"N",  "L":"6"}],"3671":[{  "E":"N",  "L":"6"}],"3672":[{  "E":"N",  "L":"6"}],"3673":[{  "E":"N",  "L":"6"}],"3674":[{  "E":"N",  "L":"6"}],"3675":[{  "E":"N",  "L":"6"}],"3680":[{  "E":"N",  "L":"6"}],"3681":[{  "E":"N",  "L":"6"}],"3682":[{  "E":"N",  "L":"6"}],"3683":[{  "E":"N",  "L":"6"}],"3684":[{  "E":"N",  "L":"6"}],"3685":[{  "E":"N",  "L":"6"}],"3690":[{  "E":"N",  "L":"6"}],"3691":[{  "E":"N",  "L":"6"}],"3692":[{  "E":"N",  "L":"6"}],"3693":[{  "E":"N",  "L":"6"}],"3694":[{  "E":"N",  "L":"6"}],"3695":[{  "E":"N",  "L":"6"}],"37":[{  "E":"N",  "M":"8"}],"3900":[{  "E":"N",  "M":"15"}],"3901":[{  "E":"N",  "M":"15"}],"3902":[{  "E":"N",  "M":"15"}],"3903":[{  "E":"N",  "M":"15"}],"3904":[{  "E":"N",  "M":"15"}],"3905":[{  "E":"N",  "M":"15"}],"3906":[{  "E":"N",  "M":"15"}],"3907":[{  "E":"N",  "M":"15"}],"3908":[{  "E":"N",  "M":"15"}],"3909":[{  "E":"N",  "M":"15"}],"3910":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3911":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3912":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3913":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3914":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3915":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3916":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3917":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3918":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3919":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3920":[{  "E":"N",  "M":"15"}],"3921":[{  "E":"N",  "M":"15"}],"3922":[{  "E":"N",  "M":"15"}],"3923":[{  "E":"N",  "M":"15"}],"3924":[{  "E":"N",  "M":"15"}],"3925":[{  "E":"N",  "M":"15"}],"3926":[{  "E":"N",  "M":"15"}],"3927":[{  "E":"N",  "M":"15"}],"3928":[{  "E":"N",  "M":"15"}],"3929":[{  "E":"N",  "M":"15"}],"3930":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3931":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3932":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3933":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3934":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3935":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3936":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3937":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3938":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3939":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"15"}],"3940":[{  "E":"N",  "L":"4"}],"3941":[{  "E":"N",  "L":"4"}],"3942":[{  "E":"N",  "L":"4"}],"3943":[{  "E":"N",  "L":"4"}],"400":[{  "E":"X",  "M":"30"}],"401":[{  "E":"X",  "M":"30"}],"402":[{  "E":"N",  "L":"17"}],"403":[{  "E":"X",  "M":"30"}],"410":[{  "E":"N",  "L":"13"}],"411":[{  "E":"N",  "L":"13"}],"412":[{  "E":"N",  "L":"13"}],"413":[{  "E":"N",  "L":"13"}],"414":[{  "E":"N",  "L":"13"}],"415":[{  "E":"N",  "L":"13"}],"416":[{  "E":"N",  "L":"13"}],"420":[{  "E":"X",  "M":"20"}],"421":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"9"}],"422":[{  "E":"N",  "L":"3"}],"423":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"12"}],"424":[{  "E":"N",  "L":"3"}],"425":[{  "E":"N",  "L":"3"}, {  "E":"N",  "M":"12"}],"426":[{  "E":"N",  "L":"3"}],"427":[{  "E":"X",  "M":"3"}],"7001":[{  "E":"N",  "L":"13"}],"7002":[{  "E":"X",  "M":"30"}],"7003":[{  "E":"N",  "L":"10"}],"7004":[{  "E":"N",  "M":"4"}],"7005":[{  "E":"X",  "M":"12"}],"7006":[{  "E":"N",  "L":"6"}],"7007":[{  "E":"N",  "L":"6"}, {  "E":"N",  "M":"6"}],"7008":[{  "E":"X",  "M":"3"}],"7009":[{  "E":"X",  "M":"10"}],"7010":[{  "E":"X",  "M":"2"}],"7020":[{  "E":"X",  "M":"20"}],"7021":[{  "E":"X",  "M":"20"}],"7022":[{  "E":"X",  "M":"20"}],"7023":[{  "E":"X",  "M":"30"}],"7030":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7031":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7032":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7033":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7034":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7035":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7036":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7037":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7038":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"7039":[{  "E":"N",  "L":"3"}, {  "E":"X",  "M":"27"}],"710":[{  "E":"X",  "M":"20"}],"711":[{  "E":"X",  "M":"20"}],"712":[{  "E":"X",  "M":"20"}],"713":[{  "E":"X",  "M":"20"}],"714":[{  "E":"X",  "M":"20"}],"7230":[{  "E":"X",  "M":"30"}],"7231":[{  "E":"X",  "M":"30"}],"7232":[{  "E":"X",  "M":"30"}],"7233":[{  "E":"X",  "M":"30"}],"7234":[{  "E":"X",  "M":"30"}],"7235":[{  "E":"X",  "M":"30"}],"7236":[{  "E":"X",  "M":"30"}],"7237":[{  "E":"X",  "M":"30"}],"7238":[{  "E":"X",  "M":"30"}],"7239":[{  "E":"X",  "M":"30"}],"8001":[{  "E":"N",  "L":"14"}],"8002":[{  "E":"X",  "M":"20"}],"8003":[{  "E":"N",  "L":"14"}, {  "E":"X",  "M":"16"}],"8004":[{  "E":"X",  "M":"30"}],"8005":[{  "E":"N",  "L":"6"}],"8006":[{  "E":"N",  "L":"18"}],"8007":[{  "E":"X",  "M":"24"}],"8008":[{  "E":"N",  "L":"8"}, {  "E":"N",  "M":"4"}],"8009":[{  "E":"X",  "M":"50"}],"8010":[{  "E":"X",  "M":"30"}],"8011":[{  "E":"N",  "M":"12"}],"8012":[{  "E":"X",  "M":"20"}],"8013":[{  "E":"X",  "M":"30"}],"8017":[{  "E":"N",  "L":"18"}],"8018":[{  "E":"N",  "L":"18"}],"8019":[{  "E":"N",  "M":"10"}],"8020":[{  "E":"X",  "M":"25"}],"8026":[{  "E":"N",  "L":"18"}],"8110":[{  "E":"X",  "M":"70"}],"8111":[{  "E":"N",  "L":"4"}],"8112":[{  "E":"X",  "M":"70"}],"8200":[{  "E":"X",  "M":"70"}],"90":[{  "E":"X",  "M":"30"}],"91":[{  "E":"X",  "M":"90"}],"92":[{  "E":"X",  "M":"90"}],"93":[{  "E":"X",  "M":"90"}],"94":[{  "E":"X",  "M":"90"}],"95":[{  "E":"X",  "M":"90"}],"96":[{  "E":"X",  "M":"90"}],"97":[{  "E":"X",  "M":"90"}],"98":[{  "E":"X",  "M":"90"}],"99":[{  "E":"X",  "M":"90"}]     };      

    // tableOpt contains optimisations for pre-defined sequences of GS1 Application Identifiers
    // we'll initially use 0A-0F through 9A-9F to keep Ah - Eh unallocated and reserve Fh for support for non-GS1 keys from the URI query string
    var tableOpt = {"0A":["01", "22"],"0B":["01", "10"],"0C":["01", "21"],"0D":["01", "17"],"0E":["01", "7003"],"0F":["01", "30"],"1A":["01", "10", "21", "17"],"1B":["01", "15"],"1C":["01", "11"],"1D":["01", "16"],"1E":["01", "91"],"1F":["01", "10", "15"],"2A":["01", "3100"],"2B":["01", "3101"],"2C":["01", "3102"],"2D":["01", "3103"],"2E":["01", "3104"],"2F":["01", "3105"],"3A":["01", "3200"],"3B":["01", "3201"],"3C":["01", "3202"],"3D":["01", "3203"],"3E":["01", "3204"],"3F":["01", "3205"],"9A":["8010", "8011"],"9B":["8017", "8019"],"9C":["8018", "8019"],"9D":["414", "254"],"A0":["01", "3920"],"A1":["01", "3921"],"A2":["01", "3922"],"A3":["01", "3923"],"A4":["01", "3924"],"A5":["01", "3925"],"A6":["01", "3926"],"A7":["01", "3927"],"A8":["01", "3928"],"A9":["01", "3929"],"C0":["255", "3900"],"C1":["255", "3901"],"C2":["255", "3902"],"C3":["255", "3903"],"C4":["255", "3904"],"C5":["255", "3905"],"C6":["255", "3906"],"C7":["255", "3907"],"C8":["255", "3908"],"C9":["255", "3909"],"CA":["255", "3940"],"CB":["255", "3941"],"CC":["255", "3942"],"CD":["255", "3943"]      }; 
	// safeBase64Alphabet is a modified URI-safe Base64 alphabet used in the compression methods for converting the binary string to/from an alphanumeric representation that contains no characters that are restricted in URIs
    var safeBase64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
    var hexAlphabet = "0123456789ABCDEF";
    var regexAllNum = new RegExp("^[0-9]+$");
    var regexHexLower = new RegExp("^[0-9a-f]+$");
    var regexHexUpper = new RegExp("^[0-9A-F]+$");
    var regexSafe64 = new RegExp("^[A-Za-z0-9_-]+$");
    var tableOptReverse = {};
    var tableOptKeys = Object.keys(tableOpt);

    for (var i in tableOptKeys) {
      tableOptReverse[JSON.stringify(tableOpt[tableOptKeys[i]].sort())] = tableOptKeys[i];
    }

    var aiRegex = {};
    var aiShortCode = {};
    var aiQualifiers = {};
    var aiCheckDigitPosition = {};

    for (var a in aitable) {
      if (aitable[a] !== undefined) {
        aiRegex[aitable[a].ai] = new RegExp("^" + aitable[a].regex + "$");

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
      return function (ai) {
        return ai.title.indexOf(keyword) > -1;
      };
    }

    function getMatchesAI(num) {
      return function (el) {
        return el.ai == num;
      };
    }

    function byLength(length) {
      return function (element) {
        return element.ai.length == length;
      };
    }

    function getAIs(list) {
      var rv = [];

      for (var i in list) {
        rv.push(list[i].ai);
      }

      return rv;
    }

    var identifiers = aitable.filter(getIdentifiers);
    var qualifiers = aitable.filter(getQualifiers);
    var dataAttributes = aitable.filter(getDataAttributes);
    var fixedLength = aitable.filter(getFixedLength);
    var variableLength = aitable.filter(getVariableLength);
    var identifierMap = {};

    for (var i in identifiers) {
      identifierMap[identifiers[i].ai] = identifiers[i];
    }

    var qualifierMap = {};

    for (var q in qualifiers) {
      if (qualifiers[q] !== undefined) {
        qualifierMap[qualifiers[q].ai] = qualifiers[q];
      }
    }

    var attributeMap = {};

    for (var a in dataAttributes) {
      if (dataAttributes[a] !== undefined) {
        attributeMap[dataAttributes[a].ai] = dataAttributes[a];
      }
    }

    var fixedLengthMap = {};

    for (var f in fixedLength) {
      if (fixedLength[f] !== undefined) {
        fixedLengthMap[fixedLength[f].ai] = fixedLength[f];
      }
    }

    var variableLengthMap = {};

    for (var v in variableLength) {
      if (variableLength[v] !== undefined) {
        variableLengthMap[variableLength[v].ai] = variableLength[v];
      }
    }

    var aiMaps = {};
    aiMaps.identifiers = Object.keys(identifierMap);
    aiMaps.qualifiers = Object.keys(qualifierMap);
    aiMaps.dataAttributes = Object.keys(attributeMap);
    aiMaps.fixedLength = Object.keys(fixedLengthMap);
    aiMaps.variableLength = Object.keys(variableLengthMap); // TODO - not yet making checks on invalid and mandatory associations of GS1 Application Identifiers
    // from GS1 Gen Specs Figure 4.14.1-1. Invalid pairs of element strings
    // this table is symmetrical

    var invalidAssociations = [{
      "rule": "All occurrences of GTIN SHALL have one value.  It is for example not allowed to include GTINs of other packaging levels.",
      "condition1": "01",
      "condition2": ["01"]
    }, {
      "rule": "GTIN of contained trade items is intended to list the trade items contained in a logistic unit, and SHALL NOT be used to identify the contents of a trade item",
      "condition1": "02",
      "condition2": ["01"]
    }, {
      "rule": "The count of units contained SHALL only be used with GTIN of contained trade items.",
      "condition1": "37",
      "condition2": ["01"]
    }, {
      "rule": "A trade item SHALL NOT be identified as a coupon.",
      "condition1": "255",
      "condition2": ["01"]
    }, {
      "rule": "Only one ship to postal code SHALL be applied on the same physical entity",
      "condition1": "420",
      "condition2": ["421"]
    }, {
      "rule": "Country of origin, initial processing, processing, or disassembly SHALL NOT be used in combination with country of full porcessing, since this would lead to ambiguous data.",
      "condition1": "426",
      "condition2": ["422", "423", "424", "425"]
    }, {
      "rule": "The element strings coupon value, percentage discount of a coupon and loyalty points of a coupon SHALL NOT be applied in combination.",
      "condition1": "390\d",
      "condition2": ["394\d", "8111"]
    }, {
      "rule": "Only one amount patable element string SHALL be applied on a payment slip.",
      "condition1": "391\d",
      "condition2": ["390\d"]
    }, {
      "rule": "Only one amount payable element string SHALL be applied on a variable measure trade item.",
      "condition1": "392\d",
      "condition2": ["393\d"]
    }, {
      "rule": "The element strings percentage discount of a coupon and the loyalty points of a coupon SHALL NOT be applied in combination.",
      "condition1": "394\d",
      "condition2": ["8111"]
    }, {
      "rule": "The GTIN SHALL NOT be used in combination with the identification of an individual trade item piece.  The GTIN of the trade item to which the individual trade item piece belongs is contained in the element string",
      "condition1": "8006",
      "condition2": ["01"]
    }, {
      "rule": "Only one Global Service Relation Number (recipient of provider) SHALL be applied at one time for identification of an individual in a given service relationship",
      "condition1": "8018",
      "condition2": ["8017"]
    }]; // need to also have mandatory association table and forbidden association table from GS1 Gen Specs
    // from Figure 4.14.2-1. Mandatory association of element strings
    // this table is not symmetrical - it's one-way, given condition, require OR, AND, XOR to be satisfied where specified

    var mandatoryAssociations = [{
      "designation": "GTIN of a variable measure trade item scanned at POS",
      "rule": "The GTIN of a variable measure trade item scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure ; Note: Master data will be needed to determine whether the GTIN represents a variable measure trade item scanned at POS. Also see the note below this table.",
      "condition": ["01"],
      "conditionN1": "0",
      "OR": ["30", "3\d{3}"]
    }, {
      "designation": "GTIN of a variable measure trade item not scanned at POS",
      "rule": "The GTIN of a variable measure trade item not scanned at POS SHALL occur in combination with: * variable count of items; or * a trade measure; or * the dimensions of a roll product. Note: The first position of the GTIN is '9' for such trade items. Also see the note below this table.",
      "condition": ["01", "02"],
      "conditionN1": "9",
      "OR": ["30", "3\d{3}", "8001"]
    }, {
      "designation": "GTIN of a custom trade item.",
      "rule": "The GTIN of a custom trade item SHALL be used in combination with the Made-to-Order variation number. Note: The first position of the GTIN is '9' for such trade items.",
      "condition": ["01"],
      "conditionN1": "9",
      "EXACTLY": ["242"]
    }, {
      "designation": "GTIN of contained trade items",
      "rule": "The GTIN of contained trade items SHALL occur in combination with an SSCC and the count of the trade items.",
      "condition": ["02"],
      "AND": ["00", "37"]
    }, {
      "designation": "Batch/lot number",
      "rule": "Batch/lot number SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.",
      "condition": ["10"],
      "XOR": ["01", "02", "8006"]
    }, {
      "designation": "Production date, packaging date, best before date, sell by date, expiration date (of a trade item)",
      "rule": "These dates SHALL occur in combination with: * a GTIN; or * a GTIN of contained trade items; or * the identification of an individual trade item piece.",
      "condition": ["11", "13", "15", "16", "17"],
      "XOR": ["01", "02", "8006"]
    }, {
      "designation": "Due date",
      "rule": "The due date SHALL occur in combination with the payment slip reference number and the GLN of the invoicing party",
      "condition": ["12"],
      "AND": ["8020", "415"]
    }, {
      "designation": "Expiration date (of a coupon)",
      "rule": "The expiration date of a coupon SHALL occur in combination with the GCN.",
      "condition": ["17"],
      "EXACTLY": ["255"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["20"],
      "XOR": ["01", "02", "8006"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["21"],
      "XOR": ["01", "8006"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["22"],
      "EXACTLY": ["01"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["240"],
      "XOR": ["01", "02", "8006"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["241"],
      "XOR": ["01", "02", "8006"]
    }, // *** 242 rule has N1=9 condition on 01,02,8006
    {
      "designation": "",
      "rule": "",
      "condition": ["243"],
      "EXACTLY": ["01"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["250"],
      "AND": ["21"],
      "XOR": ["01", "8006"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["251"],
      "XOR": ["01", "8006"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["254"],
      "EXACTLY": ["414"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["30"],
      "XOR": ["01", "02"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["3\d{3}"],
      "XOR": ["01", "02"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["3\d{3}"],
      "OR": ["00", "01"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["337\d"],
      "EXACTLY": ["01"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["37"],
      "EXACTLY": ["02"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["390\d"],
      "AND": ["8020", "415"]
    }, {
      "designation": "",
      "rule": "",
      "condition": ["390\d"],
      "EXACTLY": ["255"]
    }];
    var shortCodeToNumeric = {};

    for (var key in aiShortCode) {
      shortCodeToNumeric[aiShortCode[key]] = key;
    } // exposed as public variables that can be accessed by methods


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
    this.AIsByLength = [];

    for (var i = 2; i <= 4; i++) {
      this.AIsByLength[i] = getAIs(aitable.filter(byLength(i)));
    }

    this.groupSeparator = String.fromCharCode(29);
    this.regexAllNum = regexAllNum;
    this.regexHexLower = regexHexLower;
    this.regexHexUpper = regexHexUpper;
    this.regexSafe64 = regexSafe64;
  }

  _createClass(GS1DigitalLinkToolkit, [{
    key: "numberOfLengthBits",
    value: function numberOfLengthBits(maxLength) {
      return Math.ceil(Math.log(maxLength) / Math.log(2) + 0.01);
    }
  }, {
    key: "numberOfValueBits",
    value: function numberOfValueBits(valueLength) {
      return Math.ceil(valueLength * Math.log(10) / Math.log(2) + 0.01);
    } // calculate the expected GS1 Check Digit for a given AI
    // e.g. calculateCheckDigit('01','01234567890128');

  }, {
    key: "calculateCheckDigit",
    value: function calculateCheckDigit(ai, gs1IDValue) {
      var counter = 0;
      var reversed = "";
      var total = 0;
      var l;

      if (this.aiCheckDigitPosition[ai] == "L") {
        l = gs1IDValue.length;
      } else {
        l = parseInt(this.aiCheckDigitPosition[ai]);
      }

      var multiplier;

      for (var i = l - 2; i >= 0; i--) {
        var d = gs1IDValue.substring(i, i + 1);

        if (counter % 2 == 0) {
          multiplier = 3;
        } else {
          multiplier = 1;
        }

        total += d * multiplier;
        counter++;
      }

      var expectedCheckDigit = (10 - total % 10) % 10;
      return expectedCheckDigit;
    } // returns true if the GS1 Check Digit is valid (or not applicable)
    // throws an error if an invalid check digit is present
    // e.g. verifyCheckDigit('01','01234567890128');

  }, {
    key: "verifyCheckDigit",
    value: function verifyCheckDigit(ai, gs1IDValue) {
      var expectedCheckDigit;
      var rv = true;
      var checkDigitPosition = this.aiCheckDigitPosition[ai];

      if (checkDigitPosition !== undefined) {
        expectedCheckDigit = this.calculateCheckDigit(ai, gs1IDValue);

        if (checkDigitPosition == "L") {
          checkDigitPosition = gs1IDValue.length;
        } else {
          checkDigitPosition = parseInt(checkDigitPosition);
        }

        var actualCheckDigit = parseInt(gs1IDValue.charAt(checkDigitPosition - 1));

        if (actualCheckDigit !== expectedCheckDigit) {
          rv = false;
          throw new Error("INVALID CHECK DIGIT:  An invalid check digit was found for the primary identification key (" + ai + ")" + gs1IDValue + " ; the correct check digit should be " + expectedCheckDigit + " at position " + checkDigitPosition);
        }
      }

      return rv;
    } // tests the syntax of a value against the regular expression (expected format)
    // throws an error when invalid syntax is detected
    // e.g. verifySyntax('01','01234567890128');

  }, {
    key: "verifySyntax",
    value: function verifySyntax(ai, value) {
      if (ai !== null && this.regexAllNum.test(ai)) {
        if (!this.aiRegex[ai].test(value)) {
          throw "SYNTAX ERROR: invalid syntax for value of (" + ai + ")" + value;
        }
      }
    } // method to percent-encode all reserved characters mentioned in the GS1 Digital Link standard

  }, {
    key: "percentEncode",
    value: function percentEncode(input) {
      var charsToEscape = "#/%&+,!()*':;<=>?";
      var escaped = [];

      for (var i = 0; i < input.length; i++) {
        var testChar = input.substr(i, 1);

        if (charsToEscape.indexOf(testChar) > -1) {
          escaped.push("%" + testChar.charCodeAt(0).toString(16).toUpperCase());
        } else {
          escaped.push(testChar);
        }
      }

      return escaped.join("");
    } // method to percent-decode all percent-encoded characters

  }, {
    key: "percentDecode",
    value: function percentDecode(input) {
      return decodeURIComponent(input);
    }
  }, {
    key: "padToLength",
    value: function padToLength(input, requiredLength) {
      if (input.length < requiredLength) {
        input = "0".repeat(requiredLength - input.length) + input;
      }

      return input;
    }
  }, {
    key: "bin2base64",
    value: function bin2base64(binstr) {
      var rv = "";

      if (binstr.length % 6 > 0) {
        var numberRightPadZeros = 6 - binstr.length % 6;
        binstr += "0".repeat(numberRightPadZeros);
      }

      var numChar = binstr.length / 6;

      for (var i = 0; i < numChar; i++) {
        var binFrag = binstr.substr(6 * i, 6);
        var base64char = this.safeBase64Alphabet.substr(parseInt(binFrag, 2), 1);
        rv += base64char;
      }

      return rv;
    }
  }, {
    key: "base642bin",
    value: function base642bin(base64str) {
      var rv = "";

      for (var i = 0; i < base64str.length; i++) {
        var dec = this.safeBase64Alphabet.indexOf(base64str.substr(i, 1));
        var bin = dec.toString(2);

        if (bin.length < 6) {
          bin = "0".repeat(6 - bin.length) + bin;
        }

        rv += bin;
      }

      return rv;
    }
  }, {
    key: "canonical",
    value: function canonical(obj) {
      var rv = {};
      var sortedKeys = Object.keys(obj).sort();

      for (var el in sortedKeys) {
        if (obj.hasOwnProperty(sortedKeys[el])) {
          rv[sortedKeys[el]] = obj[sortedKeys[el]];
        }
      }

      return rv;
    }
  }, {
    key: "binstrToHex",
    value: function binstrToHex(binstr) {
      return parseInt(binstr, 2).toString(16).toUpperCase();
    } // this method converts an associative array of GS1 Application Identifiers and their values into a GS1 Digital Link URI
    // set useShortText = true if you wish to use alphabetic mnemonic short names, e.g. /gtin/ instead of /01/
    // set uriStem to a value e.g. 'https://example.org' if you wish to use a specific domain name
    // setting uriStem to null, undefined or "" defaults to 'https://id.gs1.org' as the reference domain

  }, {
    key: "buildGS1digitalLink",
    value: function buildGS1digitalLink(gs1AIarray, useShortText, uriStem, nonGS1keyvaluePairs) {
      var identifiers = [];
      var qualifiers = [];
      var attributes = [];
      var fixedLengthValues = [];
      var variableLengthValues = [];
      var otherKeys = [];
      var valid = true;
      var path = "";
      var queryStringArray = [];
      var queryString = "";
      var webURI = "";
      var canonicalStem = "https://id.gs1.org";
      var rv = {}; // Need to remove unwanted trailing slash

      if (uriStem !== undefined && uriStem !== null && uriStem !== "" && uriStem.endsWith("/")) {
        uriStem = uriStem.substr(0, uriStem.length - 1) + path + queryString;
      }

      for (var a in gs1AIarray) {
        var other = true;

        if (this.aiMaps.identifiers.includes(a)) {
          identifiers.push(a);
          other = false;
        }

        if (this.aiMaps.qualifiers.includes(a)) {
          qualifiers.push(a);
          other = false;
        }

        if (this.aiMaps.dataAttributes.includes(a)) {
          attributes.push(a);
          other = false;
        }

        if (this.aiMaps.fixedLength.includes(a)) {
          fixedLengthValues.push(a);
          other = false;
        }

        if (this.aiMaps.variableLength.includes(a)) {
          variableLengthValues.push(a);
          other = false;
        }

        if (other) {
          otherKeys.push(a);
        }
      } // Start building Web URI path expression
      // need exactly one identifier key


      if (identifiers.length !== 1) {
        valid = false;
        throw new Error("The element string should contain exactly one primary identification key - it contained " + identifiers.length + " " + JSON.stringify(identifiers) + "; please check for a syntax error");
      } else {
        this.verifySyntax(identifiers[0], gs1AIarray[identifiers[0]]);
        this.verifyCheckDigit(identifiers[0], gs1AIarray[identifiers[0]]);

        if (useShortText) {
          // Using short text names
          if (this.aiShortCode[identifiers[0]] !== undefined) {
            path = "/" + this.aiShortCode[identifiers[0]] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
          } else {
            path = "/" + identifiers[0] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
          }
        } else {
          // Using numeric AIs
          path = "/" + identifiers[0] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
        } // append any data qualifiers in the expected order, as specified in this.aiQualifiers[identifiers[0]]


        if (this.aiQualifiers[identifiers[0]] !== undefined) {
          for (var j in this.aiQualifiers[identifiers[0]]) {
            var q = this.aiQualifiers[identifiers[0]][j];

            if (qualifiers.includes(q)) {
              if (useShortText) {
                // Using short text names
                if (this.aiShortCode[q] !== undefined) {
                  path += "/" + this.aiShortCode[q] + "/" + this.percentEncode(gs1AIarray[q]);
                } else {
                  path += "/" + q + "/" + this.percentEncode(gs1AIarray[q]);
                }
              } else {
                // Using numeric AIs
                path += "/" + q + "/" + this.percentEncode(gs1AIarray[q]);
              }
            }
          }
        } // if there are any data attributes, we need to add these to the query string


        if (attributes.length > 0) {
          for (var k in attributes) {
            var a = attributes[k];

            if (useShortText) {
              // Using short text names
              if (this.aiShortCode[a] !== undefined) {
                queryStringArray.push(this.aiShortCode[a] + "=" + this.percentEncode(gs1AIarray[a]));
              } else {
                queryStringArray.push(a + "=" + this.percentEncode(gs1AIarray[a]));
              }
            } else {
              // Using numeric AIs
              queryStringArray.push(a + "=" + this.percentEncode(gs1AIarray[a]));
            }
          }

          queryString = "?" + queryStringArray.join("&");
        }

        if (uriStem == null || uriStem == "") {
          // prepare a canonical Web URI
          webURI = canonicalStem + path + queryString;
        } else {
          webURI = uriStem + path + queryString;
        }

        if (otherKeys.length > 0) {
          var queryStringArray = [];

          for (var iok in otherKeys) {
            queryStringArray.push(otherKeys[iok] + "=" + gs1AIarray[otherKeys[iok]]);
          }

          if (queryString == "") {
            webURI += "?" + queryStringArray.join("&");
          } else {
            webURI += "&" + queryStringArray.join("&");
          }
        }

        if (nonGS1keyvaluePairs !== {} && Object.keys(nonGS1keyvaluePairs).length > 0) {
          var queryStringArray = [];
          var keys = Object.keys(nonGS1keyvaluePairs);

          for (var iok in keys) {
            var key = keys[iok];
            queryStringArray.push(key + "=" + nonGS1keyvaluePairs[key]);
          }

          if (queryString == "") {
            webURI += "?" + queryStringArray.join("&");
          } else {
            webURI += "&" + queryStringArray.join("&");
          }
        }
      }

      return webURI;
    }
  }, {
    key: "analyseURI",
    value: function analyseURI(gs1DigitalLinkURI, extended) {
      var rv = {};
      rv.fragment = "";
      var fi = gs1DigitalLinkURI.indexOf("#");
      var beforeFragment = gs1DigitalLinkURI;

      if (fi > -1) {
        rv.fragment = gs1DigitalLinkURI.substr(1 + fi);
        beforeFragment = gs1DigitalLinkURI.substr(0, fi);
      }

      rv.queryString = "";
      var beforeQueryString = beforeFragment;
      var qs = beforeFragment.indexOf("?");

      if (qs > -1) {
        rv.queryString = beforeFragment.substr(1 + qs);
        beforeQueryString = beforeFragment.substr(0, qs);
      } // disregard any trailing forward slash


      var bql = beforeQueryString.length;

      if (beforeQueryString.substr(bql - 1, 1) == "/") {
        beforeQueryString = beforeQueryString.substr(0, bql - 1);
      }

      var cursor = 0;

      if (beforeQueryString.indexOf("http://") == 0) {
        cursor = 7;
      }

      if (beforeQueryString.indexOf("https://") == 0) {
        cursor = 8;
      }

      var protocol = beforeQueryString.substr(0, cursor);
      var afterProtocol = beforeQueryString.substr(cursor);
      var firstSlashOfAllPath = afterProtocol.indexOf("/");
      var pathInfo = afterProtocol.substr(1 + firstSlashOfAllPath);
      rv.uriPathInfo = "/" + pathInfo;
      var domain = afterProtocol.substr(0, firstSlashOfAllPath);
      var pathComponents = pathInfo.split("/"); // iterate through pathComponents to find the path component corresponding to a primary GS1 ID key

      var relevantPathComponents = [];
      var uriStemPathComponents = [];
      var pcr = pathComponents.reverse();
      var pcl = pathComponents.length;
      var pci = pcl;
      var searching = true;
      var numericPrimaryIdentifier = "";

      for (var i in pcr) {
        var numkey = "";
        var pcc = pcr[i];

        if (this.regexAllNum.test(pcc)) {
          numkey = pcc;
        } else {
          if (this.shortCodeToNumeric.hasOwnProperty(pcc)) {
            numkey = this.shortCodeToNumeric[pcc];
          }
        }

        if (numkey !== "" && searching) {
          if (this.aiMaps.identifiers.indexOf(numkey) > -1) {
            searching = false;
            pci = pcl - i;
            numericPrimaryIdentifier = numkey;
            relevantPathComponents = pcr.slice(0, parseInt(i) + 1).reverse();
            uriStemPathComponents = pcr.slice(parseInt(i) + 1).reverse();
          }
        }
      }

      if (relevantPathComponents.length > 0) {
        rv.pathComponents = "/" + relevantPathComponents.join("/");
      } else {
        rv.pathComponents = "";
      }

      if (uriStemPathComponents.length > 0) {
        rv.uriStem = protocol + domain + "/" + uriStemPathComponents.join("/");
      } else {
        rv.uriStem = protocol + domain;
      } // if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter


      rv.queryString = rv.queryString.replace(new RegExp(";", 'g'), "&"); // process URI path information

      var pathCandidates = {};
      var pathElements = pathInfo.split("/");
      var l = pathElements.length;
      var pathElementIndex = l - 2;

      while (pathElementIndex >= 0) {
        pathCandidates[pathElements[pathElementIndex]] = this.percentDecode(pathElements[1 + pathElementIndex]);
        pathElementIndex -= 2;
      }

      var queryStringCandidates = {};

      if (rv.queryString !== "") {
        var pairs = rv.queryString.split("&");

        for (var i = 0; i < pairs.length; i++) {
          var p = pairs[i].split("=");

          if (p[0] !== null && p[1] !== null) {
            if (this.shortCodeToNumeric.hasOwnProperty(p[0])) {
              queryStringCandidates[this.shortCodeToNumeric[p[0]]] = this.percentDecode(p[1]);
              delete queryStringCandidates[p[0]];
            } else {
              queryStringCandidates[p[0]] = this.percentDecode(p[1]);
            }
          }
        }
      }

      rv.pathCandidates = pathCandidates;
      rv.queryStringCandidates = queryStringCandidates;
      rv.detected = "";
      rv.uncompressedPath = "";
      rv.compressedPath = "";
      rv.structuredOutput = "";

      if (relevantPathComponents.length > 0 && relevantPathComponents.length % 2 == 0) {
        if (this.aiRegex[numericPrimaryIdentifier].test(relevantPathComponents[1])) {
          rv.detected = "uncompressed GS1 Digital Link";
          rv.uncompressedPath = "/" + relevantPathComponents.join("/");
        }
      }

      if (relevantPathComponents.length == 3 && this.regexSafe64.test(relevantPathComponents[2])) {
        if (this.aiRegex[numericPrimaryIdentifier].test(relevantPathComponents[1])) {
          rv.detected = "partially compressed GS1 Digital Link";
          rv.uncompressedPath = "/" + relevantPathComponents.slice(0, 2).join("/");
          rv.compressedPath = relevantPathComponents[2];
        }
      }

      if (rv.detected == "" && this.regexSafe64.test(pcr[0]) && protocol !== "") {
        rv.detected = "fully compressed GS1 Digital Link";
        rv.uncompressedPath = "";
        rv.compressedPath = pcr[0];
      }

      rv.uriStem2 = gs1DigitalLinkURI.substr(0, gs1DigitalLinkURI.indexOf(rv.compressedPath) - 1);
      return rv;
    } // this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
    // it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)

  }, {
    key: "extractFromCompressedGS1digitalLink",
    value: function extractFromCompressedGS1digitalLink(gs1DigitalLinkURI) {
      // initialise internal variables
      var objGS1 = {};
      var objOther = {};
      var rv = {}; // set cursor to 0 = start reading from the left-most part of the gs1 Digital Link URI provided as input

      var s = this.analyseURI(gs1DigitalLinkURI, false);
      rv.uriStem = s.uriStem2;
      var queryString = s.queryString;
      var uriPathInfo = s.uriPathInfo;
      var candidates = s.pathCandidates;
      var queryStringCandidates = s.queryStringCandidates;
      var nonGS1queryStringCandidates = {};

      if (queryString !== "") {
        // if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
        queryString = queryString.replace(new RegExp(";", 'g'), "&");
        var firstFragment = queryString.indexOf("#");

        if (firstFragment > -1) {
          queryString = queryString.substring(0, firstFragment);
        }

        var pairs = queryString.split("&");

        for (var i = 0; i < pairs.length; i++) {
          var p = pairs[i].split("="); // if the key is not numeric AND is not a shortcode such as exp or expdt, then add to the nonGS1keyvalueePairs

          if (p[0] !== null && p[1] !== null && !this.regexAllNum.test(p[0]) && !this.shortCodeToNumeric.hasOwnProperty(p[0])) {
            nonGS1queryStringCandidates[p[0]] = this.percentDecode(p[1]);
          }
        }
      } // TODO for a partially compressed http://example.org/AQnYUc1gmiERBhQ0ytiyZuAGOLc1TQ?expdt=1903061658&k1=v1
      // expdt:1903061658 is appearing in queryStringCandidates
      // TODO also for fully compressed http://example.org/AQnYUc1gmiERBhQ0ytiyZuAGOLc1TXhXsaXbQKHFuaprwUmrBX6g
      // expdt:1903061658 is appearing in queryStringCandidates
      // TODO correct splitURIintoComponents to consider shortCode appearing within query string key=value pairs
      // remove initial forward slash


      uriPathInfo = uriPathInfo.substr(1);

      if (this.regexSafe64.test(uriPathInfo)) {
        var binstr = this.base642bin(uriPathInfo);
        objGS1 = this.decompressBinaryToGS1AIarray(binstr);
      } else {
        // handle situation where the primary identification key is not compressed
        var index1 = uriPathInfo.indexOf("/");
        var index2 = uriPathInfo.lastIndexOf("/");
        var gs1primaryKey = uriPathInfo.substr(0, index1);
        var base64segment = uriPathInfo.substr(1 + index2);
        var gs1primaryKeyValue = uriPathInfo.substr(1 + index1, index2 - index1 - 1);
        objGS1 = this.decompressBinaryToGS1AIarray(this.base642bin(base64segment));

        if (this.regexAllNum.test(gs1primaryKey)) {
          objGS1[gs1primaryKey] = gs1primaryKeyValue;
        } else {
          if (this.shortCodeToNumeric.hasOwnProperty(gs1primaryKey)) {
            objGS1[this.shortCodeToNumeric[gs1primaryKey]] = gs1primaryKeyValue;
          }
        }
      } // insert into associative array return value any key=value pairs from the URI query string that were not compressed


      for (var k in objGS1) {
        // need to change this to check whether key is exp / expdt or numeric GS1 key - see related method ~ refactor lines 951-967

        /*			if ((this.regexAllNum.test(k)) || (this.shortCodeToNumeric.hasOwnProperty(k))) {
        				objGS1[this.shortCodeToNumeric[k]]=objGS1[k];
        			} else {
        				objOther[k]=objGS1[k];
        			}
        */
        // TODO correct decompressBinaryToGS1AIarray so that expdt and 7003 do not both appear in the returned arrayc
        // if the key is not all-numeric and is not exp or expdt, then move it into objOther and delete from objGS1
        if (!this.regexAllNum.test(k) && !this.shortCodeToNumeric.hasOwnProperty(k)) {
          nonGS1queryStringCandidates[k] = objGS1[k];
          delete objGS1[k];
        }
      }

      rv.GS1 = objGS1;
      rv.other = nonGS1queryStringCandidates;
      return rv;
    }
  }, {
    key: "handleDecodings",
    value: function handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars) {
      // starting with a specified encoding enc (in range 0-4), binary string binstr, binary string cursor position, key, number of characters to extract and associative array gs1AIarray to extend,
      // this method determines how many bits to extract (depending on the encoding), extracts those bits, advances the cursor and converts the extracted bits into a string value in the appropriate encoding, which is then inserted into the specified associative array	
      // the updated associative array and updated binary string cursor position are returned.
      var rv = {};

      switch (enc) {
        case 0:
          // digits only at 3.32 bits per character
          var numBitsForValue = this.numberOfValueBits(numChars);
          var rbv = binstr.substr(cursor, numBitsForValue);
          cursor += numBitsForValue;
          var s = parseInt(rbv, 2).toString();
          gs1AIarray[key] = s;
          break;

        case 1:
          // lower case hexadecimal characters
          rv = buildString(numChars, this.hexAlphabet, cursor, 4, binstr);
          cursor = rv.cursor;
          gs1AIarray[key] = rv.s.toLowerCase();
          break;

        case 2:
          // upper case hexadecimal characters
          rv = buildString(numChars, this.hexAlphabet, cursor, 4, binstr);
          cursor = rv.cursor;
          gs1AIarray[key] = rv.s.toUpperCase();
          break;

        case 3:
          // URI safe base64 alphabet at 6 bits per character
          rv = buildString(numChars, this.safeBase64Alphabet, cursor, 6, binstr);
          cursor = rv.cursor;
          gs1AIarray[key] = rv.s;
          break;

        case 4:
          // ASCII at 7 bits per character
          rv = buildString(numChars, null, cursor, 7, binstr);
          cursor = rv.cursor;
          gs1AIarray[key] = rv.s;
          break;
      }

      rv.gs1AIarray = gs1AIarray;
      rv.cursor = cursor;
      return rv;

      function buildString(numChars, alphabet, cursor, multiplier, binstr) {
        // this is almost the inverse function to buildBinaryValue
        var rv = {};
        var s = "";
        var numBitsForValue = multiplier * numChars;
        var rbv = binstr.substr(cursor, numBitsForValue);
        cursor += numBitsForValue;

        for (var i = 0; i < numChars; i++) {
          var index = parseInt(rbv.substr(multiplier * i, multiplier), 2); // assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet

          if (multiplier == 7) {
            s += String.fromCharCode(parseInt(index));
          } else {
            s += alphabet.substr(index, 1);
          }
        }

        rv.cursor = cursor;
        rv.s = s;
        return rv;
      }
    }
  }, {
    key: "decompressBinaryToGS1AIarray",
    value: function decompressBinaryToGS1AIarray(binstr) {
      var totallength = binstr.length; // start at left-most bit position

      var cursor = 0; // create empty hashtable

      var gs1AIarray = {}; // read h1,h2 and convert binary to hex

      while (totallength - cursor > 8) {
        var h1 = this.binstrToHex(binstr.substr(cursor, 4));
        var h2 = this.binstrToHex(binstr.substr(4 + cursor, 4));
        var h3 = "";
        var h4 = "";
        var ai = "";
        var h1h2 = "" + h1 + h2;
        cursor += 8;
        var d1 = parseInt(h1, 16);
        var d2 = parseInt(h2, 16); // check if h1h2 is within the range 00-99

        if (d1 >= 0 && d2 >= 0 && d1 <= 9 && d2 <= 9) {
          // check if h1h2 has entry in table P
          if (this.tableP.hasOwnProperty(h1h2)) {
            var l = this.tableP[h1h2];

            if (l == 2) {
              ai = h1h2;
            }

            if (l == 3 || l == 4) {
              h3 = this.binstrToHex(binstr.substr(cursor, 4));
              cursor += 4;
              var d3 = parseInt(h3, 16);

              if (d3 > 9) {
                throw new Error("GS1 Application Identifier keys should be all-numeric; " + h1h2 + h3 + " is not all-numeric");
              }

              ai = h1h2 + h3;
            }

            if (l == 4) {
              var h4 = this.binstrToHex(binstr.substr(cursor, 4));
              cursor += 4;
              ai = h1h2 + h3 + h4;
              var d4 = parseInt(h4, 16);

              if (d4 > 9) {
                throw new Error("GS1 Application Identifier keys should be all-numeric; " + h1h2 + h3 + h4 + " is not all-numeric");
              }
            }

            var tmp = this.decodeBinaryValue(ai, gs1AIarray, binstr, cursor);
            gs1AIarray = tmp.gs1AIarray;
            cursor = tmp.cursor;
          } else {
            throw new Error("Fail: Unsupported AI (reserved range) - no entry in tableP; h1h2=" + h1h2);
          }
        } else {
          // h1h2 is outside 00-99, using some hex characters
          if (this.tableOpt.hasOwnProperty(h1h2)) {
            // we found an optimisation for h1h2
            var seq = this.tableOpt[h1h2];

            for (var i in seq) {
              var ai = seq[i];
              var tmp = this.decodeBinaryValue(ai, gs1AIarray, binstr, cursor);
              gs1AIarray = tmp.gs1AIarray;
              cursor = tmp.cursor;
            }
          } else {
            if (h1 == "F") {
              // handle decompression of non-GS1 key=value pairs
              var bitsIncludingF = binstr.substr(cursor - 8, 11);
              var keyLength = parseInt(binstr.substr(cursor - 4, 7), 2);
              cursor += 3; // 3 extra bits beyond h2

              var keyBits = binstr.substr(cursor, 6 * keyLength);
              cursor += 6 * keyLength;
              var key = "";

              for (var i = 0; i < keyLength; i++) {
                var index = parseInt(keyBits.substr(6 * i, 6), 2); // assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet

                key += this.safeBase64Alphabet.substr(index, 1);
              }

              var encBits = binstr.substr(cursor, 3);
              cursor += 3;
              var enc = parseInt(encBits, 2);
              var numChars = parseInt(binstr.substr(cursor, 7), 2);
              cursor += 7;
              var rv = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);
              gs1AIarray = rv.gs1AIarray;
              cursor = rv.cursor;
            } else {
              throw new Error("No optimisation defined for hex code hh=" + h1h2);
            }
          }
        }
      }

      return gs1AIarray;
    }
  }, {
    key: "decodeBinaryValue",
    value: function decodeBinaryValue(key, gs1AIarray, binstr, cursor) {
      var rv = {};
      gs1AIarray[key] = "";

      if (this.tableF.hasOwnProperty(key)) {
        for (var j in this.tableF[key]) {
          var tx = this.tableF[key][j]; // handle fixed-length numeric component		

          if (tx.hasOwnProperty('L') && tx.E == "N") {
            // fixed-length, so no length indicator
            var b1 = this.numberOfValueBits(tx.L);
            var rbv = binstr.substr(cursor, b1);
            cursor += b1;
            var s = parseInt(rbv, 2).toString();
            s = this.padToLength(s, tx.L);
            gs1AIarray[key] += "" + s;
          } // handle variable-length numeric component		


          if (tx.hasOwnProperty('M') && tx.E == "N") {
            var v2 = this.numberOfLengthBits(tx.M);
            var lengthBits = binstr.substr(cursor, v2);
            cursor += v2;
            var numDigits = parseInt(lengthBits, 2);
            var numBitsForValue = this.numberOfValueBits(numDigits);
            var rbv = binstr.substr(cursor, numBitsForValue);
            cursor += numBitsForValue;
            var s = parseInt(rbv, 2).toString();

            if (numDigits == 0) {
              s = "";
            }

            gs1AIarray[key] += "" + s;
          } // handle fixed-length alphanumeric component		


          if (tx.hasOwnProperty('L') && tx.E == "X") {
            var encBits = binstr.substr(cursor, 3);
            cursor += 3;
            var enc = parseInt(encBits, 2);
            var numChars = tx.L;
            var rvd = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);
            gs1AIarray = rvd.gs1AIarray;
            cursor = rvd.cursor;
          } // handle variable-length alphanumeric component	


          if (tx.hasOwnProperty('M') && tx.E == "X") {
            var encBits = binstr.substr(cursor, 3);
            cursor += 3;
            var v3 = this.numberOfLengthBits(tx.M);
            var lengthBits = binstr.substr(cursor, v3);
            cursor += v3;
            var numChars = parseInt(lengthBits, 2);
            var enc = parseInt(encBits, 2);
            var rvd = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);
            gs1AIarray = rvd.gs1AIarray;
            cursor = rvd.cursor;
          }
        }
      }

      rv.gs1AIarray = gs1AIarray;
      rv.cursor = cursor;
      return rv;
    }
  }, {
    key: "decompressGS1DigitalLink",
    value: function decompressGS1DigitalLink(compressedDigitalLinkURI, useShortText) {
      var extracted = this.extractFromCompressedGS1digitalLink(compressedDigitalLinkURI);
      var gs1AIarray = extracted.GS1;
      var otherArray = extracted.other;
      var uriStem = extracted.uriStem;
      var uncompressedDL = this.buildGS1digitalLink(gs1AIarray, useShortText, uriStem, otherArray);
      return uncompressedDL;
    }
  }]);

  return GS1DigitalLinkToolkit;
}();

if (typeof module != "undefined") {
  module.exports = GS1DigitalLinkToolkit;
}
