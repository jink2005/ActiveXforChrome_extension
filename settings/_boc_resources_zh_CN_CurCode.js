//************************************/
//*******   \u5b9a\u4e49\u6240\u6709JS\u63d0\u793a\u8bed    *******/
//************************************/

/** CurCode\u8d27\u5e01\u5217\u8868 begin */
var CURCODE_CNY = "\u4eba\u6c11\u5e01\u5143";
var CURCODE_GBP = "\u82f1\u9551";
var CURCODE_HKD = "\u6e2f\u5e01";
var CURCODE_USD = "\u7f8e\u5143";
var CURCODE_CHF = "\u745e\u58eb\u6cd5\u90ce";
var CURCODE_DEM = "\u5fb7\u56fd\u9a6c\u514b";
var CURCODE_FRF = "\u6cd5\u56fd\u6cd5\u90ce";
var CURCODE_SGD = "\u65b0\u52a0\u5761\u5143";
var CURCODE_NLG = "\u8377\u5170\u76fe";
var CURCODE_SEK = "\u745e\u5178\u514b\u90ce";
var CURCODE_DKK = "\u4e39\u9ea6\u514b\u90ce";
var CURCODE_NOK = "\u632a\u5a01\u514b\u90ce";
var CURCODE_ATS = "\u5965\u5730\u5229\u5148\u4ee4";
var CURCODE_BEF = "\u6bd4\u5229\u65f6\u6cd5\u90ce";
var CURCODE_ITL = "\u610f\u5927\u5229\u91cc\u62c9";
var CURCODE_JPY = "\u65e5\u5143";
var CURCODE_CAD = "\u52a0\u62ff\u5927\u5143";
var CURCODE_AUD = "\u6fb3\u5927\u5229\u4e9a\u5143";
var CURCODE_EUR = "\u6b27\u5143";
var CURCODE_IDR = "\u5370\u5c3c\u76fe";
var CURCODE_MOP = "\u6fb3\u95e8\u5143";
var CURCODE_PHP = "\u83f2\u5f8b\u5bbe\u6bd4\u7d22";
var CURCODE_THB = "\u6cf0\u56fd\u94e2";
var CURCODE_NZD = "\u65b0\u897f\u5170\u5143";
var CURCODE_KRW = "\u97e9\u5143";
var CURCODE_XSF = "\u8bb0\u8d26\u745e\u58eb\u6cd5\u90ce";
//edit by zhangfeng
var CURCODE_VND = "\u8d8a\u5357\u76fe";
var CURCODE_IDR = "\u5370\u5c3c\u76fe";
//edit by liangd
var CURCODE_AED = "\u963f\u8054\u914b\u8fea\u62c9\u59c6";
var CURCODE_ARP = "\u963f\u6839\u5ef7\u6bd4\u7d22";
var CURCODE_BRL = "\u96f7\u4e9a\u5c14";
var CURCODE_EGP = "\u57c3\u53ca\u78c5";
var CURCODE_INR = "\u5370\u5ea6\u5362\u6bd4";
var CURCODE_JOD = "\u7ea6\u65e6\u7b2c\u7eb3\u5c14";
var CURCODE_MNT = "\u8499\u53e4\u56fe\u683c\u91cc\u514b";
var CURCODE_MYR = "\u9a6c\u6765\u897f\u4e9a\u6797\u5409\u7279";
var CURCODE_NGN = "\u5c3c\u65e5\u5229\u4e9a\u5948\u62c9";
var CURCODE_ROL = "\u7f57\u9a6c\u5c3c\u4e9a\u5217\u4f0a";
var CURCODE_TRL = "\u571f\u8033\u5176\u91cc\u62c9";
var CURCODE_UAH = "\u4e4c\u514b\u5170\u683c\u91cc\u592b\u7eb3";
var CURCODE_ZAR = "\u5357\u975e\u5170\u7279";
//edit by cuiyk

var CURCODE_RUR = "\u5362\u5e03";
var CURCODE_HUF = "\u798f\u6797";
var CURCODE_KZT = "\u54c8\u8428\u514b\u65af\u5766\u575a\u6208";
var CURCODE_ZMK = "\u8d5e\u6bd4\u4e9a\u514b\u74e6\u67e5";
var CURCODE_XPT = "\u767d\u91d1";
var CURCODE_BND = "\u6587\u83b1\u5e01";
var CURCODE_BWP = "\u535a\u8328\u74e6\u7eb3\u666e\u62c9";

