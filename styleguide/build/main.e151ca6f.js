(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(t,i,n){t.exports={btn:"Button_btn__2sT6n",btn_disabled:"Button_btn_disabled__3gKEb"}},184:function(t,i,n){t.exports=n.p+"static/media/demo.917976f6.jpg"},185:function(t,i,n){"use strict";n.r(i);var s=n(1),e=n.n(s),r=n(88).default,a=n(89).default,o=n(61),c=n.n(o);i.default=function(t){var i=t.title,n=t.desc,s=t.image,o=t.onClickMore;return e.a.createElement("div",{className:c.a.card},e.a.createElement("div",{className:c.a.imgContainer},e.a.createElement(a,{className:c.a.image,src:s})),e.a.createElement("div",{className:c.a.text},e.a.createElement("h2",null,i),e.a.createElement("br",null),e.a.createElement("p",null,n)," ",e.a.createElement("br",null),e.a.createElement(r,{onClick:o},"More")))}},202:function(t,i,n){t.exports=n(801)},380:function(t,i,n){var s={"./Binary_Property/ASCII.js":381,"./Binary_Property/ASCII_Hex_Digit.js":382,"./Binary_Property/Alphabetic.js":383,"./Binary_Property/Any.js":384,"./Binary_Property/Assigned.js":385,"./Binary_Property/Bidi_Control.js":386,"./Binary_Property/Bidi_Mirrored.js":387,"./Binary_Property/Case_Ignorable.js":388,"./Binary_Property/Cased.js":389,"./Binary_Property/Changes_When_Casefolded.js":390,"./Binary_Property/Changes_When_Casemapped.js":391,"./Binary_Property/Changes_When_Lowercased.js":392,"./Binary_Property/Changes_When_NFKC_Casefolded.js":393,"./Binary_Property/Changes_When_Titlecased.js":394,"./Binary_Property/Changes_When_Uppercased.js":395,"./Binary_Property/Dash.js":396,"./Binary_Property/Default_Ignorable_Code_Point.js":397,"./Binary_Property/Deprecated.js":398,"./Binary_Property/Diacritic.js":399,"./Binary_Property/Emoji.js":400,"./Binary_Property/Emoji_Component.js":401,"./Binary_Property/Emoji_Modifier.js":402,"./Binary_Property/Emoji_Modifier_Base.js":403,"./Binary_Property/Emoji_Presentation.js":404,"./Binary_Property/Extended_Pictographic.js":405,"./Binary_Property/Extender.js":406,"./Binary_Property/Grapheme_Base.js":407,"./Binary_Property/Grapheme_Extend.js":408,"./Binary_Property/Hex_Digit.js":409,"./Binary_Property/IDS_Binary_Operator.js":410,"./Binary_Property/IDS_Trinary_Operator.js":411,"./Binary_Property/ID_Continue.js":412,"./Binary_Property/ID_Start.js":413,"./Binary_Property/Ideographic.js":414,"./Binary_Property/Join_Control.js":415,"./Binary_Property/Logical_Order_Exception.js":416,"./Binary_Property/Lowercase.js":417,"./Binary_Property/Math.js":418,"./Binary_Property/Noncharacter_Code_Point.js":419,"./Binary_Property/Pattern_Syntax.js":420,"./Binary_Property/Pattern_White_Space.js":421,"./Binary_Property/Quotation_Mark.js":422,"./Binary_Property/Radical.js":423,"./Binary_Property/Regional_Indicator.js":424,"./Binary_Property/Sentence_Terminal.js":425,"./Binary_Property/Soft_Dotted.js":426,"./Binary_Property/Terminal_Punctuation.js":427,"./Binary_Property/Unified_Ideograph.js":428,"./Binary_Property/Uppercase.js":429,"./Binary_Property/Variation_Selector.js":430,"./Binary_Property/White_Space.js":431,"./Binary_Property/XID_Continue.js":432,"./Binary_Property/XID_Start.js":433,"./General_Category/Cased_Letter.js":434,"./General_Category/Close_Punctuation.js":435,"./General_Category/Connector_Punctuation.js":436,"./General_Category/Control.js":437,"./General_Category/Currency_Symbol.js":438,"./General_Category/Dash_Punctuation.js":439,"./General_Category/Decimal_Number.js":440,"./General_Category/Enclosing_Mark.js":441,"./General_Category/Final_Punctuation.js":442,"./General_Category/Format.js":443,"./General_Category/Initial_Punctuation.js":444,"./General_Category/Letter.js":445,"./General_Category/Letter_Number.js":446,"./General_Category/Line_Separator.js":447,"./General_Category/Lowercase_Letter.js":448,"./General_Category/Mark.js":449,"./General_Category/Math_Symbol.js":450,"./General_Category/Modifier_Letter.js":451,"./General_Category/Modifier_Symbol.js":452,"./General_Category/Nonspacing_Mark.js":453,"./General_Category/Number.js":454,"./General_Category/Open_Punctuation.js":455,"./General_Category/Other.js":456,"./General_Category/Other_Letter.js":457,"./General_Category/Other_Number.js":458,"./General_Category/Other_Punctuation.js":459,"./General_Category/Other_Symbol.js":460,"./General_Category/Paragraph_Separator.js":461,"./General_Category/Private_Use.js":462,"./General_Category/Punctuation.js":463,"./General_Category/Separator.js":464,"./General_Category/Space_Separator.js":465,"./General_Category/Spacing_Mark.js":466,"./General_Category/Surrogate.js":467,"./General_Category/Symbol.js":468,"./General_Category/Titlecase_Letter.js":469,"./General_Category/Unassigned.js":470,"./General_Category/Uppercase_Letter.js":471,"./Script/Adlam.js":472,"./Script/Ahom.js":473,"./Script/Anatolian_Hieroglyphs.js":474,"./Script/Arabic.js":475,"./Script/Armenian.js":476,"./Script/Avestan.js":477,"./Script/Balinese.js":478,"./Script/Bamum.js":479,"./Script/Bassa_Vah.js":480,"./Script/Batak.js":481,"./Script/Bengali.js":482,"./Script/Bhaiksuki.js":483,"./Script/Bopomofo.js":484,"./Script/Brahmi.js":485,"./Script/Braille.js":486,"./Script/Buginese.js":487,"./Script/Buhid.js":488,"./Script/Canadian_Aboriginal.js":489,"./Script/Carian.js":490,"./Script/Caucasian_Albanian.js":491,"./Script/Chakma.js":492,"./Script/Cham.js":493,"./Script/Cherokee.js":494,"./Script/Chorasmian.js":495,"./Script/Common.js":496,"./Script/Coptic.js":497,"./Script/Cuneiform.js":498,"./Script/Cypriot.js":499,"./Script/Cyrillic.js":500,"./Script/Deseret.js":501,"./Script/Devanagari.js":502,"./Script/Dives_Akuru.js":503,"./Script/Dogra.js":504,"./Script/Duployan.js":505,"./Script/Egyptian_Hieroglyphs.js":506,"./Script/Elbasan.js":507,"./Script/Elymaic.js":508,"./Script/Ethiopic.js":509,"./Script/Georgian.js":510,"./Script/Glagolitic.js":511,"./Script/Gothic.js":512,"./Script/Grantha.js":513,"./Script/Greek.js":514,"./Script/Gujarati.js":515,"./Script/Gunjala_Gondi.js":516,"./Script/Gurmukhi.js":517,"./Script/Han.js":518,"./Script/Hangul.js":519,"./Script/Hanifi_Rohingya.js":520,"./Script/Hanunoo.js":521,"./Script/Hatran.js":522,"./Script/Hebrew.js":523,"./Script/Hiragana.js":524,"./Script/Imperial_Aramaic.js":525,"./Script/Inherited.js":526,"./Script/Inscriptional_Pahlavi.js":527,"./Script/Inscriptional_Parthian.js":528,"./Script/Javanese.js":529,"./Script/Kaithi.js":530,"./Script/Kannada.js":531,"./Script/Katakana.js":532,"./Script/Kayah_Li.js":533,"./Script/Kharoshthi.js":534,"./Script/Khitan_Small_Script.js":535,"./Script/Khmer.js":536,"./Script/Khojki.js":537,"./Script/Khudawadi.js":538,"./Script/Lao.js":539,"./Script/Latin.js":540,"./Script/Lepcha.js":541,"./Script/Limbu.js":542,"./Script/Linear_A.js":543,"./Script/Linear_B.js":544,"./Script/Lisu.js":545,"./Script/Lycian.js":546,"./Script/Lydian.js":547,"./Script/Mahajani.js":548,"./Script/Makasar.js":549,"./Script/Malayalam.js":550,"./Script/Mandaic.js":551,"./Script/Manichaean.js":552,"./Script/Marchen.js":553,"./Script/Masaram_Gondi.js":554,"./Script/Medefaidrin.js":555,"./Script/Meetei_Mayek.js":556,"./Script/Mende_Kikakui.js":557,"./Script/Meroitic_Cursive.js":558,"./Script/Meroitic_Hieroglyphs.js":559,"./Script/Miao.js":560,"./Script/Modi.js":561,"./Script/Mongolian.js":562,"./Script/Mro.js":563,"./Script/Multani.js":564,"./Script/Myanmar.js":565,"./Script/Nabataean.js":566,"./Script/Nandinagari.js":567,"./Script/New_Tai_Lue.js":568,"./Script/Newa.js":569,"./Script/Nko.js":570,"./Script/Nushu.js":571,"./Script/Nyiakeng_Puachue_Hmong.js":572,"./Script/Ogham.js":573,"./Script/Ol_Chiki.js":574,"./Script/Old_Hungarian.js":575,"./Script/Old_Italic.js":576,"./Script/Old_North_Arabian.js":577,"./Script/Old_Permic.js":578,"./Script/Old_Persian.js":579,"./Script/Old_Sogdian.js":580,"./Script/Old_South_Arabian.js":581,"./Script/Old_Turkic.js":582,"./Script/Oriya.js":583,"./Script/Osage.js":584,"./Script/Osmanya.js":585,"./Script/Pahawh_Hmong.js":586,"./Script/Palmyrene.js":587,"./Script/Pau_Cin_Hau.js":588,"./Script/Phags_Pa.js":589,"./Script/Phoenician.js":590,"./Script/Psalter_Pahlavi.js":591,"./Script/Rejang.js":592,"./Script/Runic.js":593,"./Script/Samaritan.js":594,"./Script/Saurashtra.js":595,"./Script/Sharada.js":596,"./Script/Shavian.js":597,"./Script/Siddham.js":598,"./Script/SignWriting.js":599,"./Script/Sinhala.js":600,"./Script/Sogdian.js":601,"./Script/Sora_Sompeng.js":602,"./Script/Soyombo.js":603,"./Script/Sundanese.js":604,"./Script/Syloti_Nagri.js":605,"./Script/Syriac.js":606,"./Script/Tagalog.js":607,"./Script/Tagbanwa.js":608,"./Script/Tai_Le.js":609,"./Script/Tai_Tham.js":610,"./Script/Tai_Viet.js":611,"./Script/Takri.js":612,"./Script/Tamil.js":613,"./Script/Tangut.js":614,"./Script/Telugu.js":615,"./Script/Thaana.js":616,"./Script/Thai.js":617,"./Script/Tibetan.js":618,"./Script/Tifinagh.js":619,"./Script/Tirhuta.js":620,"./Script/Ugaritic.js":621,"./Script/Vai.js":622,"./Script/Wancho.js":623,"./Script/Warang_Citi.js":624,"./Script/Yezidi.js":625,"./Script/Yi.js":626,"./Script/Zanabazar_Square.js":627,"./Script_Extensions/Adlam.js":628,"./Script_Extensions/Ahom.js":629,"./Script_Extensions/Anatolian_Hieroglyphs.js":630,"./Script_Extensions/Arabic.js":631,"./Script_Extensions/Armenian.js":632,"./Script_Extensions/Avestan.js":633,"./Script_Extensions/Balinese.js":634,"./Script_Extensions/Bamum.js":635,"./Script_Extensions/Bassa_Vah.js":636,"./Script_Extensions/Batak.js":637,"./Script_Extensions/Bengali.js":638,"./Script_Extensions/Bhaiksuki.js":639,"./Script_Extensions/Bopomofo.js":640,"./Script_Extensions/Brahmi.js":641,"./Script_Extensions/Braille.js":642,"./Script_Extensions/Buginese.js":643,"./Script_Extensions/Buhid.js":644,"./Script_Extensions/Canadian_Aboriginal.js":645,"./Script_Extensions/Carian.js":646,"./Script_Extensions/Caucasian_Albanian.js":647,"./Script_Extensions/Chakma.js":648,"./Script_Extensions/Cham.js":649,"./Script_Extensions/Cherokee.js":650,"./Script_Extensions/Chorasmian.js":651,"./Script_Extensions/Common.js":652,"./Script_Extensions/Coptic.js":653,"./Script_Extensions/Cuneiform.js":654,"./Script_Extensions/Cypriot.js":655,"./Script_Extensions/Cyrillic.js":656,"./Script_Extensions/Deseret.js":657,"./Script_Extensions/Devanagari.js":658,"./Script_Extensions/Dives_Akuru.js":659,"./Script_Extensions/Dogra.js":660,"./Script_Extensions/Duployan.js":661,"./Script_Extensions/Egyptian_Hieroglyphs.js":662,"./Script_Extensions/Elbasan.js":663,"./Script_Extensions/Elymaic.js":664,"./Script_Extensions/Ethiopic.js":665,"./Script_Extensions/Georgian.js":666,"./Script_Extensions/Glagolitic.js":667,"./Script_Extensions/Gothic.js":668,"./Script_Extensions/Grantha.js":669,"./Script_Extensions/Greek.js":670,"./Script_Extensions/Gujarati.js":671,"./Script_Extensions/Gunjala_Gondi.js":672,"./Script_Extensions/Gurmukhi.js":673,"./Script_Extensions/Han.js":674,"./Script_Extensions/Hangul.js":675,"./Script_Extensions/Hanifi_Rohingya.js":676,"./Script_Extensions/Hanunoo.js":677,"./Script_Extensions/Hatran.js":678,"./Script_Extensions/Hebrew.js":679,"./Script_Extensions/Hiragana.js":680,"./Script_Extensions/Imperial_Aramaic.js":681,"./Script_Extensions/Inherited.js":682,"./Script_Extensions/Inscriptional_Pahlavi.js":683,"./Script_Extensions/Inscriptional_Parthian.js":684,"./Script_Extensions/Javanese.js":685,"./Script_Extensions/Kaithi.js":686,"./Script_Extensions/Kannada.js":687,"./Script_Extensions/Katakana.js":688,"./Script_Extensions/Kayah_Li.js":689,"./Script_Extensions/Kharoshthi.js":690,"./Script_Extensions/Khitan_Small_Script.js":691,"./Script_Extensions/Khmer.js":692,"./Script_Extensions/Khojki.js":693,"./Script_Extensions/Khudawadi.js":694,"./Script_Extensions/Lao.js":695,"./Script_Extensions/Latin.js":696,"./Script_Extensions/Lepcha.js":697,"./Script_Extensions/Limbu.js":698,"./Script_Extensions/Linear_A.js":699,"./Script_Extensions/Linear_B.js":700,"./Script_Extensions/Lisu.js":701,"./Script_Extensions/Lycian.js":702,"./Script_Extensions/Lydian.js":703,"./Script_Extensions/Mahajani.js":704,"./Script_Extensions/Makasar.js":705,"./Script_Extensions/Malayalam.js":706,"./Script_Extensions/Mandaic.js":707,"./Script_Extensions/Manichaean.js":708,"./Script_Extensions/Marchen.js":709,"./Script_Extensions/Masaram_Gondi.js":710,"./Script_Extensions/Medefaidrin.js":711,"./Script_Extensions/Meetei_Mayek.js":712,"./Script_Extensions/Mende_Kikakui.js":713,"./Script_Extensions/Meroitic_Cursive.js":714,"./Script_Extensions/Meroitic_Hieroglyphs.js":715,"./Script_Extensions/Miao.js":716,"./Script_Extensions/Modi.js":717,"./Script_Extensions/Mongolian.js":718,"./Script_Extensions/Mro.js":719,"./Script_Extensions/Multani.js":720,"./Script_Extensions/Myanmar.js":721,"./Script_Extensions/Nabataean.js":722,"./Script_Extensions/Nandinagari.js":723,"./Script_Extensions/New_Tai_Lue.js":724,"./Script_Extensions/Newa.js":725,"./Script_Extensions/Nko.js":726,"./Script_Extensions/Nushu.js":727,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":728,"./Script_Extensions/Ogham.js":729,"./Script_Extensions/Ol_Chiki.js":730,"./Script_Extensions/Old_Hungarian.js":731,"./Script_Extensions/Old_Italic.js":732,"./Script_Extensions/Old_North_Arabian.js":733,"./Script_Extensions/Old_Permic.js":734,"./Script_Extensions/Old_Persian.js":735,"./Script_Extensions/Old_Sogdian.js":736,"./Script_Extensions/Old_South_Arabian.js":737,"./Script_Extensions/Old_Turkic.js":738,"./Script_Extensions/Oriya.js":739,"./Script_Extensions/Osage.js":740,"./Script_Extensions/Osmanya.js":741,"./Script_Extensions/Pahawh_Hmong.js":742,"./Script_Extensions/Palmyrene.js":743,"./Script_Extensions/Pau_Cin_Hau.js":744,"./Script_Extensions/Phags_Pa.js":745,"./Script_Extensions/Phoenician.js":746,"./Script_Extensions/Psalter_Pahlavi.js":747,"./Script_Extensions/Rejang.js":748,"./Script_Extensions/Runic.js":749,"./Script_Extensions/Samaritan.js":750,"./Script_Extensions/Saurashtra.js":751,"./Script_Extensions/Sharada.js":752,"./Script_Extensions/Shavian.js":753,"./Script_Extensions/Siddham.js":754,"./Script_Extensions/SignWriting.js":755,"./Script_Extensions/Sinhala.js":756,"./Script_Extensions/Sogdian.js":757,"./Script_Extensions/Sora_Sompeng.js":758,"./Script_Extensions/Soyombo.js":759,"./Script_Extensions/Sundanese.js":760,"./Script_Extensions/Syloti_Nagri.js":761,"./Script_Extensions/Syriac.js":762,"./Script_Extensions/Tagalog.js":763,"./Script_Extensions/Tagbanwa.js":764,"./Script_Extensions/Tai_Le.js":765,"./Script_Extensions/Tai_Tham.js":766,"./Script_Extensions/Tai_Viet.js":767,"./Script_Extensions/Takri.js":768,"./Script_Extensions/Tamil.js":769,"./Script_Extensions/Tangut.js":770,"./Script_Extensions/Telugu.js":771,"./Script_Extensions/Thaana.js":772,"./Script_Extensions/Thai.js":773,"./Script_Extensions/Tibetan.js":774,"./Script_Extensions/Tifinagh.js":775,"./Script_Extensions/Tirhuta.js":776,"./Script_Extensions/Ugaritic.js":777,"./Script_Extensions/Vai.js":778,"./Script_Extensions/Wancho.js":779,"./Script_Extensions/Warang_Citi.js":780,"./Script_Extensions/Yezidi.js":781,"./Script_Extensions/Yi.js":782,"./Script_Extensions/Zanabazar_Square.js":783,"./index.js":784,"./unicode-version.js":785};function e(t){var i=r(t);return n(i)}function r(t){if(!n.o(s,t)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return s[t]}e.keys=function(){return Object.keys(s)},e.resolve=r,t.exports=e,e.id=380},61:function(t,i,n){t.exports={card:"Card_card__22d7C",imgContainer:"Card_imgContainer__n99Ux",image:"Card_image__1OURL",text:"Card_text__105cj"}},795:function(t,i,n){t.exports={doclets:{},displayName:"Button",description:"",methods:[],props:[{type:{name:"node"},required:!0,description:"",tags:{},name:"children"},{type:{name:"string"},required:!1,description:"",defaultValue:{value:"''",computed:!1},tags:{},name:"className"},{type:{name:"bool"},required:!1,description:"",defaultValue:{value:"false",computed:!1},tags:{},name:"disabled"}],examples:n(796)}},796:function(t,i,n){var s={react:n(1),"./Button.js":n(88)},e=n(126).default.bind(null,s),r=n(127).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Button$0 = require('./Button.js');\nconst Button = Button$0.default || (Button$0['Button'] || Button$0);",e);t.exports=[{type:"markdown",content:"Basic button:"},{type:"code",content:"<Button>Push Me</Button>\n<Button>Click Me</Button>\n<Button>Tap Me</Button>",settings:{padded:!0},evalInContext:r},{type:"markdown",content:"Disabled:"},{type:"code",content:"<Button>Active</Button>\n<Button disabled>Disabled</Button>",settings:{padded:!0},evalInContext:r},{type:"markdown",content:"onClick actions:"},{type:"code",content:"const [isOpen, setisOpen] = React.useState(false);\n\n<div>\n  <Button\n    onClick={() => setisOpen(true)}\n    disabled={isOpen}\n  >\n    Show Me\n  </Button>\n  {isOpen && (\n    <Button onClick={() => setisOpen(false)}>\n      Hide Me\n    </Button>\n  )}\n</div>",settings:{},evalInContext:r}]},797:function(t,i,n){t.exports={doclets:{},displayName:"Card",description:"",methods:[],props:[{type:{name:"string"},required:!1,description:"",tags:{},name:"desc"},{type:{name:"any"},required:!1,description:"",tags:{},name:"img"},{type:{name:"func"},required:!1,description:"",tags:{},name:"onClickMore"},{type:{name:"string"},required:!1,description:"",tags:{},name:"title"}],examples:n(798)}},798:function(t,i,n){var s={"assets/img/demo/demo.jpg":n(184),react:n(1),"./Card.js":n(185)},e=n(126).default.bind(null,s),r=n(127).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Card$0 = require('./Card.js');\nconst Card = Card$0.default || (Card$0['Card'] || Card$0);",e);t.exports=[{type:"markdown",content:"Card component:"},{type:"code",content:"import img from 'assets/img/demo/demo.jpg';\n\n<Card\n  title=\"My title\"\n  desc=\"bla bla bla\"\n  image={img}\n  onClickMore={() => alert('Button clicked!!')}\n/>",settings:{},evalInContext:r}]},799:function(t,i,n){t.exports={doclets:{},displayName:"Img",description:"",methods:[],props:[{type:{name:"string"},required:!0,description:"",tags:{},name:"src"},{type:{name:"string"},required:!1,description:"",defaultValue:{value:"caption",computed:!0},tags:{},name:"alt"},{type:{name:"string"},required:!1,description:"",tags:{},name:"caption"},{type:{name:"string"},required:!1,description:"",tags:{},name:"className"}],examples:n(800)}},800:function(t,i,n){var s={"assets/img/demo/demo.jpg":n(184),react:n(1),"./Img.js":n(89)},e=n(126).default.bind(null,s),r=n(127).default.bind(null,"const React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst Img$0 = require('./Img.js');\nconst Img = Img$0.default || (Img$0['Img'] || Img$0);",e);t.exports=[{type:"markdown",content:"Img component:\n\nHTML componet form [figure](https://www.w3schools.com/tags/tag_figcaption.asp) component."},{type:"code",content:"import img from 'assets/img/demo/demo.jpg';\n\n<Img src={img} />",settings:{},evalInContext:r},{type:"markdown",content:"Img component:"},{type:"code",content:"import img from 'assets/img/demo/demo.jpg';\n\n<Img\n  src={img}\n  alt='Custom alt text'\n  caption='Image caption text'\n/>",settings:{},evalInContext:r}]},88:function(t,i,n){"use strict";n.r(i);var s=n(1),e=n.n(s),r=n(93),a=n.n(r),o=n(132),c=n.n(o);i.default=function(t){var i=t.children,n=t.className,s=void 0===n?"":n,r=t.onClick,o=t.disabled,p=void 0!==o&&o;return e.a.createElement("button",{onClick:r,className:a()(c.a.btn,p&&c.a.btn_disabled,s)},i)}},89:function(t,i,n){"use strict";n.r(i);var s=n(1),e=n.n(s),r=n(93),a=n.n(r),o=n(94),c=n.n(o),p=function(t){var i=t.caption;return i?e.a.createElement("figcaption",{className:c.a.caption},i):null};i.default=function(t){var i=t.src,n=t.className,s=t.caption,r=t.alt,o=void 0===r?s:r;return e.a.createElement("figure",{className:a()(c.a.wrapper,n)},e.a.createElement("img",{src:i,className:c.a.img,alt:o}),e.a.createElement(p,{caption:s}))}},94:function(t,i,n){t.exports={wrapper:"Img_wrapper__G0RnW",img:"Img_img__3MfrQ",caption:"Img_caption__2dGCP"}}},[[202,1,2]]]);