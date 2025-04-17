'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5c6d7967a92d33c2ae45a844c5cd317a",
"index.html": "ddc318ac201e91bdcba70837fa0e3909",
"/": "ddc318ac201e91bdcba70837fa0e3909",
"main.dart.js": "f1ffb592d722e909a3bcd226c01e7927",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "4de59e36d04b9389a6776951fad13857",
"icons/favicon-16x16.png": "1ebb35d6fc5d3726781184a57a1f09ac",
"icons/android-chrome-192x192.png": "4de59e36d04b9389a6776951fad13857",
"icons/apple-touch-icon.png": "17a2d40d89bb8529efbbfdc779cd2bbf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/android-chrome-512x512.png": "b23487b48136f30b57653be5cb272fd0",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "c0bcf7a00dbe1b728064c0267624ba37",
"manifest.json": "f4cba9223ed4e8895a139652d9401995",
"assets/AssetManifest.json": "b0b39c03777828c57455142fda888b5c",
"assets/NOTICES": "dfbad3fadd83a8580da8433d952d2e68",
"assets/lang/en.json": "18d0f3df5eb9c40eb9e38803c3bceda2",
"assets/lang/ar.json": "cab0dd3a3c81799dfc516e6312f53b0c",
"assets/FontManifest.json": "e8621ec5dc4b58521be8be7a735b0ffd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/mapstyles/map_style.txt": "a82dd029c25c24b05b83d9a2a0584ff6",
"assets/assets/mapstyles/dark_map_style.txt": "3d43210a46424b224b8599359e3d75eb",
"assets/assets/images/ic_curve_image2.png": "e1506540614c357bf902f102e3fea823",
"assets/assets/images/ic_category2.png": "510bcf239f4db457c662fdcc6bacd019",
"assets/assets/images/ic_curve_image3.png": "e1506540614c357bf902f102e3fea823",
"assets/assets/images/ic_curve_image1.png": "f144f2970fae9a5daf6c35c629d7eff7",
"assets/assets/images/ic_male.png": "a52652360f8322f8f73bfc3c0c7f68a7",
"assets/assets/images/ic_map_marker.png": "7a30e033781a41ae5d49cb656fdf3939",
"assets/assets/images/3x/ic_category2.png": "06c1188b7a1cd8ff6eaf0d9d6927a9b1",
"assets/assets/images/3x/ic_male.png": "176b5138e64e93999a77ed325d6a1605",
"assets/assets/images/3x/ic_map_marker.png": "aa1807f4b0fa279995a36cba3ed17835",
"assets/assets/images/3x/ic_user_marker.png": "99d3739b588bcc4e5eb66b599c3f2e76",
"assets/assets/images/3x/ic_female.png": "810132043da94d24617ef5203e565607",
"assets/assets/images/3x/ic_splash.png": "41571e42ee41c0df44324e3382738a0d",
"assets/assets/images/3x/ic_onboarding_Group.png": "f774b2722ee5791072010af1eec1212a",
"assets/assets/images/3x/ic_profile_pic.png": "9e22c8f522d360d33717de53a2adf8be",
"assets/assets/images/3x/ic_category.png": "50f76c032d06040138f40b42bde7eed7",
"assets/assets/images/3x/ic_banner1.png": "8990769dcffd35cb219c7cd30790ec76",
"assets/assets/images/3x/ic_banner2.png": "43c515191e60e8f33f14a990ec9e011d",
"assets/assets/images/3x/ic_onboarding_Img2.png": "078911ec45ea15bb65f2bb3d970f7aba",
"assets/assets/images/3x/ic_booking_banner.png": "64fb685627098d47d651080257592682",
"assets/assets/images/3x/ic_custom_marker.png": "8264f2991770235927f31dae94ea80f0",
"assets/assets/images/3x/ic_custom_marker2.png": "8af350f36dd33a4930311ec3aaff6bdc",
"assets/assets/images/3x/ic_onboarding_Img3.png": "742a388e0a5aa32dc003625865442cca",
"assets/assets/images/3x/ic_back.png": "3effe8803d89e6b9758187aa9479b26e",
"assets/assets/images/3x/ic_top_class1.png": "b2400ae8bce4ddd74c6830bc92db8843",
"assets/assets/images/3x/ic_top_class.png": "3e37551ed1ea8f7e3385f0a4d2473fa5",
"assets/assets/images/ic_user_marker.png": "b4e32465419f15540f3f6abcd457c22a",
"assets/assets/images/ic_female.png": "5c53b2f6f8625f878daa182d756b6969",
"assets/assets/images/ic_splash.png": "ded5ce5fe9557292dfa631b804664cfb",
"assets/assets/images/ic_onboarding_Group.png": "ed9559549e53c4e9ca56f5e9c7276cb3",
"assets/assets/images/ic_profile_pic.png": "2f96345c261090f132a30cd82c9fd9a9",
"assets/assets/images/ic_category.png": "4f139f7dcccb510cb6bdbcae50ba607a",
"assets/assets/images/ic_banner1.png": "0da31f27e8767b04ed254ae30989604e",
"assets/assets/images/ic_banner2.png": "5f2931391633730356c6ddfb3b9a492c",
"assets/assets/images/ic_onboarding_Img2.png": "ed9559549e53c4e9ca56f5e9c7276cb3",
"assets/assets/images/ic_booking_banner.png": "6c64f6d074cd9415a62cebcbae8216e6",
"assets/assets/images/ic_custom_marker.png": "36d9a030e559e6f80ef35c87c83cb9c4",
"assets/assets/images/ic_custom_marker2.png": "46de31c66e572527af0be55654ea4f99",
"assets/assets/images/ic_onboarding_Img3.png": "ed9559549e53c4e9ca56f5e9c7276cb3",
"assets/assets/images/ic_back.png": "7664dfd5b9e57ff6a40317a110f57d33",
"assets/assets/images/ic_top_class1.png": "c743e88d5601340edd2c99146e3d330a",
"assets/assets/images/ic_top_class.png": "46782a947479a45a9c0d8ebf956cefea",
"assets/assets/images/2x/ic_curve_image2.png": "dd761803ba4840a0f9a0fcff2d02cb4f",
"assets/assets/images/2x/ic_category2.png": "6edc4815113ac09e220dbd208418b9c3",
"assets/assets/images/2x/ic_curve_image3.png": "dd761803ba4840a0f9a0fcff2d02cb4f",
"assets/assets/images/2x/ic_curve_image1.png": "73d88ccd9eefe06c571e80465beda247",
"assets/assets/images/2x/ic_male.png": "204974e91318a1a9bf9e4d8b644a753e",
"assets/assets/images/2x/ic_map_marker.png": "cf48843e1ed94ba604caa3b2f11f3b55",
"assets/assets/images/2x/ic_user_marker.png": "0e8f42dd93b4c713576c9c6b5128ddbd",
"assets/assets/images/2x/ic_female.png": "92dff3631ced340eb73abd708ea53c23",
"assets/assets/images/2x/ic_splash.png": "45c2ed392317c14f986a94cffcf07be4",
"assets/assets/images/2x/ic_onboarding_Group.png": "d4c8e3409cf106496c0e944c2a923a11",
"assets/assets/images/2x/ic_profile_pic.png": "df0c25548abdd9ae185e93e0931e9d0a",
"assets/assets/images/2x/ic_category.png": "7fc5ef3045681cb4201b623ac2fc557d",
"assets/assets/images/2x/ic_banner1.png": "c1dbe6d0e29e9a9cbde615bd99ba47c0",
"assets/assets/images/2x/ic_banner2.png": "72f04ae5d86338eb1a6dbd81be360fc9",
"assets/assets/images/2x/ic_onboarding_Img2.png": "50609bf7f07f7492007c48adb75ec01d",
"assets/assets/images/2x/ic_booking_banner.png": "7cc286fc9e43a1e474e68f500feaa4ee",
"assets/assets/images/2x/ic_custom_marker.png": "226e9b191d5fc06f1aa4693fbbb91eed",
"assets/assets/images/2x/ic_custom_marker2.png": "63405fed8f49b7edb7dd82bc3c8c8475",
"assets/assets/images/2x/ic_onboarding_Img3.png": "8ed9bf1b8c2e06d58ab6604afb4a291b",
"assets/assets/images/2x/ic_back.png": "df43ef8ca030acc2e679378178ad155a",
"assets/assets/images/2x/ic_top_class1.png": "b1b394ccbcf95de4c6400b837f9c7f08",
"assets/assets/images/2x/ic_top_class.png": "4bc9ad61b00aed7c98996b1be38414ea",
"assets/assets/svgs/svg_filter.svg": "6536ff01cc70e00af23b497ad64af081",
"assets/assets/svgs/svg_hide_password.svg": "5c3c3595f74d426155731b9a5a9ec969",
"assets/assets/svgs/svg_visa.svg": "6dd3b880b01d23dba346209c5db34ff6",
"assets/assets/svgs/svg_phonepe.svg": "92f8d957376fa204a595aa37c28be2c4",
"assets/assets/svgs/svg_delete.svg": "18db4a47bf93d400b7696eb2261b2093",
"assets/assets/svgs/svg_city.svg": "67f5eef26eac6f9fc128d108b6a4564e",
"assets/assets/svgs/svg_star_white_border.svg": "98b3f079119d872c6740e5ac98506cf7",
"assets/assets/svgs/svg_mobikwik.svg": "99441ebe40c3726c5c4ca50e3875d9cf",
"assets/assets/svgs/svg_favourite.svg": "7ea77a13badd9a5d1815d47c855508d8",
"assets/assets/svgs/svg_splash.svg": "81f431a3afa1997224da0f7be19999be",
"assets/assets/svgs/svg_boxing.svg": "685ed8cbb0c7d9ba26036ad6d0ccf0f3",
"assets/assets/svgs/svg_disable.svg": "bd06d275131c486af3a79eeb3c6883a4",
"assets/assets/svgs/svg_web_login.svg": "4e80da81c68635129cac86c6927f069d",
"assets/assets/svgs/svg_home.svg": "6c3d4a32a529f44f2246a8870b5fb71b",
"assets/assets/svgs/svg_unselect_explore.svg": "3f0ea2345ee7ec53f306013bb3d4816e",
"assets/assets/svgs/svg_fav2.svg": "03afdc2f0be2141b96f12423e0a73ed9",
"assets/assets/svgs/svg_gym.svg": "505ac8208db2f63343dfc0f26fad3feb",
"assets/assets/svgs/svg_radio_unselected.svg": "055c71ab0c31bd0a2a45793556807b75",
"assets/assets/svgs/svg_amazon.svg": "26ca7c1802036cb2edf7d81b34ea83f5",
"assets/assets/svgs/svg_unfavourite.svg": "80f7eb85076c3a20dbd65b4f6db1464b",
"assets/assets/svgs/svg_calendar.svg": "6b7d94f2b9c1833d2ab5fbfe6bc22c77",
"assets/assets/svgs/svg_bell.svg": "be4be57a7a218481d5649eca49b307d2",
"assets/assets/svgs/svg_custom_marker.svg": "1d2ae8017140a296631e66ffcedf4ff0",
"assets/assets/svgs/svg_bookings.svg": "96141ec589e2e7b89baaf2bc21045147",
"assets/assets/svgs/svg_location_marker.svg": "b5039d41b814596339d82f72fb1c09ca",
"assets/assets/svgs/svg_gps.svg": "db561e7715085b98ece409772dd4e5b4",
"assets/assets/svgs/svg_zumba.svg": "abfb6b27ecab3c907fcbb5f12f3e9001",
"assets/assets/svgs/svg_info.svg": "c8c7036a3ad770c6e3f8e5013d335e45",
"assets/assets/svgs/svg_ellipse.svg": "af0977dcc49d6b6bd6b804854420bc0d",
"assets/assets/svgs/svg_un_fav.svg": "171cade45f1d12a4a1c48af9c2abb5eb",
"assets/assets/svgs/svg_add.svg": "0f329b06a6eaa17c512dd4165890d608",
"assets/assets/svgs/svg_marker.svg": "568c39e5913f7d85d46064b974fb5eb0",
"assets/assets/svgs/svg_language.svg": "641496f3d2d8b51e83b852b191a94c1a",
"assets/assets/svgs/svg_email.svg": "5abac00f9e0ffaba9afff60d558c7f97",
"assets/assets/svgs/svg_notification.svg": "c7fa94ad969bc437bbde133c1285b774",
"assets/assets/svgs/svg_lock.svg": "d06a80673b8d1e96b547d40355218e52",
"assets/assets/svgs/svg_logo_web.svg": "6c7d51c8e4d5e802cf5238d72d204459",
"assets/assets/svgs/svg_rating_star_selected.svg": "760d64a6412a23ea779d73f3ee58c385",
"assets/assets/svgs/svg_password.svg": "83c4a53b3d60c6b5666c9b3eebd84231",
"assets/assets/svgs/svg_card_marker.svg": "4e3cb155684334ad62d9c6f91d1f5740",
"assets/assets/svgs/svg_checkout_add.svg": "4308d46ec8d7417a2735a951a75bbfc6",
"assets/assets/svgs/svg_dashboard_marker.svg": "a72b1fc9cf565fcfa9ef3a1aa77cdc5f",
"assets/assets/svgs/svg_unselect_bookings.svg": "93b11dd105840f35f6528ff3ce04bf3e",
"assets/assets/svgs/svg_star.svg": "3848e2df5350f2b7c8c06a9845b0c5b6",
"assets/assets/svgs/svg_smiley.svg": "620156ca4b8018e7fa44e3889878382e",
"assets/assets/svgs/svg_message.svg": "e2ed2129885ef693b09faf83c4c34922",
"assets/assets/svgs/svg_my_wallet.svg": "ddc79af08cc9a4391875d7a6bd50d4d5",
"assets/assets/svgs/svg_right.svg": "b5b15c851384b35dd7659242eae6f6f0",
"assets/assets/svgs/svg_faq.svg": "9cb4206e764b8fbfcbaab13c02b65739",
"assets/assets/svgs/svg_close.svg": "981d96fa9a17e2d8d4eb1ea4623863a1",
"assets/assets/svgs/svg_explore.svg": "7eea25ffbf5aacf3316eeec61466f1cc",
"assets/assets/svgs/svg_lock_colored.svg": "f60465cb0484ce44216544f296ebba88",
"assets/assets/svgs/svg_edit.svg": "831c1d128e1873ed0d1aa4145776e2b1",
"assets/assets/svgs/svg_radio_selected.svg": "1d07985037d457579152fc0002f61da9",
"assets/assets/svgs/svg_terms_and_condition.svg": "84d2f26ee67cfa871a9ca99a56c5d5b9",
"assets/assets/svgs/svg_paytm.svg": "3c591439a169e6ea59321c924cc52933",
"assets/assets/svgs/svg_right_arrow.svg": "6379e088bf4fb0d013bb804da1f4e8a5",
"assets/assets/svgs/svg_clear_text_field.svg": "f390ac71ec1bcfe59cd0719c1070d50a",
"assets/assets/svgs/svg_unselect_favourite.svg": "bce8b7328b8d1dcb636e2185f9570a0e",
"assets/assets/svgs/svg_wallet.svg": "8527b9c25b42c4d971e052714facb49b",
"assets/assets/svgs/svg_yoga.svg": "6aa0019bc5d281754151df9dbe827ac8",
"assets/assets/svgs/svg_show_password.svg": "c2c7265ccc59cc72e81fbb89805490b6",
"assets/assets/svgs/svg_back.svg": "afc871308cb26751986f82a649144cfa",
"assets/assets/svgs/svg_select_photo.svg": "e6806a857b1de5de5a89e18650fedabc",
"assets/assets/svgs/svg_fav.svg": "8f83e068fc381e13660caf9ddaa763a8",
"assets/assets/svgs/svg_plan.svg": "79f3497db8fcc4dbbe8808a73128dc03",
"assets/assets/svgs/svg_cross.svg": "5ba5d40b9448a7771802fbc92fbc55c2",
"assets/assets/svgs/svg_crossfit.svg": "52c350e2122aee30880df4075197889c",
"assets/assets/svgs/svg_login_logo.svg": "bee2dd0ef4ba93d61854188e84f9151f",
"assets/assets/svgs/svg_unselect_home.svg": "3675191b73f23dafd52b07c57292e92e",
"assets/assets/svgs/svg_person.svg": "e192498d0903e2aa62471e9121269fd7",
"assets/assets/svgs/svg_search.svg": "2a29d8cb86df18cf5dc3afa6469c05b3",
"assets/assets/svgs/svg_actiday_blackwhite.svg": "d1761399181fb406bebf3b8dd2270030",
"assets/assets/svgs/svg_clock.svg": "23ef1cba89e02972d20e6ae70842ee89",
"assets/assets/svgs/svg_phone.svg": "2a873a00b0e3a2285633f9581d18b3d9",
"assets/assets/svgs/svg_translation.svg": "31349f572ba9d2415468b5bdf02e5514",
"assets/assets/svgs/svg_privacy_policy.svg": "0eea82709cbf460c9883baf6b5572bbc",
"assets/assets/svgs/svg_drawer.svg": "9a6f3ca833f704839511410bc0daf2ed",
"assets/assets/svgs/svg_freecharge.svg": "cbc9ebb223b8bf01ff2f9cec98ef96ae",
"assets/assets/svgs/svg_mapMarker.svg": "568c39e5913f7d85d46064b974fb5eb0",
"assets/assets/svgs/svg_yellow_wallet.svg": "ca3a97b437ea08c078d15d16f0713428",
"assets/assets/svgs/svg_logout.svg": "ea2eb22ff705ba9d4dcfd35ec4b777e2",
"assets/assets/svgs/svg_country_flag.svg": "c4a4c6cab517b71250cb2be8773a37b0",
"assets/assets/svgs/svg_marker_grey.svg": "6f16711e8454dce0873702200fff6885",
"assets/assets/svgs/svg_dropdown_arrow.svg": "1abe9a6ba6d0ea3667d6273e2b6a7cb9",
"assets/assets/svgs/svg_rating_star_unselected.svg": "a4ac51df4b19bcf9fbbd0d0268c71421",
"assets/assets/svgs/svg_marker_black.svg": "b5039d41b814596339d82f72fb1c09ca",
"assets/assets/svgs/svg_arrow_up.svg": "122373535d1ecfb2d3fa9f61ae0b7de0",
"assets/assets/json/json_location_success.json": "002f758fad81c5d10f68207ac1e5866b",
"assets/assets/json/json_plane.json": "1c2ba7daf969866ca2f53a01f48ba618",
"assets/assets/json/json_verify_successful.json": "002f758fad81c5d10f68207ac1e5866b",
"assets/assets/json/json_map_marker.json": "aaaf56be760becb2bd340012fb0f434f",
"assets/assets/fonts/Rubik-MediumItalic.ttf": "91184a50aafa6f6369fe36769de1ac7e",
"assets/assets/fonts/Rubik-VariableFont_wght.ttf": "3a46dcaae30742e20d5e84a1ee799de9",
"assets/assets/fonts/Rubik-Bold.ttf": "614e020a9cab9dfc649d024b78cd4e56",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Rubik-SemiBoldItalic.ttf": "0809b76ae98ca201e4c0b38cd23fcfc5",
"assets/assets/fonts/Rubik-Italic-VariableFont_wght.ttf": "342a5c66f7798e1d59997bf60df037ef",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Rubik-Light.ttf": "f3cb5e1a3268ed07ee288f9c61437a85",
"assets/assets/fonts/Rubik-Medium.ttf": "2566a5dd3dbaf337b9928fdf48c2d030",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Rubik-ExtraBoldItalic.ttf": "1ad43b7877b784838c11b14d170d0e0b",
"assets/assets/fonts/Rubik-Black.ttf": "9ce2e9a38cb86cb7a11b2e5f7951d2b8",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Rubik-Italic.ttf": "a76d6393cdc975b9ac0e0eae26faf005",
"assets/assets/fonts/Rubik-LightItalic.ttf": "9174c3430b588ba0eed31fc1664d2f06",
"assets/assets/fonts/Rubik-SemiBold.ttf": "b87ea1ca8149bd479456eb6104aef078",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Rubik-BlackItalic.ttf": "d0dc4ca84e80140d61056c2c4884f82f",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Rubik-ExtraBold.ttf": "66c558e788843c5caa3d18edc602cfb8",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Rubik-Regular.ttf": "35c2b913e9977fe4a3d4327824fbaf35",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Rubik-BoldItalic.ttf": "376c3f4c0d91cea9f6b35ad2b3967367",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