//added by hhf.2009.9.10  modify by cuiyk   2009.11.10
var CURCODE_XAU="\u9ec4\u91d1(\u76ce\u53f8)";
var CURCODE_GLD="\u9ec4\u91d1(\u514b)";

/** CurCode\u8d27\u5e01\u5217\u8868 end   */


/** FormCheck\u8868\u5355\u68c0\u67e5 begin */
var COMMA_MSG = "\uff0c";
var ENTER_MSG = "\n";

var NOT_NULL = "\u4e0d\u80fd\u4e3a\u7a7a\uff0c\u8bf7\u4fee\u6539\uff01";
var ILLEGAL_REGEX = "\u4e0d\u7b26\u5408\u8f93\u5165\u683c\u5f0f\uff0c\u8bf7\u4fee\u6539\uff01";
var ILLEGAL_CHAR = "\u6570\u636e\u542b\u4e86\u975e\u6cd5\u5b57\u7b26\uff1a[]^$\\~@#%&<>{}:'\"\uff0c\u8bf7\u4fee\u6539\uff01";
var HAVE_CHINESE = "\u6570\u636e\u542b\u4e86\u4e2d\u6587\u6216\u5176\u4ed6\u975e\u6807\u51c6\u5b57\u7b26\uff0c\u8bf7\u4fee\u6539\uff01";
var NOT_ONLY_CHINESE = "\u6570\u636e\u542b\u4e86\u4e2d\u6587\u4ee5\u5916\u7684\u5176\u4ed6\u5b57\u7b26\uff0c\u8bf7\u4fee\u6539\uff01";
var NOT_NUMBER = "\u6570\u636e\u5305\u542b\u4e86\u963f\u62c9\u4f2f\u6570\u5b57\u4ee5\u5916\u7684\u5b57\u7b26\uff0c\u8bf7\u4fee\u6539\uff01";
var NOT_PHONE_NUMBER = "\u6570\u636e\u5305\u542b\u4e86\u7535\u8bdd\u53f7\u7801\u4ee5\u5916\u7684\u5176\u4ed6\u5b57\u7b26\uff0c\u8bf7\u4fee\u6539\uff01";

var LENGTH_MSG = "\u7684\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e";
var LENGTH_EQUAL_MSG = "\u7684\u957f\u5ea6\u5fc5\u987b\u4e3a";
var LENGTH_MSG1 = "\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u4e00\u4e2a\u6c49\u5b57\u5360\u75282\u4e2a\u5b57\u7b26\uff09";
var MODIFY_MSG = "\u8bf7\u4fee\u6539\uff01";

var LENGHT_PERIOD_MSG = "\u7684\u957f\u5ea6\u5fc5\u987b\u4e3a\uff1a";

var MINUS_MSG = "-";

var MONEY_MSG1 = "\u6570\u636e\u4e3a\u975e\u6cd5\u91d1\u989d\uff0c\u8bf7\u4fee\u6539\uff01";
var MONEY_MSG2 = "\u6570\u636e\u4e0d\u80fd\u4e3a\u8d1f\uff0c\u8bf7\u4fee\u6539\uff01";
var MONEY_MSG3 = "\u6570\u636e\u6574\u6570\u90e8\u5206\u8d85\u957f\uff0c\u8bf7\u4fee\u6539\uff01";
var MONEY_MSG4 = "\u6570\u636e\u8f85\u5e01\u90e8\u5206\u8d85\u957f\uff0c\u8bf7\u4fee\u6539\uff01";
var MONEY_MSG = "\u5e94\u5927\u4e8e";
var MONEY_MSG0 = "\u5e94\u5c0f\u4e8e\u7b49\u4e8e";

var EXCHANGERATE_MSG1 = "\u6570\u636e\u975e\u6cd5\uff0c\u8bf7\u4fee\u6539\uff01";
var EXCHANGERATE_MSG2 = "\u6570\u636e\u4e0d\u80fd\u4e3a\u8d1f\uff0c\u8bf7\u4fee\u6539\uff01";
var EXCHANGERATE_MSG3 = "\u6570\u636e\u6574\u6570\u90e8\u5206\u8d85\u957f\uff0c\u8bf7\u4fee\u6539\uff01";
var EXCHANGERATE_MSG4 = "\u6570\u636e\u8f85\u5e01\u90e8\u5206\u8d85\u957f\uff0c\u8bf7\u4fee\u6539\uff01";

var ILLEGAL_DATE = "\u6570\u636e\u4e3a\u975e\u6cd5\u65e5\u671f\uff0c\u8bf7\u4fee\u6539\uff01";
var DATE_LATER_MSG = "\u4e0d\u5e94\u65e9\u4e8e";
var DATE_NOTLATER_MSG = "\u4e0d\u80fd\u665a\u4e8e"

var ILLEGAL_DATE_PERIOD = "\u8f93\u5165\u65e5\u671f\u8303\u56f4\u8d85\u8fc7";
var ENTRIES = "\u4e2a";
var MONTH = "\u6708";
var DAY = "\u5929";
/** FormCheck\u8868\u5355\u68c0\u67e5 end   */

/** ListCheck\u8868\u5355\u68c0\u67e5 begin */
var ALL_AUTH = "\u6b64\u64cd\u4f5c\u5c06\u6e05\u9664\u60a8\u6240\u505a\u7684\u5176\u4ed6\u9009\u62e9\uff0c\u662f\u5426\u7ee7\u7eed\uff1f";
var CHOICE_MSG = "\u8bf7\u60a8\u81f3\u5c11\u9009\u62e9\u67d0\u4e00";

var ALL_COUNT = "\u672c\u6b21\u5171\u5904\u7406\u4e1a\u52a1\uff1a";
var ALL_MONEY = "\u7b14\uff0c\u603b\u91d1\u989d\uff1a";

var SPACE_MSG = " ";
var DOT_MSG = ".";
var EXCMARK_MSG = "\uff01";
/** ListCheck\u8868\u5355\u68c0\u67e5 end   */

/** \u65e5\u5386\u4f7f\u7528 begin */
var calLanguage="zhCN";
var calMonthArr = new Array("1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708");
var calDayArr = new Array("\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d");
var calYear = "\u5e74";
var calMonth = "\u6708";

/** \u65e5\u5386\u4f7f\u7528 end */

/** \u6536\u6b3e\u4eba\u5f00\u6237\u884c\u4e0b\u62c9\u83dc\u5355\u4f7f\u7528 begin */
var PLEASE_CHOICE="\u8bf7\u9009\u62e9";
/** \u6536\u6b3e\u4eba\u5f00\u6237\u884c\u4e0b\u62c9\u83dc\u5355\u4f7f\u7528 end */

//author liuy
var START_DATE="\u8d77\u59cb\u65e5\u671f";
var END_DATE="\u7ed3\u675f\u65e5\u671f";

/*******************************/
/***  \u81ea\u52a9\u6ce8\u518c\u4f7f\u7528 ***/
/*******************************/

var USER_NAME_IS_EMPTY = "\u8bf7\u8f93\u5165\u7528\u6237\u540d\uff01";
var USER_NAME_IS_INCORRECT = "\u7528\u6237\u540d\u4e0d\u6b63\u786e\uff0c\u7528\u6237\u540d\u75316-20\u4f4d\u957f\u5ea6\u7684\u6570\u5b57\u548c\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\uff0c\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff0c\u4e0d\u5141\u8bb8\u6709\u7a7a\u683c\uff0c\u81f3\u5c11\u5305\u542b1\u4f4d\u82f1\u6587\u5b57\u6bcd\uff01";
var PASSWORD_IS_EMPTY = "\u8bf7\u8f93\u5165\u5bc6\u7801\uff01";
var PASSWORD_IS_INCORRECT = "\u5bc6\u7801\u4e0d\u6b63\u786e\uff0c\u5bc6\u7801\u75318-20\u4f4d\u957f\u5ea6\u7684\u6570\u5b57\u548c\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\uff0c\u533a\u5206\u5927\u5c0f\u5199\uff0c\u81f3\u5c11\u5305\u542b1\u4f4d\u82f1\u6587\u5b57\u6bcd\u548c1\u4f4d\u6570\u5b57\uff01";
var NEW_PASSWORD_IS_EMPTY = "\u8bf7\u8f93\u5165\u65b0\u5bc6\u7801\uff01";
var NEW_PASSWORD_IS_INCORRECT = "\u65b0\u5bc6\u7801\u4e0d\u6b63\u786e\uff0c\u5bc6\u7801\u75318-20\u4f4d\u957f\u5ea6\u7684\u6570\u5b57\u548c\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210\uff0c\u533a\u5206\u5927\u5c0f\u5199\uff0c\u81f3\u5c11\u5305\u542b1\u4f4d\u82f1\u6587\u5b57\u6bcd\u548c1\u4f4d\u6570\u5b57\uff01";
var CONFIRM_PASSWORD_IS_EMPTY = "\u8bf7\u8f93\u5165\u786e\u8ba4\u5bc6\u7801\uff01";
var CONFIRM_PASSWORD_IS_INCORRECT = "\u786e\u8ba4\u5bc6\u7801\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d\uff01";
var OLD_PASSWORD_IS_EMPTY = "\u8bf7\u8f93\u5165\u539f\u59cb\u5bc6\u7801\uff01";
var BIRTHDAY_IS_INCORRECT = "\u51fa\u751f\u65e5\u671f\u4e0d\u6b63\u786e\uff01\u65e5\u671f\u7684\u6b63\u786e\u683c\u5f0f\u4e3aYYYY/MM/DD\uff0c\u4e14\u5fc5\u987b\u4e3a\u5408\u6cd5\u7684\u65e5\u671f\uff01";
var BIRTHDAY_MORE_THAN_TODAY = "\u51fa\u751f\u65e5\u671f\u4e0d\u80fd\u5927\u4e8e\u4eca\u5929\uff01";
var PHONE_IS_EMPTY = "\u8bf7\u8f93\u5165\u5e38\u7528\u7535\u8bdd\u53f7\u7801\uff01";
var PHONE_IS_INCORRECT = "\u5e38\u7528\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c\u5b57\u6bcd\u4ee5\u53ca-\uff0c\u4e14\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e15\uff01";
var PHONE2_IS_INCORRECT = "\u5907\u7528\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c\u5b57\u6bcd\u4ee5\u53ca-\uff0c\u4e14\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e15\uff01";
var MOBILE_IS_INCORRECT = "\u79fb\u52a8\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u5fc5\u987b\u662f11\u4f4d\u6570\u5b57\uff01";
var EMAIL_IS_EMPTY = "\u8bf7\u8f93\u5165\u7535\u5b50\u4fe1\u7bb1\uff01";
var EMAIL_IS_INCORRECT = "\u7535\u5b50\u4fe1\u7bb1\u4e0d\u6b63\u786e\uff01";
var EMAIL1_IS_EMPTY = "\u8bf7\u8f93\u5165\u5e38\u7528\u7684\u7535\u5b50\u4fe1\u7bb1\uff01";
var EMAIL1_IS_INCORRECT = "\u5e38\u7528\u7684\u7535\u5b50\u4fe1\u7bb1\u4e0d\u6b63\u786e\uff01";
var EMAIL2_IS_INCORRECT = "\u5907\u7528\u7684\u7535\u5b50\u4fe1\u7bb1\u4e0d\u6b63\u786e\uff01";
var ZIPCODE_IS_EMPTY = "\u8bf7\u8f93\u5165\u90ae\u653f\u7f16\u7801\uff01";
var ZIPCODE_IS_INCORRECT = "\u90ae\u653f\u7f16\u7801\u5fc5\u987b\u662f6\u4f4d\u6570\u5b57\uff01";
var ADDRESS_IS_EMPTY = "\u8bf7\u8f93\u5165\u90ae\u653f\u5730\u5740\uff01";
var ADDRESS_IS_INCORRECT = "\u90ae\u653f\u5730\u5740\u4e0d\u6b63\u786e\uff0c\u5730\u5740\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e60\uff01";
var ACCOUNT_EDIT_INPUT_NICKNAME = "\u8bf7\u8f93\u5165\u8d26\u6237\u522b\u540d\uff01";
var WELCOME_IS_EMPTY = "\u8bf7\u8f93\u5165\u6b22\u8fce\u4fe1\u606f\uff01";
var COLOR_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u6700\u559c\u6b22\u7684\u989c\u8272\uff01";
var MOVIE_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u6700\u559c\u6b22\u7684\u7535\u5f71\uff01";
var PET_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u6700\u559c\u6b22\u7684\u5ba0\u7269\uff01";
var GENDER_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u6027\u522b\uff01";
var QUESTIONONE_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u9884\u7559\u95ee\u9898\u4e00\uff01";
var QUESTIONTWO_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u9884\u7559\u95ee\u9898\u4e8c\uff01";
var QUESTIONTHREE_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u9884\u7559\u95ee\u9898\u4e09\uff01";
var ANSWERONE_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u95ee\u9898\u4e00\u7b54\u6848\uff01";
var ANSWERTWO_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u9884\u7559\u95ee\u9898\u4e8c\u7b54\u6848\uff01";
var ANSWERTHREE_IS_EMPTY = "\u8bf7\u8f93\u5165\u60a8\u7684\u9884\u7559\u95ee\u9898\u4e09\u7b54\u6848\uff01";
//***************User identity related constants********************/
var IDENTITY_TYPE_IS_EMPTY = "\u8bf7\u9009\u62e9\u8bc1\u4ef6\u7c7b\u578b";
var IDENTITY_NO_IS_EMPTY = "\u8bf7\u8f93\u5165\u5408\u6cd5\u7684\u8bc1\u4ef6\u53f7\u7801\u3002";
var IDENTITY_NO_IS_INCORRECT = "\u8eab\u4efd\u8bc1\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7\u7801\u5fc5\u987b\u6ee1\u8db3\u4ee5\u4e0b\u89c4\u5219\uff1a" + 
							"\r\n1\u3001\u957f\u5ea6\u5fc5\u987b\u4e3a15\u621618\u3002" + 
							"\r\n2\u3001\u8eab\u4efd\u8bc1\u4e2d\u7684\u51fa\u751f\u65e5\u671f\u5fc5\u987b\u662f\u5408\u6cd5\u7684\u65e5\u671f\u3002" + 
							"\r\n3\u300115\u4f4d\u7684\u8eab\u4efd\u8bc1\u5fc5\u987b\u662f\u6570\u5b57\u3002" + 
							"\r\n4\u300118\u4f4d\u7684\u8eab\u4efd\u8bc1\u524d17\u4f4d\u5fc5\u987b\u662f\u6570\u5b57\uff0c\u6700\u540e\u4e00\u4f4d\u662f\u6570\u5b57\u6216\u5b57\u6bcd\u2018x\u2019\u3001\u2018X\u2019";

//***************User identity related constants end********************/

/***************  psnApplay   \u5728\u7ebf\u9884\u7ea6\u7533\u8bf7\u5f00\u6237 lyj 20110321 begin   **************************/
var IDENTITYDATE_IS_EMPTY = "\u8bf7\u8f93\u5165\u8bc1\u4ef6\u5230\u671f\u65e5\u671f\uff01";
var IDENTITYDATE_IS_INCORRECT = "\u8bc1\u4ef6\u5230\u671f\u65e5\u671f\u4e0d\u6b63\u786e\uff01\u65e5\u671f\u7684\u6b63\u786e\u683c\u5f0f\u4e3aYYYY/MM/DD\uff0c\u4e14\u5fc5\u987b\u4e3a\u5408\u6cd5\u7684\u65e5\u671f\uff01";
var IDENTITYDATE_LESS_THAN_TODAY = "\u8bc1\u4ef6\u5230\u671f\u65e5\u671f\u4e0d\u80fd\u5c0f\u4e8e\u4eca\u5929\uff01";
var BIRTHDAY_IS_EMPTY = "\u8bf7\u8f93\u5165\u51fa\u751f\u65e5\u671f";
var A_MOBILE_IS_EMPTY = "\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801\uff01";
var A_MOBILE_IS_INCORRECT = "\u79fb\u52a8\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u5fc5\u987b\u662f11\u4f4d\u6570\u5b57\uff01";
var A_COUNTRY_IS_EMPTY = "\u8bf7\u8f93\u5165\u56fd\u5bb6\uff01";
var A_PROVINCE_IS_EMPTY = "\u8bf7\u8f93\u5165\u7701/\u76f4\u8f96\u5e02/\u81ea\u6cbb\u533a\uff01";
var A_PROVINCE_IS_INCORRECT = "\u7701/\u76f4\u8f96\u5e02/\u81ea\u6cbb\u533a\u4e0d\u6b63\u786e\uff0c\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e"+"\r\n\u7b49\u4e8e20\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u4e00\u4e2a\u6c49\u5b57\u53602\u4e2a\u5b57\u7b26\uff09\uff0c\u8bf7\u4fee\u6539\uff01";
var A_CITY_IS_EMPTY = "\u8bf7\u8f93\u5165\u57ce\u5e02\uff01";
var A_CITY_IS_INCORRECT = "\u57ce\u5e02\u4e0d\u6b63\u786e\uff0c\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e20\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u4e00\u4e2a\u6c49\u5b57\u53602\u4e2a\u5b57\u7b26\uff09\uff0c\u8bf7\u4fee\u6539\uff01";
var A_ADDRESS_IS_EMPTY = "\u8bf7\u8f93\u5165\u5730\u5740\uff01";
var A_ADDRESS_IS_INCORRECT = "\u5730\u5740\u4e0d\u6b63\u786e\uff0c\u5730\u5740\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u7b49\u4e8e120\u4e2a\u82f1\u6587\u5b57\u7b26\uff08\u4e00\u4e2a\u6c49\u5b57\u53602\u4e2a\u5b57\u7b26\uff09\uff0c\u8bf7\u4fee\u6539\uff01";
var A_EMAIL1_IS_INCORRECT = "\u7535\u5b50\u4fe1\u7bb1\u4e0d\u6b63\u786e\uff01";
var A_PHONE_IS_INCORRECT = "\u529e\u516c\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c()\u4ee5\u53ca-\uff0c"+"\r\n\u4e14\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e14\uff01\u5982\uff1a"+"\r\n\n010-12345678\uff0c(0731)12345678\u3002";
var A_PHONE2_IS_INCORRECT = "\u5bb6\u5ead\u7535\u8bdd\u53f7\u7801\u4e0d\u6b63\u786e\uff0c\u5176\u53ea\u80fd\u5305\u542b\u6570\u5b57\uff0c()\u4ee5\u53ca-\uff0c"+"\r\n\u4e14\u957f\u5ea6\u5fc5\u987b\u5c0f\u4e8e\u6216\u7b49\u4e8e14\uff01\u5982\uff1a"+"\r\n\n010-12345678\uff0c(0731)12345678\u3002";
/***************  psnApplay   \u5728\u7ebf\u9884\u7ea6\u7533\u8bf7\u5f00\u6237 lyj 20110321  end    **************************/


//***************banking account related constants********************/
var ACCOUNT_IS_EMPTY = "\u8bf7\u8f93\u5165\u94f6\u884c\u8d26\u53f7\u3002";
var ACCOUNT_MUST_BE_NUMBER = "\u94f6\u884c\u8d26\u53f7\u5fc5\u987b\u662f\u6570\u5b57\u3002";
var DEBIT_CARD_IS_INVALID = "\u501f\u8bb0\u5361\u7684\u5361\u53f7\u5fc5\u987b\u662f19\u4f4d\u3002";
var QCC_IS_INVALID = "\u51c6\u8d37\u8bb0\u5361\u7684\u5361\u53f7\u5fc5\u987b\u662f16\u4f4d\u3002";
var BOC_CREDIT_CARD_IS_INVALID = "\u4fe1\u7528\u5361\u7684\u5361\u53f7\u5fc5\u987b\u662f16\u4f4d\u3002";
var ENROLLMENT_ACCOUNT_INVALID = "\u53ea\u6709\u501f\u8bb0\u5361\u624d\u80fd\u4f5c\u4e3a\u6ce8\u518c\u5361";
//***************banking account related constants end********************/
var PASSWORD_NOT_EQUAL_CONFIRM_PASSWORD = "\u5bc6\u7801\u4e0e\u786e\u8ba4\u5bc6\u7801\u4e0d\u4e00\u81f4\u3002";
var EFS_PASSWORD_LEN_INVALID = "\u5bc6\u7801\u7684\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e8\u3002";
var USER_NAME_LEN_INVALID = "\u7528\u6237\u540d\u7684\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e6\u3002";
var PHONE_PASSWORD_INVALID = "\u7535\u8bdd\u94f6\u884c\u5bc6\u7801\u4e0d\u6b63\u786e\u3002";

var CHECKING_CODE_IS_EMTPY = "\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801\u3002";

var DATE_INVALID = "\u60a8\u8f93\u5165\u7684\u65e5\u671f\u4e0d\u6b63\u786e\u3002";
var EXPIRING_DATE_INVALID = "\u4f60\u8f93\u5165\u7684\u5931\u6548\u65e5\u671f\u4e0d\u6b63\u786e\u3002";
var E_TOKEN_INVALID =  "\u52a8\u6001\u53e3\u4ee4\u4e0d\u6b63\u786e\uff0c\u8bf7\u8f93\u51656\u4f4d\u6570\u5b57\u7684\u52a8\u6001\u53e3\u4ee4\u3002";
/*******************************/
/***  \u81ea\u52a9\u6ce8\u518c\u4f7f\u7528 end */
/*******************************/

/*******************************/
/***  \u5b9a\u671f\u5b58\u6b3e  **/
/********************************/
var SELECT_CURRENCY = "\u8bf7\u9009\u62e9";
var TRANSFER_ACCOUNT_INVALID = "\u8d26\u6237\u4fe1\u606f\u4e0d\u53ef\u7528\uff0c\u8bf7\u9009\u62e9\u53e6\u4e00\u4e2a\u8d26\u6237\u6216\u8005\u5237\u65b0\u8d26\u6237\u4fe1\u606f";
var TRANSFER_FROM_ACCOUNT = "\u8bf7\u9009\u62e9\u8f6c\u51fa\u8d26\u6237\uff01";
var TRANSFER_TO_ACCOUNT = "\u8bf7\u9009\u62e9\u8f6c\u5165\u8d26\u6237\uff01";
var TRANSFER_AMOUNT = "\u8bf7\u586b\u5199\u8f6c\u8d26\u91d1\u989d\uff01";
var TRANSFER_CURRENCY = "\u8bf7\u8f93\u5165\u5e01\u79cd\u6027\u8d28!";
var TRANSFER_CASHREMIT = "\u8bf7\u9009\u62e9\u949e\u6c47\u6807\u5fd7!";
var TRANSFER_CDTERM = "\u8bf7\u9009\u62e9\u5b58\u671f!";
var TRANSFER_FREQUENCY = "\u8bf7\u9009\u62e9\u5468\u671f!";
var TRANSFER_ENDDATE = "\u8bf7\u9009\u62e9\u7ed3\u675f\u65e5\u671f!";
var SYSDATE = "\u7cfb\u7edf\u5f53\u524d\u65e5\u671f";
var SCHEDULEDATE = "\u9884\u7ea6\u6267\u884c\u65e5\u671f";
var STARTDATE_INVALID = "\u8d77\u59cb\u65e5\u671f\u5fc5\u987b\u662f\u7cfb\u7edf\u5f53\u524d\u65e5\u671f\u672a\u6765\u4e00\u4e2a\u6708\u7684\u4efb\u610f\u4e00\u5929!";
var ENDDATE_INVALID = "\u7ed3\u675f\u65e5\u671f\u5fc5\u987b\u662f\u7cfb\u7edf\u5f53\u524d\u65e5\u671f\u672a\u6765\u516d\u4e2a\u6708\u7684\u4efb\u610f\u4e00\u5929!";
var SCHEDULEDATE_INVALID = "\u9884\u7ea6\u6267\u884c\u65e5\u671f\u5fc5\u987b\u662f\u7cfb\u7edf\u5f53\u524d\u65e5\u671f\u672a\u6765\u4e09\u4e2a\u6708\u5185\u7684\u4efb\u610f\u4e00\u5929!";
var ENDDATE_BEFORE_STARTDATE = "\u7ed3\u675f\u65e5\u671f\u4e0d\u80fd\u5c0f\u4e8e\u8d77\u59cb\u65e5\u671f!";
var FORMAT_ERROR="{0}\u683c\u5f0f\u4e0d\u6b63\u786e\uff0c";

/*******************************/
/***  \u5b89\u5168\u63a7\u4ef6  **/
/********************************/
var SAFECONTROL_INSTALL = "\u8bf7\u9996\u5148\u4e0b\u8f7d\u5e76\u5b89\u88c5\u5b89\u5168\u63a7\u4ef6\u540e\u518d\u767b\u5f55\u7f51\u4e0a\u94f6\u884c\uff0c\u5b89\u88c5\u63a7\u4ef6\u65f6\u8bf7\u5173\u95ed\u6240\u6709\u7684\u6d4f\u89c8\u5668\u7a97\u53e3\u3002";
var SAFECONTROL_VERSION = "\u5b89\u5168\u63a7\u4ef6\u5df2\u7ecf\u5347\u7ea7\uff0c\u8bf7\u9996\u5148\u4e0b\u8f7d\u5e76\u5b89\u88c5\u65b0\u7248\u672c\u5b89\u5168\u63a7\u4ef6\u540e\u518d\u767b\u5f55\u7f51\u4e0a\u94f6\u884c\u3002\u5b89\u88c5\u65b0\u5b89\u5168\u63a7\u4ef6\u524d\u8bf7\u5148\u5230\u63a7\u5236\u9762\u677f\u4e2d\u5378\u8f7d\u65e7\u5b89\u5168\u63a7\u4ef6\uff0c\u5b89\u88c5\u65f6\u5173\u95ed\u6240\u6709\u7684\u6d4f\u89c8\u5668\u7a97\u53e3\u3002";

//edit by yangda
var CURCODE_KHR = "\u67ec\u57d4\u5be8\u745e\u5c14";
 
/*
 * \u5404\u5e01\u79cd\u91d1\u989d\u683c\u5f0f\u6570\u7ec4
 *
 * curCodeArr[0] -- \u8868\u793a\u8d27\u5e01\u4ee3\u7801
 * curCodeArr[1] -- \u8868\u793a\u5e01\u79cd\u540d\u79f0
 * curCodeArr[2] -- \u8868\u793a\u6574\u6570\u4f4d\u6570
 * curCodeArr[3] -- \u8868\u793a\u8f85\u5e01\u4f4d\u6570
 *
 */
var curCodeArr = new Array(
	new Array("001",CURCODE_CNY,13,2),
	new Array("012",CURCODE_GBP,13,2),
	new Array("013",CURCODE_HKD,13,2),
	new Array("014",CURCODE_USD,13,2),
	new Array("015",CURCODE_CHF,13,2),
	new Array("016",CURCODE_DEM,13,2),
	new Array("017",CURCODE_FRF,13,2),
	new Array("018",CURCODE_SGD,13,2),
	new Array("020",CURCODE_NLG,13,2),
	new Array("021",CURCODE_SEK,13,2),
	new Array("022",CURCODE_DKK,13,2),
	new Array("023",CURCODE_NOK,13,2),
	new Array("024",CURCODE_ATS,13,2),
	new Array("025",CURCODE_BEF,13,0),
	new Array("026",CURCODE_ITL,13,0),
	new Array("027",CURCODE_JPY,13,0),
	new Array("028",CURCODE_CAD,13,2),
	new Array("029",CURCODE_AUD,13,2),
	new Array("038",CURCODE_EUR,13,2),
	new Array("056",CURCODE_IDR,13,2),
	new Array("064",CURCODE_VND,13,0),
	new Array("081",CURCODE_MOP,13,2),
	new Array("082",CURCODE_PHP,13,2),
	new Array("084",CURCODE_THB,13,2),
	new Array("087",CURCODE_NZD,13,2),
	new Array("088",CURCODE_KRW,13,0),
	new Array("095",CURCODE_XSF,13,2),
	
	
	new Array("072",CURCODE_RUR,13,2),
	new Array("070",CURCODE_ZAR,13,2),
	new Array("065",CURCODE_HUF,13,2),
	new Array("101",CURCODE_KZT,13,2),
	new Array("080",CURCODE_ZMK,13,2),
	new Array("032",CURCODE_MYR,13,2),
	//add by cuiyk \u767d\u91d1  \u6587\u83b1\u5e01 \u91cc\u4e9a\u5c14 \u535a\u8328\u74e6\u7eb3\u666e\u62c9
	new Array("843",CURCODE_XPT,13,2),
	new Array("131",CURCODE_BND,13,2),
	new Array("134",CURCODE_BRL,13,2),
	new Array("039",CURCODE_BWP,13,2),
	//added by hhf.\u4e3a\u9ec4\u91d1\u724c\u4ef7\u5c40\u90e8\u5237\u65b0  
	new Array("034",CURCODE_XAU,13,2),
	new Array("035",CURCODE_GLD,13,0),
	//add by zph Riel
	new Array("166",CURCODE_KHR,13,2)
	);
