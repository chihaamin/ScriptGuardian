ips.templates.set('core.general.loading', "  &nbsp;<span class='ipsType_light'><i class='icon-spinner2 ipsLoading_tinyIcon'></i>&nbsp;&nbsp;&nbsp;</span> {{text}}</span>");
ips.templates.set('core.general.ajax', "  <div id='elAjaxLoading'><i class='ipsLoading ipsLoading_tiny ipsLoading_dark ipsMargin_right:half'></i> &nbsp;&nbsp;{{#lang}}loading{{/lang}}...</div>");
ips.templates.set('core.general.flashMsg', "  <div id='elFlashMessage'><div class='ipsFlex ipsFlex-ai:center ipsGap:3 ipsGap_row:0'><div data-role='flashMessage' class='ipsFlex-flex:11'></div><div class='ipsFlex-flex:00'><a href='#' data-action='dismissFlashMessage'>&times;</a></div></div></div>");
ips.templates.set('core.hovercard.loading', "  <i class='icon-spinner2 ipsLoading_tinyIcon'></i>");
ips.templates.set('core.posts.spoiler', "  <span class='ipsStyle_spoilerFancy_text'><span class='ipsButton ipsButton_verySmall ipsButton_primary ipsButton_narrow'><i class='fa fa-chevron-right'></i></span> {{#lang}}spoilerClickToReveal{{/lang}}</span>");
ips.templates.set('core.posts.spoilerOpen', "  <span class='ipsStyle_spoilerFancy_text'><span class='ipsButton ipsButton_verySmall ipsButton_primary ipsButton_narrow'><i class='fa fa-chevron-down'></i></span> {{#lang}}spoilerClickToHide{{/lang}}</span>");
ips.templates.set('core.posts.multiQuoteOff', "  <i class='fa fa-plus'></i>");
ips.templates.set('core.posts.multiQuoteOn', "  <i class='fa fa-check'></i>");
ips.templates.set('core.posts.multiQuoter', "  <div id='ipsMultiQuoter' data-commentsContainer='{{commentFeedId}}'>  <button class='ipsButton ipsButton_veryLight ipsButton_small' data-role='multiQuote_{{commentFeedId}}'><i class='fa fa-comments'></i> &nbsp;&nbsp;{{{count}}}</button> &nbsp;&nbsp;<a href='#' data-action='clearQuoted_{{commentFeedId}}'><i class='fa fa-times'></i></a> </div>");
ips.templates.set('core.menus.menuItem', "  <li class='ipsMenu_item {{#checked}}ipsMenu_itemChecked{{/checked}}' data-ipsMenuValue='{{value}}'>  <a href='{{link}}'>{{title}}</a> </li>");
ips.templates.set('core.menus.menuSep', "  <li class='ipsMenu_sep'><hr></li>");
ips.templates.set('core.posts.quotedSpoiler', "  <p><em>{{#lang}}quotedSpoiler{{/lang}}</em></p>");
ips.templates.set('core.postNotify.single', "  <span data-role='newPostNotification' class='ipsType_medium'>  <img src='{{photo}}' alt='' class='ipsUserPhoto ipsUserPhoto_tiny ipsPos_middle'> &nbsp;&nbsp;&nbsp;{{{text}}}  &nbsp;&nbsp;&nbsp;<a href='#' data-action='loadNewPosts'>{{#lang}}showReply{{/lang}}</a> </span>");
ips.templates.set('core.postNotify.multiple', "  <span data-role='newPostNotification' class='ipsType_medium'>  {{text}}  &nbsp;&nbsp;&nbsp;<a href='#' data-action='loadNewPosts'>{{#lang}}showReplies{{/lang}}</a> </span>");
ips.templates.set('core.postNotify.multipleSpillOver', "  <span data-role='newPostNotification' class='ipsType_medium'>  {{text}}  {{#canLoadNew}}   &nbsp;&nbsp;&nbsp;<a href='#' data-action='loadNewPosts'>{{showFirstX}}</a>   &nbsp;&nbsp;&nbsp;<span class='ipsType_light'>{{#lang}}showRepliesOr{{/lang}}</span>  {{/canLoadNew}}  &nbsp;&nbsp;&nbsp;<a href='{{spillOverUrl}}'>{{#lang}}goToNewestPage{{/lang}}</a> </span>");
ips.templates.set('core.notification.flashSingle', "  <a href='{{url}}' data-role='newNotification'>  <div class='ipsFlex ipsFlex-ai:center ipsGap:3 ipsGap_row:0 ipsType_medium ipsType_blendLinks'>   {{#icon}}<div class='ipsFlex-flex:00'><img src='{{icon}}' alt='' class='ipsUserPhoto ipsUserPhoto_tiny'></div>{{/icon}}   <div class='ipsFlex-flex:11 ipsType_left'>    {{text}}    <p class='ipsType_reset ipsType_light ipsTruncate ipsTruncate_line'>{{{body}}}</p>   </div>  </div> </a>");
ips.templates.set('core.notification.flashMultiple', "  <div class='ipsFlex ipsFlex-ai:center ipsGap:3 ipsGap_row:0 ipsType_medium ipsType_blendLinks' data-role='newNotification'>  <span class='ipsFlex-flex:00 ipsType_veryLarge'><i class='fa fa-bell'></i></span>  <div class='ipsFlex-flex:11 ipsType_left'>   {{text}}   <p class='ipsType_reset ipsType_light ipsTruncate ipsTruncate_line'>{{{body}}}</p>  </div> </div>");
ips.templates.set('core.alert.box', " <div class='ipsAlert' style='display: none' role='alertdialog' aria-describedby='{{id}}_message'> {{{icon}}} <div class='ipsAlert_msg ipsType_break' id='{{id}}_message'>  <strong>{{{text}}}</strong>  {{{subtext}}} </div> <ul class='ipsToolList ipsToolList_horizontal ipsPos_center ipsAlert_buttonRow ipsClear ipsClearfix'>  {{{buttons}}} </ul></div>");
ips.templates.set('core.alert.subText', " <div class='ipsType_light ipsType_normal'>{{text}}</div>");
ips.templates.set('core.alert.subTextHtml', " <div class='ipsType_light ipsType_normal'>{{{text}}}</div>");
ips.templates.set('core.alert.icon', " <i class='{{icon}} ipsAlert_icon'></i>");
ips.templates.set('core.alert.button', " <li><button data-action='{{action}}' class='ipsButton ipsButton_fullWidth {{extra}}' role='button'>{{title}}</button></li>");
ips.templates.set('core.alert.prompt', " <br><br><input type='text' value='{{value}}' class='ipsField_fullWidth' data-role='promptValue'><br><br>");
ips.templates.set('core.lightbox.meta', "{{title}}");
ips.templates.set('core.dialog.main', " <div class='{{class}} {{#fixed}}{{class}}_fixed{{/fixed}} {{#size}}{{class}}_{{size}}{{/size}} {{extraClass}}' style='display: none' id='{{id}}' role='dialog' aria-label='{{title}}'> <div>  {{#title}}   <h3 class='{{class}}_title'>{{title}}</h3>   <hr class='ipsHr'>  {{/title}}  {{#close}}   <a href='#' class='{{class}}_close' data-action='dialogClose'>&times;</a>  {{/close}}  <div class='{{class}}_content'>   {{content}}  </div>  <div class='{{class}}_loading {{class}}_large ipsLoading ipsLoading_noAnim' style='display: none'></div> </div></div>")
ips.templates.set('core.tooltip', "  <div id='{{id}}' class='ipsTooltip ipsType_noBreak' role='tooltip'>{{content}}</div>");
ips.templates.set('core.search.loadingPanel', "  <div id='{{id}}' class='ipsLoading' style='min-height: 100px'>  &nbsp; </div>");
ips.templates.set('core.editor.panelWrapper', "  <div id='{{id}}' class='ipsRTE_panel ipsPad'>  {{content}} </div>");
ips.templates.set('core.editor.giphy', " <div class='ipsMenu ipsMenu_wide' id='{{id}}_menu' style='display: none' data-editorID='{{editor}}' data-controller='core.global.editor.giphy'> <div class='ipsMenu_headerBar'>  <div class='ipsGiphy_attribution'><img src='{{attribution_image}}'></div>  <h4 class='ipsType_sectionHead'>   {{#lang}}giphy{{/lang}}  </h4> </div> <div class='ipsMenu_innerContent ipsGiphy_content' data-role='giphyResults'>  <div data-role='giphyLoading'>     </div>  <div class='ipsGiphy_moar' data-role='giphyMore' data-offset='0'>   <div data-role='giphyMoreLoading' class='ipsType_light ipsHide ipsSpacer_bottom'>{{#lang}}giphyMore_loading{{/lang}}</div>  </div> </div> <div class='ipsMenu_footerBar'>  <input type='text' data-role='giphySearch' class='ipsField_fullWidth' placeholder='{{#lang}}giphyFind{{/lang}}'> </div></div>");
ips.templates.set('core.editor.giphyThumb', "  <div class='ipsGiphy_thumb'><img src=\"{{thumb}}\" class=\"ipsGiphyImage\" data-url=\"{{url}}\" alt='{{title}}' title='{{title}}'></div>");
ips.templates.set('core.editor.giphyRow', "  <div class='ipsGiphy_row'>{{{gifs}}}</div>");
ips.templates.set('core.editor.pixabayThumb', "  <div class='ipsPixabay_thumb'><img src=\"{{thumb}}\" class=\"ipsPixabayImage\" data-url=\"{{url}}\" data-id=\"{{imgid}}\"></div>");
ips.templates.set('core.editor.pixabayRow', "  <div class='ipsPixabay_row'>{{{images}}}</div>");
ips.templates.set('core.editor.emoticons', " <div class='ipsMenu ipsMenu_wide' id='{{id}}_menu' style='display: none' data-editorID='{{editor}}' data-controller='core.global.editor.emoticons'> <div class='ipsMenu_headerBar'>  <p class='ipsType_reset ipsPos_right'>   <a href='#' class='ipsType_blendLinks ipsHide' data-role='skinToneMenu' data-ipsMenu data-ipsMenu-appendTo='#{{id}}_menu' id='{{id}}_tones'>{{#lang}}emoji_skin_tone{{/lang}} <i class='fa fa-caret-down'></i></a>   &nbsp;&nbsp;&nbsp;   <a href='#' class='ipsType_blendLinks ipsHide' data-role='categoryTrigger' data-ipsMenu data-ipsMenu-appendTo='#{{id}}_menu' id='{{id}}_more'>{{#lang}}emoticonCategories{{/lang}} <i class='fa fa-caret-down'></i></a>  </p>  <h4 class='ipsType_sectionHead'>{{#lang}}emoji{{/lang}}</h4>  <ul class='ipsMenu ipsMenu_veryNarrow ipsCursor_pointer' id='{{id}}_tones_menu' role='menu' style='display: none'>   <li class='ipsMenu_title'>{{#lang}}emoji_skin_tone{{/lang}}</li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='none'><a>{{#lang}}emoji_skin_tone_default{{/lang}}</a></li>   <li class='ipsMenu_sep'><hr></li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='light'><a>\uD83C\uDFFB {{#lang}}emoji_skin_tone_light{{/lang}}</a></li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='medium-light'><a>\uD83C\uDFFC {{#lang}}emoji_skin_tone_medium_light{{/lang}}</a></li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='medium'><a>\uD83C\uDFFD {{#lang}}emoji_skin_tone_medium{{/lang}}</a></li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='medium-dark'><a>\uD83C\uDFFE {{#lang}}emoji_skin_tone_medium_dark{{/lang}}</a></li>   <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='dark'><a>\uD83C\uDFFF {{#lang}}emoji_skin_tone_dark{{/lang}}</a></li>  </ul>  <ul data-role='categoryMenu' class='ipsMenu ipsMenu_auto ipsCursor_pointer' id='{{id}}_more_menu' role='menu' style='display: none'>  </ul> </div> <div class='ipsMenu_innerContent'>  <div class='ipsEmoticons_content'>   <div class='ipsEmpty ipsType_center ipsEmoticons_contentLoading' data-role='emojiLoading'>    {{#lang}}loading{{/lang}}...   </div>  </div> </div> <div class='ipsMenu_footerBar'>  <input type='text' data-role='emoticonSearch' class='ipsField_fullWidth' placeholder='{{#lang}}emoticonFind{{/lang}}'> </div></div>");
ips.templates.set('core.editor.emoticonSection', "  <div data-panel='{{id}}'>{{{content}}}</div>");
ips.templates.set('core.editor.emoticonMenu', "  <li class='ipsMenu_item' role='menuitem' data-ipsMenuValue='{{categoryID}}'><a><span class='ipsMenu_itemCount'>{{count}}</span>{{title}}</a></li>");
ips.templates.set('core.editor.emoticonCategory', "  <div class='ipsAreaBackground_light ipsPad_half'><strong>{{title}}</strong></div> <div class='ipsEmoticons_category' data-categoryid='{{categoryID}}'>{{{emoticons}}}</div>");
ips.templates.set('core.editor.emoticonSearch', "  <div class='ipsEmoticons_category'>{{{emoticons}}}</div>");
ips.templates.set('core.editor.emoticonRow', "  <div class='ipsEmoticons_row ipsEmoji'>{{{emoticons}}}</div>");
ips.templates.set('core.editor.emoticonItem', "  <div class='ipsEmoticons_item' data-emoticon='{{tag}}' data-src='{{src}}' data-srcset='{{srcset}}' data-height='{{height}}' data-width='{{width}}' title='{{tag}}'>{{{img}}}</div>");
ips.templates.set('core.editor.emoji', "  <div class='ipsEmoticons_item' title='{{name}}' data-emoji='{{code}}'>{{{display}}}</div>");
ips.templates.set('core.editor.emojiNotNative', "  <div class='ipsEmoticons_item' title='{{name}}' data-emoji='{{code}}'>{{{img}}}</div>");
ips.templates.set('core.editor.emoticonBlank', "  <div class='ipsEmoticons_item'>&nbsp;</div>");
ips.templates.set('core.editor.emoticonNoResults', "  <div class='ipsPad ipsType_center ipsType_light'>{{#lang}}no_results{{/lang}}</div>");
ips.templates.set('core.editor.emojiResult', "  <li class='ipsMenu_item ipsCursor_pointer' title='{{name}}' data-emoji='{{code}}'>  <a><span class='ipsEmoji_result'>{{{emoji}}}</span> <span data-role='shortCode'>{{short_code}}</span></a> </li>");
ips.templates.set('core.editor.quote', "<blockquote class='ipsQuote' data-ipsQuote data-gramm='false'><div class='ipsQuote_citation'>{{citation}}</div><div class='ipsQuote_contents ipsClearfix' data-gramm='false'>{{{contents}}}</div></blockquote>");
ips.templates.set('core.editor.legacyQuoteUpcast', "<div class='ipsQuote_citation'>{{citation}}</div><div class='ipsQuote_contents ipsClearfix' data-gramm='false'>{{{contents}}}</div>");
ips.templates.set('core.editor.citation', "  <div class='ipsQuote_citation ipsQuote_open'>  <a href='#' data-action='toggleQuote'>&nbsp;</a>  {{#contenturl}}   <a class='ipsPos_right' href='{{contenturl}}'><i class='fa fa-share'></i></a>  {{/contenturl}}  {{{citation}}} </div>");
ips.templates.set('core.editor.citationLink', "  <a href='{{baseURL}}?app=core&module=members&controller=profile&id={{userid}}' data-ipsHover data-ipshover-target='{{baseURL}}?app=core&module=members&controller=profile&id={{userid}}&do=hovercard'>{{username}}</a>");
ips.templates.set('core.editor.spoiler', "<div class='ipsSpoiler' data-ipsSpoiler><div class='ipsSpoiler_header'><span>{{#lang}}editorSpoiler{{/lang}}</span></div><div class='ipsSpoiler_contents ipsClearfix'></div></div>");
ips.templates.set('core.editor.legacySpoilerUpcast', "<div class='ipsSpoiler_header'><span>{{#lang}}editorSpoiler{{/lang}}</span></div><div class='ipsSpoiler_contents ipsClearfix' data-gramm='false'>{{{contents}}}</div>");
ips.templates.set('core.editor.spoilerHeader', "  <div class='ipsSpoiler_header ipsSpoiler_closed'>  <a href='#' data-action='toggleSpoiler'>&nbsp;</a>  <span>{{#lang}}spoilerClickToReveal{{/lang}}</span> </div>");
ips.templates.set('core.editor.initLoading', "  <div class='ipsLoading ipsLoading_tiny'>&nbsp;</div>");
ips.templates.set('core.editor.previewLoading', "  <div data-role='previewLoading' class='ipsLoading' style='min-height: 100px'>  &nbsp; </div>");
ips.templates.set('core.editor.stockReplies', " <div class='ipsMenu ipsMenu_wide' id='{{id}}_menu' style='display: none' data-editorID='{{editor}}' data-controller='core.global.editor.stockReplies'> <div class='ipsMenu_headerBar'>  <h4 class='ipsType_sectionHead'>   {{#lang}}editorStoredReplies{{/lang}}  </h4> </div> <div class='ipsStockReplies_content ipsMenu_innerContent'>  <div data-role='stockRepliesLoading' class='ipsLoading'>     </div> </div></div>");
ips.templates.set('core.editor.editorStockRepliesWrap', " <div class='ipsStockReplies_menu'>{{{content}}}</div>");
ips.templates.set('core.editor.editorStockRepliesRow', " <div class='ipsStockReplies_row ipsPad_half' data-templatesId='{{{id}}}'>{{{title}}}</div>");
ips.templates.set('core.attachments.metaInfo', "  <span class='ipsFlex-inline ipsFlex-ai:center ipsFlex-jc:center'><span>{{size}}</span><span>&nbsp;&middot;&nbsp;</span><span>{{downloads}}</span></span> ");
ips.templates.set('core.attachments.attachmentPreview', "  <span class='ipsAttachLink_title'>{{title}}</span><span class='ipsAttachLink_metaInfo'>{{#lang}}attachmentPending{{/lang}}</span> ");
ips.templates.set('core.attachments.fileItemWrapper', "  <div class='ipsUploader__container ipsUploader__container--files'>{{{content}}}</div>");
ips.templates.set('core.attachments.fileItem', "  <div class='ipsUploader__row ipsUploader__row--file ipsAttach ipsContained {{#done}}ipsAttach_done{{/done}}' id='{{id}}' data-role='file' data-fileid='{{id}}' data-filesize='{{sizeRaw}}' data-filekey='{{securityKey}}'>  <div class='ipsUploader__rowPreview ipsType_center' data-role='preview' {{#insertable}}data-action='insertFile'{{/insertable}}>   {{#thumb}}    {{{thumb}}}   {{/thumb}}   <div class='ipsUploader__rowPreview__generic ipsFlex ipsFlex-ai:center ipsFlex-jc:center' {{#thumb}}style='display: none'{{/thumb}}>    <i class='fa fa-{{extIcon}} ipsType_large'></i>   </div>  </div>  <div class='ipsUploader_rowMeta ipsFlex ipsFlex-flex:11 ipsFlex-fd:column ipsFlex-jc:center ipsFlex-ai:start' {{#insertable}}data-action='insertFile'{{/insertable}}>   <h2 class='ipsUploader_rowTitle ipsMargin:none ipsType_reset ipsAttach_title ipsTruncate ipsTruncate_line' data-role='title'>{{title}}</h2>   <p class='ipsDataItem_meta ipsType_medium ipsType_light'>    {{size}} {{#statusText}}&middot; <span class='ipsType_light' data-role='status'>{{statusText}}</span>{{/statusText}}   </p>   {{#status}}<span class='ipsAttachment_progress'><span data-role='progressbar'></span></span>{{/status}}   <div data-role='insert' class='ipsUploader__rowInsert' {{#insertable}}style='display: none'{{/insertable}}>    <a href='#' data-ipsTooltip title='{{#lang}}insertIntoPost{{/lang}}'>     {{#lang}}insert{{/lang}}    </a>   </div>  </div>  {{#supportsDelete}}   <div data-role='deleteFileWrapper' {{#newUpload}}style='display: none'{{/newUpload}}>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' data-role='deleteFile' class='ipsUploader__rowDelete' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>     &times;    </a>   </div>  {{/supportsDelete}}  {{^supportsDelete}}   <div data-role='deleteFileWrapper' style='display: none'>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' class='ipsUploader__rowDelete' data-role='deleteFile' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>&times;</a>   </div>  {{/supportsDelete}} </div>");
ips.templates.set('core.attachments.imageItem', "  <div class='ipsUploader__row ipsUploader__row--image ipsAttach ipsContained {{#done}}ipsAttach_done{{/done}}' id='{{id}}' data-role='file' data-fileid='{{id}}' data-fullsizeurl='{{imagesrc}}' data-thumbnailurl='{{thumbnail}}' data-fileType='image'>  <div class='ipsUploader__rowPreview ipsType_center' data-role='preview' {{#insertable}}data-action='insertFile'{{/insertable}}>   {{#thumb}}    {{{thumb}}}   {{/thumb}}   <div class='ipsUploader__rowPreview__generic ipsFlex ipsFlex-ai:center ipsFlex-jc:center' {{#thumb}}style='display: none'{{/thumb}}>    <i class='fa fa-{{extIcon}} ipsType_large'></i>   </div>  </div>  <div class='ipsUploader_rowMeta ipsFlex ipsFlex-flex:11 ipsFlex-fd:column ipsFlex-jc:center ipsFlex-ai:start' {{#insertable}}data-action='insertFile'{{/insertable}}>   <h2 class='ipsUploader_rowTitle ipsMargin:none ipsType_reset ipsAttach_title ipsTruncate ipsTruncate_line' data-role='title'>{{title}}</h2>   <p class='ipsDataItem_meta ipsType_medium ipsType_light'>    {{size}} {{#statusText}}&middot; <span class='ipsType_light' data-role='status'>{{statusText}}</span>{{/statusText}}   </p>   {{#status}}<span class='ipsAttachment_progress'><span data-role='progressbar'></span></span>{{/status}}   <div data-role='insert' class='ipsUploader__rowInsert' {{#insertable}}style='display: none'{{/insertable}}>    <a href='#' data-ipsTooltip title='{{#lang}}insertIntoPost{{/lang}}'>     {{#lang}}insert{{/lang}}    </a>   </div>  </div>  {{#supportsDelete}}   <div data-role='deleteFileWrapper' {{#newUpload}}style='display: none'{{/newUpload}}>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' data-role='deleteFile' class='ipsUploader__rowDelete' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>     &times;    </a>   </div>  {{/supportsDelete}}  {{^supportsDelete}}   <div data-role='deleteFileWrapper' style='display: none'>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' class='ipsUploader__rowDelete' data-role='deleteFile' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>&times;</a>   </div>  {{/supportsDelete}} </div>");
ips.templates.set('core.attachments.videoItem', "  <div class='ipsUploader__row ipsUploader__row--image ipsAttach ipsContained {{#done}}ipsAttach_done{{/done}}' id='{{id}}' data-role='file' data-fileid='{{id}}' data-fullsizeurl='{{imagesrc}}' data-thumbnailurl='{{thumbnail}}' data-fileType='video' data-mimeType='{{mime}}'>  <div class='ipsUploader__rowPreview ipsType_center' data-role='preview' {{#insertable}}data-action='insertFile'{{/insertable}}>   {{#thumb}}    <video>     <source src='{{{thumb}}}' type='{{mime}}'>    </video>   {{/thumb}}   <div class='ipsUploader__rowPreview__generic ipsFlex ipsFlex-ai:center ipsFlex-jc:center' {{#thumb}}style='display: none'{{/thumb}}>    <i class='fa fa-{{extIcon}} ipsType_large'></i>   </div>  </div>  <div class='ipsUploader_rowMeta ipsFlex ipsFlex-flex:11 ipsFlex-fd:column ipsFlex-jc:center ipsFlex-ai:start' {{#insertable}}data-action='insertFile'{{/insertable}}>   <h2 class='ipsUploader_rowTitle ipsMargin:none ipsType_reset ipsAttach_title ipsTruncate ipsTruncate_line' data-role='title'>{{title}}</h2>   <p class='ipsDataItem_meta ipsType_medium ipsType_light'>    {{size}} {{#statusText}}&middot; <span class='ipsType_light' data-role='status'>{{statusText}}</span>{{/statusText}}   </p>   {{#status}}<span class='ipsAttachment_progress'><span data-role='progressbar'></span></span>{{/status}}   <div data-role='insert' class='ipsUploader__rowInsert' {{#insertable}}style='display: none'{{/insertable}}>    <a href='#' data-ipsTooltip title='{{#lang}}insertIntoPost{{/lang}}'>     {{#lang}}insert{{/lang}}    </a>   </div>  </div>  {{#supportsDelete}}   <div data-role='deleteFileWrapper' {{#newUpload}}style='display: none'{{/newUpload}}>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' data-role='deleteFile' class='ipsUploader__rowDelete' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>     &times;    </a>   </div>  {{/supportsDelete}}  {{^supportsDelete}}   <div data-role='deleteFileWrapper' style='display: none'>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' class='ipsUploader__rowDelete' data-role='deleteFile' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>&times;</a>   </div>  {{/supportsDelete}} </div>");
ips.templates.set('core.attachments.audioItem', "  <div class='ipsUploader__row ipsUploader__row--image ipsAttach ipsContained {{#done}}ipsAttach_done{{/done}}' id='{{id}}' data-role='file' data-fileid='{{id}}' data-fullsizeurl='{{imagesrc}}' data-thumbnailurl='{{thumbnail}}' data-fileType='audio' data-mimeType='{{mime}}'>  <div class='ipsUploader__rowPreview ipsType_center' data-role='preview' {{#insertable}}data-action='insertFile'{{/insertable}}>   {{#thumb}}    <audio src='{{{thumb}}}' type='{{mime}}'>    </audio>   {{/thumb}}   <div class='ipsUploader__rowPreview__generic ipsFlex ipsFlex-ai:center ipsFlex-jc:center' {{#thumb}}style='display: none'{{/thumb}}>    <i class='fa fa-{{extIcon}} ipsType_large'></i>   </div>  </div>  <div class='ipsUploader_rowMeta ipsFlex ipsFlex-flex:11 ipsFlex-fd:column ipsFlex-jc:center ipsFlex-ai:start' {{#insertable}}data-action='insertFile'{{/insertable}}>   <h2 class='ipsUploader_rowTitle ipsMargin:none ipsType_reset ipsAttach_title ipsTruncate ipsTruncate_line' data-role='title'>{{title}}</h2>   <p class='ipsDataItem_meta ipsType_medium ipsType_light'>    {{size}} {{#statusText}}&middot; <span class='ipsType_light' data-role='status'>{{statusText}}</span>{{/statusText}}   </p>   {{#status}}<span class='ipsAttachment_progress'><span data-role='progressbar'></span></span>{{/status}}   <div data-role='insert' class='ipsUploader__rowInsert' {{#insertable}}style='display: none'{{/insertable}}>    <a href='#' data-ipsTooltip title='{{#lang}}insertIntoPost{{/lang}}'>     {{#lang}}insert{{/lang}}    </a>   </div>  </div>  {{#supportsDelete}}   <div data-role='deleteFileWrapper' {{#newUpload}}style='display: none'{{/newUpload}}>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' data-role='deleteFile' class='ipsUploader__rowDelete' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>     &times;    </a>   </div>  {{/supportsDelete}}  {{^supportsDelete}}   <div data-role='deleteFileWrapper' style='display: none'>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' class='ipsUploader__rowDelete' data-role='deleteFile' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'>&times;</a>   </div>  {{/supportsDelete}} </div>");
ips.templates.set('core.attachments.imageItemWrapper', "  <div class='ipsGrid ipsGrid_collapsePhone' data-ipsGrid data-ipsGrid-minItemSize='150' data-ipsGrid-maxItemSize='250'>{{{content}}}</div>");
ips.templates.set('core.autocomplete.field', "  <div class='ipsField_autocomplete' id='{{id}}_wrapper' role='combobox' aria-autocomplete='list' aria-owns='{{id}}_results'>  <span class='ipsField_autocomplete_loading' style='display: none' id='{{id}}_loading'></span>  <ul class='ipsList_inline' role='listbox'><li id='{{id}}_inputItem' role='option'>{{content}}</li></ul> </div>");
ips.templates.set('core.autocomplete.addToken', "  <a href='#' data-action='addToken'><i class='fa fa-plus'></i> {{text}}</a> ");
ips.templates.set('core.autocomplete.resultWrapper', "  <div class='ipsAutocompleteMenu' id='{{id}}_results' aria-expanded='false' style='display: none'>  <ul class='ipsAutocompleteMenu_itemWrapper ipsList_reset' role='listbox' aria-expanded='false' data-role='items'></ul> </div>");
ips.templates.set('core.autocomplete.searchTypeAhead', "  <div class='ipsPad_half ipsAreaBackground' data-role='autocompleteSearch'>  <div class='ipsClearfix'>   <input type='search' name='autocompleteSearch' placeholder='{{#lang}}autocomplete_search_placeholder{{/lang}}'>  </div> </div>");
ips.templates.set('core.autocomplete.resultItem', "  <li class='ipsAutocompleteMenu_item' data-value='{{value}}' role='option'>  <div class='ipsClearfix'>   {{html}}  </div> </li>");
ips.templates.set('core.autocomplete.tagsResultItem', "  <li class='ipsAutocompleteMenu_item' data-value='{{value}}' role='option'>  <div class='ipsClearfix'>   {{html}}   {{#recommended}}    <span class='ipsPos_right ipsType_success'>{{#lang}}tag_recommended{{/lang}}   {{/recommended}}  </div> </li>");
ips.templates.set('core.autocomplete.token', "  <li class='cToken' data-value='{{value}}' role='option'>  {{{title}}} <span class='cToken_close' data-action='delete'>&times;</span> </li>");
ips.templates.set('core.autocomplete.memberItem', "  <li class='ipsAutocompleteMenu_item ipsClearfix' data-value=\"{{value}}\" role='option'>  <div class='ipsPhotoPanel ipsPhotoPanel_tiny'>   <span class='ipsUserPhoto ipsUserPhoto_tiny'><img src='{{{photo}}}' loading='lazy'></span>   <div>    <strong>{{{name}}}</strong><br>    <span class='ipsType_light'>{{{extra}}}</span>   </div>  </div> </li>");
ips.templates.set('core.autocomplete.optional', "  <a href='#' data-action='showAutocomplete' class='ipsButton ipsButton_light ipsButton_verySmall'>{{langString}}...</a>");
ips.templates.set('core.forms.toggle', "  <span class='ipsToggle {{className}}' id='{{id}}' tabindex='0' role='switch' aria-checked='{{status}}'>  <span data-role='status'></span> </span>");
ips.templates.set('core.forms.validationWrapper', "  <ul id='{{id}}' class='ipsList_reset ipsType_small ipsForm_errorList'>{{content}}</ul>");
ips.templates.set('core.forms.validationItem', "  <li class='ipsType_warning'>{{message}}</li>");
ips.templates.set('core.forms.advicePopup', "<div class='ipsHovercard' data-role='advicePopup' id='elPasswordAdvice_{{id}}'> <div class='ipsPad'>  <h2 class='ipsType_sectionHead'>{{#lang}}password_advice_title{{/lang}}</h2>  <p class='ipsSpacer_top ipsSpacer_half ipsType_reset ipsType_medium'>   {{#min}}    {{min}}    {{/min}}   {{{text}}}  </p> </div> <span class='ipsHovercard_stem'></span></div>");
ips.templates.set('core.forms.validateOk', "<span> <i class='fa fa-check-circle ipsType_success'></i></span>");
ips.templates.set('core.forms.validateFail', "<span data-ipsTooltip data-ipsTooltip-label='{{message}}'> <i class='fa fa-times-circle ipsType_warning'></i></span>");
ips.templates.set('core.forms.validateFailText', "<p class='ipsType_reset ipsSpacer_top ipsSpacer_half ipsType_warning'> <i class='fa fa-times-circle'></i> {{message}}</p>");
ips.templates.set('core.truncate.expand', "  <a class='ipsTruncate_more' data-action='expandTruncate'><span>{{text}} &nbsp;<i class='fa fa-caret-down'></i></span></a>");
ips.templates.set('core.selectTree.token', " <li><span class='ipsSelectTree_token cToken' data-nodeID='{{id}}'>{{title}}</span></li>");
ips.templates.set('core.accessibility.border', " <div id='ipsAccessibility_border'></div>");
ips.templates.set('core.accessibility.arrow', " <div id='ipsAccessibility_arrow'></div>");
ips.templates.set('core.infScroll.loading', "  <li class='ipsPad ipsType_center' data-role='infScroll_loading'>  {{#lang}}loading{{/lang}}... </li>");
ips.templates.set('core.infScroll.pageBreak', "  <li class='ipsPad_half ipsAreaBackground' data-role='infScroll_break' data-infScrollPage='{{page}}'>  {{#lang}}page{{/lang}} {{page}} </li>");
ips.templates.set('core.pageAction.actionMenuItem', "  <li data-role='actionMenu' data-action='{{action}}' id='{{id}}_{{action}}' data-ipsMenu data-ipsMenu-above='force' data-ipsMenu-appendTo='#{{id}}_bar' data-ipsMenu-activeClass='ipsPageAction_active' data-ipsTooltip title='{{title}}' class='ipsHide'>  {{#icon}}   <i class='fa fa-{{icon}} ipsPageAction_icon'></i> <i class='fa fa-caret-up'></i>  {{/icon}}  {{^icon}}   <span class='ipsPageAction_text'>{{title}} <i class='fa fa-caret-up'></i></span>  {{/icon}}  <ul id='{{id}}_{{action}}_menu' class='ipsMenu ipsMenu_auto' style='display: none'>   {{{menucontent}}}  </ul> </li>");
ips.templates.set('core.pageAction.actionItem', "  <li data-role='actionButton' data-action='{{action}}' id='{{id}}_{{action}}' data-ipsTooltip title='{{title}}'>  {{#icon}}   <i class='fa fa-{{icon}} ipsPageAction_icon' data-ipsTooltip='{{title}}'></i></i>  {{/icon}}  {{^icon}}   <span class='ipsPageAction_text'>{{title}}</span>  {{/icon}} </li>");
ips.templates.set('core.pageAction.wrapper', "  <div class='ipsPageAction' data-role='actionBar' id='{{id}}_bar'>  <ul class='ipsList_inline ipsList_reset' data-role='actionItems'>   <li>{{{selectedLang}}}</li>   {{{content}}}  </ul> </div>");
ips.templates.set('core.carousel.bulletWrapper', " <ul class='ipsCarousel_bullets'>{{content}}</ul>");
ips.templates.set('core.carousel.bulletItem', " <li><i class='fa fa-circle'></i></li>");
ips.templates.set('core.rating.wrapper', " <div class='ipsClearfix ipsRating'>  <ul class='{{className}}' data-role='ratingList'>   {{{content}}}  </ul> </div> <span data-role='ratingStatus' class='ipsType_light ipsType_medium'>{{status}}</span>")
ips.templates.set('core.rating.star', " <li class='{{className}}' data-ratingValue='{{value}}'><a href='#'><i class='fa fa-star'></i></a></li>");
ips.templates.set('core.rating.halfStar', " <li class='ipsRating_half' data-ratingValue='{{value}}'><i class='fa fa-star-half'></i><i class='fa fa-star-half fa-flip-horizontal'></i></li>");
ips.templates.set('core.rating.loading', " <i class='icon-spinner2 ipsLoading_tinyIcon'></span>");
ips.templates.set('core.sidebar.managerWrapper', "  <div id='elSidebarManager' data-role='manager' class='ipsToolbox ipsScrollbar ipsHide'>  <div class='ipsPad'>   <h3 class='ipsToolbox_title ipsType_reset'>{{#lang}}sidebarManager{{/lang}}</h3>   <p class='ipsType_light'>{{#lang}}sidebarManagerDesc{{/lang}}</p>   <p class='ipsType_light'>{{#lang}}sidebarManagerDesc2{{/lang}}</p>   <div data-role='availableBlocks' class='ipsLoading ipsLoading_dark'></div>  </div>  <div id='elSidebarManager_submit' class='ipsPad'>   <button class='ipsButton ipsButton_important ipsButton_medium ipsButton_fullWidth' data-action='closeSidebar'>{{#lang}}finishEditing{{/lang}}</button>  </div> </div>");
ips.templates.set('core.sidebar.blockManage', "  <div class='cSidebarBlock_managing ipsType_center'>  <h4>{{title}}</h4>  <a href='#' data-action='removeBlock' data-ipsTooltip title='{{#lang}}removeBlock{{/lang}}'><i class='fa fa-times'></i></a>  <button data-ipsMenu data-ipsMenu-closeOnClick='false' id='{{id}}_edit' data-action='manageBlock' class='ipsButton ipsButton_primary'>   <i class='fa fa-pencil'></i> &nbsp;{{#lang}}editBlock{{/lang}}  </button>  <div class='ipsMenu ipsMenu_wide ipsHide' id='{{id}}_edit_menu'>  </div> </div>");
ips.templates.set('core.sidebar.blockManageNoConfig', "  <div class='cSidebarBlock_managing ipsType_center'>  <h4>{{title}}</h4>  <a href='#' data-action='removeBlock' data-ipsTooltip title='{{#lang}}removeBlock{{/lang}}'><i class='fa fa-times'></i></a> </div>");
ips.templates.set('core.sidebar.blockIsEmpty', "  <div class='ipsWidgetBlank ipsPad'>  {{text}} </div>");
ips.templates.set('core.follow.loading', " <div class='ipsLoading ipsLoading_tiny'></div>");
ips.templates.set('core.statuses.loadingComments', "  <i class='icon-spinner2 ipsLoading_tinyIcon'></i> &nbsp;<span class='ipsType_light'> &nbsp;{{#lang}}loadingComments{{/lang}}</span>");
ips.templates.set('core.forms.stack', "  <li class='ipsField_stackItem' data-role='stackItem'>  <span class='ipsField_stackDrag ipsDrag' data-action='stackDrag'>   <i class='fa fa-bars ipsDrag_dragHandle'></i>  </span>  <a href='#' class='ipsField_stackDelete ipsCursor_pointer' data-action='stackDelete'>   &times;  </a>  <div data-ipsStack-wrapper>   {{{field}}}  </div> </li>");
ips.templates.set('core.pollEditor.question', "  <div class='ipsAreaBackground_light ipsBox ipsBox_transparent' data-role='question' data-questionID='{{questionID}}'>  <div class='ipsAreaBackground ipsPad'>   <input type='text' data-role='questionTitle' name='{{pollName}}[questions][{{questionID}}][title]' placeholder='{{#lang}}questionPlaceholder{{/lang}}' class='ipsField_fullWidth' value='{{question}}'>  </div>  <div>   <ul class='ipsDataList cPollChoices' data-role='choices'>    <li class='ipsDataItem ipsResponsive_hidePhone'>     <p class='ipsDataItem_generic ipsDataItem_size1'>&nbsp;</p>     <p class='ipsDataItem_main'><strong>{{#lang}}choicesTitle{{/lang}}</strong></p>     {{#showCounts}}      <p class='ipsDataItem_generic ipsDataItem_size4'><strong>{{#lang}}votesTitle{{/lang}}</strong></p>     {{/showCounts}}     <p class='ipsDataItem_generic ipsDataItem_size1'>&nbsp;</p>    </li>    {{{choices}}}   </ul>   <br>   <div class='ipsDataList'>    <p class='ipsDataItem_generic ipsDataItem_size1'>&nbsp;</p>    <ul class='ipsDataItem_main ipsList_inline ipsPadding_right:half'>     {{#removeQuestion}}<li class='ipsPos_right'><a href='#' data-action='removeQuestion' class='ipsButton ipsButton_verySmall ipsButton_link ipsButton_link--negative'>{{#lang}}removeQuestion{{/lang}}</a></li>{{/removeQuestion}}     <li><a href='#' data-action='addChoice' class='ipsButton ipsButton_verySmall ipsButton_link'>{{#lang}}addChoice{{/lang}}</a></li>     <li>      <span class='ipsCustomInput'>       <input type='checkbox' id='elPoll_{{pollName}}_{{questionID}}multi' name='{{pollName}}[questions][{{questionID}}][multichoice]' {{#multiChoice}}checked{{/multiChoice}}>       <span></span>      </span> <label for='elPoll_{{pollName}}_{{questionID}}multi'>{{#lang}}multipleChoiceQuestion{{/lang}}</label></li>     </li>    </ul>   </div>  </div> </div>");
ips.templates.set('core.pollEditor.choice', "  <li class='ipsDataItem' data-choiceID='{{choiceID}}'>  <div class='ipsDataItem_generic ipsDataItem_size1 cPollChoiceNumber ipsType_right ipsType_normal'>   <strong data-role='choiceNumber'>{{choiceID}}</strong>  </div>  <div class='ipsDataItem_main'>   <input type='text' name='{{pollName}}[questions][{{questionID}}][answers][{{choiceID}}][value]' value='{{choiceTitle}}' class='ipsField_fullWidth'>  </div>  <div class='ipsDataItem_generic ipsDataItem_size1'>   <a href='#' data-action='removeChoice' class='ipsButton ipsButton_verySmall ipsButton_link ipsButton_link--negative ipsButton_narrow'><i class='fa fa-times'></i></a>  </div> </li>");
ips.templates.set('core.coverPhoto.controls', "  <ul class='ipsList_reset ipsFlex ipsFlex-ai:center ipsGap:1' data-role='coverPhotoControls'>  <li><a href='#' class='ipsButton ipsButton_overlaid ipsButton_small' data-action='cancelPosition'><i class='fa fa-times'></i> {{#lang}}cancel{{/lang}}</a></li>  <li><a href='#' class='ipsButton ipsButton_veryLight ipsButton_small' data-action='savePosition'><i class='fa fa-check'></i> {{#lang}}save_position{{/lang}}</a></li> </ul>");
ips.templates.set('core.patchwork.imageList', "  {{#showThumb}}  <li class='cGalleryPatchwork_item' style='width: {{dims.width}}px; height: {{dims.height}}px; margin: {{dims.margin}}px {{dims.marginRight}}px {{dims.margin}}px {{dims.marginLeft}}px'> {{/showThumb}} {{^showThumb}}  <li class='cGalleryPatchwork_item ipsNoThumb ipsNoThumb_video' style='width: {{dims.width}}px; height: {{dims.height}}px; margin: {{dims.margin}}px {{dims.marginRight}}px {{dims.margin}}px {{dims.marginLeft}}px'> {{/showThumb}}  <a href='{{image.url}}'>   {{#showThumb}}<img src='{{image.src}}' alt='{{image.title}}' class='cGalleryPatchwork_image'>{{/showThumb}}   <div class='ipsPhotoPanel ipsPhotoPanel_mini'>    <img src='{{image.author.photo}}' class='ipsUserPhoto ipsUserPhoto_mini'>    <div>     <span class='ipsType_normal ipsTruncate ipsTruncate_line'>{{image.caption}}</span>     <span class='ipsType_small ipsTruncate ipsTruncate_line'>{{#lang}}by{{/lang}} {{image.author.name}}</span>    </div>   </div>   <ul class='ipsList_inline cGalleryPatchwork_stats'>    {{#image.unread}}     <li class='ipsPos_left'>      <span class='ipsItemStatus ipsItemStatus_small' data-ipsTooltip title='{{image.unread}}'><i class='fa fa-circle'></i></span>     </li>    {{/image.unread}}    {{#image.hasState}}     <li class='ipsPos_left'>      {{#image.state.hidden}}       <span class='ipsBadge ipsBadge_icon ipsBadge_small ipsBadge_warning' data-ipsTooltip title='{{#lang}}hidden{{/lang}}'><i class='fa fa-eye-slash'></i></span>      {{/image.state.hidden}}      {{#image.state.pending}}       <span class='ipsBadge ipsBadge_icon ipsBadge_small ipsBadge_warning' data-ipsTooltip title='{{#lang}}pending{{/lang}}'><i class='fa fa-warning'></i></span>      {{/image.state.pending}}      {{#image.state.pinned}}       <span class='ipsBadge ipsBadge_icon ipsBadge_small ipsBadge_positive' data-ipsTooltip title='{{#lang}}pinned{{/lang}}'><i class='fa fa-thumb-tack'></i></span>      {{/image.state.pinned}}      {{#image.state.featured}}       <span class='ipsBadge ipsBadge_icon ipsBadge_small ipsBadge_positive' data-ipsTooltip title='{{#lang}}featured{{/lang}}'><i class='fa fa-star'></i></span>      {{/image.state.featured}}     </li>    {{/image.hasState}}    {{#image.allowComments}}     <li class='ipsPos_right' data-commentCount='{{image.comments}}'><i class='fa fa-comment'></i> {{image.comments}}</li>    {{/image.allowComments}}   </ul>  </a>  {{#image.modActions}}   <input type='checkbox' data-role='moderation' name='moderate[{{image.id}}]' data-actions='{{image.modActions}}' data-state='{{image.modStates}}'>  {{/image.modActions}} </li>");
ips.templates.set('core.editor.preferences', "  <div id='editorPreferencesPanel' class='ipsPad'>  <div class='ipsMessage ipsMessage_info'>    {{#lang}}papt_warning{{/lang}}   </div>   <br>   <ul class='ipsForm ipsForm_vertical'>    <li class='ipsFieldRow ipsClearfix'>     <div class='ipsFieldRow_content'>      <input type='checkbox' {{#checked}}checked{{/checked}} name='papt' id='papt'>      <label for='papt'>{{#lang}}papt_label{{/lang}}</label>     </div>    </li>   </ul>   <div class='ipsPadding_top:half ipsType_center'>    <button role='button' class='ipsButton ipsButton_medium ipsButton_primary' id='papt_submit'>{{#lang}}save_preference{{/lang}}</button>   </div>  </div> ");
ips.templates.set('core.pagination', "  <ul class='ipsPagination' data-ipsPagination data-ipsPagination-pages='{{pages}}'>  <li class='ipsPagination_prev'>   <a href='#' data-page='prev'><i class='fa fa-caret-left'></i> {{#lang}}prev_page{{/lang}}</a>  </li>  <li class='ipsPagination_next'>   <a href='#' data-page='next'>{{#lang}}next_page{{/lang}} <i class='fa fa-caret-right'></i></a>  </li> </ul>");
ips.templates.set('core.selection.quote', "  <div class='ipsTooltip ipsTooltip_{{direction}} ipsComment_inlineQuoteTooltip' data-role='inlineQuoteTooltip'>     <a href='#' data-action='quoteSelection' class='ipsButton ipsButton_veryVerySmall ipsButton_veryLight'>   {{#lang}}quote_selected_text{{/lang}}     </a>    </div>");
ips.templates.set('core.contentItem.resultItem', "  <li class='ipsAutocompleteMenu_item' data-id='{{{id}}}' role='option' role='listitem'>  <div class='ipsClearfix'>   {{{html}}}  </div> </li>");
ips.templates.set('core.contentItem.field', "  <div class='ipsField_autocomplete' id='{{id}}_wrapper' role='combobox' aria-autocomplete='list' aria-owns='{{id}}_results'>  <span class='ipsField_autocomplete_loading' style='display: none' id='{{id}}_loading'></span>  <ul class='ipsList_inline'><li id='{{id}}_inputItem'>{{content}}</li></ul> </div>");
ips.templates.set('core.contentItem.resultWrapper', "  <div class='ipsAutocompleteMenu' id='{{id}}_results' aria-expanded='false' style='display: none'>  <ul class='ipsAutocompleteMenu_itemWrapper ipsList_reset' data-role='items'></ul> </div>");
ips.templates.set('core.contentItem.item', "  <li data-id='{{id}}'>  <span class='cContentItem_delete' data-action='delete'>&times;</span> {{{html}}}  </li>");
ips.templates.set('promote.imageUpload', "  <div class='ipsGrid_span4 cPromote_attachImage' id='{{id}}' data-role='file' data-fileid='{{id}}' data-fullsizeurl='{{imagesrc}}' data-thumbnailurl='{{thumbnail}}' data-fileType='image'>  <div class='ipsThumb ipsThumb_bg' data-role='preview' {{#thumbnail}}style='background-image: url( \"{{thumbnail_for_css}}\" )'{{/thumbnail}}>   {{#thumbnail}}<img src='{{thumbnail}}' class='ipsImage'>{{/thumbnail}}  </div>  <ul class='ipsList_inline ipsImageAttach_controls'>   <li class='ipsPos_right' {{#newUpload}}style='display: none'{{/newUpload}} data-role='deleteFileWrapper'>    <input type='hidden' name='{{field_name}}_keep[{{id}}]' value='1'>    <a href='#' data-role='deleteFile' class='ipsButton ipsButton_verySmall ipsButton_light' data-ipsTooltip title='{{#lang}}attachRemove{{/lang}}'><i class='fa fa-trash-o'></i></a>   </li>  </ul>  <span class='ipsAttachment_progress'><span data-role='progressbar'></span></span> </div>");
ips.templates.set('table.row.loading', "  <li class='ipsDataItem ipsDataItem_loading'>  <div>   <span></span>   <span style='margin-right: {{rnd}}%'></span>  </div> </li>");
ips.templates.set('licenseRenewal.wrapper', "  <div class='acpLicenseRenewal' data-role='licenseRenewal'>  <div class='acpLicenseRenewal_wrap'>   <div class='acpLicenseRenewal_inner'>    <div class='acpLicenseRenewal_content'>     <h1 class='acpLicenseRenewal_mainTitle' data-role='mainTitle'>{{#lang}}licenseRenewalTitle{{/lang}}</h1>     <p class='ipsType_normal'>{{#lang}}licenseRenewalText{{/lang}}</p>     <span class='ipsCustomInput'><input type='checkbox' checked='checked' name='hideRenewalNotice' id='hideRenewalNotice'><span></span></span> <label for='hideRenewalNotice'>{{#lang}}licenseRenewalCheckbox{{/lang}}</label>    </div>    <ul class='ipsPad ipsToolList ipsToolList_horizontal ipsPos_center ipsList_reset ipsClearfix ipsAreaBackground'>     <li>      <a href='#' class='ipsButton ipsButton_medium ipsButton_veryLight ipsButton_fullWidth' data-action='closeLicenseRenewal'>{{#lang}}licenseRenewalNo{{/lang}}</a>     </li>     <li>      <a href='#' class='ipsButton ipsButton_medium ipsButton_primary ipsButton_fullWidth' data-role='survey' data-action='closeLicenseRenewal' target='_blank'>{{#lang}}licenseRenewalYes{{/lang}}</a>     </li>    </ul>   </div>  </div> </div>");
ips.templates.set('core.browserNotification.prompt', " <div class='cNotifcationPrompt'>  <div class='ipsPadding'>   <div class='ipsPhotoPanel ipsPhotoPanel_mini'>    <span class='cNotifcationPrompt_icon ipsPos_left'></span>    <div>     <a href='#' class='cNotifcationPrompt_dismiss' data-role=\"dismissNotification\">×</a>     <h3 class='cNotifcationPrompt_title ipsType_large ipsType_sectionHead'>{{#lang}}notificationsCallout{{/lang}}</h3>     <p class='cNotifcationPrompt_text ipsType_reset ipsType_medium ipsSpacer_top ipsSpacer_half'>      {{#lang}}notificationsDefaultBlurb{{/lang}}     </p>     <div class='ipsFlex ipsFlex-ai:center ipsGap:2 ipsMargin_top'>      <button data-action='browserNotificationPrompt' class='ipsButton ipsButton_small ipsButton_veryLight ipsButton_fullWidth'>{{#lang}}notificationsAllow{{/lang}}</button>     </div>     <p class='ipsType_small ipsSpacer_both ipsSpacer_half ipsHide' data-role='promptMessage'>      {{#lang}}notificationsAllowPrompt{{/lang}}     </p>    </div>   </div>  </div> </div>");
ips.templates.set('core.browserNotification.missingSubscription', " <div class='cNotifcationPrompt'>  <div class='ipsPadding'>   <div class='ipsPhotoPanel ipsPhotoPanel_mini'>    <span class='cNotifcationPrompt_icon ipsPos_left'></span>    <div>     <a href='#' class='cNotifcationPrompt_dismiss' data-role=\"dismissNotification\">×</a>     <h3 class='cNotifcationPrompt_title ipsType_large ipsType_sectionHead'>{{#lang}}notificationsCalloutPush{{/lang}}</h3>     <p class='cNotifcationPrompt_text ipsType_reset ipsType_medium ipsMargin_vertical:half'>      {{#lang}}notificationsDefaultBlurb{{/lang}}     </p>     <p class='cNotifcationPrompt_text ipsType_reset ipsType_small ipsMargin_vertical:half'>      {{#lang}}notificationsUpgradeBlurb{{/lang}}     </p>     <div class='ipsFlex ipsFlex-ai:center ipsGap:4 ipsGap_row:0 ipsMargin_top ipsType_blendLinks'>      <button data-action='browserNotificationPrompt' class='ipsButton ipsButton_small ipsButton_veryLight ipsButton_fullWidth'>{{#lang}}notificationsAllow{{/lang}}</button>      <a href='#' data-action='rejectPush' class='ipsFlex-flex:00'>{{#lang}}notificationsNoThanks{{/lang}}</a>     </div>     <p class='ipsType_small ipsSpacer_both ipsSpacer_half ipsHide' data-role='promptMessage'>      {{#lang}}notificationsAllowPrompt{{/lang}}     </p>    </div>   </div>  </div> </div>");
ips.templates.set('core.notifications.pending', " <span class='ipsType_light'>{{#lang}}notificationsEnabling{{/lang}}</span>");
ips.templates.set('core.notifications.success', " <span class='ipsType_success'><i class='fa fa-fw fa-check'></i> {{#lang}}notificationsEnabled{{/lang}}</span>");
ips.templates.set('core.notifications.fail', " <span class='ipsType_negative'><i class='fa fa-fw fa-times'></i> {{#lang}}notificationsFailed{{/lang}}</span>");
ips.templates.set('core.notifications.notSupported', " <span class='ipsType_light'><i class='fa fa-fw fa-times'></i> {{#lang}}notificationsNotSupported{{/lang}}</span>");
ips.templates.set('core.notifications.checking', " <span class='ipsType_light'>{{#lang}}notificationsChecking{{/lang}}</span>");
ips.templates.set('system.warningpenalty.nomodify', " <ul class='ipsList_bullets' id='elWarningPenalties'>  {{#penalties}}  <li>{{.}}</li>  {{/penalties}} </ul>");
ips.templates.set('core.edittags.default', " <div class='ipsPad'>  <span><i class='icon-spinner2 ipsLoading_tinyIcon'></i>  &nbsp;{{#lang}}loading{{/lang}}</span> </div>");
ips.templates.set('core.onlineUser.linked', "<li> <a href='{{memberUrl}}' data-ipsHover data-ipsHover-target='{{memberHovercardUrl}}'>{{{formattedName}}}</a></li>");
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.controller', function() {
        var _controllers = {}
          , _autoMixins = {}
          , _manualMixins = {}
          , _mixins = {}
          , _beingLoaded = []
          , _queue = {}
          , _prototypes = {}
          , instanceID = 1
          , _controllerCaseMap = {
            'core.front.core.autosizeiframe': 'core.front.core.autoSizeIframe'
        };
        var register = function(id, definition) {
            _controllers[id] = definition;
            _checkQueue(id);
        }
          , isRegistered = function(id) {
            return !_.isUndefined(_controllers[id]);
        }
          , init = function() {
            $(document).on('contentChange', function(e, newNode) {
                initializeControllers(newNode);
            });
            initializeControllers();
        }
          , mixin = function(mixinName, controller, auto, mixinFunc) {
            if (_.isFunction(auto)) {
                mixinFunc = auto;
                auto = false;
            }
            var obj = (auto) ? _autoMixins : _manualMixins;
            if (_.isUndefined(obj[controller])) {
                obj[controller] = {};
            }
            obj[controller][mixinName] = mixinFunc;
        }
          , initializeControllers = function(node) {
            var controllers = _findControllers(node);
            var needsLoading = {};
            for (var controller in controllers) {
                if (isRegistered(controller)) {
                    for (var i = 0; i < controllers[controller].length; i++) {
                        var elem = controllers[controller][i]['elem'];
                        var mixins = controllers[controller][i]['mixins'];
                        initControllerOnElem(elem, controller, mixins);
                    }
                } else {
                    needsLoading[controller] = controllers[controller];
                }
            }
            if (_.size(needsLoading)) {
                _loadControllers(needsLoading).done(function() {});
            }
        }
          , _checkQueue = function(id) {
            if (_queue[id] && _queue[id].length) {
                for (var i = 0; i < _queue[id].length; i++) {
                    initControllerOnElem(_queue[id][i]['elem'], id, _queue[id][i]['mixins']);
                }
                delete _queue[id];
            }
            if (_.indexOf(_beingLoaded, id)) {
                delete _beingLoaded[_.indexOf(_beingLoaded, id)];
            }
        }
          , _loadControllers = function(needsLoading) {
            var filePaths = [];
            var deferred = $.Deferred();
            for (var controller in needsLoading) {
                if (_.indexOf(_beingLoaded, controller) !== -1) {
                    delete needsLoading[controller];
                    continue;
                }
                _beingLoaded.push(controller);
                filePaths.push(_buildFilePath(controller));
            }
            if (!_.size(needsLoading)) {
                deferred.resolve();
                return deferred.promise();
            }
            _.extend(_queue, needsLoading);
            ips.loader.get(filePaths).then(function() {
                deferred.resolve();
            });
            return deferred.promise();
        }
          , _buildFilePath = function(controllerName) {
            var bits = controllerName.split('.');
            if (ips.getSetting('useCompiledFiles') === false) {
                return bits[0] + '/' + bits[1] + '/controllers/' + bits[2] + '/ips.' + bits[2] + '.' + bits[3] + '.js';
            } else {
                try {
                    var url = ipsJavascriptMap[bits[0]][bits[1] + '_' + bits[2]];
                    if (url.indexOf('?') != -1) {
                        return url + '&v=' + ips.getSetting('jsAntiCache');
                    } else {
                        return url + '?v=' + ips.getSetting('jsAntiCache');
                    }
                } catch (err) {
                    return '';
                }
            }
        }
          , _findControllers = function(node) {
            if (!_.isElement(node) && !(node instanceof jQuery)) {
                node = document;
            }
            var controllersToLoad = {};
            $(node).find('[data-controller]').addBack().each(function(idx, elem) {
                if (!$(elem).data('_controllers')) {
                    $(elem).data('_controllers', []);
                }
                var controllerString = $(elem).data('controller')
                  , controllerList = $(elem).data('_controllers');
                if (controllerString) {
                    _getControllersAndMixins(controllerString);
                    var controllers = _getControllersAndMixins(controllerString);
                    if (_.size(controllers)) {
                        _.each(controllers, function(val, key) {
                            if (controllerList.length && _.indexOf(controllerList, key) !== -1) {
                                return;
                            }
                            if (controllersToLoad[key]) {
                                controllersToLoad[key].push({
                                    elem: elem,
                                    mixins: val
                                });
                            } else {
                                controllersToLoad[key] = [{
                                    elem: elem,
                                    mixins: val
                                }];
                            }
                        });
                    }
                }
            });
            return controllersToLoad;
        }
          , _getControllersAndMixins = function(controllerString) {
            var controllers = {};
            var pieces = controllerString.split(',');
            for (var i = 0; i < pieces.length; i++) {
                pieces[i] = pieces[i].trim();
                if (!_.isUndefined(_controllerCaseMap[pieces[i]])) {
                    pieces[i] = _controllerCaseMap[pieces[i]];
                }
                if (pieces[i].indexOf('(') === -1) {
                    controllers[pieces[i]] = [];
                    continue;
                }
                var p = pieces[i].match(/([a-zA-Z0-9.]+)\((.+?)\)/i);
                var mixinPieces = [];
                _.each(p[2].split(';'), function(val) {
                    mixinPieces.push(val.trim());
                });
                controllers[p[1]] = mixinPieces;
            }
            return controllers;
        }
          , getInstanceID = function() {
            return 'ipscontroller' + (++instanceID);
        }
          , cleanContentsOf = function(elem) {
            Debug.log('Cleaning contents of controller');
            $(elem).find('[data-controller]').each(function() {
                var loopController = $(this);
                var controllers = loopController.data('_controllerObjs') || [];
                if (controllers.length) {
                    loopController.data('_controllerObjs', []);
                    for (var i = 0; i < controllers.length; i++) {
                        controllers[i]._destroy.apply(controllers[i]);
                        delete controllers[i];
                    }
                }
            });
            ips.ui.destructAllWidgets($(elem));
        }
          , initControllerOnElem = function(elem, controllerID, mixins) {
            if (!_controllers[controllerID]) {
                Debug.error("Controller '" + controllerID + "' has not been registered");
                return;
            }
            if (_.isUndefined($(elem).data('_controllers'))) {
                $(elem).data('_controllers', []);
            }
            $(elem).data('_controllers').push(controllerID);
            if (_.isUndefined(_prototypes[controllerID])) {
                _prototypes[controllerID] = getBaseController();
                $.extend(true, _prototypes[controllerID].prototype, _controllers[controllerID]);
            }
            if (_.isUndefined($(elem).data('_controllerObjs'))) {
                $(elem).data('_controllerObjs', []);
            }
            var controllers = $(elem).data('_controllerObjs');
            var obj = new _prototypes[controllerID](elem,controllerID);
            controllers.push(obj);
            if (!_.isUndefined(_autoMixins[controllerID]) && _.size(_autoMixins[controllerID])) {
                _.each(_autoMixins[controllerID], function(val, key) {
                    _autoMixins[controllerID][key].call(obj);
                });
            }
            if (mixins.length) {
                for (var i = 0; i < mixins.length; i++) {
                    if (!_.isUndefined(_manualMixins[controllerID]) && !_.isUndefined(_manualMixins[controllerID][mixins[i]])) {
                        _manualMixins[controllerID][mixins[i]].call(obj);
                    }
                }
            }
            if (_.isFunction(obj.initialize)) {
                obj.initialize.call(obj);
            }
            $(elem).removeData('_controller' + controllerID);
            $(document).trigger('controllerReady', {
                controllerID: obj.controllerID,
                controllerType: obj.controllerType,
                controllerElem: elem
            });
        }
          , _findSubControllers = function(controller, node) {
            var results = [];
            node = (node && (_.isElement(node) || node.jquery)) ? node : document;
            if (controller.indexOf('*') === -1) {
                results = $(node).find('[data-controller*="' + controller + '"]');
            } else {
                var pieces = controller.split('.');
                if (pieces[0] == '*') {
                    pieces.shift();
                    results = $(node).find('[data-controller$="' + pieces.join('.') + '"]');
                } else if (pieces[pieces.length - 1] == '*') {
                    pieces.pop();
                    results = $(node).find('[data-controller^="' + pieces.join('.') + '"]');
                }
            }
            return results;
        }
          , getBaseController = function() {
            var baseController = function(scope, type) {
                this.controllerType = type;
                this.controllerID = getInstanceID();
                this.scope = $(scope);
                this._eventListeners = [];
                var self = this;
                var adviceFuncs = {
                    before: function(baseFn, newFn) {
                        return function() {
                            newFn.apply(this, arguments);
                            return baseFn.apply(this, arguments);
                        }
                        ;
                    },
                    after: function(baseFn, newFn) {
                        return function() {
                            var toReturn = baseFn.apply(this, arguments);
                            newFn.apply(this, arguments);
                            return toReturn;
                        }
                    },
                    around: function(baseFn, newFn) {
                        return function() {
                            var args = ips.utils.argsToArray(arguments);
                            args.unshift(baseFn.bind(this));
                            return newFn.apply(this, args);
                        }
                    }
                }
                _.each(['before', 'after', 'around'], _.bind(function(type) {
                    this[type] = function(base, fn) {
                        if (_.isUndefined(this[base]) || !_.isFunction(this[base])) {
                            Debug.log("Method '" + base + '" is not present in controller ' + this.controllerID);
                            return;
                        }
                        this[base] = adviceFuncs[type](this[base], fn);
                    }
                    ;
                }, this));
            };
            baseController.method('_destroy', function() {
                Debug.log('Destroyed instance ' + this.controllerID + ' of ' + this.controllerType);
                if (this._eventListeners.length) {
                    for (var i = 0; i < this._eventListeners.length; i++) {
                        var data = this._eventListeners[i];
                        if (data['delegate']) {
                            data['elem'].off(data['ev'], data['delegate'], data['fn']);
                        } else {
                            data['elem'].off(data['ev'], data['fn']);
                        }
                    }
                }
                if (_.isFunction(this.destroy)) {
                    this.destroy.call(this);
                }
                this.scope = null;
            });
            baseController.method('cleanContents', function() {
                Debug.log('Cleaning contents of controller');
                this.scope.find('[data-controller]').each(function() {
                    var loopController = $(this);
                    var controllers = loopController.data('_controllerObjs') || [];
                    if (controllers.length) {
                        loopController.data('_controllerObjs', []);
                        for (var i = 0; i < controllers.length; i++) {
                            controllers[i]._destroy.apply(controllers[i]);
                            delete controllers[i];
                        }
                    }
                });
                ips.ui.destructAllWidgets(this.scope);
            });
            baseController.method('trigger', function(elem, ev, data) {
                var args = ips.utils.argsToArray(arguments);
                elem = (!_.isElement(elem) && !elem.jquery) ? this.scope : $(args.shift());
                ev = args[0];
                data = args[1] || {};
                if (!data.stack) {
                    data.stack = [];
                }
                data.stack.push('controllers.' + this.controllerType + '.' + this.controllerID);
                elem.trigger(ev, data);
            });
            baseController.method('on', function(elem, ev, delegate, fn) {
                var args = ips.utils.argsToArray(arguments);
                elem = (!_.isElement(elem) && elem != document && elem != window) ? this.scope : $(args.shift());
                ev = args[0];
                fn = (args.length == 3) ? args[2] : args[1];
                delegate = (args.length == 3) ? args[1] : undefined;
                if (!_.isFunction(fn)) {
                    Debug.warn("Callback function for " + ev + " doesn't exist in " + this.controllerType + " (" + this.controllerID + ")");
                    return;
                }
                fn = _.bind(fn, this);
                if (delegate) {
                    elem.on(ev, delegate, fn);
                    this._eventListeners.push({
                        elem: elem,
                        event: ev,
                        delegate: delegate,
                        fn: fn
                    });
                } else {
                    elem.on(ev, fn);
                    this._eventListeners.push({
                        elem: elem,
                        event: ev,
                        fn: fn
                    });
                }
            });
            baseController.method('triggerOn', function(controller, ev, data) {
                var toTrigger = _findSubControllers(controller, this.scope);
                if (!toTrigger.length) {
                    return;
                }
                data = data || {};
                if (!data.stack) {
                    data.stack = [];
                }
                data.stack.push('controllers.' + this.controllerType + '.' + this.controllerID);
                toTrigger.trigger(ev, data);
            });
            return baseController;
        };
        return {
            initControllerOnElem: initControllerOnElem,
            register: register,
            mixin: mixin,
            isRegistered: isRegistered,
            init: init,
            cleanContentsOf: cleanContentsOf
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.loader', function() {
        var _loadedScripts = []
          , _loadingScripts = [];
        var init = function() {
            var scripts = $('script[type="text/javascript"][src][data-ips]');
            scripts.each(function() {
                var scriptInfo = ips.utils.url.getURIObject($(this).attr('src'));
                if (scriptInfo.queryKey.src) {
                    var paths = _getPathScripts(scriptInfo.queryKey.src);
                    _.each(paths, function(value) {
                        _loadedScripts.push(value);
                    });
                } else if (scriptInfo.path.indexOf('interface/') !== -1) {
                    var interfaces = _getInterfaceScript(scriptInfo.path);
                    if (interfaces) {
                        _loadedScripts.push(interfaces);
                    }
                } else {
                    var other = _getOtherScript(scriptInfo.source);
                    if (other) {
                        _loadedScripts.push(other);
                    }
                }
            });
        }
          , _getOtherScript = function(path) {
            path = path.replace(ips.getSetting('baseURL'), '');
            if (path.startsWith('/')) {
                path = path.substring(1);
            }
            if (path.startsWith('applications/')) {
                path = path.replace(/^applications\//i, '')
            }
            return path;
        }
          , _getInterfaceScript = function(path) {
            var pieces = _.compact(path.split('/').reverse());
            var path = [];
            for (var i = 0; i < pieces.length; i++) {
                if (pieces[i] == 'interface') {
                    path.push('interface');
                    path.push(pieces[i + 1]);
                    break;
                }
                path.push(pieces[i]);
            }
            if (_.indexOf(path, 'interface') !== -1) {
                return path.reverse().join('/');
            }
            return false;
        }
          , _getPathScripts = function(src) {
            return _.compact(src.split(','));
        }
          , get = function(toLoad) {
            return $.when(_doLoad(_.compact(_.uniq(toLoad))));
        }
          , _doLoad = function(filePaths) {
            var deferred = $.Deferred();
            if (!_.isArray(filePaths)) {
                filePaths = [filePaths];
            }
            var done = [];
            var loading = [];
            var toLoad = [];
            for (var i = 0; i < filePaths.length; i++) {
                if (_.indexOf(_loadedScripts, filePaths[i]) !== -1) {
                    done.push(filePaths[i]);
                    continue;
                }
                if (_.indexOf(_loadingScripts, filePaths[i]) !== -1) {
                    loading.push(filePaths[i]);
                    continue;
                }
                toLoad.push(filePaths[i]);
            }
            if (done.length === filePaths.length) {
                deferred.resolve();
                return deferred.promise();
            }
            if (loading.length || toLoad.length) {
                $(document).on('scriptLoaded', function(e, files) {
                    for (var i = 0; i < files.length; i++) {
                        if (_.indexOf(filePaths, files[i]) === -1) {
                            continue;
                        }
                        done.push(files[i]);
                    }
                    if (done.length === filePaths.length) {
                        setTimeout(function() {
                            deferred.resolve();
                        }, 100);
                    }
                });
            }
            if (toLoad.length) {
                var localFiles = [];
                var remoteFiles = []
                for (var i = 0; i < toLoad.length; i++) {
                    if (toLoad[i].match(/^(http|\/\/)/i)) {
                        remoteFiles.push(toLoad[i]);
                    } else {
                        localFiles.push(toLoad[i]);
                    }
                }
                if (localFiles.length) {
                    _insertScript(localFiles);
                }
                if (remoteFiles.length) {
                    for (var i = 0; i < remoteFiles.length; i++) {
                        _insertScript([remoteFiles[i]]);
                    }
                }
            }
            return deferred.promise();
        }
          , _insertScript = function(toLoad, cached) {
            for (var i = 0; i < toLoad.length; i++) {
                _loadingScripts.push(toLoad[i]);
            }
            Debug.log("Loading: " + toLoad.join(', '));
            var url = '';
            if (toLoad[0].match(/^(http|\/\/)/i)) {
                url = toLoad[0].match(/^http/) ? toLoad[0].replace(/^.+?\/\/(.*)$/, '//$1') : toLoad[0];
            } else {
                url = ips.getSetting('jsURL') + '?src=' + encodeURIComponent(toLoad.join(','));
            }
            setTimeout(function() {
                $.ajax({
                    dataType: 'script',
                    cache: (_.isUndefined(cached)) ? true : cached,
                    url: url,
                    data: {
                        antiCache: ips.getSetting('jsAntiCache'),
                        csrfKey: null,
                    }
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    Debug.error("Failed to load: " + toLoad.join(', '));
                    Debug.log(textStatus);
                }).always(function() {
                    for (var i = 0; i < toLoad.length; i++) {
                        var index = _.indexOf(_loadingScripts, toLoad[i]);
                        if (index !== -1) {
                            _loadingScripts.splice(index, 1);
                        }
                    }
                }).done(function() {
                    for (var i = 0; i < toLoad.length; i++) {
                        _loadedScripts.push(toLoad[i]);
                    }
                    $(document).trigger('scriptLoaded', [toLoad]);
                    Debug.log("Loaded: " + toLoad.join(', '));
                })
            }, 500);
        };
        return {
            init: init,
            get: get
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.model', function() {
        var _models = {};
        var register = function(id, definition) {
            var Base = getBaseModel();
            $.extend(Base.prototype, definition);
            var obj = new Base(id);
            if (_.isFunction(obj.initialize)) {
                obj.initialize.call(obj);
            }
        }
          , getBaseModel = function() {
            var baseModel = function(id) {
                this.modelID = id;
            };
            baseModel.method('trigger', function(elem, ev, data) {
                var args = ips.utils.argsToArray(arguments);
                elem = (!_.isElement(elem)) ? $(document) : $(args.shift());
                ev = args[0];
                data = args[1] || {};
                if (!data.stack) {
                    data.stack = [];
                }
                data.stack.push('models.' + this.modelID);
                elem.trigger(ev, data);
            });
            baseModel.method('on', function(elem, ev, delegate, fn) {
                var args = ips.utils.argsToArray(arguments);
                elem = (!_.isElement(elem) && elem != document) ? $(document) : $(args.shift());
                ev = args[0];
                fn = (args.length == 3) ? args[2] : args[1];
                delegate = (args.length == 3) ? args[1] : undefined;
                if (!_.isFunction(fn)) {
                    Debug.warn("Callback function for " + ev + " doesn't exist in " + this.modelID);
                    return;
                }
                fn = _.bind(fn, this);
                if (delegate) {
                    elem.on(ev, delegate, fn);
                } else {
                    elem.on(ev, fn);
                }
            });
            baseModel.method('getData', function(data, eventData) {
                var self = this;
                var ajaxObj = ips.getAjax();
                if (!data.url.startsWith('http')) {
                    data.url = ips.getSetting('baseURL') + 'index.php?' + data.url;
                }
                if (data.events && _.isString(data.events)) {
                    data.events = {
                        loading: data.events + 'Loading',
                        done: data.events + 'Done',
                        fail: data.events + 'Error',
                        always: data.events + 'Finished'
                    };
                }
                if (data.namespace && !data.namespace.startsWith('.')) {
                    data.namespace = '.' + data.namespace;
                }
                if (data.events.loading) {
                    this.trigger(data.events.loading + (data.namespace || ''), eventData || {});
                }
                ajaxObj(data.url, {
                    data: data.data || {},
                    dataType: data.dataType || 'html',
                    type: data.type || 'get'
                }).done(function(response) {
                    if (data.events.done) {
                        if (data.dataType == 'json') {
                            var doneData = _.extend(eventData || {}, response);
                        } else {
                            var doneData = _.extend(eventData || {}, {
                                response: response
                            });
                        }
                        self.trigger(data.events.done + (data.namespace || ''), doneData);
                    }
                }).fail(function(jqXHR) {
                    if (data.events.fail) {
                        try {
                            if (data.dataType == 'json') {
                                var doneData = _.extend(eventData || {}, $.parseJSON(jqXHR.responseText));
                            } else {
                                var doneData = _.extend(eventData || {}, {
                                    response: jqXHR.responseText
                                });
                            }
                        } catch (err) {}
                        self.trigger(data.events.fail + (data.namespace || ''), doneData)
                    }
                }).always(function() {
                    if (data.events.always) {
                        self.trigger(data.events.always + (data.namespace || ''));
                    }
                });
            });
            return baseModel;
        };
        return {
            register: register
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui', function() {
        var widgets = {}
          , doneInitialInit = false
          , ziCounter = ips.getSetting('zindex_start') || 5000
          , ziIncrement = ips.getSetting('zindex_inc') || 50;
        var key = {
            BACKSPACE: 8,
            ESCAPE: 27,
            TAB: 9,
            LEFT: 37,
            RIGHT: 39,
            UP: 38,
            DOWN: 40,
            ENTER: 13,
            COMMA: 188,
            SPACE: 32
        };
        var registerWidget = function(widgetID, handler, acceptedOptions, widgetOptions, fnCallback) {
            widgetOptions = _.defaults(widgetOptions || {}, {
                'lazyLoad': false,
                'lazyEvents': '',
                'makejQueryPlugin': true
            });
            if (widgets[widgetID]) {
                Debug.warn("'" + widgetID + "' is already registered as a widget. Skipping...");
            }
            widgets[widgetID] = {
                handler: handler,
                callback: fnCallback,
                acceptedOptions: acceptedOptions || [],
                widgetOptions: widgetOptions || {}
            };
            if (widgetOptions.makejQueryPlugin !== false) {
                buildjQueryPlugin(widgetID, handler, acceptedOptions, widgetOptions, fnCallback);
            }
        }
          , getAcceptedOptions = function(widgetID) {
            return widgets[widgetID]['acceptedOptions'] || [];
        }
          , buildjQueryPlugin = function(widgetID, handler, acceptedOptions, widgetOptions) {
            var jQueryKey = widgetOptions.jQueryKey || 'ips' + widgetID.charAt(0).toUpperCase() + widgetID.slice(1)
              , dataID = 'ips' + widgetID;
            if ($.fn[jQueryKey]) {
                Debug.warn("jQuery plugin '" + jQueryKey + "' already exists.");
                return;
            }
            $.fn[jQueryKey] = function(providedOptions) {
                this.each(function() {
                    var elem = $(this);
                    if (elem.attr(dataID)) {
                        removeExistingWidget(widgetID, this);
                    }
                    elem.attr('data-' + dataID, '');
                    $.each(providedOptions, function(key, value) {
                        if (_.indexOf(acceptedOptions, key) !== false) {
                            elem.attr('data-' + dataID + '-' + key, value);
                        }
                    });
                    if (widgetOptions.lazyLoad === false) {
                        _callWidget(widgetID, elem, _getWidgetOptions(widgetID, elem));
                    }
                });
            }
            ;
        }
          , _initializeWidgets = function(context) {
            var immediateWidgets = []
              , lazyWidgets = [];
            if (!_.isElement(context)) {
                context = document;
            }
            _.each(widgets, function(item, key) {
                if (_.isUndefined(item.widgetOptions.lazyLoad) || item.widgetOptions.lazyLoad === false) {
                    immediateWidgets.push(key);
                } else {
                    lazyWidgets.push(key);
                }
            });
            _doImmediateWidgets(immediateWidgets, context);
            if (!doneInitialInit) {
                _doLazyWidgets(lazyWidgets, context);
                doneInitialInit = true;
            }
        }
          , destructAllWidgets = function(context) {
            var widgetIDs = _.keys(widgets);
            var selector = _.map(widgetIDs, function(item) {
                return "[data-ips" + item + "]";
            });
            var foundWidgets = $(context).find(selector.join(','));
            foundWidgets.each(function(idx, elem) {
                elem = $(elem);
                for (var i = 0; i < widgetIDs.length; i++) {
                    if (!_.isUndefined(elem.attr('data-ips' + widgetIDs[i]))) {
                        _destructWidget(widgetIDs[i], elem);
                    }
                }
            });
        }
          , _destructWidget = function(widgetID, elem) {
            if (_.isFunction(widgets[widgetID].handler.destruct)) {
                try {
                    widgets[widgetID].handler.destruct.call(widgets[widgetID].handler, elem);
                } catch (err) {
                    Debug.error("Error calling destruct on " + widgetID);
                    Debug.error(err);
                }
            }
        }
          , _doImmediateWidgets = function(widgetsToLoad, context) {
            if (!widgetsToLoad.length) {
                return;
            }
            var selector = _.map(widgetsToLoad, function(item) {
                return "[data-ips" + item + "]";
            });
            var foundWidgets = $(context).find(selector.join(','));
            foundWidgets.each(function(idx, elem) {
                elem = $(elem);
                for (var i = 0; i < widgetsToLoad.length; i++) {
                    if (!_.isUndefined(elem.attr('data-ips' + widgetsToLoad[i]))) {
                        _callWidget(widgetsToLoad[i], elem, _getWidgetOptions(widgetsToLoad[i], elem));
                    }
                }
            });
        }
          , _doLazyWidgets = function(widgetsToLoad) {
            if (!widgetsToLoad.length) {
                return;
            }
            for (var i = 0; i < widgetsToLoad.length; i++) {
                var lazyEvents = widgets[widgetsToLoad[i]].widgetOptions.lazyEvents;
                if (!lazyEvents) {
                    lazyEvents = 'click';
                }
                $(document).on(lazyEvents, "[data-ips" + widgetsToLoad[i] + "]", _.partial(function(widgetKey, e) {
                    _callWidget(widgetKey, this, _getWidgetOptions(widgetKey, this), e);
                }, widgetsToLoad[i]));
            }
        }
          , _callWidget = function(widgetID, elem, options, e) {
            if (_.isFunction(widgets[widgetID].callback)) {
                widgets[widgetID].callback.call(widgets[widgetID].handler, elem, options, e);
            } else if (_.isFunction(widgets[widgetID].handler.respond)) {
                widgets[widgetID].handler.respond.call(widgets[widgetID].handler, elem, options, e);
            } else {
                Debug.error("No callback method specified for " + widgetID);
            }
        }
          , _getWidgetOptions = function(widgetID, elem) {
            var options = {}
              , optionKeys = widgets[widgetID].acceptedOptions;
            elem = $(elem);
            try {
                if (elem.attr('data-ips' + widgetID + '-options')) {
                    var optionsObj = $.parseJSON(elem.attr('data-ips' + widgetID + '-options'));
                    if (_.isObject(optionsObj)) {
                        return optionsObj;
                    }
                }
            } catch (err) {
                Debug.warn("Invalid options object passed in for a " + widgetID + " widget. Must be valid JSON.");
            }
            if (optionKeys.length) {
                for (var i = 0; i < optionKeys.length; i++) {
                    var thisOption = elem.attr('data-ips' + widgetID + '-' + optionKeys[i]);
                    if (!_.isUndefined(thisOption)) {
                        if (thisOption.match(/^[1-9][0-9]*$/g)) {
                            thisOption = parseInt(thisOption, 10);
                        }
                        if (thisOption === 'true') {
                            thisOption = true;
                        } else if (thisOption === 'false') {
                            thisOption = false;
                        }
                        if (typeof thisOption === 'string' && thisOption.trim() === '') {
                            thisOption = true;
                        }
                        options[optionKeys[i]] = thisOption;
                    }
                }
            }
            return options;
        }
          , zIndex = function() {
            ziCounter += ziIncrement;
            return String(ziCounter);
        }
          , getModal = function() {
            return $('<div/>').addClass('ipsModal').hide().appendTo($('body')).identify();
        }
          , init = function() {
            $(document).on('contentChange', function(e, newContent) {
                if (newContent instanceof jQuery) {
                    newContent.each(function() {
                        if (Debug.isEnabled) {
                            Debug.info("contentChange event, reinitializing widgets in " + $(this).identify().attr('id'));
                        }
                        _initializeWidgets(this);
                    });
                } else {
                    if (Debug.isEnabled) {
                        Debug.info("contentChange event, reinitializing widgets in " + $(newContent).identify().attr('id'));
                    }
                    _initializeWidgets(newContent);
                }
                if (typeof PR != 'undefined') {
                    PR.prettyPrint();
                }
            });
            _initializeWidgets(document);
        };
        return {
            registerWidget: registerWidget,
            init: init,
            zIndex: zIndex,
            getModal: getModal,
            getAcceptedOptions: getAcceptedOptions,
            key: key,
            destructAllWidgets: destructAllWidgets
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.addressForm', function() {
        var defaults = {
            minimize: false,
            country: "",
            requireFullAddress: true
        };
        var respond = function(elem, options, e) {
            if (!_.isUndefined(elem.data('initialized'))) {
                return;
            }
            options = _.defaults(options, defaults);
            if (options.minimize) {
                minimizeAddress(elem, options);
            } else {
                init(elem, options, e);
            }
            elem.data('initialized', true);
        };
        var init = function(elem, options, e) {
            elem.on('change', '[data-role="countrySelect"]', _.bind(countryChange, e, elem, options));
            $(elem).find('[data-role="countrySelect"]').change();
            recalculateAddAddressLineButton(elem);
        };
        var googlePlacesCallback = function() {
            $(window).trigger('googlePlacesLoaded');
        };
        var minimizeAddress = function(elem, options) {
            var tempInput = $('<input/>').attr('type', 'text').attr('data-role', 'minimizedVersion').attr('placeholder', ips.getString('specifyLocation')).on('focus', function(e) {
                $(this).hide();
                if (options.country) {
                    $(elem).find('[data-role="countrySelect"]').val(options.country);
                }
                init(elem, options, e);
                elem.show().find('input').first().focus();
            });
            var value = [];
            elem.find('input, select').each(function(addressPart) {
                if ($(this).val()) {
                    if ($(this).is('select')) {
                        value.push($(this).find('option[value="' + $(this).val() + '"]').text().trim());
                    } else {
                        value.push($(this).val().trim());
                    }
                }
            });
            if (value.length) {
                tempInput.val(value.join(', '));
            }
            elem.hide().after(tempInput);
        };
        var countryChange = function(elem, options, e) {
            ips.getAjax()(ips.getSetting('baseURL') + 'index.php?app=core&module=system&controller=ajax&do=states&country=' + $(e.target).val()).done(function(response) {
                if (response.length) {
                    if (!$(elem).find('[data-role="regionSelect"]').length) {
                        var regionText = $(elem).find('[data-role="regionText"]');
                    } else {
                        var regionText = $(elem).find('[data-role="regionSelect"]');
                    }
                    var regionSelect = $('<select data-role="regionSelect" />');
                    regionSelect.attr('name', regionText.attr('name'));
                    if (!options.requireFullAddress) {
                        regionSelect.append($('<option />').attr('value', '').html($(elem).find('[data-role="regionText"]').attr('placeholder')));
                    }
                    for (var i = 0; i < response.length; i++) {
                        regionSelect.append($('<option />').attr('value', response[i]).html(response[i]));
                        if (response[i].toLowerCase() == regionText.val().toLowerCase()) {
                            regionSelect.val(response[i]);
                        }
                    }
                    regionText.replaceWith(regionSelect);
                } else {
                    if (!$(elem).find('[data-role="regionText"]').length) {
                        var regionSelect = $(elem).find('[data-role="regionSelect"]');
                        var regionText = $('<input type="text" data-role="regionText" placeholder="' + ips.getString('address_region') + '" />');
                        regionText.attr('name', regionSelect.attr('name')).val("");
                        regionSelect.replaceWith(regionText);
                    }
                }
            });
            if (typeof elem.attr('data-ipsAddressForm-googlePlaces') !== typeof undefined && elem.attr('data-ipsAddressForm-googlePlaces') !== false) {
                if (elem.attr('data-ipsAddressForm-googlePlaces') === 'loaded') {
                    googlePlacesInit(elem);
                } else {
                    if (typeof google === 'undefined') {
                        ips.loader.get(['https://maps.googleapis.com/maps/api/js?key=' + elem.attr('data-ipsAddressForm-googleApiKey') + '&libraries=places&sensor=false&callback=ips.ui.addressForm.googlePlacesCallback']);
                        $(window).on('googlePlacesLoaded', function() {
                            elem.attr('data-ipsAddressForm-googlePlaces', 'loaded');
                            googlePlacesInit(elem);
                        });
                    } else {
                        elem.attr('data-ipsAddressForm-googlePlaces', 'loaded');
                        googlePlacesInit(elem);
                    }
                }
            }
        };
        var addAddressLine = function(elem, value) {
            var lastLine = elem.find('[data-role="addressLine"]').closest('li').last();
            var newLine = lastLine.clone();
            if (value) {
                newLine.find('input').focus().val(value);
            }
            lastLine.after(newLine);
        };
        var recalculateAddAddressLineButton = function(elem) {
            elem.find('[data-role="addAddressLine"]').remove();
            var button = $('<i class="fa fa-plus" style="cursor:pointer; margin-left: 4px" data-role="addAddressLine">');
            button.click(function() {
                addAddressLine(elem, '');
                recalculateAddAddressLineButton(elem);
            });
            elem.find('[data-role="addressLine"]').last().after(button);
        };
        var googlePlacesInit = function(elem) {
            var googlePlacesInput = $(elem).find('[data-role="addressLine"]').first();
            var options = {
                types: ['geocode'],
                componentRestrictions: {
                    country: $(elem).find('[data-role="countrySelect"]').val()
                }
            };
            var autocomplete = new google.maps.places.Autocomplete(googlePlacesInput.get(0),options);
            googlePlacesInput.on('focus', function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        var geolocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                        autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,geolocation));
                    });
                }
            });
            googlePlacesInput.on('keypress', function(e) {
                if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                    return false;
                }
            });
            google.maps.event.addListener(autocomplete, 'place_changed', function() {
                var place = autocomplete.getPlace();
                for (var i = 0; i < $(elem).find('[data-role="addressLine"]').length; i++) {
                    $(elem).find('[data-role="addressLine"]').val('');
                }
                var parsedAddress = $('<div>' + place.adr_address + '</div>');
                var addressLines = [];
                var existingAddressLines = $(elem).find('[data-role="addressLine"]').length;
                if (parsedAddress.find('.post-office-box').length) {
                    addressLines.push(parsedAddress.find('.post-office-box').text());
                }
                if (parsedAddress.find('.street-address').length) {
                    addressLines.push(parsedAddress.find('.street-address').text());
                }
                if (parsedAddress.find('.extended-address').length) {
                    addressLines.push(parsedAddress.find('.extended-address').text());
                }
                for (var i = 0; i < addressLines.length; i++) {
                    if (existingAddressLines) {
                        $(elem).find('[data-role="addressLine"]').slice(i, 1).focus().val(addressLines[i]);
                        existingAddressLines--;
                    } else {
                        addAddressLine(elem, addressLines[i]);
                    }
                }
                if (parsedAddress.find('.locality')) {
                    elem.find('[data-role="city"]').focus().val(parsedAddress.find('.locality').text());
                }
                if (parsedAddress.find('.region')) {
                    elem.find('[data-role="regionText"]').focus().val(parsedAddress.find('.region').text());
                    if (elem.find('[data-role="regionSelect"] option[value="' + parsedAddress.find('.region').text() + '"]').length) {
                        elem.find('[data-role="regionSelect"]').val(parsedAddress.find('.region').text());
                    } else {
                        var i;
                        for (i in place.address_components) {
                            if (place.address_components[i].types[0] === 'administrative_area_level_1' || place.address_components[i].types[0] === 'administrative_area_level_2') {
                                if (elem.find('[data-role="regionSelect"] option[value="' + place.address_components[i].long_name + '"]').length) {
                                    elem.find('[data-role="regionSelect"]').val(place.address_components[i].long_name);
                                    break;
                                } else if (elem.find('[data-role="regionSelect"] option[value="' + place.address_components[i].short_name + '"]').length) {
                                    elem.find('[data-role="regionSelect"]').val(place.address_components[i].short_name);
                                    break;
                                }
                            }
                        }
                    }
                }
                if (parsedAddress.find('.postal-code')) {
                    elem.find('[data-role="postalCode"]').focus().val(parsedAddress.find('.postal-code').text());
                }
            });
        }
        ips.ui.registerWidget('addressForm', ips.ui.addressForm, ['minimize', 'country', 'requireFullAddress']);
        return {
            respond: respond,
            googlePlacesCallback: googlePlacesCallback
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.alert', function() {
        var respond = function(elem, options) {
            alertObj(options, elem);
        }
          , show = function(options) {
            alertObj(options);
        };
        ips.ui.registerWidget('alert', ips.ui.alert, ['message', 'type', 'icon', 'focus']);
        return {
            respond: respond,
            show: show
        };
    });
    var alertObj = function(options) {
        var alert = null
          , modal = null;
        var _defaults = {
            type: 'alert',
            message: ips.getString('generic_confirm'),
            buttons: {
                ok: ips.getString('ok'),
                cancel: ips.getString('cancel'),
                yes: ips.getString('yes'),
                no: ips.getString('no')
            },
            icon: 'info',
            showIcon: true,
            callbacks: {}
        };
        var _icons = {
            warn: 'fa fa-exclamation-triangle',
            success: 'fa fa-check-circle',
            info: 'fa fa-info-circle',
            ok: 'fa fa-check-circle',
            question: 'fa fa-question-circle'
        };
        options = _.defaults(options || {}, _defaults);
        var init = function() {
            _buildAlert();
            _setUpEvents();
        }
          , _setUpEvents = function() {
            alert.on('click', '[data-action]', _clickButton);
            $(document).on('keydown', function(e) {
                switch (e.keyCode) {
                case ips.ui.key.ESCAPE:
                    if (options.type == 'alert') {
                        alert.find('[data-action="ok"]').click();
                    } else {
                        alert.find('[data-action="cancel"], [data-action="no"]').click();
                    }
                    break;
                case ips.ui.key.ENTER:
                    alert.find('[data-action="ok"], [data-action="yes"]').click();
                    break;
                }
            });
        }
          , _clickButton = function(e) {
            var button = $(e.currentTarget);
            var action = button.attr('data-action');
            var value = null;
            if (options.type == 'prompt') {
                value = alert.find('[data-role="promptValue"]').val();
            }
            if (_.isFunction(options.callbacks[action])) {
                options.callbacks[action](value);
            }
            _remove();
        }
          , _remove = function() {
            modal.remove();
            ips.utils.anim.go('fadeOutDown fast', alert).done(function() {
                alert.remove();
            });
        }
          , _buildAlert = function() {
            var parts = {}
              , buttons = [];
            if (options.showIcon) {
                parts.icon = ips.templates.render('core.alert.icon', {
                    icon: _icons[options.icon] || options.icon
                });
            }
            parts.id = 'alert_' + (Math.round(Math.random() * 10000000));
            parts.text = options.message;
            if (options.subText) {
                parts.subtext = ips.templates.render('core.alert.subText', {
                    text: options.subText
                });
            }
            if (options.subTextHtml) {
                parts.subtext = ips.templates.render('core.alert.subTextHtml', {
                    text: options.subTextHtml
                });
            }
            switch (options.type) {
            case 'alert':
                buttons.push(ips.templates.render('core.alert.button', {
                    action: 'ok',
                    title: options.buttons.ok,
                    extra: 'ipsButton_primary'
                }));
                break;
            case 'confirm':
            case 'prompt':
                buttons.push(ips.templates.render('core.alert.button', {
                    action: 'ok',
                    title: options.buttons.ok,
                    extra: 'ipsButton_primary'
                }));
                buttons.push(ips.templates.render('core.alert.button', {
                    action: 'cancel',
                    title: options.buttons.cancel,
                    extra: 'ipsButton_light'
                }));
                break;
            case 'verify':
                buttons.push(ips.templates.render('core.alert.button', {
                    action: 'yes',
                    title: options.buttons.yes,
                    extra: 'ipsButton_primary'
                }));
                if (options.buttons.no) {
                    buttons.push(ips.templates.render('core.alert.button', {
                        action: 'no',
                        title: options.buttons.no,
                        extra: 'ipsButton_light'
                    }));
                }
                if (options.buttons.cancel) {
                    buttons.push(ips.templates.render('core.alert.button', {
                        action: 'cancel',
                        title: options.buttons.cancel,
                        extra: 'ipsButton_light'
                    }));
                }
                break;
            }
            parts.buttons = buttons.join('');
            if (options.type == 'prompt') {
                parts.text += ips.templates.render('core.alert.prompt');
            }
            var tmpAlert = $.parseHTML(ips.templates.render('core.alert.box', parts).trim());
            alert = $(tmpAlert[0]);
            $('body').append(alert);
            modal = ips.ui.getModal();
            modal.css({
                zIndex: ips.ui.zIndex()
            }).show();
            alert.css({
                zIndex: ips.ui.zIndex()
            });
            ips.utils.anim.go('zoomIn fast', alert);
            if (options.focus) {
                alert.find('[data-action="' + options.focus + '"]').focus();
            } else {
                if (options.type == 'prompt') {
                    alert.find('[data-role="promptValue"]').val(options.value || '').focus();
                } else {
                    alert.find('[data-action="ok"], [data-action="yes"]').focus();
                }
            }
        };
        init();
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.autoCheck', function() {
        var defaults = {};
        var respond = function(elem, options) {
            if (!$(elem).data('_autoCheck')) {
                $(elem).data('_autoCheck', autoCheckObj(elem, _.defaults(options, defaults)));
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_autoCheck')) {
                return $(elem).data('_autoCheck');
            }
            return undefined;
        };
        ips.ui.registerWidget('autoCheck', ips.ui.autoCheck, ['context']);
        return {
            respond: respond,
            getObj: getObj,
            destruct: destruct
        };
    });
    var autoCheckObj = function(elem, options) {
        var initialCount = 0;
        var init = function() {
            if (options.context && $(options.context).length) {
                elem.on('menuItemSelected', clickedMenu);
                $(options.context).on('change', 'input[type="checkbox"][data-state]', _updateCount);
            }
            elem.on('refresh.autoCheck', refresh);
            elem.on('setInitialCount.autoCheck', setInitialCount);
            elem.find('[data-role="autoCheckCount"]').hide();
        }
          , destruct = function() {
            if (options.context) {
                $(options.context).off('change', 'input[type="checkbox"][data-state]', _updateCount);
            }
        }
          , refresh = function() {
            _updateCount();
        }
          , setInitialCount = function(e, data) {
            initialCount = data.count;
            _updateCount();
        }
          , clickedMenu = function(e, data) {
            if (!_.isUndefined(data.originalEvent)) {
                data.originalEvent.preventDefault();
            }
            if (!data.selectedItemID) {
                return;
            }
            var checkboxes = $(options.context).find(':checkbox[data-state]');
            if (data.selectedItemID == 'all') {
                checkboxes.prop('checked', true);
            } else if (data.selectedItemID == 'none') {
                checkboxes.prop('checked', false);
            } else {
                checkboxes.prop('checked', false).filter('[data-state~="' + data.selectedItemID + '"]').prop('checked', true);
            }
            checkboxes.trigger('change');
            var count = _updateCount();
            elem.trigger('autoChecked', {
                menu: elem,
                currentFilter: data.selectedItemID,
                count: count
            });
        }
          , _updateCount = function() {
            var checkboxes = $(options.context).find(':checkbox[data-state]');
            var count = $(options.context).find(':checkbox[data-state]:checked');
            if (count.length == checkboxes.length && checkboxes.length !== 0) {
                elem.find('.cAutoCheckIcon').html('<i class="fa fa-check-square"></i>');
            } else if (count.length === 0) {
                elem.find('.cAutoCheckIcon').html('<i class="fa fa-square-o"></i>');
            } else {
                elem.find('.cAutoCheckIcon').html('<i class="fa fa-minus-square"></i>');
            }
            var countToDisplay = count.length + initialCount;
            if (countToDisplay) {
                elem.find('[data-role="autoCheckCount"]').text(countToDisplay).show();
            } else if (elem.find('[data-role="autoCheckCount"]').is(':visible')) {
                setTimeout(function() {
                    if (!initialCount) {
                        ips.utils.anim.go('fadeOut', elem.find('[data-role="autoCheckCount"]'));
                    }
                }, 300);
            }
            return count.length;
        };
        init();
        return {
            destruct: destruct,
            refresh: refresh
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.autocomplete', function() {
        var defaults = {
            multiValues: true,
            freeChoice: true,
            itemSep: {
                chr: ',',
                keycode: 188,
                charcode: 44
            },
            disallowedCharacters: JSON.stringify(["<", ">", "'", "\""]),
            unique: false,
            customValues: true,
            fieldTemplate: 'core.autocomplete.field',
            resultsTemplate: 'core.autocomplete.resultWrapper',
            resultItemTemplate: 'core.autocomplete.resultItem',
            tokenTemplate: 'core.autocomplete.token',
            addTokenTemplate: 'core.autocomplete.addToken',
            addTokenText: ips.getString('add_tag'),
            queryParam: 'q',
            forceLower: false,
            minLength: 1,
            minAjaxLength: 1,
            commaTrigger: true,
            searchFieldThreshold: 20
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_autocomplete')) {
                $(elem).data('_autocomplete', autocompleteObj(elem, _.defaults(options, defaults)));
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            elem = $(elem);
            if (elem.data('_autocomplete')) {
                return elem.data('_autocomplete');
            } else if ($('[name="' + elem.attr('name') + '_original' + '"]').length && $('[name="' + elem.attr('name') + '_original' + '"]').data('_autocomplete')) {
                return $('[name="' + elem.attr('name') + '_original' + '"]').data('_autocomplete');
            }
            return undefined;
        };
        ips.ui.registerWidget('autocomplete', ips.ui.autocomplete, ['multiValues', 'freeChoice', 'dataSource', 'maxItems', 'itemSep', 'resultsElem', 'unique', 'commaTrigger', 'fieldTemplate', 'resultsTemplate', 'resultItemTemplate', 'tokenTemplate', 'addTokenTemplate', 'addTokenText', 'queryParam', 'minLength', 'maxLength', 'forceLower', 'disallowedCharacters', 'minAjaxLength']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
    var autocompleteObj = function(elem, options, e) {
        var timer, blurTimer, lastValue = '', originalTextField, valueField, textField, dataSource, elemID = $(elem).identify().attr('id'), wrapper, inputItem, resultsElem, selectedToken, disabled = false, required = false, tooltip = null, tooltipTimer = null, mouseOverResults = false, hasError = false;
        var init = function() {
            if ($(elem).is('textarea, input[type="text"], input[type="search"]')) {
                originalTextField = $(elem);
            } else {
                originalTextField = $(elem).find('textarea, input[type="text"], input[type="search"]').first();
            }
            try {
                options.disallowedCharacters = $.parseJSON(options.disallowedCharacters);
            } catch (err) {
                Debug.error("Couldn't parse disallowed characters option");
            }
            _buildWrapper();
            _getDataSource();
            originalTextField.removeAttr('list');
            if (dataSource.type != 'none') {
                _buildResultsList();
                if (dataSource.type == 'local') {
                    _initAutocomplete();
                }
            }
            if (originalTextField.is(':disabled')) {
                disabled = true;
            }
            if (originalTextField.is('[required]')) {
                required = true;
                originalTextField.removeProp('required').removeAttr('aria-required');
            }
            textField.prop('autocomplete', 'off').prop('spellcheck', false).prop('disabled', disabled).attr('aria-autocomplete', 'list').attr('aria-haspopup', 'true').attr('tabindex', originalTextField.attr('tabindex') || '');
            if (options.maxLength) {
                textField.attr('maxlength', options.maxLength + 1);
            }
            $(document).on('click', _documentClick);
            wrapper.click(function(e) {
                e.stopPropagation();
                return false;
            });
            textField.on('focus', _focusField).on('blur', _blurField).on('keydown', _keydownField).on('keyup', _keyupField).on('input', _expandField).on('keypress', _keypressField);
            wrapper.on('click', _clickWrapper).on('click', '[data-action="addToken"]', _clickAddToken).on('keydown', _keydownWrapper).on('propChanged', _propChanged).toggleClass('ipsField_autocompleteDisabled', disabled);
            _buildInitialTokens();
            elem.on('blur', function() {
                if (textField !== elem) {
                    textField.trigger('blur');
                }
            }).trigger('autoCompleteReady', {
                elemID: elemID,
                elem: elem,
                currentValues: tokens.getValues()
            });
            elem.on('reissueReady', function() {
                elem.trigger('autoCompleteReady', {
                    elemID: elemID,
                    elem: elem,
                    currentValues: tokens.getValues()
                });
            });
        }
          , destruct = function() {
            $(document).off('click', _documentClick);
        }
          , hasErrors = function() {
            return hasError;
        }
          , _propChanged = function(e) {
            disabled = originalTextField.is(':disabled');
            wrapper.toggleClass('ipsField_autocompleteDisabled', disabled);
        }
          , _buildInitialTokens = function() {
            var value = _getOriginalValue();
            if (!value) {
                return;
            }
            var splitValues = _.without(value.split("\n"), '');
            var itemCount = 0;
            itemCount = splitValues.length;
            originalTextField.val('');
            if (splitValues.length) {
                for (var i = 0; i < itemCount; i++) {
                    _addToken(splitValues[i]);
                }
            }
        }
          , _getOriginalValue = function() {
            return originalTextField.val();
        }
          , _buildResultsList = function() {
            if (options.resultsElem && $(options.resultsElem).length) {
                resultsElem = $(options.resultsElem);
                return;
            }
            var resultsList = ips.templates.render(options.resultsTemplate, {
                id: elemID
            });
            wrapper.append(resultsList);
            resultsElem = $('#' + elemID + '_results');
            resultsElem.on('mouseover', '[data-value]', function(e) {
                results.select($(e.currentTarget));
            }).on('mouseenter', function() {
                mouseOverResults = true;
            }).on('mouseleave', function() {
                mouseOverResults = false;
            }).on('click', '[data-value]', function(e) {
                _addToken($(e.currentTarget).attr('data-value'));
                textField.focus();
            }).attr('aria-busy', 'false');
        }
          , _initAutocomplete = function() {
            if (dataSource.totalItems() > options.searchFieldThreshold && !options.freeChoice) {
                var searchField = ips.templates.render('core.autocomplete.searchTypeAhead', {});
                $('#' + elemID + '_results').prepend(searchField);
                $('#' + elemID + '_results').on('keyup', 'input[type="search"]', _keyupAutocomplete);
            }
        }
          , _keyupAutocomplete = function(e) {
            _loadResults($(this).val());
            return true;
        }
          , _buildWrapper = function() {
            var existingClasses = elem[0].className;
            $(elem).after(ips.templates.render(options.fieldTemplate, {
                id: elemID
            })).removeClass(existingClasses);
            wrapper = $('#' + elemID + '_wrapper');
            inputItem = $('#' + elemID + '_inputItem');
            if (!options.freeChoice) {
                var insertElem = ips.templates.render('core.autocomplete.addToken', {
                    text: options.addTokenText
                });
                textField = elem;
            } else {
                var insertElem = $('<input/>').attr({
                    type: 'text',
                    id: elemID + '_dummyInput'
                }).prop('autocomplete', 'off');
                textField = insertElem;
            }
            var name = originalTextField.attr('name');
            originalTextField.attr('name', originalTextField.attr('name') + '_original');
            valueField = $('<textarea/>').attr('name', name).hide();
            originalTextField.hide();
            wrapper.addClass(existingClasses).append(elem).append(valueField).find('#' + elemID + '_inputItem').append(insertElem);
            wrapper.on('click', '[data-value]', function(e) {
                if (!disabled) {
                    tokens.select($(e.currentTarget));
                }
            }).on('click', '[data-action="delete"]', function(e) {
                _deleteToken($(e.currentTarget).parent('[data-value]'));
            });
        }
          , _getDataSource = function() {
            if ((options.dataSource && options.dataSource.indexOf('#') === 0 && $(options.dataSource).length) || originalTextField.is('[list]')) {
                dataSource = localData(originalTextField.is('[list]') ? $('#' + originalTextField.attr('list')) : options.dataSource, options);
            } else if (ips.utils.validate.isUrl(options.dataSource)) {
                dataSource = remoteData(options.dataSource, options);
            } else {
                dataSource = noData();
            }
        }
          , _clickWrapper = function(e) {
            if ($(e.target).is('[data-token]') || $(e.target).parents('li[data-token]').length) {
                var token = ($(e.target));
            } else {
                if (!$(e.target).is(textField) && (!resultsElem || !$.contains(resultsElem.get(0), e.target))) {
                    textField.focus();
                }
            }
        }
          , _clickAddToken = function(e) {
            e.preventDefault();
            if (resultsElem && resultsElem.is(':visible')) {
                _closeResults();
            } else {
                _loadResults('');
            }
        }
          , focus = function(e) {
            textField.focus();
        }
          , _focusField = function(e) {
            if (dataSource.type == 'none') {
                return;
            }
            timer = setInterval(_timerFocusField, 400);
        }
          , _blurField = function(e) {
            if (mouseOverResults) {
                return;
            }
            clearInterval(timer);
            _.delay(_timerBlurField, 300);
        }
          , _timerBlurField = function() {
            if (textField.val()) {
                _addTokenFromCurrentInput();
            }
            _closeResults();
        }
          , _timerFocusField = function() {
            if (dataSource.type == 'none') {
                return;
            }
            var currentValue = _getCurrentValue();
            if (currentValue == lastValue) {
                return;
            }
            lastValue = currentValue;
            _loadResults(currentValue);
        }
          , _loadResults = function(value) {
            _toggleLoading('show');
            resultsElem.attr('aria-busy', 'true');
            dataSource.getResults(value).done(function(results) {
                _showResults(_processResults(results, value));
            }).fail(function() {}).always(function() {
                resultsElem.attr('aria-busy', 'false');
                _toggleLoading('hide');
            });
        }
          , _toggleLoading = function(doWhat) {
            if (doWhat == 'show') {
                wrapper.addClass('ipsField_loading');
            } else {
                wrapper.removeClass('ipsField_loading');
            }
        }
          , _closeResults = function(e) {
            if (e) {
                e.preventDefault();
            }
            if (resultsElem && resultsElem.length) {
                resultsElem.hide().attr('aria-expanded', 'false');
                if (resultsElem.find('input[type="search"]').length) {
                    resultsElem.find('input[type="search"]').val('');
                }
            }
            dataSource.stop();
        }
          , _documentClick = function() {
            _closeResults();
        }
          , _processResults = function(results, text) {
            var existingTokens = tokens.getValues()
              , newResults = {};
            if (options.unique) {
                $.each(results, function(key, data) {
                    if (!data.value || _.indexOf(existingTokens, data.value) === -1) {
                        newResults[key] = data;
                    }
                });
                return newResults;
            }
            return results;
        }
          , _showResults = function(results) {
            var output = '';
            $.each(results, function(idx, value) {
                output += ips.templates.render(options.resultItemTemplate, value);
            });
            if (resultsElem.attr('id') == (elemID + '_results')) {
                _positionResults();
            }
            resultsElem.find('[data-role="items"] li').remove();
            resultsElem.show().attr('aria-expanded', 'true').find('[data-role="items"]').append(output);
            if (resultsElem.find('input[type="search"]').length) {
                resultsElem.find('input[type="search"]').focus();
            }
        }
          , _positionResults = function() {
            $(resultsElem).css({
                left: "0px",
                top: wrapper.outerHeight() + 'px',
                width: wrapper.outerWidth() + 'px',
                position: 'absolute',
                zIndex: ips.ui.zIndex()
            });
        }
          , _getCurrentValue = function() {
            var value = textField.val();
            if (options.multiValues) {
                if (value.indexOf(options.itemSep.chr) === -1 || !options.commaTrigger) {
                    return value.trim();
                } else {
                    var pieces = value.split(options.itemSep.chr);
                    return pieces[pieces.length - 1].trim();
                }
            } else {
                return value;
            }
        }
          , _keydownWrapper = function(e) {
            if (e.which == ips.ui.key.ESCAPE) {
                keyEvents.escape(e);
            }
        }
          , _keydownField = function(e) {
            _expandField();
            var ignoreKey = false;
            if (!_([ips.ui.key.UP, ips.ui.key.DOWN, ips.ui.key.LEFT, ips.ui.key.RIGHT, ips.ui.key.ENTER, ips.ui.key.TAB, ips.ui.key.BACKSPACE, ips.ui.key.ESCAPE]).contains(e.which)) {
                ignoreKey = true;
            }
            var value = textField.val().trim();
            if (!value.length) {
                hasError = false;
            }
            if (options.maxLength && value.length == options.maxLength && ignoreKey) {
                e.preventDefault();
                return;
            }
            if (_([ips.ui.key.ENTER, ips.ui.key.TAB]).contains(e.which) && options.unique && _duplicateValue(value)) {
                e.preventDefault();
                _showTooltip(ips.getString('ac_dupes'));
                return;
            }
            if (ignoreKey) {
                return;
            }
            switch (e.which) {
            case ips.ui.key.BACKSPACE:
                keyEvents.backspace(e);
                break;
            case ips.ui.key.TAB:
            case ips.ui.key.ENTER:
                keyEvents.enter(e);
                break;
            case ips.ui.key.UP:
                keyEvents.up(e);
                break;
            case ips.ui.key.DOWN:
                keyEvents.down(e);
                break;
            case ips.ui.key.ESCAPE:
                keyEvents.escape(e);
                break;
            }
        }
          , _keyupField = function(e) {
            var i;
            for (i in options.disallowedCharacters) {
                if (textField.val().indexOf(options.disallowedCharacters[i]) !== -1) {
                    textField.val(textField.val().replace(options.disallowedCharacters[i], ''));
                    _showTooltip(ips.getString('ac_prohibit_special', {
                        chars: options.disallowedCharacters.join(' ')
                    }));
                    e.preventDefault();
                    return;
                }
            }
            var lastCharIsComma = (textField.val().substr(textField.val().length - 1) === ',');
            if (e.which === 229 && lastCharIsComma) {
                _addTokenFromCurrentInput();
                e.preventDefault();
            }
        }
          , _keypressField = function(e) {
            if (!options.commaTrigger) {
                return;
            }
            textField.val(textField.val().replace(',', ''));
            if (e.charCode == options.itemSep.charcode && options.unique && _duplicateValue(textField.val())) {
                e.preventDefault();
                _showTooltip(ips.getString('ac_dupes'));
                return;
            }
            if (e.charCode == options.itemSep.charcode) {
                _addTokenFromCurrentInput();
                e.preventDefault();
            }
        }
          , _addToken = function(value) {
            tokens.add(value);
            textField.val('');
            lastValue = '';
            _resetField();
            if (options.maxItems && tokens.total() >= options.maxItems) {
                inputItem.hide();
            }
            if (options.unique && options.freeChoice == false && dataSource.totalItems() !== -1 && dataSource.totalItems() <= tokens.total()) {
                wrapper.find('[data-action="addToken"]').hide();
            }
            hasError = false;
        }
          , _deleteToken = function(token) {
            if (disabled) {
                return;
            }
            tokens.remove(token);
        }
          , keyEvents = {
            backspace: function(e) {
                if (!textField.val()) {
                    if (tokens.selected) {
                        tokens.remove(tokens.selected);
                    } else {
                        if (inputItem.prev().length) {
                            tokens.select(inputItem.prev());
                        }
                    }
                }
            },
            enter: function(e) {
                if (e.which == ips.ui.key.TAB && textField.val() == '') {
                    return false;
                }
                e.preventDefault();
                var currentResult = results.getCurrent();
                var value = '';
                if (currentResult) {
                    value = currentResult.attr('data-value');
                } else {
                    if (options.commaTrigger) {
                        value = _stripHTML(textField.val().replace(options.itemSep.chr, ''));
                    } else {
                        value = _stripHTML(textField.val());
                    }
                }
                if (!value) {
                    return false;
                }
                _addToken(value);
            },
            up: function(e) {
                if (!resultsElem || !resultsElem.is(':visible')) {
                    return;
                }
                e.preventDefault();
                var selected = results.getCurrent();
                if (!selected) {
                    results.selectLast();
                } else {
                    var prev = results.getPrevious(selected);
                    if (prev) {
                        results.select(prev);
                    } else {
                        results.selectLast();
                    }
                }
            },
            down: function(e) {
                if (!resultsElem || !resultsElem.is(':visible')) {
                    return;
                }
                e.preventDefault();
                var selected = results.getCurrent();
                if (!selected) {
                    results.selectFirst();
                } else {
                    var next = results.getNext(selected);
                    if (next) {
                        results.select(next);
                    } else {
                        results.selectFirst();
                    }
                }
            },
            escape: function(e) {
                if (resultsElem && resultsElem.is(':visible')) {
                    _closeResults();
                }
            }
        }
          , results = {
            deselectAll: function() {
                resultsElem.find('[data-selected]').removeAttr('data-selected');
            },
            getCurrent: function() {
                if (dataSource.type == 'none') {
                    return;
                }
                var cur = resultsElem.find('[data-selected]');
                if (cur.length && resultsElem.is(':visible')) {
                    return cur;
                }
                return false;
            },
            getPrevious: function(result) {
                var prev = $(result).prev('[data-value]');
                if (prev.length) {
                    return prev;
                }
                return false;
            },
            getNext: function(result) {
                var next = $(result).next('[data-value]');
                if (next.length) {
                    return next;
                }
                return false;
            },
            selectFirst: function() {
                results.select(resultsElem.find('[data-value]').first());
            },
            selectLast: function() {
                results.select(resultsElem.find('[data-value]').last());
            },
            select: function(result) {
                results.deselectAll();
                result.attr('data-selected', true);
            }
        }
          , tokens = {
            selected: null,
            add: function(value) {
                var html = '';
                value = _.escape(value).trim();
                if (options.minLength && value.length < options.minLength) {
                    return false;
                }
                if (options.maxLength && value.length > options.maxLength) {
                    return false;
                }
                if (options.forceLower) {
                    value = value.toLowerCase();
                }
                tokens.deselectAll();
                inputItem.before(ips.templates.render(options.tokenTemplate, {
                    id: elemID,
                    value: value,
                    title: value
                }));
                if (resultsElem) {
                    _closeResults();
                }
                valueField.val(tokens.getValues().join("\n"));
                if (dataSource.type != 'none') {
                    html = resultsElem.find('[data-value="' + value.replace("\\", "\\\\") + '"]').html();
                } else {
                    html = value;
                }
                elem.trigger('tokenAdded', {
                    token: value,
                    html: html,
                    tokenList: tokens.getValues(),
                    totalTokens: tokens.total()
                });
                return true;
            },
            remove: function(token) {
                if (tokens.selected == token) {
                    tokens.selected = null;
                }
                var value = $(token).attr('data-value');
                $(token).remove();
                if (options.maxItems && tokens.total() < options.maxItems) {
                    inputItem.show();
                }
                if (options.unique && options.freeChoice == false && (dataSource.totalItems() === -1 || dataSource.totalItems() > tokens.total())) {
                    wrapper.find('[data-action="addToken"]').show();
                }
                valueField.val(tokens.getValues().join("\n"));
                elem.trigger('tokenDeleted', {
                    token: value,
                    tokenList: tokens.getValues(),
                    totalTokens: tokens.total()
                });
            },
            removeAll: function() {
                var allTokens = inputItem.siblings().filter('[data-value]');
                allTokens.each(function() {
                    tokens.remove($(this));
                });
            },
            select: function(token) {
                tokens.deselectAll();
                tokens.selected = $(token).addClass('cToken_selected');
            },
            total: function() {
                return inputItem.siblings().filter('[data-value]').length;
            },
            getValues: function() {
                var values = [];
                var allTokens = inputItem.siblings().filter('[data-value]');
                if (allTokens.length) {
                    values = _.map(allTokens, function(item) {
                        return $(item).attr('data-value');
                    });
                }
                return values;
            },
            getSelected: function() {
                return tokens.selected.attr('data-value');
            },
            deselectAll: function() {
                wrapper.find('[data-value]').removeClass('cToken_selected');
                tokens.selected = null;
            }
        }
          , _addTokenFromCurrentInput = function() {
            var value = '';
            if (options.commaTrigger) {
                value = _stripHTML(textField.val().replace(options.itemSep.chr, ''));
            } else {
                value = _stripHTML(textField.val());
            }
            if (options.minLength && value.length < options.minLength || options.maxLength && value.length > options.maxLength) {
                if (options.commaTrigger) {
                    textField.val(textField.val().replace(options.itemSep.chr, ''));
                }
                return;
            }
            if (options.unique && _duplicateValue(value)) {
                _showTooltip(ips.getString('ac_dupes'));
                return;
            }
            _addToken(value);
        }
          , _duplicateValue = function(value) {
            var values = tokens.getValues();
            if (values.indexOf(value) !== -1) {
                return true;
            }
            return false;
        }
          , _stripHTML = function(text) {
            return text.replace(/<|>|"|'/g, '');
        }
          , _showTooltip = function(msg) {
            if (!tooltip) {
                _buildTooltip();
            }
            hasError = true;
            if (tooltipTimer) {
                clearTimeout(tooltipTimer);
            }
            tooltip.hide().text(msg);
            _positionTooltip();
            tooltipTimer = setTimeout(function() {
                _hideTooltip();
            }, 2500);
        }
          , _hideTooltip = function() {
            if (tooltip && tooltip.is(':visible')) {
                ips.utils.anim.go('fadeOut', tooltip);
            }
        }
          , _positionTooltip = function() {
            var positionInfo = {
                trigger: wrapper,
                target: tooltip,
                center: true,
                above: true
            };
            var tooltipPosition = ips.utils.position.positionElem(positionInfo);
            $(tooltip).css({
                left: tooltipPosition.left + 'px',
                top: tooltipPosition.top + 'px',
                position: (tooltipPosition.fixed) ? 'fixed' : 'absolute',
                zIndex: ips.ui.zIndex()
            });
            if (tooltipPosition.location.vertical == 'top') {
                tooltip.addClass('ipsTooltip_top');
            } else {
                tooltip.addClass('ipsTooltip_bottom');
            }
            tooltip.show();
        }
          , _buildTooltip = function() {
            var tooltipHTML = ips.templates.render('core.tooltip', {
                id: 'elAutoCompleteTooltip'
            });
            ips.getContainer().append(tooltipHTML);
            tooltip = $('#elAutoCompleteTooltip');
        }
          , _expandField = function() {
            var text = textField.val();
            var widthOfElem = wrapper.width();
            widthOfElem -= (parseInt(wrapper.css('padding-left')) + parseInt(wrapper.css('padding-right')));
            var span = $('<span/>').text(text).css({
                'font-size': textField.css('font-size'),
                'letter-spacing': textField.css('letter-spacing'),
                'position': 'absolute',
                'top': '-100px',
                'left': '-300px',
                'opacity': "0.1"
            });
            ips.getContainer().append(span);
            var width = span.width() + 20;
            span.remove();
            textField.css({
                width: ((width >= widthOfElem) ? widthOfElem : width) + 'px'
            });
        }
          , _resetField = function() {
            textField.css({
                width: '15px'
            });
        };
        init();
        return {
            init: init,
            destruct: destruct,
            hasErrors: hasErrors,
            addToken: tokens.add,
            getTokens: tokens.getValues,
            removeToken: tokens.remove,
            removeAll: tokens.removeAll,
            focus: focus
        };
    };
    var localData = function(source) {
        var items = $(source).find('option');
        var getResults = function(text) {
            var deferred = $.Deferred()
              , output = []
              , text = text.toLowerCase();
            items.each(function(idx, item) {
                if (item.innerHTML.toLowerCase().startsWith(text)) {
                    output.push({
                        id: item.value,
                        value: item.value,
                        html: item.value
                    });
                }
            });
            deferred.resolve(output);
            return deferred.promise();
        }
          , totalItems = function() {
            return items.length;
        };
        return {
            type: 'local',
            getResults: getResults,
            totalItems: totalItems,
            stop: $.noop
        };
    };
    var remoteData = function(source, options) {
        var ajaxObj, loadedCache = false, cache = {};
        var getResults = function(text) {
            if (options.freeChoice) {
                return _remoteSearch(text);
            } else {
                return _remoteFetch(text);
            }
        }
          , totalItems = function() {
            if (!options.freeChoice && loadedCache) {
                return _.size(cache);
            }
            return -1;
        }
          , _remoteSearch = function(text) {
            var deferred = $.Deferred();
            if (ajaxObj) {
                ajaxObj.abort();
            }
            if (options.minAjaxLength > text.length) {
                deferred.reject();
                return deferred.promise();
            }
            if (cache[text]) {
                deferred.resolve(cache[text]);
            } else {
                ajaxObj = ips.getAjax()(source + '&' + options.queryParam + '=' + encodeURIComponent(text), {
                    dataType: 'json'
                }).done(function(response) {
                    deferred.resolve(response);
                    cache[text] = response;
                }).fail(function(jqXHR, status, errorThrown) {
                    if (status != 'abort') {
                        Debug.log('aborting');
                    }
                    deferred.reject();
                });
            }
            return deferred.promise();
        }
          , _remoteFetch = function(text) {
            var deferred = $.Deferred();
            if (!loadedCache) {
                if (ajaxObj) {
                    return;
                }
                if (options.minAjaxLength > text.length) {
                    return;
                }
                ajaxObj = ips.getAjax()(source, {
                    dataType: 'json'
                }).done(function(response) {
                    loadedCache = true;
                    cache = response;
                    _remoteFetch(text);
                }).fail(function(jqXHR, status, errorThrown) {
                    if (status != 'abort') {
                        Debug.log('aborting');
                    }
                    deferred.reject();
                });
            }
            cache.each(function(idx, item) {
                if (item.value.toLowerCase().startsWith(text)) {
                    output.push(item);
                }
            });
            return deferred.promise();
        }
          , stop = function() {
            if (ajaxObj) {
                ajaxObj.abort();
            }
        };
        return {
            type: 'remote',
            getResults: getResults,
            totalItems: totalItems,
            stop: stop
        };
    };
    var noData = function() {
        return {
            type: 'none',
            getResults: $.noop,
            totalItems: -1,
            stop: $.noop
        };
    };
}(jQuery, _));
;function recaptcha2Callback() {
    jQuery(window).trigger('recaptcha2Loaded');
}
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.captcha', function() {
        var defaults = {
            lang: 'en-US',
            theme: 'white'
        };
        var recaptchaLoaded = false;
        var respond = function(elem, options) {
            options = _.defaults(options, defaults);
            if (options.service == 'recaptcha') {
                _recaptcha(elem, options);
            } else if (options.service == 'recaptcha2') {
                _recaptcha2(elem, options);
            } else if (options.service == 'keycaptcha') {
                _keycaptcha(elem);
            } else if (options.service == 'recaptcha_invisible') {
                _recaptcha_invisible(elem);
            }
        }
          , _recaptcha = function(elem, options) {
            ips.loader.get([document.location.protocol + '//www.google.com/recaptcha/api/js/recaptcha_ajax.js']).done(function() {
                var container = $('<div/>');
                var id = container.identify().attr('id');
                elem.append(container);
                Recaptcha.create(options.key, id, {
                    theme: options.theme,
                    lang: options.lang,
                    callback: function() {
                        Debug.log('done')
                    }
                });
            });
        }
          , _recaptcha2 = function(elem, options) {
            ips.loader.get(['https://www.google.com/recaptcha/api.js?hl=' + $(elem).attr('data-ipsCaptcha-lang') + '&onload=recaptcha2Callback&render=explicit']);
            var initRecaptcha2 = function() {
                elem.children('[data-captchaContainer]').remove();
                var container = $('<div data-captchaContainer/>');
                var id = container.identify().attr('id');
                elem.append(container);
                grecaptcha.render(id, {
                    sitekey: $(elem).attr('data-ipsCaptcha-key'),
                    theme: $(elem).attr('data-ipsCaptcha-theme')
                });
            };
            if (recaptchaLoaded) {
                initRecaptcha2();
            } else {
                $(window).on('recaptcha2Loaded', function() {
                    recaptchaLoaded = true;
                    initRecaptcha2();
                });
            }
        }
          , _recaptcha_invisible = function(elem, options) {
            ips.loader.get(['https://www.google.com/recaptcha/api.js?hl=' + $(elem).attr('data-ipsCaptcha-lang') + '&onload=recaptcha2Callback&render=explicit']);
            var initRecaptchaInvisible = function() {
                elem.children('[data-captchaContainer]').remove();
                var container = $('<div data-captchaContainer/>');
                var id = container.identify().attr('id');
                elem.append(container);
                var form = elem.closest('form');
                var recaptchaId = grecaptcha.render(id, {
                    sitekey: $(elem).attr('data-ipsCaptcha-key'),
                    size: 'invisible',
                    callback: function() {
                        form.attr('data-recaptcha-done', 'true');
                        form.submit();
                    }
                });
                form.on('submit', function(e) {
                    if (!form.attr('data-recaptcha-done')) {
                        e.stopPropagation();
                        e.preventDefault();
                        grecaptcha.execute(recaptchaId);
                    }
                });
            };
            if (recaptchaLoaded) {
                initRecaptchaInvisible();
            } else {
                $(window).on('recaptcha2Loaded', function() {
                    recaptchaLoaded = true;
                    initRecaptchaInvisible();
                });
            }
        }
          , _keycaptcha = function(elem) {
            ips.loader.get([document.location.protocol + '//backs.keycaptcha.com/swfs/cap.js']);
        };
        ips.ui.registerWidget('captcha', ips.ui.captcha, ['service', 'key', 'lang', 'theme']);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.carousel', function() {
        var defaults = {
            item: ".ipsCarousel_item",
            shadows: true
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_carousel')) {
                $(elem).data('_carousel', carouselObj(elem, _.defaults(options, defaults)));
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_carousel')) {
                return $(elem).data('_carousel');
            }
            return undefined;
        };
        var carouselObj = function(elem, options) {
            var rtlMode = ($('html').attr('dir') == 'rtl');
            var currentItemCount = 0;
            var currentStartPos = 0;
            var currentFirstItem = null;
            var ui = {};
            var slideshowTimer = null;
            var slideshowTimeout = 4000;
            var animating = false;
            var init = function() {
                currentItemCount = elem.find(options.item);
                ui = {
                    itemList: elem.find('[data-role="carouselItems"]'),
                    next: elem.find('[data-action="next"]'),
                    prev: elem.find('[data-action="prev"]'),
                    nextShadow: elem.find('.ipsCarousel_shadowRight'),
                    prevShadow: elem.find('.ipsCarousel_shadowLeft')
                };
                if (!options.shadows) {
                    ui.nextShadow.hide();
                    ui.prevShadow.hide();
                }
                var startPos = rtlMode ? parseInt(ui.itemList.css('right')) : parseInt(ui.itemList.css('left'));
                if (!_.isNaN(startPos)) {
                    currentStartPos = startPos;
                }
                _build();
                var images = elem.find('img[src]').length;
                elem.find('img[src]').load(function() {
                    images--;
                    if (!images) {
                        _build();
                    }
                });
                _checkNav();
                elem.on('click', "[data-action='next']", _navNext);
                elem.on('click', "[data-action='prev']", _navPrev);
                elem.on('contentTruncated', _updateHeight);
                elem.on('gridRedraw.grid', _updateHeight);
                _setMaxWidth();
                var mc = new Hammer(elem[0]);
                mc.on('panleft', function(e) {
                    if (!animating) {
                        if (rtlMode) {
                            _navPrev();
                        } else {
                            _navNext();
                        }
                    }
                });
                mc.on('panright', function(e) {
                    if (!animating) {
                        if (rtlMode) {
                            _navNext();
                        } else {
                            _navPrev();
                        }
                    }
                });
                if (options.slideshow) {
                    slideshowTimer = setTimeout(_slideshowNext, slideshowTimeout);
                    elem.on('mouseenter', function() {
                        clearTimeout(slideshowTimer);
                    }).on('mouseleave', function() {
                        clearTimeout(slideshowTimer);
                        slideshowTimer = setTimeout(_slideshowNext, slideshowTimeout);
                    });
                }
                $(window).on('resize', _resize);
            }
              , destruct = function() {
                $(window).off('resize', _resize);
                elem.off('click', "[data-action='next']", _navNext);
                elem.off('click', "[data-action='prev']", _navPrev);
                elem.off('contentTruncated', _updateHeight);
                elem.off('gridRedraw.grid', _updateHeight);
                elem.find('.ipsCarousel_inner').off('scroll', _checkNav);
                clearTimeout(slideshowTimer);
            }
              , _build = function() {
                var maxHeight = _getMaxHeight();
                var elemWidth = 0;
                elem.find('.ipsCarousel_inner').css({
                    height: maxHeight + (parseInt(elem.find('.ipsCarousel_inner').css('padding-top')) + parseInt(elem.find('.ipsCarousel_inner').css('padding-bottom'))) + 'px'
                });
                if (options.fullSizeItems) {
                    elemWidth = elem.find('.ipsCarousel_inner').outerWidth(true);
                }
                elem.find(options.item).each(function(item) {
                    var height = $(this).outerHeight();
                    var diff = maxHeight - height;
                    if (options.fullSizeItems) {
                        $(this).css({
                            width: elemWidth + 'px'
                        });
                    }
                });
                elem.find('[data-role="carouselItems"]').css({
                    width: _getCurrentWidth() + 'px'
                })
                currentFirstItem = elem.find(options.item).first();
                _buildNav();
            }
              , _updateHeight = function() {
                var maxHeight = _getMaxHeight();
                elem.find('.ipsCarousel_inner').css({
                    height: maxHeight + 'px'
                });
            }
              , _slideshowNext = function() {
                if (ui.next.not('[data-disabled]').length) {
                    _navNext().done(function() {
                        slideshowTimer = setTimeout(_slideshowNext, slideshowTimeout);
                    });
                } else if (ui.prev.not('[data-disabled]').length) {
                    _navPrev(null, true).done(function() {
                        slideshowTimer = setTimeout(_slideshowNext, slideshowTimeout);
                    });
                }
            }
              , _navNext = function(e) {
                if (e) {
                    e.preventDefault();
                }
                var items = elem.find(options.item);
                var wrapperWidth = elem.outerWidth();
                var listWidth = _getCurrentWidth();
                var forceNext = false;
                var deferred = $.Deferred();
                var nextFirst = _.find(items, function(item, idx) {
                    if (forceNext) {
                        return true;
                    }
                    var width = $(item).outerWidth();
                    var adjustedStartPos = currentStartPos;
                    var stayOnScreen = adjustedStartPos + wrapperWidth;
                    if (rtlMode) {
                        var margin = parseInt($(item).css('marginLeft'));
                        var startEdge = ui.itemList.outerWidth() - ($(item).position().left + width) - margin;
                        var endEdge = startEdge + width;
                        if (startEdge < adjustedStartPos) {
                            return false;
                        }
                        if ((endEdge == stayOnScreen || startEdge == stayOnScreen && endEdge > adjustedStartPos)) {
                            forceNext = true;
                        }
                        if (startEdge < stayOnScreen && endEdge > stayOnScreen) {
                            return true;
                        }
                        if (startEdge > stayOnScreen) {
                            return true;
                        }
                    } else {
                        var margin = parseInt($(item).css('marginRight'));
                        var startEdge = $(item).position().left;
                        var endEdge = startEdge + width;
                        if (startEdge < adjustedStartPos) {
                            return false;
                        }
                        if ((endEdge == stayOnScreen || startEdge == currentStartPos && endEdge > stayOnScreen)) {
                            forceNext = true;
                        }
                        if (startEdge < stayOnScreen && endEdge > stayOnScreen) {
                            return true;
                        }
                        if (startEdge > stayOnScreen) {
                            return true;
                        }
                    }
                    return false;
                });
                var nextFirst = $(nextFirst);
                if (!nextFirst.length) {
                    deferred.resolve();
                    return deferred.promise();
                }
                if (rtlMode) {
                    var nextFirstMargin = parseInt($(nextFirst).css('marginLeft'));
                    var nextFirstPos = ui.itemList.outerWidth() - (nextFirst.position().left + nextFirst.outerWidth()) - nextFirstMargin;
                } else {
                    var nextFirstMargin = parseInt($(nextFirst).css('marginRight'));
                    var nextFirstPos = nextFirst.position().left;
                }
                if ((listWidth - nextFirstPos) < wrapperWidth) {
                    nextFirstPos = listWidth - wrapperWidth;
                }
                currentStartPos = nextFirstPos;
                animating = true;
                ui.itemList.animate((rtlMode) ? {
                    right: (nextFirstPos * -1) + 'px'
                } : {
                    left: (nextFirstPos * -1) + 'px'
                }, 'slow', function() {
                    _checkNav();
                    animating = false;
                    deferred.resolve();
                });
                return deferred.promise();
            }
              , _navPrev = function(e, backToBeginning) {
                if (e) {
                    e.preventDefault();
                }
                var items = elem.find(options.item).toArray();
                var wrapperWidth = elem.find('.ipsCarousel_inner').outerWidth();
                var listWidth = _getCurrentWidth();
                var stayOnScreen = currentStartPos + wrapperWidth;
                var forcePrev = false;
                var deferred = $.Deferred();
                var idealStartPos = (currentStartPos * -1) + wrapperWidth;
                if (idealStartPos >= 0 || backToBeginning) {
                    currentStartPos = 0;
                    animating = true;
                    ui.itemList.animate((rtlMode) ? {
                        right: '0px'
                    } : {
                        left: '0px'
                    }, 'slow', function() {
                        _checkNav();
                        animating = false;
                    });
                    deferred.resolve();
                    return deferred.promise();
                }
                items.reverse();
                idealStartPos = (idealStartPos * -1) + wrapperWidth;
                var prevFirst = _.find(items, function(item) {
                    if (forcePrev) {
                        return true;
                    }
                    var width = $(item).outerWidth();
                    if (rtlMode) {
                        var margin = parseInt($(item).css('marginLeft'));
                        var leftPos = $(item).position().left;
                        var startEdge = ui.itemList.outerWidth() - (leftPos + width) - margin;
                        var endEdge = startEdge + width;
                    } else {
                        var startEdge = $(item).position().left;
                        var endEdge = startEdge + width;
                        var margin = parseInt($(item).css('marginRight'));
                    }
                    if (startEdge > idealStartPos) {
                        return false;
                    }
                    if (stayOnScreen <= (endEdge + margin) || (startEdge < idealStartPos && endEdge > idealStartPos)) {
                        forcePrev = true;
                        return false;
                    }
                    if (endEdge > idealStartPos && startEdge <= idealStartPos) {
                        return true;
                    }
                    return false;
                });
                prevFirst = $(prevFirst);
                if (!ips.utils.responsive.currentIs('phone') && !options.fullSizeItems) {
                    prevFirst = $(prevFirst).next(options.item);
                }
                currentFirstItem = prevFirst;
                if (prevFirst.position() != null) {
                    currentStartPos = prevFirst.position().left + prevFirst.outerWidth() - wrapperWidth;
                    if (rtlMode) {
                        var prevFirstMargin = parseInt($(prevFirst).css('marginLeft'));
                        currentStartPos = ui.itemList.outerWidth() - (prevFirst.position().left) - prevFirstMargin - wrapperWidth;
                    }
                } else {
                    currentStartPos = prevFirst.outerWidth() + wrapperWidth;
                }
                animating = true;
                ui.itemList.animate((rtlMode) ? {
                    right: (currentStartPos * -1) + 'px'
                } : {
                    left: (currentStartPos * -1) + 'px'
                }, 'slow', function() {
                    _checkNav();
                    animating = false;
                    deferred.resolve();
                });
                return deferred.promise();
            }
              , _getMaxHeight = function() {
                var items = elem.find(options.item);
                if (!items.length) {
                    return 0;
                }
                var max = _.max(items, function(item) {
                    var item = $(item);
                    return item.outerHeight();
                });
                return $(max).outerHeight();
            }
              , _setMaxWidth = function() {
                elem.get(0).style.setProperty('--carousel-maxWidth', elem.width() + 'px');
            }
              , _checkNav = function() {
                var container = elem.find('.ipsCarousel_inner')[0].getBoundingClientRect();
                var list = ui.itemList[0].getBoundingClientRect();
                if ((!rtlMode && Math.floor(list.right) <= Math.floor(container.right)) || (rtlMode && Math.floor(list.left) >= Math.floor(container.left))) {
                    ui.next.hide().attr('data-disabled', true);
                    if (ui.nextShadow.is(':visible') && options.shadows) {
                        ips.utils.anim.go('fadeOut fast', ui.nextShadow);
                    }
                } else {
                    ui.next.show().removeAttr('data-disabled');
                    if (!ui.nextShadow.is(':visible') && options.shadows) {
                        ips.utils.anim.go('fadeIn fast', ui.nextShadow);
                    }
                }
                if ((!rtlMode && Math.floor(list.left) >= Math.floor(container.left)) || (rtlMode && Math.floor(list.right) <= Math.floor(container.right))) {
                    ui.prev.hide().attr('data-disabled', true);
                    if (ui.prevShadow.is(':visible') && options.shadows) {
                        ips.utils.anim.go('fadeOut fast', ui.prevShadow);
                    }
                } else {
                    ui.prev.show().removeAttr('data-disabled');
                    if (!ui.prevShadow.is(':visible') && options.shadows) {
                        ips.utils.anim.go('fadeIn fast', ui.prevShadow);
                    }
                }
            }
              , _getCurrentWidth = function() {
                var items = elem.find(options.item);
                var width = 0;
                items.each(function(item) {
                    width += $(this).outerWidth();
                    width += parseInt($(this).css('margin-left'));
                    width += parseInt($(this).css('margin-right'));
                });
                return width;
            }
              , _buildNav = function() {
                elem.find('.ipsCarousel_nav').removeClass('ipsHide');
            }
              , _resize = function() {
                if (options.fullSizeItems) {
                    var elemWidth = elem.find('.ipsCarousel_inner').outerWidth(true);
                    elem.find(options.item).each(function(item) {
                        $(this).css({
                            width: elemWidth + 'px'
                        });
                    });
                }
                _setMaxWidth();
            };
            init();
            return {
                destruct: destruct
            };
        };
        ips.ui.registerWidget('carousel', ips.ui.carousel, ['showDots', 'fullSizeItems', 'slideshow', 'shadows']);
        return {
            respond: respond,
            destruct: destruct
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.chart', function() {
        var defaults = {};
        var respond = function(elem, options) {
            var doInit = function() {
                if (!$(elem).data('_chart')) {
                    $(elem).data('_chart', chartObj(elem, _.defaults(options, defaults)));
                }
            };
            try {
                doInit();
            } catch (err) {
                ips.loader.get(['https://www.gstatic.com/charts/loader.js']).then(function() {
                    google.charts.load('47', {
                        'packages': ['corechart', 'gauge', 'table'],
                        'callback': doInit
                    });
                });
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_chart')) {
                return $(elem).data('_chart');
            }
            return undefined;
        };
        var chartObj = function(elem, options) {
            var data = new google.visualization.DataTable();
            var headerTypes = {};
            var extraOptions = {};
            var chartElem = $(elem).next();
            var chart = null;
            var init = function() {
                elem.find('thead th').each(function(idx) {
                    headerTypes[idx] = $(this).attr('data-colType');
                    data.addColumn($(this).attr('data-colType'), $(this).text());
                });
                elem.find('tbody tr').each(function() {
                    var row = [];
                    $(this).find('td').each(function(idx) {
                        if (headerTypes[idx] == 'number') {
                            var val;
                            if (val = $(this).text()) {
                                val = Number(val);
                            } else {
                                val = null;
                            }
                        } else if (headerTypes[idx] == 'date' || headerTypes[idx] == 'datetime' || headerTypes[idx] == 'timeofday') {
                            var val = new Date($(this).text());
                        } else {
                            var val = $(this).text();
                        }
                        if (!_.isNaN(val)) {
                            if ($(this).attr('data-key')) {
                                val = {
                                    v: $(this).attr('data-key'),
                                    f: val
                                };
                            }
                            row.push(val);
                        }
                    });
                    data.addRow(row);
                });
                if (options.format) {
                    var formatter = new google.visualization.NumberFormat({
                        pattern: '# ' + options.format
                    });
                    formatter.format(data, 1);
                }
                extraOptions = $.parseJSON(options.extraOptions);
                if (!_.isUndefined(extraOptions.height)) {
                    chartElem.css({
                        height: extraOptions.height + 'px'
                    });
                } else {
                    chartElem.css({
                        minHeight: '250px'
                    });
                }
                elem.hide().after(chartElem);
                $(window).on('resize', drawChart);
                drawChart();
                google.visualization.events.addListener(chart, 'ready', function() {
                    $(elem).trigger('chartInitialized');
                });
                $(document).on('tabShown', tabShown);
            }
              , drawChart = function(e) {
                chart = new google.visualization[options.type](chartElem.get(0));
                chart.draw(data, extraOptions);
            }
              , destruct = function() {
                $(window).off('resize', drawChart);
                $(document).off('tabShown', tabShown);
            }
              , tabShown = function(e, data) {
                if ($.contains(data.panel.get(0), elem.get(0))) {
                    drawChart();
                }
            };
            if (_.isUndefined(google.visualization)) {
                google.setOnLoadCallback(init);
            } else {
                init();
            }
            return {
                init: init,
                drawChart: drawChart
            };
        };
        ips.ui.registerWidget('chart', ips.ui.chart, ['type', 'extraOptions', 'format']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.contentItem', function() {
        var defaults = {
            multiValues: true,
            unique: false,
            fieldTemplate: 'core.contentItem.field',
            resultsTemplate: 'core.contentItem.resultWrapper',
            resultItemTemplate: 'core.contentItem.resultItem',
            itemTemplate: 'core.contentItem.item',
            queryParam: 'q',
            minAjaxLength: 1
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_contentItem')) {
                $(elem).data('_contentItem', contentItemObj(elem, _.defaults(options, defaults)));
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            elem = $(elem);
            if (elem.data('_contentItem')) {
                return elem.data('_contentItem');
            } else if ($('[name="' + elem.attr('name') + '_original' + '"]').length && $('[name="' + elem.attr('name') + '_original' + '"]').data('_contentItem')) {
                return $('[name="' + elem.attr('name') + '_original' + '"]').data('_contentItem');
            }
            return undefined;
        };
        ips.ui.registerWidget('contentItem', ips.ui.contentItem, ['resultsTemplate', 'resultItemTemplate', 'itemTemplate', 'queryParam', 'dataSource', 'maxItems', 'minAjaxLength']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
    var contentItemObj = function(elem, options, e) {
        var timer, blurTimer, lastValue = '', originalTextField, valueField, hiddenValueField, itemListWrapper, textField, dataSource, elemID = $(elem).identify().attr('id'), wrapper, inputItem, resultsElem, disabled = false, required = false, tooltip = null, tooltipTimer = null;
        var init = function() {
            if ($(elem).is('input[type="text"], input[type="search"]')) {
                originalTextField = $(elem);
            } else {
                originalTextField = $(elem).find('input[type="text"], input[type="search"]').first();
            }
            _buildWrapper();
            _getDataSource();
            originalTextField.removeAttr('list');
            _buildResultsList();
            if (originalTextField.is(':disabled')) {
                disabled = true;
            }
            if (originalTextField.is('[required]')) {
                required = true;
                originalTextField.removeProp('required').removeAttr('aria-required');
            }
            textField.prop('autocomplete', 'off').prop('spellcheck', false).prop('disabled', disabled).attr('aria-autocomplete', 'list').attr('aria-haspopup', 'true').attr('tabindex', originalTextField.attr('tabindex') || '');
            $(document).on('click', _documentClick);
            wrapper.click(function(e) {
                e.stopPropagation();
                return false;
            });
            textField.on('focus', _focusField).on('blur', _blurField).on('keydown', _keydownField)
            wrapper.on('click', _clickWrapper).on('keydown', _keydownWrapper).on('propChanged', _propChanged).toggleClass('ipsField_autocompleteDisabled', disabled);
            elem.trigger('autoCompleteReady', {
                elemID: elemID,
                elem: elem,
                currentValues: contentItems.getValues()
            });
        }
          , destruct = function() {
            $(document).off('click', _documentClick);
        }
          , _propChanged = function(e) {
            disabled = originalTextField.is(':disabled');
            wrapper.toggleClass('ipsField_autocompleteDisabled', disabled);
        }
          , _buildResultsList = function() {
            if (options.resultsElem && $(options.resultsElem).length) {
                resultsElem = $(options.resultsElem);
                return;
            }
            var resultsList = ips.templates.render(options.resultsTemplate, {
                id: elemID
            });
            wrapper.append(resultsList);
            resultsElem = $('#' + elemID + '_results');
            resultsElem.on('mouseover', '[data-id]', function(e) {
                results.select($(e.currentTarget));
            }).on('click', '[data-id]', function(e) {
                _addContentItem($(e.currentTarget));
                textField.focus();
            }).attr('aria-busy', 'false');
        }
          , _buildWrapper = function() {
            var existingClasses = elem[0].className;
            $(elem).after(ips.templates.render(options.fieldTemplate, {
                id: elemID
            })).removeClass(existingClasses);
            wrapper = $('#' + elemID + '_wrapper');
            inputItem = $('#' + elemID + '_inputItem');
            var insertElem = $('<input/>').attr({
                type: 'text',
                id: elemID + '_dummyInput'
            }).prop('autocomplete', 'off');
            textField = insertElem;
            var name = originalTextField.attr('name');
            originalTextField.attr('name', originalTextField.attr('name') + '_original');
            valueField = $('<input/>').attr('name', name).hide();
            hiddenValueField = $('input[name=' + name + '_values]');
            itemListWrapper = $('[data-contentitem-results=' + name + ']');
            originalTextField.hide();
            wrapper.addClass(existingClasses).append(elem).append(valueField).find('#' + elemID + '_inputItem').append(insertElem);
            if (options.maxItems && contentItems.total() >= options.maxItems) {
                wrapper.hide();
            }
            itemListWrapper.on('click', '[data-action="delete"]', function(e) {
                _deleteContentItem($(e.currentTarget).parent('[data-id]'));
            });
        }
          , _getDataSource = function() {
            if (ips.utils.validate.isUrl(options.dataSource)) {
                dataSource = remoteData(options.dataSource, options);
            } else {
                dataSource = noData();
            }
        }
          , _clickWrapper = function(e) {
            if (!$(e.target).is(textField) && (!resultsElem || !$.contains(resultsElem.get(0), e.target))) {
                textField.focus();
            }
        }
          , _focusField = function(e) {
            if (dataSource.type == 'none') {
                return;
            }
            timer = setInterval(_timerFocusField, 400);
        }
          , _blurField = function(e) {
            clearInterval(timer);
            _.delay(_timerBlurField, 300);
        }
          , _timerBlurField = function() {
            _closeResults();
        }
          , _timerFocusField = function() {
            if (dataSource.type == 'none') {
                return;
            }
            var currentValue = _getCurrentValue();
            if (currentValue == lastValue) {
                return;
            }
            lastValue = currentValue;
            _loadResults(currentValue);
        }
          , _loadResults = function(value) {
            _toggleLoading('show');
            resultsElem.attr('aria-busy', 'true');
            dataSource.getResults(value).done(function(results) {
                _showResults(_processResults(results, value));
            }).fail(function() {}).always(function() {
                resultsElem.attr('aria-busy', 'false');
                _toggleLoading('hide');
            });
        }
          , _toggleLoading = function(doWhat) {
            if (doWhat == 'show') {
                wrapper.addClass('ipsField_loading');
            } else {
                wrapper.removeClass('ipsField_loading');
            }
        }
          , _closeResults = function(e) {
            if (e) {
                e.preventDefault();
            }
            if (resultsElem && resultsElem.length) {
                resultsElem.hide().attr('aria-expanded', 'false');
            }
            dataSource.stop();
        }
          , _documentClick = function() {
            _closeResults();
        }
          , _processResults = function(results, text) {
            var existingItems = contentItems.getValues()
              , newResults = {};
            $.each(results, function(key, data) {
                if (!data.id || _.indexOf(existingItems, data.id) === -1) {
                    newResults[key] = data;
                }
            });
            return newResults;
        }
          , _showResults = function(results) {
            var output = '';
            $.each(results, function(idx, value) {
                output += ips.templates.render(options.resultItemTemplate, value);
            });
            if (resultsElem.attr('id') == (elemID + '_results')) {
                _positionResults();
            }
            resultsElem.show().html(output).attr('aria-expanded', 'true');
        }
          , _positionResults = function() {
            resultsElem.css({
                width: wrapper.outerWidth() + 'px'
            });
            var positionInfo = {
                trigger: wrapper,
                targetContainer: wrapper,
                target: resultsElem,
                center: false
            };
            var resultsPosition = ips.utils.position.positionElem(positionInfo);
            $(resultsElem).css({
                left: '0px',
                top: resultsPosition.top + 'px',
                position: (resultsPosition.fixed) ? 'fixed' : 'absolute',
                zIndex: ips.ui.zIndex()
            });
        }
          , _getCurrentValue = function() {
            var value = textField.val();
            return value;
        }
          , _keydownWrapper = function(e) {
            if (e.keyCode == ips.ui.key.ESCAPE) {
                keyEvents.escape(e);
            }
        }
          , _keydownField = function(e) {
            _expandField();
            var ignoreKey = false;
            if (!_([ips.ui.key.UP, ips.ui.key.DOWN, ips.ui.key.ESCAPE, ips.ui.key.ENTER]).contains(e.keyCode)) {
                ignoreKey = true;
            }
            var value = textField.val().trim();
            if (ignoreKey) {
                return;
            }
            switch (e.keyCode) {
            case ips.ui.key.UP:
                keyEvents.up(e);
                break;
            case ips.ui.key.DOWN:
                keyEvents.down(e);
                break;
            case ips.ui.key.ESCAPE:
                keyEvents.escape(e);
                break;
            case ips.ui.key.ENTER:
                keyEvents.enter(e);
                break;
            }
        }
          , _addContentItem = function(elem) {
            contentItems.add(elem);
            textField.val('');
            lastValue = '';
            _resetField();
            if (options.maxItems && contentItems.total() >= options.maxItems) {
                wrapper.hide();
            }
        }
          , _deleteContentItem = function(item) {
            if (disabled) {
                return;
            }
            contentItems.remove(item);
        }
          , keyEvents = {
            up: function(e) {
                if (!resultsElem || !resultsElem.is(':visible')) {
                    return;
                }
                e.preventDefault();
                var selected = results.getCurrent();
                if (!selected) {
                    results.selectLast();
                } else {
                    var prev = results.getPrevious(selected);
                    if (prev) {
                        results.select(prev);
                    } else {
                        results.selectLast();
                    }
                }
            },
            down: function(e) {
                if (!resultsElem || !resultsElem.is(':visible')) {
                    return;
                }
                e.preventDefault();
                var selected = results.getCurrent();
                if (!selected) {
                    results.selectFirst();
                } else {
                    var next = results.getNext(selected);
                    if (next) {
                        results.select(next);
                    } else {
                        results.selectFirst();
                    }
                }
            },
            enter: function(e) {
                e.preventDefault();
                var currentResult = results.getCurrent();
                var value = '';
                if (currentResult) {
                    value = currentResult.attr('data-id');
                }
                if (!value) {
                    return false;
                }
                _addContentItem(currentResult);
            },
            escape: function(e) {
                if (resultsElem && resultsElem.is(':visible')) {
                    _closeResults();
                }
            }
        }
          , results = {
            deselectAll: function() {
                resultsElem.find('[data-selected]').removeAttr('data-selected');
            },
            getCurrent: function() {
                if (dataSource.type == 'none') {
                    return;
                }
                var cur = resultsElem.find('[data-selected]');
                if (cur.length && resultsElem.is(':visible')) {
                    return cur;
                }
                return false;
            },
            getPrevious: function(result) {
                var prev = $(result).prev('[data-id]');
                if (prev.length) {
                    return prev;
                }
                return false;
            },
            getNext: function(result) {
                var next = $(result).next('[data-id]');
                if (next.length) {
                    return next;
                }
                return false;
            },
            selectFirst: function() {
                results.select(resultsElem.find('[data-id]').first());
            },
            selectLast: function() {
                results.select(resultsElem.find('[data-id]').last());
            },
            select: function(result) {
                results.deselectAll();
                result.attr('data-selected', true);
            }
        }
          , contentItems = {
            selected: null,
            add: function(elem) {
                var html = '';
                var obj = $(elem).find('[data-role=contentItemRow]');
                html = obj.html();
                itemListWrapper.append(ips.templates.render(options.itemTemplate, {
                    id: obj.attr('data-itemid'),
                    html: html
                }));
                if (resultsElem) {
                    _closeResults();
                }
                hiddenValueField.val(contentItems.getValues().join(','));
                if (options.maxItems && contentItems.total() >= options.maxItems) {
                    wrapper.hide();
                }
                elem.trigger('contentItemAdded', {
                    html: html,
                    itemList: contentItems.getValues(),
                    totalItems: contentItems.total()
                });
                return true;
            },
            remove: function(item) {
                if (contentItems.selected == item) {
                    contentItems.selected = null;
                }
                var value = $(item).attr('data-value');
                $(item).remove();
                if (options.maxItems && contentItems.total() < options.maxItems) {
                    wrapper.show();
                }
                hiddenValueField.val(contentItems.getValues().join(','));
                elem.trigger('contentItemDeleted', {
                    item: item,
                    itemList: contentItems.getValues(),
                    totalItems: contentItems.total()
                });
            },
            total: function() {
                return itemListWrapper.find('[data-id]').length;
            },
            getValues: function() {
                var values = [];
                var allContentItems = itemListWrapper.find('[data-id]');
                if (allContentItems.length) {
                    values = _.map(allContentItems, function(item) {
                        return $(item).attr('data-id');
                    });
                }
                return values;
            }
        }
          , _duplicateValue = function(value) {
            var values = contentItems.getValues();
            if (values.indexOf(value) !== -1) {
                return true;
            }
            return false;
        }
          , _expandField = function() {
            var text = textField.val();
            var widthOfElem = wrapper.width();
            widthOfElem -= (parseInt(wrapper.css('padding-left')) + parseInt(wrapper.css('padding-right')));
            var span = $('<span/>').text(text).css({
                'font-size': textField.css('font-size'),
                'letter-spacing': textField.css('letter-spacing'),
                'position': 'absolute',
                'top': '-100px',
                'left': '-300px',
                'opacity': "0.1"
            });
            ips.getContainer().append(span);
            var width = span.width() + 20;
            span.remove();
            textField.css({
                width: ((width >= widthOfElem) ? widthOfElem : width) + 'px'
            });
        }
          , _resetField = function() {
            textField.css({
                width: '15px'
            });
        };
        init();
        return {
            init: init,
            destruct: destruct,
            addContentItem: contentItems.add,
            getContentItem: contentItems.getValues,
            removeContentItem: contentItems.remove
        };
    };
    var remoteData = function(source, options) {
        var ajaxObj, loadedCache = false, cache = {};
        var getResults = function(text) {
            return _remoteSearch(text);
        }
          , totalItems = function() {
            return -1;
        }
          , _remoteSearch = function(text) {
            var deferred = $.Deferred();
            if (ajaxObj) {
                ajaxObj.abort();
            }
            if (options.minAjaxLength > text.length) {
                deferred.reject();
                return deferred.promise();
            }
            if (cache[text]) {
                deferred.resolve(cache[text]);
            } else {
                ajaxObj = ips.getAjax()(source + '&' + options.queryParam + '=' + encodeURIComponent(text), {
                    dataType: 'json'
                }).done(function(response) {
                    deferred.resolve(response);
                    cache[text] = response;
                }).fail(function(jqXHR, status, errorThrown) {
                    if (status != 'abort') {
                        Debug.log('aborting');
                    }
                    deferred.reject();
                });
            }
            return deferred.promise();
        }
          , _remoteFetch = function(text) {
            var deferred = $.Deferred();
            if (!loadedCache) {
                if (ajaxObj) {
                    return;
                }
                if (options.minAjaxLength > text.length) {
                    return;
                }
                ajaxObj = ips.getAjax()(source, {
                    dataType: 'json'
                }).done(function(response) {
                    loadedCache = true;
                    cache = response;
                    _remoteFetch(text);
                }).fail(function(jqXHR, status, errorThrown) {
                    if (status != 'abort') {
                        Debug.log('aborting');
                    }
                    deferred.reject();
                });
            }
            cache.each(function(idx, item) {
                if (item.value.toLowerCase().startsWith(text)) {
                    output.push(item);
                }
            });
            return deferred.promise();
        }
          , stop = function() {
            if (ajaxObj) {
                ajaxObj.abort();
            }
        };
        return {
            type: 'remote',
            getResults: getResults,
            totalItems: totalItems,
            stop: stop
        };
    };
    var noData = function() {
        return {
            type: 'none',
            getResults: $.noop,
            totalItems: -1,
            stop: $.noop
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.copy', function() {
        var respond = function(elem, options, e) {
            ips.loader.get(['core/interface/clipboard/clipboard.min.js']).then(function() {
                if (ClipboardJS.isSupported()) {
                    elem.find('[data-role="copyButton"]').show();
                    var clipboard = new ClipboardJS(elem.find('[data-role="copyButton"]').get(0));
                    clipboard.on('success', function(e) {
                        elem.find('[data-role="copyButton"]').text(ips.getString('copied'));
                    });
                }
            });
        };
        ips.ui.registerWidget('copy', ips.ui.copy, []);
        return {
            respond: respond,
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.dialog', function() {
        var defaults = {
            modal: true,
            draggable: false,
            className: 'ipsDialog',
            extraClass: '',
            close: true,
            fixed: false,
            narrow: false,
            callback: null,
            forceReload: false,
            flashMessage: '',
            flashMessageTimeout: 2,
            flashMessageEscape: true,
            remoteVerify: true,
            remoteSubmit: false,
            destructOnClose: false,
            ajax: {
                type: 'get',
                data: {}
            }
        };
        var showStack = [];
        var respond = function(elem, options, e) {
            e.preventDefault();
            if (!options.url && !options.content && $(elem).attr('href')) {
                options.url = $(elem).attr('href');
            }
            if (!$(elem).data('_dialog')) {
                $(elem).data('_dialog', dialogObj(elem, _.defaults(options, defaults)));
            }
            $(elem).data('_dialog').show();
        }
          , getObj = function(elem) {
            if ($(elem).data('_dialog')) {
                return $(elem).data('_dialog');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
                $(elem).removeData('_dialog');
            }
        }
          , create = function(options) {
            return dialogObj(null, _.defaults(options, defaults));
        }
          , hasOpenDialogs = function() {
            return (showStack.length > 0);
        }
          , _init = function() {
            $(document).on('keydown', function(e) {
                if (e.keyCode == ips.ui.key.ESCAPE) {
                    $(document).trigger('closeDialog', {
                        dialogID: showStack[showStack.length - 1]
                    });
                }
            }).on('openDialog', function(e, data) {
                showStack.push(data.dialogID);
            }).on('hideDialog', function(e, data) {
                showStack = _.without(showStack, data.dialogID);
            });
        };
        ips.ui.registerWidget('dialog', ips.ui.dialog, ['url', 'modal', 'draggable', 'size', 'title', 'close', 'fixed', 'destructOnClose', 'extraClass', 'callback', 'content', 'forceReload', 'flashMessage', 'flashMessageTimeout', 'flashMessageEscape', 'showFrom', 'remoteVerify', 'remoteSubmit'], {
            lazyLoad: true,
            lazyEvents: 'click'
        });
        _init();
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj,
            create: create,
            hasOpenDialogs: hasOpenDialogs
        };
    });
    var dialogObj = function(elem, options) {
        var modal, dialog, ajaxObj, dialogID = '', elemID = '', dialogBuilt = false, contentLoaded = false, modalEvent = {
            up: false,
            down: false
        };
        var init = function() {
            if (elem === null) {
                elemID = 'elem_' + (Math.round(Math.random() * 10000000));
            } else {
                elemID = $(elem).identify().attr('id');
            }
            dialogID = elemID + '_dialog';
            if (options.size == 'fullscreen') {
                options.fixed = true;
            }
            $(document).on('closeDialog', closeDialog);
        }
          , destruct = function() {
            $(document).off('closeDialog', closeDialog);
            if (modal) {
                modal.remove();
            }
            if (dialog) {
                dialog.remove();
            }
        }
          , closeDialog = function(e, data) {
            if (data && data.originalEvent) {
                data.originalEvent.preventDefault();
            }
            if (data && data.dialogID == dialogID) {
                hide();
                modalEvent = {
                    up: false,
                    down: false
                };
            }
        }
          , hide = function() {
            var deferred = $.Deferred();
            if (options.fixed) {
                $('body').removeClass('ipsNoScroll');
            }
            dialog.animationComplete(function() {
                if (options.forceReload || options.destructOnClose) {
                    ips.controller.cleanContentsOf(dialog);
                    dialog.find('.' + options.className + '_content').html('');
                }
                $(elem || document).trigger('hideDialog', {
                    elemID: elemID,
                    dialogID: dialogID,
                    dialog: dialog
                });
                if (options.destructOnClose) {
                    ips.ui.dialog.destruct(elem);
                }
                deferred.resolve();
            });
            ips.utils.anim.go('fadeOutDown fast', dialog);
            if (options.modal) {
                ips.utils.anim.go('fadeOut fast', modal);
            }
            return deferred.promise();
        }
          , show = function(initOnly) {
            if (options.url && !contentLoaded) {
                _remoteDialog(initOnly);
            } else if (!contentLoaded) {
                _localDialog(initOnly);
            } else {
                if (initOnly) {
                    return;
                }
                if (modal) {
                    modal.css({
                        zIndex: ips.ui.zIndex()
                    });
                }
                dialog.css({
                    zIndex: ips.ui.zIndex()
                });
                _positionDialog();
                _showDialog();
            }
        }
          , remove = function(hideFirst) {
            var doRemove = function() {
                if (ajaxObj && _.isFunction(ajaxObj.abort)) {
                    ajaxObj.abort();
                }
                dialog.remove();
                if (modal) {
                    modal.remove();
                }
                dialog = null;
                modal = null;
                dialogBuilt = false;
                contentLoaded = false;
                ajaxObj = null;
            };
            if (hideFirst && dialog.is(':visible')) {
                hide().done(function() {
                    doRemove();
                });
            } else {
                doRemove();
            }
        }
          , setLoading = function(loading) {
            if (loading) {
                dialog.find('.' + options.className + '_loading').show().end().find('.' + options.className + '_content').hide();
                _positionDialog();
            } else {
                dialog.find('.' + options.className + '_loading').hide().end().find('.' + options.className + '_content').show();
            }
        }
          , updateContent = function(newContent) {
            dialog.find('.' + options.className + '_content').html(newContent);
            $(document).trigger('contentChange', [dialog]);
        }
          , _showDialog = function() {
            if (options.fixed) {
                $('body').addClass('ipsNoScroll');
            }
            if (options.modal) {
                ips.utils.anim.go('fadeIn', modal);
            }
            if (options.showFrom && $(options.showFrom).is(':visible')) {
                _showFrom(options.showFrom);
            } else {
                ips.utils.anim.go('fadeInDown', dialog).done(function() {
                    dialog.find('.' + options.className + '_loading').removeClass('ipsLoading_noAnim');
                });
            }
            $(elem || document).trigger('openDialog', {
                elemID: elemID,
                dialogID: dialogID,
                dialog: dialog,
                contentLoaded: contentLoaded
            });
        }
          , _showFrom = function(showFrom) {
            dialog.show();
            var dialogBit = dialog.find('>div');
            var dialogPosition = ips.utils.position.getElemPosition(dialogBit);
            var dialogHeight = dialogBit.outerHeight();
            var dialogWidth = dialogBit.outerWidth();
            dialog.hide();
            var showFrom = $(options.showFrom);
            var fromPosition = ips.utils.position.getElemPosition(showFrom);
            var fromPositionWidth = showFrom.width();
            var fromPositionHeight = showFrom.height();
            var docSize = $(document).outerWidth();
            var dialogCenterLeft = dialogPosition.absPos.left + (dialogWidth / 2);
            var dialogCenterTop = dialogPosition.absPos.top + (dialogHeight / 2);
            var widthDifference = (fromPosition.absPos.left + (fromPositionWidth / 2) - dialogCenterLeft);
            var heightDifference = (fromPosition.absPos.top + (fromPositionHeight / 2) - dialogCenterTop);
            $(dialog).show();
            $(dialogBit).css({
                transform: 'translateY(' + heightDifference + 'px) translateX(' + widthDifference + 'px) scale(0.1)',
                opacity: "1"
            }).animate({
                transform: 'translateY(0px) translateX(0px) scale(1)',
                opacity: "1"
            }, {
                easing: 'swing',
                complete: function() {
                    dialog.find('.' + options.className + '_loading').removeClass('ipsLoading_noAnim');
                }
            });
        }
          , _remoteDialog = function(initOnly) {
            if (!dialogBuilt) {
                if (options.modal) {
                    _buildModal();
                }
                _buildDialog();
            }
            if (initOnly) {
                _fetchContent();
            } else {
                setLoading(true);
                _showDialog();
                _fetchContent();
            }
            if (!options.forceReload) {
                contentLoaded = true;
            }
        }
          , _localDialog = function(initOnly) {
            if (!options.content && !$(options.content).length) {
                Debug.warn("'content' option not specified for dialog, or element doesn't exist");
                return;
            }
            if (!dialogBuilt) {
                if (options.modal) {
                    _buildModal();
                }
                _buildDialog();
            }
            if (initOnly) {
                return;
            }
            dialog.find('.' + options.className + '_content').html($(options.content).first().show());
            _showDialog();
            if (!options.forceReload) {
                contentLoaded = true;
            }
        }
          , _fetchContent = function() {
            var deferred = $.Deferred();
            setLoading(true);
            ajaxObj = ips.getAjax()(options.url, {
                type: options.ajax.type,
                data: options.ajax.data
            }).done(function(response) {
                setLoading(false);
                updateContent(response);
                deferred.resolve();
                if (options.callback !== null) {
                    options.callback(dialog);
                }
                $(elem || document).trigger('dialogContentLoaded', {
                    elemID: elemID,
                    dialogID: dialogID,
                    dialog: dialog,
                    contentLoaded: true
                });
            }).fail(function(jqXHR, status, errorThrown) {
                if (jqXHR.responseJSON) {
                    ips.ui.alert.show({
                        message: jqXHR.responseJSON,
                    });
                    setLoading(false);
                    contentLoaded = false;
                    hide();
                } else if (Debug.isEnabled()) {
                    Debug.error("Ajax request failed (" + status + "): " + errorThrown);
                } else if (elem) {
                    window.location = elem.href;
                } else {
                    ips.ui.alert.show({
                        message: ips.getString('errorLoadingContent'),
                    });
                    setLoading(false);
                    contentLoaded = false;
                    hide();
                }
                deferred.reject();
            }).always(function() {});
            return deferred.promise();
        }
          , _buildDialog = function() {
            if (dialogBuilt) {
                return;
            }
            var offset = 0;
            $('body').append(ips.templates.render('core.dialog.main', {
                'class': options.className,
                title: options.title || '',
                id: dialogID,
                fixed: options.fixed,
                size: options.size,
                close: options.close,
                extraClass: options.extraClass
            }));
            dialog = $('#' + dialogID);
            dialog.css({
                zIndex: ips.ui.zIndex(),
            });
            _positionDialog();
            dialog.on('click', '[data-action="dialogClose"]', function(e) {
                $(dialog).trigger('closeDialog', {
                    dialogID: dialogID,
                    originalEvent: e
                });
            });
            $(dialog).on('closeDialog', function(e, data) {
                hide();
            });
            if (options.close) {
                dialog.on('mouseup', function(e) {
                    if (e.target == dialog.get(0)) {
                        modalEvent.up = true;
                    }
                });
                dialog.on('mousedown', function(e) {
                    if (e.target == dialog.get(0)) {
                        modalEvent.down = true;
                    }
                });
                dialog.on('click', function(e) {
                    Debug.log(e.target);
                    if ((!modalEvent.up || (dialog.get(0) == e.target && modalEvent.down)) && dialog.find('> div').get(0) != e.target && !$.contains(dialog.find('> div').get(0), e.target) && $.contains(document, e.target)) {
                        $(dialog).trigger('closeDialog', {
                            dialogID: dialogID,
                            originalEvent: e
                        });
                    }
                    modalEvent = {
                        up: false,
                        down: false
                    };
                });
            }
            if (options.remoteVerify || options.remoteSubmit) {
                dialog.find('.' + options.className + '_content').on('submit', 'form', function(e) {
                    _ajaxFormSubmit(e, $(this));
                });
            }
            dialogBuilt = true;
        }
          , _positionDialog = function() {
            if (dialog && !options.fixed) {
                var win = $(window);
                var offset = win.scrollTop();
                dialog.css({
                    top: offset + 'px'
                });
            }
        }
          , _buildModal = function() {
            modal = ips.ui.getModal();
            modal.css({
                zIndex: ips.ui.zIndex()
            });
        }
          , _ajaxFormSubmit = function(e, form) {
            if (form.attr('data-bypassValidation')) {
                return false;
            }
            e.preventDefault();
            setLoading(true);
            try {
                if (!_.isUndefined(CKEDITOR) && CKEDITOR != null) {
                    for (var instance in CKEDITOR.instances) {
                        CKEDITOR.instances[instance].updateElement();
                    }
                }
            } catch (err) {}
            var url = form.attr('action');
            var ajaxUrl = url;
            if (options.remoteVerify) {
                var joinWith = '?';
                if (ajaxUrl.indexOf('?') != -1) {
                    joinWith = '&';
                }
                ajaxUrl = ajaxUrl + joinWith + 'ajaxValidate=1';
            }
            ips.getAjax()(ajaxUrl, {
                data: form.serialize(),
                type: 'post'
            }).done(function(response, status, jqXHR) {
                if (options.remoteVerify && !form.attr('data-bypassValidation')) {
                    if (jqXHR.getAllResponseHeaders().indexOf('X-IPS-FormError: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('X-IPS-FormNoSubmit: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('x-ips-formerror: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('x-ips-formnosubmit: true') !== -1) {
                        Debug.log('Validation failed');
                        setLoading(false);
                        updateContent(response);
                        return;
                    }
                }
                if (options.remoteSubmit) {
                    var doneAfterSubmit = function(submitResponse) {
                        $(elem || document).trigger('submitDialog', {
                            elemID: elemID,
                            dialogID: dialogID,
                            dialog: dialog,
                            contentLoaded: contentLoaded,
                            response: submitResponse
                        });
                        setLoading(false);
                        contentLoaded = false;
                        hide();
                        if (options.flashMessage) {
                            ips.ui.flashMsg.show(options.flashMessage, {
                                timeout: options.flashMessageTimeout,
                                escape: options.flashMessageEscape
                            });
                        }
                    };
                    if (options.remoteVerify) {
                        ips.getAjax()(url, {
                            data: form.serialize(),
                            type: 'post',
                            bypassRedirect: true
                        }).done(function(response, status, jqXHR) {
                            if (jqXHR.getAllResponseHeaders().indexOf('X-IPS-FormError: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('X-IPS-FormNoSubmit: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('x-ips-formerror: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('x-ips-formnosubmit: true') !== -1) {
                                form.attr('data-bypassValidation', true).submit();
                            } else {
                                doneAfterSubmit(response);
                            }
                        }).fail(function(jqXHR, status, errorThrown) {
                            form.attr('data-bypassValidation', true).submit();
                        });
                    } else {
                        doneAfterSubmit(response);
                    }
                } else if (jqXHR.getAllResponseHeaders().indexOf('X-IPS-FormNoSubmit: true') !== -1 || jqXHR.getAllResponseHeaders().indexOf('x-ips-formnosubmit: true') !== -1) {
                    setLoading(false);
                    updateContent(response);
                } else {
                    form.attr('data-bypassValidation', true).submit();
                }
            }).fail(function() {
                form.attr('data-bypassValidation', true).submit();
            });
        };
        init();
        return {
            init: init,
            show: show,
            hide: hide,
            remove: remove,
            setLoading: setLoading,
            updateContent: updateContent,
            dialogID: dialogID,
            destruct: destruct
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.drawer', function() {
        var defaults = {};
        var respond = function(elem, options, e) {
            e.preventDefault();
            if (!$(elem).data('_drawer')) {
                $(elem).data('_drawer', drawerObj(elem, _.defaults(options, defaults)));
            }
            $(elem).data('_drawer').show();
        };
        ips.ui.registerWidget('drawer', ips.ui.drawer, ['drawerElem'], {
            lazyLoad: true,
            lazyEvents: 'click'
        });
        return {
            respond: respond
        };
    });
    var drawerObj = function(elem, options) {
        var modal, drawerElem, drawerContent;
        var init = function() {
            modal = ips.ui.getModal().addClass('ipsDrawer_modal');
            drawerElem = $(options.drawerElem),
            drawerContent = drawerElem.find('.ipsDrawer_menu');
            drawerElem.on('click', '[data-action="close"]', function(e) {
                e.preventDefault();
                hide();
            });
            drawerElem.on('click', function(e) {
                if (!$.contains(drawerContent.get(0), e.target)) {
                    hide();
                }
            });
            drawerElem.on('click', '.ipsDrawer_itemParent > h4', _showSubMenu).on('click', '[data-action="back"]', _subMenuBack).find('.ipsDrawer_itemParent > ul').addClass('ipsDrawer_subMenu').hide();
        }
          , _showSubMenu = function(e) {
            e.preventDefault();
            var item = $(e.currentTarget);
            item.parents('.ipsDrawer_list').animate(($('html').attr('dir') === 'rtl') ? {
                marginRight: '-100%'
            } : {
                marginLeft: '-100%'
            }).end().siblings('.ipsDrawer_list').show();
            drawerElem.find('.ipsDrawer_content').animate({
                scrollTop: "0px"
            });
        }
          , _subMenuBack = function(e) {
            e.preventDefault();
            var item = $(e.currentTarget)
              , thisMenu = item.parent('.ipsDrawer_list');
            thisMenu.parents('.ipsDrawer_list').first().animate(($('html').attr('dir') === 'rtl') ? {
                marginRight: '0'
            } : {
                marginLeft: '0'
            }, function() {
                thisMenu.hide();
            });
        }
          , show = function() {
            window.scrollTo(0, -1);
            modal.css({
                zIndex: ips.ui.zIndex()
            });
            drawerElem.find('.ipsDrawer_close').hide();
            ips.utils.anim.go('fadeIn fast', modal);
            drawerElem.css({
                zIndex: ips.ui.zIndex()
            }).show();
            if ($('html').attr('dir') === 'rtl') {
                ips.utils.anim.go('slideRight fast', drawerElem);
            } else {
                ips.utils.anim.go('slideLeft fast', drawerElem);
            }
            drawerElem.find('.ipsDrawer_close').delay(500).fadeIn();
            $('body').css({
                overflow: 'hidden'
            });
        }
          , hide = function() {
            ips.utils.anim.go('fadeOut fast', modal);
            drawerElem.hide();
            $('body').css({
                overflow: 'auto'
            });
        };
        init();
        return {
            init: init,
            show: show,
            hide: hide
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.editor', function() {
        var defaults = {
            allbuttons: false,
            postKey: '',
            toolbars: '',
            extraPlugins: '',
            contentsCss: '',
            minimized: false,
            autoSaveKey: null,
            skin: 'ips',
            autoGrow: true,
            pasteBehaviour: 'rich',
            autoEmbed: true,
            controller: null,
            defaultIfNoAutoSave: false,
            minimizeAfterReset: false
        };
        var respond = function(elem, options) {
            var loadTries = 0;
            var fileToLoad = ips.getSetting('useCompiledFiles') !== true ? 'core/dev/ckeditor/ckeditor.js' : 'core/interface/ckeditor/ckeditor/ckeditor.js';
            if (!options.minimized || ips.getSetting('memberID')) {
                ips.loader.get([fileToLoad]).then(bootEditor);
            } else {
                $(elem).data('_editorInit', function(callback) {
                    $(elem).find('.ipsComposeArea_dummy').html(ips.templates.render('core.editor.initLoading'));
                    ips.loader.get([fileToLoad]).then(function() {
                        bootEditor(callback);
                    });
                });
                $(elem).find('.ipsComposeArea_dummy').show().on('focus', function() {
                    $(elem).data('_editorInit')(function(instance) {
                        instance.unminimize(function() {
                            var inputs = elem.closest('.ipsComposeArea').find('input[type="text"], input[type="email"]');
                            if (inputs.length) {
                                inputs[0].focus();
                            } else {
                                instance.focus();
                            }
                        });
                    });
                }).end().find('[data-role="mainEditorArea"]').hide().end().closest('.ipsComposeArea').addClass('ipsComposeArea_minimized').find('[data-ipsEditor-toolList]').hide();
            }
            function bootEditor(callback) {
                if ((!CKEDITOR || _.isUndefined(CKEDITOR.on)) && loadTries < 60) {
                    loadTries++;
                    setTimeout(bootEditor, 50);
                    return;
                }
                if (CKEDITOR.status == 'loaded') {
                    ckLoaded(callback);
                } else {
                    CKEDITOR.on('loaded', function() {
                        ckLoaded(callback);
                    });
                }
            }
            ;function ckLoaded(callback) {
                if (!$(elem).data('_editor')) {
                    var editor = editorObj(elem, _.defaults(options, defaults));
                    $(elem).data('_editor', editor);
                    editor.init(callback);
                }
            }
            ;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_editor')) {
                return $(elem).data('_editor');
            }
            return undefined;
        }
          , getObjWithInit = function(elem, callback) {
            var obj = this.getObj(elem);
            if (obj) {
                callback(obj);
            } else {
                var initFunction = $(elem).data('_editorInit');
                if (initFunction) {
                    initFunction(callback);
                }
            }
        };
        ips.ui.registerWidget('editor', ips.ui.editor, ['allbuttons', 'postKey', 'toolbars', 'extraPlugins', 'autoGrow', 'contentsCss', 'minimized', 'minimizeAfterReset', 'autoSaveKey', 'skin', 'name', 'pasteBehaviour', 'autoEmbed', 'controller', 'defaultIfNoAutoSave', 'ipsPlugins']);
        return {
            respond: respond,
            getObj: getObj,
            getObjWithInit: getObjWithInit,
            destruct: destruct
        };
    });
    var editorObj = function(elem, options) {
        var changePolled = false;
        var instance = null;
        var hiddenAtStart = false;
        var minimized = options.minimized;
        var hiddenInterval = null;
        var size = 'phone';
        var name = '';
        var previewIframe = null;
        var currentPreviewView = '';
        var previewInitialHeight = 0;
        var previewSizes = {
            phone: 375,
            tablet: 780
        };
        var init = function(callback) {
            delete CKEDITOR.dtd.$removeEmpty['ins'];
            delete CKEDITOR.dtd.$removeEmpty['i'];
            var config = {
                allowedContent: true,
                contentsLangDirection: $('html').attr('dir'),
                disableNativeSpellChecker: false,
                extraPlugins: options.ipsPlugins,
                ipsAutoSaveKey: options.autoSaveKey,
                ipsDefaultIfNoAutoSave: options.defaultIfNoAutoSave,
                ipsPasteBehaviour: options.pasteBehaviour,
                ipsAutoEmbed: options.autoEmbed,
                removeButtons: '',
                skin: options.skin,
                height: 'auto',
                title: window.navigator.platform == 'MacIntel' ? ips.getString('editorRightClickMac') : ips.getString('editorRightClick'),
                controller: options.controller
            };
            if (options.pasteBehaviour == 'force') {
                config.pasteFilter = 'plain-text';
            } else {
                if (CKEDITOR.env.webkit) {
                    var tags = [];
                    for (var tag in CKEDITOR.dtd) {
                        if (tag.charAt(0) != '$') {
                            tags.push(tag);
                        }
                    }
                    config.pasteFilter = tags.join(' ') + '[*]{background-color,border*,color,padding,text-align,vertical-align,font-size}';
                } else {
                    config.pasteFilter = null;
                }
            }
            if (!/iPad|iPhone|iPod/.test(navigator.platform)) {
                config.removePlugins = 'elementspath';
            }
            if (ips.getSetting('ipb_url_filter_option') == 'none' && ips.getSetting('url_filter_any_action') == 'moderate' && ips.getSetting('bypass_profanity') == 0) {
                config.removePlugins = 'ipslink';
            }
            name = $(elem).find('textarea').attr('name');
            $(elem).trigger('editorCompatibility', {
                compatible: CKEDITOR.env.isCompatible
            });
            if (options.minimized && minimized) {
                $(elem).find('.ipsComposeArea_dummy').show().on('focus click', function(e) {
                    $(this).off('focus click');
                    unminimize(function() {
                        focus();
                    });
                }).end().find('[data-role="mainEditorArea"]').hide().end().closest('.ipsComposeArea').addClass('ipsComposeArea_minimized').find('[data-ipsEditor-toolList]').hide();
                $(document).on('initializeEditor', _initializeEditor);
                minimized = true;
            }
            if (!elem.is(':visible')) {
                hiddenAtStart = true;
                if (!options.minimized && !minimized) {
                    clearInterval(hiddenInterval);
                    hiddenInterval = setInterval(function() {
                        if (elem.is(':visible')) {
                            clearInterval(hiddenInterval);
                            resize(false);
                            hiddenAtStart = false;
                        }
                    }, 400);
                }
            }
            var language = $('html').attr('lang').toLowerCase();
            if (!CKEDITOR.lang.languages[language]) {
                var language = language.substr(0, 2);
                if (CKEDITOR.lang.languages[language]) {
                    config.language = language;
                }
            } else {
                config.language = language;
            }
            if (!options.allbuttons) {
                var toolbars = $.parseJSON(options.toolbars);
                var width = elem.width();
                if (width > 700) {
                    size = 'desktop';
                } else if (width > 400) {
                    size = 'tablet';
                }
                config.toolbar = toolbars[size];
            } else {
                config.removePlugins = 'sourcearea';
            }
            if (options.extraPlugins !== true) {
                config.extraPlugins += ',' + options.extraPlugins;
            }
            if (ips.getSetting('cloud2')) {
                var addPlugins, i;
                if (options.extraPlugins !== true) {
                    addPlugins = options.extraPlugins.split(',');
                    for (i = 0; i < addPlugins.length; i++) {
                        CKEDITOR.plugins.addExternal(addPlugins[i], '/ckeditor_custom/' + addPlugins[i] + '/');
                    }
                }
                if (options.skin !== 'ips' && options.skin !== 'moono') {
                    config.skin = options.skin + ',/ckeditor_custom/skin_' + options.skin + '/';
                }
            }
            instance = CKEDITOR.replace($(elem).find('textarea').get(0), config);
            instance.once('instanceReady', function() {
                $(instance.container.$).find('div.cke_wysiwyg_div').attr('data-gramm', 'false');
                elem.trigger('editorWidgetInitialized', {
                    id: name
                });
                ips.utils.lazyLoad.loadContent(elem);
                if (_.isFunction(callback)) {
                    callback(this);
                }
            }
            .bind(this));
            let focusTimeout;
            instance.on('focus', function() {
                _checkFocusState();
                focusTimeout = setInterval(_checkFocusState, 2000);
            });
            instance.on('blur', function() {
                _triggerBlurEvent();
                clearInterval(focusTimeout);
            }
            .bind(this));
            const _checkFocusState = ()=>{
                if (!instance.focusManager.hasFocus) {
                    clearInterval(focusTimeout);
                    return;
                }
                _triggerFocusEvent()
            }
            ;
            const _triggerFocusEvent = ()=>elem.trigger('editor.focused', {
                elem
            });
            const _triggerBlurEvent = ()=>elem.trigger('editor.blurred', {
                elem
            });
            instance.on('afterInsertHtml', function(e) {
                $(instance.container.$).find('img:not([data-ratio])').each(function() {
                    ips.utils.lazyLoad.applyLazyLoadAttributes(this);
                });
                ips.utils.lazyLoad.loadContent(instance.container.$);
            });
            if (!options.allbuttons) {
                $(window).on('resize', resize);
            }
            $(document).on('fileDeleted', _deleteFile);
            $(document).on('insertEmoji', _insertEmoji);
            $(elem).on('togglePreview', _togglePreview);
            $(window).on('message', _previewMessage);
            _cleanUpStaleAutoSaves();
        };
        var _cleanUpStaleAutoSaves = function() {
            var keys = ips.utils.db.getByType('editorSave');
            $.each(keys, function(i) {
                try {
                    if (this[1] < Math.round(new Date().getTime() / 1000) - (86400 * 3)) {
                        ips.utils.db.remove('editorSave', i);
                    }
                } catch (err) {
                    Debug.error("Trying to remove editorSave keys:");
                    Debug.error(err);
                }
            });
        };
        var destruct = function() {
            instance.fire('resetOrDestroy');
            try {
                if (instance.status == 'ready') {
                    instance.destroy();
                } else {
                    instance.on('instanceReady', function() {
                        instance.destroy();
                    });
                }
                Debug.log("Destroyed editor instance");
            } catch (err) {
                Debug.error("Editor destruct error:");
                Debug.error(err);
                instance.removeAllListeners();
                CKEDITOR.remove(instance);
            }
            _offEvents();
        };
        var getInstance = function() {
            if (instance) {
                return instance;
            }
            return null;
        };
        var _offEvents = function() {
            $(window).off('resize', resize);
            $(document).off('fileDeleted', _deleteFile);
            $(document).off('initializeEditor', _initializeEditor);
            $(document).off('insertEmoji', _insertEmoji);
            $(elem).off('togglePreview', _togglePreview);
            $(window).off('message', _previewMessage);
        };
        var resize = function(focus) {
            var width = elem.width();
            var newSize = 'phone';
            if (width > 700) {
                newSize = 'desktop';
            } else if (width > 400) {
                newSize = 'tablet';
            }
            if (newSize != size) {
                size = newSize;
                instance.destroy();
                _offEvents();
                init(function() {
                    if (focus) {
                        instance.focus();
                    }
                });
            }
        };
        var focus = function() {
            instance.focus();
        };
        var unminimize = function(callback) {
            if (!_.isFunction(callback)) {
                callback = $.noop;
            }
            if (minimized) {
                var _unminimize = function() {
                    $(elem).find('.ipsComposeArea_dummy').hide().end().find('[data-role="mainEditorArea"]').show().end().closest('.ipsComposeArea').removeClass('ipsComposeArea_minimized').find('[data-ipsEditor-toolList]').show();
                    if (instance.status == 'ready') {
                        minimized = false;
                        callback();
                        if (hiddenAtStart) {
                            resize(true);
                            hiddenAtStart = false;
                        }
                        instance.on('change', function(e) {
                            if (!changePolled) {
                                changePolled = true;
                                ips.getAjax()(elem.parentsUntil('', 'form').attr('action'), {
                                    'data': {
                                        'usingEditor': 1
                                    }
                                });
                            }
                        });
                    } else {
                        instance.once('instanceReady', function() {
                            minimized = false;
                            callback();
                            if (hiddenAtStart) {
                                resize(true);
                                hiddenAtStart = false;
                            }
                        });
                    }
                    var minimizedUploader = $(elem).find('[data-ipsEditor-toolListMinimized]');
                    if (minimizedUploader.length) {
                        minimizedUploader.show();
                        ips.getAjax()(elem.parentsUntil('', 'form').attr('action'), {
                            'data': {
                                'getUploader': minimizedUploader.attr('data-name')
                            }
                        }).done(function(response) {
                            minimizedUploader.replaceWith(response);
                            elem.trigger('uploaderReady', {});
                            $(document).trigger('contentChange', [elem]);
                        });
                    }
                };
                if (!/iPad|iPhone|iPod/.test(navigator.platform)) {
                    setTimeout(function() {
                        _unminimize();
                    }, 200);
                } else {
                    _unminimize();
                }
            } else {
                callback();
            }
        };
        var minimize = function() {
            if (!minimized) {
                $(elem).find('.ipsComposeArea_dummy').show().end().find('[data-role="mainEditorArea"]').hide().end().closest('.ipsComposeArea').addClass('ipsComposeArea_minimized').find('[data-ipsEditor-toolList]').hide();
                minimized = true;
            }
        };
        var insertQuotes = function(quotes) {
            var _doInsert = function() {
                for (var i = 0; i < quotes.length; i++) {
                    var data = quotes[i];
                    var regex = /data-ipsLightbox(-group)?="([\w]+)?"/ig;
                    var html = data.quoteHtml.replace(regex, '');
                    var quote = $(ips.templates.render('core.editor.quote', {
                        citation: ips.utils.getCitation(data),
                        contents: html
                    }));
                    var attrs = ['timestamp', 'userid', 'username', 'contentapp', 'contenttype', 'contentclass', 'contentid', 'contentcommentid'];
                    var j = 0;
                    for (j in attrs) {
                        if (data[attrs[j]]) {
                            quote.attr('data-ipsQuote-' + attrs[j], data[attrs[j]]);
                        }
                    }
                    var element = CKEDITOR.dom.element.createFromHtml($('<div>').append(quote).html());
                    instance.setReadOnly(false);
                    instance.insertElement(element);
                    instance.widgets.initOn(element, 'ipsquote');
                    if (i + 1 < quotes.length) {
                        var blankParagraph = new CKEDITOR.dom.element('p');
                        (new CKEDITOR.dom.element('br')).appendTo(blankParagraph);
                        instance.insertElement(blankParagraph);
                    }
                }
            };
            if (minimized) {
                unminimize(function() {
                    try {
                        instance.setData('');
                        elem.find('[data-role="autoSaveRestoreMessage"]').hide();
                    } catch (err) {}
                    _doInsert();
                });
            } else {
                var ranges = instance.getSelection().getRanges();
                for (var i = 0; i < ranges.length; i++) {
                    var previousNode = ranges[i].getCommonAncestor(true, true).getPrevious();
                    if (previousNode && previousNode.hasClass('cke_widget_wrapper')) {
                        var blankParagraph = new CKEDITOR.dom.element('p');
                        (new CKEDITOR.dom.element('br')).appendTo(blankParagraph);
                        instance.insertElement(blankParagraph);
                    }
                }
                _doInsert();
            }
        };
        var updateImage = function(width, height, align, url, alt) {
            var selection = instance.getSelection();
            var selectedElement = $(selection.getSelectedElement().$);
            if (url) {
                if (!url.match(/^[a-z]+\:\/\//i)) {
                    url = 'http://' + url;
                }
                if (selectedElement.parent().prop('tagName') === 'A') {
                    selectedElement.parent().attr('href', url).removeAttr('data-cke-saved-href');
                } else {
                    selectedElement.wrap($('<a>').attr('href', url));
                }
            } else {
                if (selectedElement.parent().prop('tagName') === 'A') {
                    selectedElement.parent().replaceWith(selectedElement);
                }
            }
            selectedElement.css({
                "width": width,
                "height": height
            });
            var alignClasses = 'ipsAttachLink_left ipsAttachLink_right';
            if (align) {
                if (selectedElement.parent().prop('tagName') === 'A') {
                    selectedElement.parent().css('float', align).removeClass(alignClasses).addClass('ipsAttachLink ipsAttachLink_' + align);
                } else {
                    selectedElement.css('float', align).removeClass(alignClasses).addClass('ipsAttachLink_image ipsAttachLink_' + align);
                }
            } else {
                selectedElement.css('float', '').removeClass(alignClasses);
                if (selectedElement.parent().prop('tagName') === 'A') {
                    selectedElement.parent().css('float', '').removeClass(alignClasses);
                }
            }
            if (alt) {
                selectedElement.attr('alt', alt);
            } else {
                selectedElement.removeAttr('alt');
            }
            ips.utils.lazyLoad.applyLazyLoadAttributes(selectedElement.get(0), {
                width: width,
                height: height
            }, true);
        };
        var checkDirty = function() {
            return instance.checkDirty();
        };
        var resetDirty = function() {
            return instance.resetDirty();
        };
        var insertHtml = function(html) {
            instance.insertHtml(html);
        };
        var reset = function() {
            instance.fire('resetOrDestroy');
            instance.setData('<p></p>');
            _closePreview();
            elem.find('[data-ipsUploader]').trigger('resetUploader');
            if (options.minimized && options.minimizeAfterReset) {
                minimize();
            }
        };
        var saveAndClearAutosave = function() {
            instance.updateElement();
            ips.utils.db.remove('editorSave', options.autoSaveKey);
        };
        var _belongsToThisEditor = function(data) {
            if (_.isUndefined(data.editorID) || data.editorID !== name) {
                return false;
            }
            return true;
        };
        var _initializeEditor = function(e, data) {
            if (!_belongsToThisEditor(data)) {
                return;
            }
            unminimize(function() {
                _scrollToEditor();
                focus();
            });
        };
        var _deleteFile = function(e, data) {
            var document = elem.find('.cke_contents');
            var links = document.find('a');
            var images = document.find('img,video,audio');
            var toRemove = [];
            $.each(images, function() {
                var image = $(this);
                if (image.attr('data-fileid') == data.fileElem.attr('data-fileid') || image.children('a').attr('data-fileid') == data.fileElem.attr('data-fileid')) {
                    toRemove.push(image);
                }
            });
            $.each(links, function() {
                var link = $(this);
                if (link.attr('data-fileid') == data.fileElem.attr('data-fileid') || link.attr('href') == ips.getSetting('baseURL') + 'applications/core/interface/file/attachment.php?id=' + data.fileElem.attr('data-fileid')) {
                    link.remove();
                }
            });
            for (var i = 0; i < toRemove.length; i++) {
                toRemove[i].remove();
            }
        };
        var _scrollToEditor = function() {
            var elemPosition = ips.utils.position.getElemPosition(elem);
            var windowScroll = $(window).scrollTop();
            var viewHeight = $(window).height();
            if (elemPosition.absPos.top < windowScroll || elemPosition.absPos.top > (windowScroll + viewHeight)) {
                $('html, body').animate({
                    scrollTop: elemPosition.absPos.top + 'px'
                });
            }
        };
        var _insertEmoji = function(e, data) {
            try {
                if (_belongsToThisEditor(data)) {
                    var element = ips.utils.emoji.editorElement(data.emoji);
                    if (element.getName() == 'img' && $('<div>' + instance.getData() + '</div>').find('img[data-emoticon]').length >= 75) {
                        var emoMessage = $(elem).closest('[data-ipsEditor]').find('[data-role="emoticonMessage"]');
                        emoMessage.slideDown();
                        var hideEmoMessage = function() {
                            emoMessage.slideUp();
                        };
                        setTimeout(function() {
                            instance.once('key', function() {
                                hideEmoMessage();
                            });
                            instance.once('setData', function() {
                                hideEmoMessage();
                            });
                        }, 2500);
                        return;
                    }
                    instance.setReadOnly(false);
                    instance.insertElement(element);
                    if (element.getName() == 'span' && element.hasClass('ipsEmoji')) {
                        instance.widgets.initOn(element, 'ipsemoji');
                    }
                    ips.utils.emoji.logUse(data.emoji);
                }
            } catch (err) {
                Debug.error("CKEditor instance couldn't be fetched");
                return;
            }
        };
        var _togglePreview = function() {
            if (elem.find('[data-role="previewFrame"]').length) {
                _showPreview();
            } else {
                _buildAndShowPreview();
            }
        };
        var _showPreview = function() {
            var currentHeight = elem.height();
            elem.find('[data-role="editorComposer"]').hide();
            elem.find('[data-role="editorPreview"]').show();
            var toolbarHeight = elem.find('[data-role="previewToolbar"]').height();
            elem.find('[data-role="previewFrame"]').css({
                height: (currentHeight - toolbarHeight) + 'px'
            });
            _fetchPreview();
        };
        var _buildAndShowPreview = function() {
            var currentHeight = elem.height();
            var iframe = $('<iframe />').addClass('ipsAreaBackground_reset').css({
                border: "0",
                width: '100%'
            }).prop('seamless', true).attr('src', ips.getSetting('baseURL') + 'index.php?app=core&module=system&controller=editor&do=preview&editor_id=' + name).attr('data-role', 'previewFrame');
            currentPreviewView = ips.utils.responsive.getCurrentKey();
            _showPreviewButtons(currentPreviewView);
            elem.on('click', 'a[data-action="closePreview"]', _closePreview);
            elem.on('click', '[data-action="resizePreview"] a', _resizePreview);
            elem.find('[data-role="editorComposer"]').hide();
            elem.find('[data-role="editorPreview"]').show();
            var toolbarHeight = elem.find('[data-role="previewToolbar"]').height();
            previewInitialHeight = currentHeight - toolbarHeight;
            elem.find('[data-role="previewContainer"]').append(iframe.css({
                height: previewInitialHeight + 'px'
            }));
            previewIframe = iframe.get(0).contentWindow;
        };
        var _showPreviewButtons = function(currentView) {
            var toolbar = elem.find('[data-role="previewToolbar"]');
            if (ips.utils.responsive.getCurrentKey() == 'phone' || size == 'phone') {
                toolbar.find('[data-size]').hide();
                return;
            }
            toolbar.find('[data-size]').show().filter('[data-size="' + currentView + '"]').find('a').removeClass('ipsButton_light').addClass('ipsButton_primary');
            if (ips.utils.responsive.getCurrentKey() == 'tablet' || size == 'tablet') {
                toolbar.find('[data-size="desktop"]').hide();
            }
        };
        var _resizePreview = function(e) {
            e.preventDefault();
            var newKey = $(e.target).closest('[data-size]').attr('data-size');
            if (newKey == currentPreviewView) {
                return;
            }
            var toolbar = elem.find('[data-role="previewToolbar"]');
            toolbar.find('[data-size] a').removeClass('ipsButton_primary').addClass('ipsButton_light');
            toolbar.find('[data-size="' + newKey + '"] a').addClass('ipsButton_primary').removeClass('ipsButton_light');
            currentPreviewView = newKey;
            elem.find('[data-role="previewFrame"]').css({
                height: previewInitialHeight + 'px'
            });
            if (newKey == size) {
                elem.find('[data-role="previewFrame"]').removeClass('ipsComposeArea_smallPreview').css({
                    margin: '0px',
                    maxWidth: '100%',
                    width: '100%'
                });
            } else {
                elem.find('[data-role="previewFrame"]').addClass('ipsComposeArea_smallPreview').css({
                    marginTop: '10px',
                    marginBottom: '10px',
                    maxWidth: previewSizes[newKey] + 'px',
                    width: '100%'
                });
            }
        };
        var _previewMessage = function(e, data) {
            var oE = e.originalEvent;
            if (oE.origin !== ips.utils.url.getOrigin() || oE.source !== previewIframe) {
                return;
            }
            try {
                var json = $.parseJSON(oE.data);
            } catch (err) {
                Debug.err("Error parsing JSON from preview frame");
                return;
            }
            if (_.isUndefined(json.editorID) || json.editorID !== name || _.isUndefined(json.message)) {
                return;
            }
            switch (json.message) {
            case 'iframeReady':
                _fetchPreview();
                break;
            case 'previewHeight':
                _setPreviewHeight(json);
                break;
            }
        };
        var _fetchPreview = function() {
            _sendMessage({
                message: 'fetchPreview',
                editorContent: instance.getData(),
                url: elem.closest('form').attr('action')
            });
        };
        var _closePreview = function(e) {
            if (e) {
                e.preventDefault();
            }
            elem.find('[data-role="editorPreview"]').hide();
            elem.find('[data-role="editorComposer"]').show();
            _sendMessage({
                message: 'previewClosed'
            });
        };
        var _setPreviewHeight = function(data) {
            if (data.height > previewInitialHeight) {
                elem.find('[data-role="previewFrame"]').css({
                    height: data.height + 'px'
                });
            }
        };
        var _sendMessage = function(data) {
            Debug.log('Sending message FROM parent');
            if (previewIframe !== null) {
                previewIframe.postMessage(JSON.stringify(data), ips.utils.url.getOrigin());
            }
        };
        return {
            init: init,
            focus: focus,
            unminimize: unminimize,
            minimize: minimize,
            insertQuotes: insertQuotes,
            insertHtml: insertHtml,
            checkDirty: checkDirty,
            resetDirty: resetDirty,
            updateImage: updateImage,
            reset: reset,
            destruct: destruct,
            saveAndClearAutosave: saveAndClearAutosave,
            getInstance: getInstance
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.filterBar', function() {
        var defaults = {
            on: 'phone,tablet',
            viewDefault: 'filterContent'
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_filterBar')) {
                $(elem).data('_filterBar', filterBarObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_filterBar')) {
                return $(elem).data('_filterBar');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        ips.ui.registerWidget('filterBar', ips.ui.filterBar, ['on', 'viewDefault']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
    var filterBarObj = function(elem, options) {
        var filterBar = null;
        var filterContent = null;
        var workOn = [];
        var currentBreak;
        var currentlyShowing = null;
        var init = function() {
            if (!ips.utils.responsive.enabled()) {
                return;
            }
            filterBar = elem.find('[data-role="filterBar"]');
            filterContent = elem.find('[data-role="filterContent"]');
            workOn = options.on.split(',');
            currentBreak = ips.utils.responsive.getCurrentKey();
            $(document).on('breakpointChange', _breakpointChange);
            elem.on('switchTo.filterBar', function(e, data) {
                if (_.indexOf(workOn, ips.utils.responsive.getCurrentKey()) === -1) {
                    return;
                }
                _switchView(data.switchTo);
            }).on('click', '[data-action="filterBarSwitch"]', _switchToggle);
            if (_.indexOf(workOn, currentBreak) !== -1) {
                _setUpBar();
            }
        }
          , destruct = function() {
            $(document).off('breakpointChange', _breakpointChange);
        }
          , _setUpBar = function() {
            if (options.viewDefault == 'filterBar') {
                filterContent.addClass('ipsHide');
                currentlyShowing = 'filterBar';
            } else {
                filterBar.addClass('ipsHide');
                currentlyShowing = 'filterContent';
            }
        }
          , _switchToggle = function(e) {
            e.preventDefault();
            if (_.indexOf(workOn, ips.utils.responsive.getCurrentKey()) === -1) {
                return;
            }
            _switchView($(e.currentTarget).attr('data-switchTo') == 'filterBar' ? 'filterBar' : 'filterContent');
        }
          , _switchView = function(switchTo) {
            if (switchTo == currentlyShowing) {
                return;
            }
            elem.css({
                height: (currentlyShowing == 'filterBar') ? filterBar.outerHeight() : filterContent.outerHeight() + 'px'
            });
            filterBar.addClass('ipsFilter_layout');
            filterContent.addClass('ipsFilter_layout');
            var done = function() {
                filterBar.removeClass('ipsFilter_layout');
                filterContent.removeClass('ipsFilter_layout');
                elem.css({
                    height: 'auto'
                });
                currentlyShowing = switchTo;
            };
            if (switchTo == 'filterBar') {
                filterBar.css({
                    left: '-100%'
                }).removeClass('ipsHide').animate({
                    left: '0%'
                }, {
                    duration: 300
                });
                filterContent.css({
                    left: '0%'
                }).animate({
                    left: '100%'
                }, {
                    duration: 300,
                    complete: function() {
                        $(this).addClass('ipsHide')
                        done();
                    }
                });
            } else {
                filterBar.css({
                    left: '0%'
                }).animate({
                    left: '-100%'
                }, {
                    duration: 300,
                    complete: function() {
                        $(this).addClass('ipsHide')
                        done();
                    }
                });
                filterContent.css({
                    left: '100%'
                }).removeClass('ipsHide').animate({
                    left: '0%'
                }, {
                    duration: 300
                });
            }
        }
          , _cancel = function() {
            elem.find('[data-role="filterBar"], [data-role="filterContent"]').removeClass('ipsFilter_layout').css({
                left: 'auto'
            }).removeClass('ipsHide');
            elem.css({
                height: 'auto'
            });
            currentlyShowing = null;
        }
          , _breakpointChange = function(e, data) {
            currentBreak = data.curBreakName;
            if (_.indexOf(workOn, currentBreak) !== -1) {
                _switchView(options.viewDefault);
            } else {
                _cancel();
            }
        };
        init();
        return {
            init: init,
            destruct: destruct
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.flashMsg', function() {
        var _queue = [], _doneInit = false, _box, _content, _isShowing = false, _currentDismissHandler = null;
        var defaults = {
            timeout: 2,
            extraClasses: '',
            location: 'top',
            sticky: false,
            escape: true
        };
        var respond = function(elem, options) {
            if (options.text) {
                show(options.text, options);
            }
        }
          , init = function() {
            $(document).ready(function() {
                if ($('body').attr('data-message')) {
                    show($('body').attr('data-message'));
                }
                if (ips.utils.url.getParam('flmsg')) {
                    show(_.escape(decodeURIComponent(ips.utils.url.getParam('flmsg'))));
                }
                if (ips.utils.cookie.get('flmsg')) {
                    show(_.escape(ips.utils.cookie.get('flmsg')));
                    ips.utils.cookie.unset('flmsg');
                }
            });
            $(document).on('closeFlashMsg.flashMsg', hide);
        }
          , show = function(message, options, update) {
            if (!_doneInit) {
                _initElement();
            }
            options = _.defaults(options || {}, defaults);
            if (options.escape) {
                message = _.escape(message);
            }
            if (_isShowing && !update) {
                _queue.push([message, options]);
                return;
            }
            if (update && _isShowing) {
                _content.html(message);
                ips.utils.anim.go('pulseOnce', _box);
                if (!options.sticky) {
                    setTimeout(hide, options.timeout * 1000);
                }
                return;
            }
            _currentDismissHandler = null;
            _isShowing = true;
            _content.html(message);
            _box.attr('class', '').addClass(options.extraClasses).addClass(options.dismissable ? 'ipsFlashMsg_dismissable' : '').addClass(options.position == 'bottom' ? 'ipsFlashMsg_bottom' : 'ipsFlashMsg_top').on('click', 'a:not( [data-action="dismissFlashMessage"] )', function() {
                hide();
            }).animationComplete(function() {
                if (!options.sticky) {
                    setTimeout(hide, options.timeout * 1000);
                }
            });
            if (_.isFunction(options.dismissable)) {
                _currentDismissHandler = options.dismissable;
            }
            ips.utils.anim.go('fadeInDown', _box);
        }
          , hide = function() {
            if (_queue.length) {
                var next = _queue.shift();
                show(next[0], next[1], true);
            } else {
                _box.animationComplete(function() {
                    _isShowing = false;
                    _box.hide();
                    if (_queue.length) {
                        var next = _queue.shift();
                        show(next[0], next[1]);
                    }
                });
                ips.utils.anim.go('fadeOutDown', _box);
            }
        }
          , dismiss = function(e) {
            e.preventDefault();
            hide();
            if (_.isFunction(_currentDismissHandler)) {
                _currentDismissHandler();
                _currentDismissHandler = null;
            }
        }
          , _initElement = function() {
            $('body').append(ips.templates.render("core.general.flashMsg"));
            _box = $('#elFlashMessage').hide();
            _content = (_box.is('[data-role="flashMessage"]')) ? _box : _box.find('[data-role="flashMessage"]');
            _box.on('click', 'a[data-action="dismissFlashMessage"]', dismiss);
            _doneInit = true;
        };
        ips.ui.registerWidget('flashMsg', ips.ui.flashMsg, ['text', 'extraClasses', 'timeout', 'position', 'sticky', 'dismissable']);
        init();
        return {
            respond: respond,
            show: show
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.form', function() {
        var _cmInstances = {};
        var _support = {};
        var formTypes = {
            'unlimited': '[data-control~="unlimited"]',
            'selectDisable': '[data-control~="selectDisable"]',
            'date': 'input[type="date"], [data-control~="date"]',
            'range': 'input[type="range"], [data-control~="range"]',
            'color': 'input[type="color"], [data-control~="color"]',
            'dimensions': '[data-control~="dimensions"]',
            'dimensionsUnlimited': '[data-control~="dimensionsUnlimited"]',
            'jsDisable': 'input[data-control~="jsdisable"]',
            'toggle': '[data-control~="toggle"]',
            'codemirror': '[data-control~="codemirror"]',
            'granularCheckboxset': '[data-control~="granularCheckboxset"]',
        };
        var init = function() {
            $(document).on('contentChange', function(e, data) {
                if (!_.isUndefined(data) && $(data[0]).closest('[data-ipsForm]').length) {
                    respond($(data[0]));
                }
            });
            $(document).on('menuOpened', function(e, data) {
                if (data.menu.closest('[data-ipsForm]').length) {
                    respond(data.menu);
                }
            });
            $(document).on('codeMirrorInsert', function(e, data) {
                if (!_.isUndefined(_cmInstances[data.elemID])) {
                    _cmInstances[data.elemID].replaceRange(data.tag, _cmInstances[data.elemID].getCursor("end"));
                }
            });
            $(document).on('tabChanged', function(e, data) {
                var form = $('#' + data['barID']).closest('[data-ipsForm]');
                if ($('input[name=' + form.attr('data-formId') + '_activeTab]').length) {
                    $('input[name=' + form.attr('data-formId') + '_activeTab]').val(data['tabID'].replace(form.attr('data-formId') + '_tab_', ''));
                }
            });
        }
          , respond = function(elem, options) {
            var runControlMethod = function(i) {
                _controlMethods[type]($(this), elem) || $.noop;
            };
            for (var type in formTypes) {
                $(elem).find(formTypes[type]).each(runControlMethod);
            }
            $(elem).find('select[data-sort]').each(function() {
                var value = $(this).val();
                $(this).children('optgroup').each(function() {
                    $(this).append($(this).children('option').remove().sort(localeSort));
                });
                $(this).append($(this).children('optgroup').remove().sort(localeSort));
                $(this).append($(this).children('option').remove().sort(localeSort));
                $(this).val(value);
            });
        };
        var localeSort = function(a, b) {
            if ($(a).prop("tagName") == 'OPTGROUP') {
                var aValue = $(a).attr('label');
            } else {
                if (!a.value) {
                    return -1;
                }
                var aValue = a.innerHTML;
            }
            if ($(b).prop("tagName") == 'OPTGROUP') {
                var bValue = $(b).attr('label');
            } else {
                if (!b.value) {
                    return 1;
                }
                var bValue = b.innerHTML;
            }
            try {
                return aValue.localeCompare(bValue);
            } catch (err) {
                return (aValue > bValue) ? 1 : -1;
            }
        };
        var _controlMethods = {
            codemirror: function(elem) {
                ips.loader.get(['core/interface/codemirror/diff_match_patch.js', 'core/interface/codemirror/codemirror.js']).then(function() {
                    var elemId = $(elem).attr('id');
                    if (!_.isUndefined(_cmInstances[elemId])) {
                        _cmInstances[elemId].save();
                        $(_cmInstances[elemId].getWrapperElement()).remove();
                        delete _cmInstances[elemId];
                    }
                    _cmInstances[elemId] = CodeMirror.fromTextArea(document.getElementById(elemId), {
                        mode: $(elem).attr('data-mode'),
                        lineWrapping: true,
                        lineNumbers: false,
                        leaveSubmitMethodAlone: true
                    });
                    if ($(elem).attr('data-height')) {
                        _cmInstances[elemId].setSize(null, $(elem).attr('data-height'));
                        $('div[data-codemirrorid=' + elemId + '] ul[data-role=tagsList]').css('max-height', $(elem).attr('data-height'));
                    }
                    $('#' + elemId).data('CodeMirrorInstance', _cmInstances[elemId]);
                    $('[data-codemirrorcustomtag]').on('click', function(e) {
                        _cmInstances[elemId].replaceRange($(e.currentTarget).attr('data-codemirrorcustomtag'), _cmInstances[elemId].getCursor("end"));
                    });
                });
            },
            range: function(elem) {
                if (_.isUndefined(_support['range'])) {
                    var i = document.createElement("input");
                    i.setAttribute("type", "range");
                    _support['range'] = !(i.type === 'text');
                }
                if (!_support['range']) {
                    elem.siblings('[data-role="rangeBoundary"]').hide();
                } else {
                    var valueElem = $('#' + elem.attr('name') + '_rangeValue');
                    valueElem.text(elem.val());
                    elem.on('change', function() {
                        valueElem.text(elem.val());
                    });
                }
            },
            unlimited: function(elem) {
                elem.on('change', function() {
                    _unlimitedCheck(elem);
                });
                if (!elem.attr('data-initialized')) {
                    elem.attr('data-initialized', '1');
                    _unlimitedCheck(elem);
                }
            },
            selectDisable: function(elem) {
                elem.on('change', function() {
                    _selectDisable(elem);
                });
                _selectDisable(elem);
            },
            date: function(elem) {
                if (_.isUndefined(_support['date'])) {
                    var i = document.createElement("input");
                    i.setAttribute("type", "date");
                    _support['date'] = !(i.type === 'text');
                }
                if (!_support['date']) {
                    if ($(elem).attr('data-preferredFormat')) {
                        $(elem).val($(elem).attr('data-preferredFormat'));
                    }
                    ips.loader.get(['core/interface/jquery/jquery-ui.js']).then(function() {
                        var _buildDatepicker = function() {
                            $.datepicker.regional['xx'] = {
                                closeText: ips.getString('date_picker_done'),
                                prevText: ips.getString('date_picker_prev'),
                                nextText: ips.getString('date_picker_next'),
                                currentText: ips.getString('date_picker_next'),
                                monthNames: [ips.getString('month_0'), ips.getString('month_1'), ips.getString('month_2'), ips.getString('month_3'), ips.getString('month_4'), ips.getString('month_5'), ips.getString('month_6'), ips.getString('month_7'), ips.getString('month_8'), ips.getString('month_9'), ips.getString('month_10'), ips.getString('month_11')],
                                monthNamesShort: [ips.getString('month_0'), ips.getString('month_1'), ips.getString('month_2'), ips.getString('month_3'), ips.getString('month_4'), ips.getString('month_5'), ips.getString('month_6'), ips.getString('month_7'), ips.getString('month_8'), ips.getString('month_9'), ips.getString('month_10'), ips.getString('month_11')],
                                dayNames: [ips.getString('day_0'), ips.getString('day_1'), ips.getString('day_2'), ips.getString('day_3'), ips.getString('day_4'), ips.getString('day_5'), ips.getString('day_6')],
                                dayNamesShort: [ips.getString('day_0_short'), ips.getString('day_1_short'), ips.getString('day_2_short'), ips.getString('day_3_short'), ips.getString('day_4_short'), ips.getString('day_5_short'), ips.getString('day_6_short')],
                                dayNamesMin: [ips.getString('day_0_short'), ips.getString('day_1_short'), ips.getString('day_2_short'), ips.getString('day_3_short'), ips.getString('day_4_short'), ips.getString('day_5_short'), ips.getString('day_6_short')],
                                weekHeader: ips.getString('date_picker_week'),
                                dateFormat: ips.getSetting('date_format'),
                                firstDay: ips.getSetting('date_first_day'),
                                isRTL: $('html').attr('dir') == 'rtl',
                                showMonthAfterYear: false,
                                yearSuffix: "",
                                shortYearCutoff: 10
                            };
                            $.datepicker.setDefaults($.datepicker.regional['xx']);
                            elem.datepicker({
                                changeMonth: true,
                                changeYear: true,
                                yearRange: "-120:+10",
                                dateFormat: ips.getSetting('date_format'),
                                firstDay: ips.getSetting('date_first_day'),
                            });
                            elem.datepicker('show');
                        };
                        elem.on('focus', function() {
                            _buildDatepicker();
                        });
                    });
                }
            },
            color: function(elem) {
                if (elem.attr('data-ipsFormData')) {
                    return;
                }
                ips.loader.get(['core/interface/spectrum/spectrum.js']).then(function() {
                    elem.attr('data-ipsFormData', 1);
                    var options = {
                        type: "text",
                        clickoutFiresChange: true,
                        hideAfterPaletteSelect: true,
                        preferredFormat: "hex",
                        appendTo: $(elem).closest('li')
                    };
                    if (!elem.attr('data-rgba')) {
                        options.showAlpha = false;
                    }
                    if (elem.attr('data-swatches')) {
                        options.showPalette = true;
                        options.showSelectionPalette = true;
                        options.localStorageKey = 'ips.ColorPicker';
                    }
                    $(elem).spectrum(options);
                });
            },
            toggle: function(elem, form) {
                var togglesOn = (elem.attr('data-togglesOn') || elem.attr('data-toggles') || '').split(',');
                var togglesOff = (elem.attr('data-togglesOff') || '').split(',');
                if (togglesOn.length) {
                    _toggler(elem, form, togglesOn, true);
                }
                if (togglesOff.length) {
                    _toggler(elem, form, togglesOff, false);
                }
            },
            dimensions: function(elem) {
                var container = elem.closest('.ipsWidthHeight_container');
                elem.resizable({
                    resize: function(event, ui) {
                        container.find('input.ipsWidthHeight_width').val(elem.width());
                        container.find('input.ipsWidthHeight_height').val(elem.height());
                    }
                });
                container.find('input.ipsWidthHeight_width').on('change', function() {
                    elem.width($(this).val());
                });
                container.find('input.ipsWidthHeight_height').on('change', function() {
                    elem.height($(this).val());
                });
            },
            dimensionsUnlimited: function(elem) {
                elem.on('change', function() {
                    _dimensionsUnlimitedCheck(elem);
                });
                _dimensionsUnlimitedCheck(elem);
            },
            jsDisable: function(elem) {
                elem.prop('disabled', true);
            },
            granularCheckboxset: function(elem) {
                elem.find('[data-role="checkboxsetUnlimitedToggle"]').on('change', function() {
                    if ($(this).is(':checked')) {
                        elem.find('[data-role="checkboxsetGranular"] input:enabled[type="checkbox"]').prop('checked', $(this).is(':checked'));
                    } else {
                        elem.find('[data-role="checkboxsetGranular"] input[type="checkbox"]').prop('checked', $(this).is(':checked'));
                    }
                });
                elem.find('[data-action="checkboxsetCustomize"]').on('click', function() {
                    elem.find('[data-role="checkboxsetUnlimited"]').hide();
                    elem.find('[data-role="checkboxsetUnlimitedToggle"]').prop('checked', false);
                    if (elem.find('[data-role="checkboxsetUnlimitedToggle"]').length > 0) {
                        elem.find('[data-role="checkboxsetGranular"]').slideDown();
                    }
                });
                elem.find('[data-action="checkboxsetAll"]').on('click', function() {
                    elem.find('[data-role="checkboxsetGranular"] input:enabled[type="checkbox"]').prop('checked', true);
                    if (elem.find('[data-role="checkboxsetUnlimitedToggle"]').length > 0) {
                        elem.find('[data-role="checkboxsetUnlimited"]').slideDown();
                        elem.find('[data-role="checkboxsetGranular"]').slideUp();
                        elem.find('[data-role="checkboxsetUnlimitedToggle"]').prop('checked', true).change();
                    }
                });
                elem.find('[data-action="checkboxsetNone"]').on('click', function() {
                    elem.find('[data-role="checkboxsetGranular"] input:enabled[type="checkbox"]').prop('checked', false);
                    if (elem.find('[data-role="checkboxsetUnlimitedToggle"]').length > 0) {
                        elem.find('[data-role="checkboxsetUnlimited"]').slideDown();
                        elem.find('[data-role="checkboxsetGranular"]').slideUp();
                        elem.find('[data-role="checkboxsetUnlimitedToggle"]').prop('checked', false).change();
                    }
                });
                elem.find('[data-role="search"]').on('keydown', function(e) {
                    if (e.keyCode == 13 || e.keyCode == 38 || e.keyCode == 40) {
                        e.preventDefault();
                    }
                });
                elem.find('[data-role="search"]').off('keyup').on('keyup', function(e) {
                    var focussedCheckbox = elem.find('[data-role="result"].ipsField__checkboxOverflow__focused');
                    switch (e.keyCode) {
                    case 13:
                        focussedCheckbox.find('input').prop('checked', !focussedCheckbox.find('input').prop('checked'));
                        break;
                    case 38:
                        var prev = focussedCheckbox.prevAll(':visible').first();
                        if (prev.length) {
                            focussedCheckbox.removeClass('ipsField__checkboxOverflow__focused')
                            prev.addClass('ipsField__checkboxOverflow__focused');
                        }
                        break;
                    case 40:
                        var next = focussedCheckbox.nextAll(':visible').first();
                        if (next.length) {
                            focussedCheckbox.removeClass('ipsField__checkboxOverflow__focused')
                            next.addClass('ipsField__checkboxOverflow__focused');
                        }
                        break;
                    default:
                        focussedCheckbox.removeClass('ipsField__checkboxOverflow__focused');
                        var val = $(this).val().toLowerCase();
                        if (val) {
                            elem.find('[data-role="massToggles"]').hide();
                            elem.find('[data-role="result"]').each(function() {
                                if ($(this).find('[data-role="label"]').text().toLowerCase().includes(val)) {
                                    $(this).show();
                                } else {
                                    $(this).hide();
                                }
                            });
                            elem.find('[data-role="result"]:visible').first().addClass('ipsField__checkboxOverflow__focused');
                        } else {
                            elem.find('[data-role="result"]:hidden').show();
                            elem.find('[data-role="massToggles"]').show();
                        }
                    }
                });
                elem.find('[data-role="search"]').on('clear blur', function(e) {
                    if ($(e.relatedTarget).closest('[data-role="checkboxsetGranular"]').find('[data-role="search"]').is(this)) {
                        e.preventDefault();
                        $(this).focus();
                        return;
                    }
                    $(this).val('');
                    elem.find('[data-role="result"].ipsField__checkboxOverflow__focused').removeClass('ipsField__checkboxOverflow__focused');
                    elem.find('[data-role="result"]:hidden').show();
                    elem.find('[data-role="massToggles"]').show();
                });
                var count = parseInt(elem.attr('data-count'));
                if (count > 10) {
                    elem.find('.ipsField__checkboxOverflow').addClass('ipsField__checkboxOverflow--active');
                    elem.find('[data-role="search"]').removeClass('ipsHide');
                }
            },
            diallingCode: function(elem) {
                var selected = elem.find('option:selected');
                if (selected.length) {
                    selected.html(selected.attr('data-code'));
                }
                elem.on('change mouseleave', function() {
                    elem.find('option').each(function() {
                        $(this).html($(this).attr('data-text'));
                    });
                    elem.find('option:selected').html(elem.find('option:selected').attr('data-code'));
                    $(this).blur();
                });
                elem.on('focus', function() {
                    elem.find('option').each(function() {
                        $(this).html($(this).attr('data-text'));
                    });
                });
            }
        }
          , _toggler = function(elem, form, toggleList, toggleOn) {
            var toCall;
            var triggerElem;
            var eventType = 'change';
            var selectorList = ips.utils.getIDsFromList(toggleList);
            if (!selectorList) {
                return;
            }
            if (elem.is('option')) {
                toCall = _toggleSelect;
                triggerElem = elem.closest('select');
            } else if (elem.is('input[type="checkbox"]')) {
                toCall = _toggleCheckbox;
                triggerElem = elem;
            } else if (elem.is('input[type="radio"]')) {
                toCall = _toggleRadio;
                triggerElem = form.find('input[name="' + elem.attr('name') + '"]');
            } else if (elem.is('.ipsSelectTree_item')) {
                toCall = _toggleNode;
                triggerElem = elem.closest('.ipsSelectTree');
                eventType = 'nodeSelectedChanged';
            } else {
                toCall = _toggleGeneric;
                triggerElem = elem;
            }
            var reverse = !toggleOn;
            triggerElem.on(eventType, function() {
                toCall.call(this, triggerElem, selectorList, elem, form, reverse);
            });
            if (triggerElem.is(':visible') || (triggerElem.attr('data-toggle-visibleCheck') && $(triggerElem.attr('data-toggle-visibleCheck')).is(':visible'))) {
                toCall.call(this, triggerElem, selectorList, elem, form, reverse);
            }
        }
          , _dimensionsUnlimitedCheck = function(elem) {
            var container = elem.closest('.ipsWidthHeight_container');
            if (elem.is(':checked')) {
                container.find('[data-control="dimensions"]').hide().end().find('input.ipsWidthHeight_width, input.ipsWidthHeight_height').val('').prop('disabled', true);
            } else {
                container.find('[data-control="dimensions"]').show().end().find('input.ipsWidthHeight_width, input.ipsWidthHeight_height').change().prop('disabled', false);
            }
        }
          , _toggleRadio = function(radioList, toggleList, thisElem, form) {
            radioList.each(function() {
                var thisToggles = ips.utils.getIDsFromList($(this).attr('data-toggles'));
                if (thisToggles) {
                    _hideFormRows(thisToggles, form);
                }
            });
            radioList.each(function() {
                if ($(this).is(':checked')) {
                    var thisToggles = ips.utils.getIDsFromList($(this).attr('data-toggles'));
                    if (thisToggles) {
                        _showFormRows(thisToggles, form);
                    }
                }
            });
        }
          , _toggleSelect = function(selectElem, toggleList, thisElem, form) {
            selectElem.find('option').each(function(idx, elem) {
                if ($(this).attr('data-toggles')) {
                    _hideFormRows(ips.utils.getIDsFromList($(this).attr('data-toggles')), form);
                }
            });
            selectElem.find('option:selected').each(function(i, elem) {
                if ($(elem).attr('data-toggles')) {
                    _showFormRows(ips.utils.getIDsFromList($(this).attr('data-toggles')), form);
                }
            });
        }
          , _toggleCheckbox = function(elem, toggleList, thisElem, form, reverse) {
            var show = elem.is(':checked');
            if (reverse) {
                show = !show;
            }
            if (elem.is('[data-control~="unlimited"]') && !elem.is(':checked')) {
                var inputs = elem.closest('.ipsFieldRow_content,[data-role="unlimitedCatch"]').find('input[type="radio"],select');
                if (inputs.length) {
                    inputs.each(function() {
                        var toggle = $(this);
                        if (toggle.is('select')) {
                            var toggleList = _.difference(toggleList, toggle.find('option:selected').attr('data-toggles'));
                        } else if (toggle.is(':checked')) {
                            var toggleList = _.difference(toggleList, toggle.attr('data-toggles'));
                        }
                    });
                }
            }
            if (show) {
                _showFormRows(toggleList, form);
            } else {
                _hideFormRows(toggleList, form);
            }
        }
          , _toggleNode = function(nodeElem, toggleList, thisElem, form) {
            nodeElem.find('[data-action="nodeSelect"][data-toggles]').each(function(idx, elem) {
                _hideFormRows(ips.utils.getIDsFromList($(this).attr('data-toggles')), form);
            });
            nodeElem.find('[data-action="nodeSelect"][data-toggles].ipsSelectTree_selected').each(function(idx, elem) {
                _showFormRows(ips.utils.getIDsFromList($(this).attr('data-toggles')), form);
            });
        }
          , _toggleGeneric = function(elem, toggleList, thisElem, form) {
            var show = elem.val() == 0 ? false : true;
            if (!_.isUndefined(elem.attr('data-togglereverse'))) {
                show = !show;
            }
            if (show) {
                _showFormRows(toggleList, form);
            } else {
                _hideFormRows(toggleList, form);
            }
        }
          , _hideFormRows = function(hide, form) {
            if (_.isArray(hide)) {
                hide = hide.join(',');
            }
            $(form || document).find(hide).hide().addClass('ipsHide').find('[data-toggles],[data-togglesOn],[data-togglesOff]').each(function(i, elem) {
                _hideFormRows(ips.utils.getIDsFromList($(elem).attr('data-toggles')), form);
                _hideFormRows(ips.utils.getIDsFromList($(elem).attr('data-togglesOn')), form);
                _hideFormRows(ips.utils.getIDsFromList($(elem).attr('data-togglesOff')), form);
            });
        }
          , _showFormRows = function(show, form) {
            if (_.isArray(show)) {
                show = show.join(',');
            }
            $(form || document).find(show).not('[data-ipsToggle]').show().end().removeClass('ipsHide').find('[data-toggles],[data-togglesOn]').each(function(i, elem) {
                _controlMethods.toggle($(elem), form);
            }).end().find('[data-ipsUploader]').each(function(i, elem) {
                ips.ui.uploader.refresh(elem);
            }).end().find('[data-ipsMatrix]').each(function(i, elem) {
                ips.ui.matrix.refresh(elem);
            });
        }
          , _selectDisable = function(elem) {
            var option = elem.find('[data-disable]');
            if (!option.length) {
                return;
            }
            var disable = option.attr('data-disable');
            if (!option.is(':selected')) {
                $(disable).prop('disabled', false);
            } else {
                $(disable).prop('disabled', true);
            }
        }
          , _unlimitedCheck = function(checkbox) {
            var inputs = checkbox.closest('.ipsFieldRow_content,[data-role="unlimitedCatch"]').find('input:not([type="checkbox"],[type="hidden"]),select,textarea');
            var checkToggles = function(input) {
                var toggles = input.find('[data-control="toggle"]');
                var form = input.closest('[data-ipsForm]');
                if (toggles.length) {
                    toggles.each(function() {
                        var toggle = $(this);
                        _controlMethods.toggle(toggle, form);
                    });
                }
            };
            if (!checkbox.is(':disabled')) {
                if (checkbox.is(':checked')) {
                    inputs.each(function() {
                        var thisInput = $(this);
                        var val = thisInput.val();
                        if (val !== null) {
                            thisInput.attr('data-previousvalue', val);
                        }
                        thisInput.val('');
                        checkToggles(thisInput);
                        thisInput.prop('disabled', true);
                    }).find('[data-role="rangeBoundary"]').css({
                        opacity: "0.5"
                    });
                } else {
                    inputs.each(function() {
                        var thisInput = $(this);
                        thisInput.prop('disabled', false);
                        if (thisInput.attr('data-previousvalue')) {
                            thisInput.val(thisInput.attr('data-previousvalue'));
                        }
                        checkToggles(thisInput);
                    }).find('[data-role="rangeBoundary"]').css({
                        opacity: "1"
                    });
                }
            }
        }
          , _validationError = function(field, error) {
            field.closest('.ipsFieldRow').find('.ipsFieldRow_title').addClass('error').end().find('.ipsType_warning').html(error);
        };
        ips.ui.registerWidget('form', ips.ui.form);
        return {
            respond: respond,
            init: init
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.formSubmit', function() {
        var respond = function(elem, options) {
            var formElement = $(elem).is('form') ? $(elem) : $(elem).closest('form');
            formElement.on('submit', function(e) {
                formElement.find('input[type="submit"],button[type="submit"]').prop('disabled', true);
            });
            formElement.on('fileStillUploading', function(e) {
                formElement.find('input[type="submit"],button[type="submit"]').prop('disabled', false);
            });
        };
        ips.ui.registerWidget('formSubmit', ips.ui.formSubmit);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.grid', function() {
        var defaults = {
            patchwork: false,
            items: '[data-role="gridItem"]',
            equalHeights: false
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_grid')) {
                $(elem).data('_grid', gridObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_grid')) {
                return $(elem).data('_grid');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        var gridObj = function(elem, options) {
            var originalSpan = 3;
            var currentSpan = 3;
            var possibleSizes = [1, 2, 3, 4, 6, 12];
            var deferInit = false;
            var init = function() {
                if (!elem.is(':visible')) {
                    deferInit = true;
                    Debug.log('ui.ipsGrid is not visible; deferring init...');
                }
                if (!deferInit) {
                    _initWhenVisible();
                }
                elem.imagesLoaded(function() {
                    redrawGrid();
                });
                $(window).on('resize', redrawGrid);
                $(document).on('tabShown', _tabShown);
                $(elem).on('newItem', function(e, data) {
                    data = $(data);
                    _removeSpans(data);
                    _addSpan(data, currentSpan);
                    _checkDeferredInit();
                    if (!deferInit) {
                        _scaleProportions(data);
                        _equalHeights();
                    }
                });
            }
              , destruct = function() {
                $(window).off('resize', redrawGrid);
                $(document).off('tabShown', _tabShown);
            }
              , redrawGrid = function() {
                _checkDeferredInit();
                if (!deferInit) {
                    if (options.minItemSize || options.maxItemSize) {
                        _checkItemWidth(0);
                    }
                    _scaleProportions(_getAll());
                    _equalHeights();
                    elem.trigger('gridRedraw.grid');
                }
            }
              , _tabShown = function(e, data) {
                if ($.contains(data.panel.get(0), elem.get(0))) {
                    redrawGrid();
                }
            }
              , _initWhenVisible = function() {
                var firstItem = _getFirst();
                var allItems = _getAll();
                if (!options.defaultSpan) {
                    for (var i = 1; i <= 12; i++) {
                        if (firstItem.hasClass('ipsGrid_span' + i)) {
                            originalSpan = currentSpan = i;
                            break;
                        }
                    }
                } else {
                    originalSpan = currentSpan = options.defaultSpan;
                }
                _changeSpan(currentSpan);
                _scaleProportions(_getAll());
                _equalHeights();
                elem.trigger('gridRedraw.grid');
            }
              , _checkDeferredInit = function() {
                if (deferInit && elem.is(':visible')) {
                    Debug.log('ui.ipsGrid is visible; now running init...');
                    deferInit = false;
                    _initWhenVisible();
                }
            }
              , _scaleProportions = function(item) {
                var width = _getFirst().outerWidth();
                item.addBack().find('[data-grid-ratio]').each(function() {
                    var item = $(this);
                    var newHeight = (width / 100) * parseInt(item.attr('data-grid-ratio'));
                    item.css({
                        height: Math.ceil(newHeight) + 'px'
                    });
                });
            }
              , _equalHeights = function() {
                if (!options.equalHeights) {
                    return;
                }
                var items = _getAll();
                if (options.equalHeights == 'row') {
                    var numPerRow = 12 / currentSpan;
                    var loops = Math.ceil(items.length / numPerRow);
                    var idx = 0;
                    if ((elem.hasClass('ipsGrid_collapsePhone') && ips.utils.responsive.currentIs('phone')) || (elem.hasClass('ipsGrid_collapseTablet') && ips.utils.responsive.currentIs('tablet'))) {
                        items.css({
                            height: 'auto'
                        });
                        return;
                    }
                    for (var i = 0; i < loops; i++) {
                        var rowItems = items.slice(idx, idx + numPerRow);
                        idx = idx + numPerRow;
                        rowItems.css({
                            height: 'auto'
                        });
                        var max = _.max(rowItems, function(item) {
                            return $(item).outerHeight();
                        });
                        rowItems.css({
                            height: $(max).outerHeight() + 'px'
                        });
                    }
                } else {
                    items.css({
                        height: 'auto'
                    });
                    var max = _.max(items, function(item) {
                        return $(item).outerHeight();
                    });
                    items.css({
                        height: $(max).outerHeight() + 'px'
                    });
                }
            }
              , _checkItemWidth = function(iteration) {
                var firstItem = _getFirst();
                var bestFit = originalSpan;
                for (var i = possibleSizes.length - 1; i > 0; i--) {
                    _removeSpans(firstItem);
                    _addSpan(firstItem, possibleSizes[i]);
                    var size = firstItem.outerWidth();
                    if (options.minItemSize && size < parseInt(options.minItemSize)) {
                        continue;
                    }
                    if (options.maxItemSize && size > parseInt(options.maxItemSize)) {
                        continue;
                    }
                    bestFit = possibleSizes[i];
                }
                _changeSpan(bestFit);
            }
              , _getFirst = function() {
                return elem.find('> [class*="ipsGrid_span"]').first()
            }
              , _getAll = function() {
                return elem.find('> [class*="ipsGrid_span"]');
            }
              , _removeSpans = function(items) {
                for (var i = 1; i <= 12; i++) {
                    items.removeClass('ipsGrid_span' + i);
                }
            }
              , _addSpan = function(items, size) {
                items.addClass('ipsGrid_span' + size);
            }
              , _changeSpan = function(newSize) {
                if (newSize <= 1) {
                    return;
                }
                var items = _getAll();
                _removeSpans(items);
                _addSpan(items, newSize);
                currentSpan = newSize;
            };
            init();
            return {
                init: init,
                destruct: destruct
            };
        };
        ips.ui.registerWidget('grid', ips.ui.grid, ['minItemSize', 'maxItemSize', 'items', 'equalHeights']);
        return {
            respond: respond,
            getObj: getObj,
            destruct: destruct
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.hovercard', function() {
        var defaults = {
            timeout: 0.75,
            showLoading: true,
            width: 450,
            className: 'ipsHovercard',
            onClick: false,
            target: null,
            cache: true
        };
        var cache = {};
        var respond = function(elem, options) {
            if (!$(elem).data('_hover')) {
                $(elem).data('_hover', hoverCardObj(elem, _.defaults(options, defaults)));
            }
            if (options.onClick) {
                $(elem).off('.hovercard').on('click.hovercard', function(e) {
                    e.preventDefault();
                    $(elem).data('_hover').start();
                });
            } else {
                if (ips.utils.events.isTouchDevice() && (ips.utils.responsive.currentIs('phone') || ips.utils.responsive.currentIs('tablet'))) {
                    return;
                }
                $(elem).data('_hover').start();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_hover')) {
                return $(elem).data('_hover');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , setCache = function(url, content) {
            cache[url] = content;
        }
          , unCache = function(url) {
            delete cache[url];
        }
          , getCache = function(url) {
            return cache[url];
        };
        ips.ui.registerWidget('hover', ips.ui.hovercard, ['timeout', 'attach', 'content', 'width', 'onClick', 'target', 'cache'], {
            lazyLoad: true,
            lazyEvents: 'mouseover'
        });
        return {
            respond: respond,
            destruct: destruct,
            setCache: setCache,
            getCache: getCache
        };
    });
    var hoverCardObj = function(elem, options) {
        var onTimeout = null, offTimeout = null, ajaxObj, content, target, loading, card, working = false, elemID = '';
        var init = function() {
            elemID = $(elem).identify().attr('id');
        }
          , destruct = function() {
            clearTimeout(offTimeout);
            $(document).off('click.' + elemID);
            _removeLoadingWidget();
            if (card) {
                card.remove();
            }
        }
          , start = function() {
            if (working !== false && options.onClick) {
                return;
            }
            working = true;
            target = ($(options.attach).length) ? $(options.attach) : $(elem);
            clearTimeout(offTimeout);
            if (!options.onClick) {
                onTimeout = setTimeout(_startShow, (options.timeout * 1000));
                $(elem).off('mouseout.hovercard', _mouseOut).on('mouseout.hovercard', _mouseOut);
                $(elem).off('mousedown.hovercard', _elemClick).on('mousedown.hovercard', _elemClick);
            } else {
                $(document).off('click.' + elemID).on('click.' + elemID, _documentClick);
                _startShow();
            }
        }
          , _elemClick = function(e) {
            if (onTimeout) {
                clearTimeout(onTimeout);
            }
            if (offTimeout) {
                clearTimeout(offTimeout);
            }
            if (ajaxObj && _.isFunction(ajaxObj.abort)) {
                ajaxObj.abort();
            }
            _removeLoadingWidget();
            _hideCard();
        }
          , _documentClick = function(e) {
            if (!$(card).is(':visible')) {
                return;
            }
            if (e.target != elem && !$.contains(elem, e.target) && e.target != card.get(0) && !$.contains(card.get(0), e.target)) {
                _hideCard();
                $(document).off('click.' + elemID);
            }
        }
          , _startShow = function() {
            if (card && card.length && _.isElement(card.get(0))) {
                _positionCard();
                working = false;
                return;
            }
            if (options.content && $(options.content).length) {
                _buildLocalContent();
                _buildCard();
                _positionCard();
                working = false;
            } else {
                _buildRemoteContent().done(function() {
                    _buildCard();
                    _positionCard(true);
                }).fail(function() {}).always(function() {
                    working = false;
                });
            }
        }
          , _hideCard = function() {
            ips.utils.anim.go('fadeOut', card);
        }
          , _positionCard = function(showImmediate) {
            if (!card.length) {
                Debug.warn("_positionCard called before a card element exists");
                return;
            }
            if (!target.is(':visible')) {
                Debug.info("Can't show hovercard when target isn't visible");
                return;
            }
            card.css({
                left: 'auto',
                top: 'auto',
                position: 'static'
            });
            if (card.attr('data-originalWidth')) {
                card.css({
                    width: card.attr('data-originalWidth') + 'px'
                });
            }
            var elemPos = ips.utils.position.getElemPosition(target);
            var tooWide = false;
            var elemHeight = $(target).height();
            var elemWidth = $(target).width();
            var actualWidth = $(card).width();
            var actualHeight = $(card).height();
            var win = $(window);
            var positionInfo = {
                trigger: elem,
                target: card,
                above: true,
                stemOffset: {
                    left: 20,
                    top: 0
                }
            };
            var location = ips.utils.position.positionElem(positionInfo);
            card.css({
                left: location.left + 'px',
                top: location.top + 'px',
                position: (location.fixed) ? 'fixed' : 'absolute',
                zIndex: ips.ui.zIndex()
            });
            var newElemPosition = ips.utils.position.getElemPosition(card);
            if ((actualWidth > $(document).width()) || newElemPosition.viewportOffset.left < 0) {
                options.noStem = true;
                card.attr('data-originalWidth', actualWidth).css({
                    left: '10px',
                    width: ($(document).width() - 20) + 'px'
                });
                var newLocation = ips.utils.position.positionElem(positionInfo);
                card.css({
                    top: newLocation.top + 'px'
                });
            }
            card.find('.ipsHovercard_stem').remove();
            _.each(['Top', 'Bottom', 'Left', 'Right'], function(type) {
                card.removeClass('ipsHovercard_stem' + type);
            });
            var stem = $('<span/>').addClass('ipsHovercard_stem');
            card.append(stem).addClass(options.className + '_stem' + (location.location.vertical.charAt(0).toUpperCase() + location.location.vertical.slice(1)));
            if (tooWide) {
                stem.css({
                    left: (elemPos.viewportOffset.left - 10) + 'px'
                });
            } else {
                card.addClass(options.className + '_stem' + (location.location.horizontal.charAt(0).toUpperCase() + location.location.horizontal.slice(1)));
            }
            if (showImmediate) {
                card.show();
            } else {
                ips.utils.anim.go('fadeIn', card);
            }
        }
          , _buildCard = function() {
            var cardId = $(elem).identify().attr('id') + '_hovercard'
              , actualWidth = options.width || 300;
            card = $('<div/>');
            card.attr({
                id: cardId
            }).addClass(options.className).css({
                width: actualWidth + 'px',
                zIndex: ips.ui.zIndex()
            });
            if (_.isString(content)) {
                card.append($('<div/>').html(content));
            } else {
                card.append(content.show());
            }
            ips.getContainer().append(card);
            if (!options.onClick) {
                card.on('mouseenter', _cardMouseOver).on('mouseleave', _cardMouseOut);
            }
            $(document).trigger('contentChange', [card]);
        }
          , _buildLocalContent = function() {
            content = $(options.content);
        }
          , _buildRemoteContent = function() {
            var deferred = $.Deferred();
            if (!elem.href) {
                deferred.reject();
                return deferred.promise();
            }
            if (options.cache && ips.ui.hovercard.getCache(elem.href)) {
                content = ips.ui.hovercard.getCache(elem.href);
                deferred.resolve();
                return deferred.promise();
            }
            _buildLoadingWidget();
            if (options.target) {
                var target = options.target;
            } else {
                var target = elem.href;
            }
            ajaxObj = ips.getAjax()(target).done(function(response) {
                content = response;
                deferred.resolve();
                if (options.cache) {
                    ips.ui.hovercard.setCache(target, content);
                }
            }).fail(function(jqXHR, status, errorThrown) {
                if (Debug.isEnabled()) {
                    if (status != 'abort') {
                        Debug.error("Ajax request failed (" + status + "): " + errorThrown);
                    } else {
                        Debug.warn("Ajax request aborted");
                    }
                    _removeLoadingWidget();
                    deferred.reject();
                } else {
                    if (status != 'abort') {
                        content = $('<div/>').addClass('ipsPad_half ipsType_light').html(ips.getString('errorLoadingContent'));
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                }
            }).always(function() {
                _removeLoadingWidget();
            });
            return deferred.promise();
        }
          , _buildLoadingWidget = function() {
            if (!options.showLoading) {
                return;
            }
            loading = $('<div/>').addClass('ipsHovercard_loading').html(ips.templates.render('core.hovercard.loading'));
            ips.getContainer().append(loading);
            var loadingDims = {
                width: loading.width(),
                height: loading.height()
            };
            loading.hide();
            var elemPos = ips.utils.position.getElemPosition(target)
              , dimsToUse = (elemPos.fixed) ? 'fixedPos' : 'absPos';
            loading.css({
                left: elemPos[dimsToUse].left + 'px',
                top: (elemPos[dimsToUse].top - loadingDims.height - 10) + 'px',
                position: (elemPos.fixed) ? 'fixed' : 'absolute',
                zIndex: "50000"
            });
            ips.utils.anim.go('fadeIn', loading);
        }
          , _removeLoadingWidget = function() {
            if (loading && loading.length) {
                loading.remove();
            }
        }
          , _mouseOut = function() {
            clearTimeout(onTimeout);
            if (ajaxObj) {
                ajaxObj.abort();
            }
            _removeLoadingWidget();
            if (card && card.is(':visible')) {
                offTimeout = setTimeout(_hideCard, options.timeout * 1000);
            }
            $(elem).off('.hovercard', _mouseOut);
        }
          , _cardMouseOver = function() {
            clearTimeout(offTimeout);
        }
          , _cardMouseOut = function() {
            clearTimeout(offTimeout);
            offTimeout = setTimeout(_hideCard, options.timeout * 1000);
        };
        init();
        return {
            init: init,
            destruct: destruct,
            start: start
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.infiniteScroll', function() {
        var defaults = {
            distance: 50,
            loadingTpl: 'core.infScroll.loading',
            scrollScope: window,
            pageParam: 'page',
            pageBreakTpl: 'core.infScroll.pageBreak',
            totalPages: null,
            disableIn: 'phone'
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_infinite')) {
                $(elem).data('_infinite', infiniteScrollObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_infinite')) {
                return $(elem).data('_infinite');
            }
            return undefined;
        };
        ips.ui.registerWidget('infScroll', ips.ui.infiniteScroll, ['container', 'scrollScope', 'distance', 'url', 'pageParam', 'loadingTpl', 'pageBreakTpl', 'disableIn']);
        var infiniteScrollObj = function(elem, options) {
            var state = 'ready'
              , scrollScope = null
              , container = null
              , ajaxObj = null
              , currentPage = 1;
            var init = function() {
                container = $(options.container);
                scrollScope = $(options.scrollScope);
                scrollScope.on('scroll', _scrollEvent);
                options.disableIn = options.disableIn.split(',');
                if (_.isString(options.distance) && options.distance.indexOf('%') !== -1) {
                    var percent = parseInt(options.distance);
                    options.distance = (scrollScope.height() / 100) * percent;
                }
                if (options.totalPages == null) {
                    options.totalPages = _getTotalPages();
                }
                currentPage = _getStartPage();
                elem.on('refresh.infScroll', _refresh);
            }
              , _refresh = function() {
                options.totalPages = _getTotalPages();
                currentPage = _getStartPage();
                try {
                    ajaxObj.abort();
                } catch (err) {}
            }
              , _scrollEvent = function(e) {
                if (ips.utils.responsive.enabled() && _.indexOf(options.disableIn, ips.utils.responsive.getCurrentKey()) !== -1) {
                    return;
                }
                if (state == 'loading' || state == 'done') {
                    return;
                }
                if (currentPage >= _getTotalPages()) {
                    return;
                }
                var distanceFromBottom = _getDistance();
                if (distanceFromBottom <= options.distance) {
                    state = 'loading';
                    _loadMoreResults();
                }
            }
              , _loadMoreResults = function() {
                _showLoadingElem();
                if (ajaxObj && ajaxObj.abort) {
                    ajaxObj.abort();
                }
                ajaxObj = ips.getAjax()(_getPageURL(currentPage + 1)).done(function(response) {
                    currentPage++;
                    _insertNewResults(response);
                    state = 'ready';
                    $(elem).trigger('infScrollPageLoaded', {
                        page: currentPage
                    });
                }).fail(function() {}).always(function() {
                    _removeLoadingElem();
                });
            }
              , _insertNewResults = function(response) {
                var output = '';
                if (options.pageBreakTpl) {
                    output += ips.templates.render(options.pageBreakTpl, {
                        page: currentPage
                    });
                }
                output += response;
                var oldChildLength = container.children().length;
                container.append(output);
                container.children().slice(oldChildLength).each(function(child) {
                    $(document).trigger('contentChange', [$(this)]);
                });
            }
              , _showLoadingElem = function() {
                container.append(ips.templates.render(options.loadingTpl));
            }
              , _removeLoadingElem = function() {
                container.find('[data-role="infScroll_loading"]').remove();
            }
              , _getDistance = function() {
                if (options.scrollScope == window) {
                    var scrollHeight = $(document).height();
                    var distanceFromBottom = scrollHeight - $(window).height() - $(window).scrollTop();
                } else {
                    var scrollHeight = scrollScope[0].scrollHeight;
                    var distanceFromBottom = scrollHeight - scrollScope.height() - scrollScope.scrollTop();
                }
                return distanceFromBottom;
            }
              , _getPageURL = function(pageNo) {
                var url = elem.attr('data-ipsInfScroll-url');
                return url + (url.match(/\?/) ? '&' : '?') + options.pageParam + '=' + parseInt(pageNo);
            }
              , _getStartPage = function() {
                var paginationElem = elem.find('.ipsPagination').first();
                if (!paginationElem.length) {
                    return 1;
                }
                var activePage = paginationElem.find('.ipsPagination_active').attr('data-page');
                if (!activePage) {
                    return 1;
                } else {
                    return parseInt(activePage);
                }
            }
              , _getTotalPages = function() {
                var paginationElem = elem.find('.ipsPagination').first();
                if (!paginationElem.length) {
                    return 1;
                }
                var totalPages = paginationElem.attr('data-pages');
                if (!totalPages) {
                    return 1;
                } else {
                    return parseInt(totalPages);
                }
            };
            init();
            return {
                init: init
            };
        };
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.lazyLoad', function() {
        var respond = function(elem, options, e) {
            ips.utils.lazyLoad.observe(elem);
        };
        ips.ui.registerWidget('lazyLoad', ips.ui.lazyLoad);
        return {
            respond: respond
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.lightbox', function() {
        var defaults = {
            className: 'ipsLightbox',
            useEvents: false
        };
        var currentLightbox;
        var respond = function(elem, options, e) {
            options = _.defaults(options, defaults);
            currentLightbox = new lightboxObj(elem,options,e);
        }
          , destruct = function(elem) {
            if (currentLightbox) {
                currentLightbox.destruct();
                currentLightbox = null;
            }
        };
        ips.ui.registerWidget('lightbox', ips.ui.lightbox, ['group', 'commentsURL', 'className', 'preload', 'useEvents'], {
            lazyLoad: true,
            lazyEvents: 'click'
        });
        return {
            respond: respond,
            destruct: destruct
        };
    });
    var lightboxObj = function(elem, options, e) {
        if (e) {
            e.preventDefault();
        }
        var imageCollection = [], commentsAjax, modal, pieces, currentImage, phoneBreakpoint = false;
        var init = function() {
            elem.blur();
            _getAllImages();
            _buildModal();
            _buildWrapper();
            _setUpEvents();
            _show();
            _loadFirstImage();
        }
          , destruct = function() {
            $(window).off('resize', _resize);
            $(document).off('keydown', _keyPress);
            modal.off('click', close);
        }
          , _setUpEvents = function() {
            pieces.lightbox.on('click', '.' + options.className + '_next', nextImage).on('click', '.' + options.className + '_prev', prevImage).on('click', '.' + options.className + '_close', close).on('click', clickedLightbox);
            modal.on('click', close);
            $(window).on('resize', _resize);
            $(document).on('keydown', _keyPress);
            $(document).on('imageUpdated', _updateImage);
            $(document).on('imageLoading', _mainImageLoading);
            if (options.useEvents) {
                $(document).on('lightboxDisable_next', function() {
                    $('.' + options.className + '_next').hide();
                });
                $(document).on('lightboxDisable_prev', function() {
                    $('.' + options.className + '_prev').hide();
                });
                $(document).on('lightboxEnable_next', function() {
                    $('.' + options.className + '_next').show();
                });
                $(document).on('lightboxEnable_prev', function() {
                    $('.' + options.className + '_prev').show();
                });
            }
        }
          , _mainImageLoading = function(e) {
            _setLoading(true);
            pieces.imagePanel.find('.' + options.className + '_image ').hide();
        }
          , _updateImage = function(e, data) {
            if (data.closeLightbox === true) {
                close(e);
            } else if (data.updateImage) {
                _showImage(data.updateImage);
            }
        }
          , _resize = function(e) {
            if (pieces.lightbox && pieces.imagePanel) {
                if (pieces.imagePanel.find('.' + options.className + '_image').length) {
                    _positionCenter(pieces.imagePanel.find('.' + options.className + '_image:visible'));
                }
            }
        }
          , _keyPress = function(e) {
            if (!pieces.lightbox.is(':visible')) {
                return;
            }
            switch (e.keyCode) {
            case ips.ui.key.ESCAPE:
                close(e);
                break;
            case ips.ui.key.RIGHT:
                nextImage(e);
                break;
            case ips.ui.key.LEFT:
                prevImage(e);
                break;
            }
        }
          , _loadFirstImage = function() {
            var firstImage = function() {
                for (var i = 0; i < imageCollection.length; i++) {
                    if (imageCollection[i].elem == elem) {
                        return imageCollection[i];
                    }
                }
            }();
            currentImage = firstImage;
            _showImage(firstImage);
        }
          , _showImage = function(image) {
            _setLoading(true);
            pieces.imagePanel.find('.' + options.className + '_image ').hide();
            if (image.imageElem) {
                pieces.imagePanel.find('.' + options.className + '_image ').hide()
                var thisImage = image.imageElem.css({
                    opacity: "0"
                }).show();
                _imageLoaded(thisImage);
            } else {
                var thisImage = image.imageElem = $('<img/>').attr('src', image.largeImage).addClass(options.className + '_image').css({
                    opacity: "0"
                }).imagesLoaded(function(imagesLoaded) {
                    try {
                        _imageLoaded($(imagesLoaded.images[0].img));
                    } catch (err) {
                        Debug.error("Error loading image");
                    }
                });
                pieces.imagePanel.find('.' + options.className + '_image ').hide().end().append(thisImage);
            }
            pieces.fullSize.attr('href', image.largeImage);
            if (image.commentsURL) {
                _loadComments(image);
            } else {
                _hideCommentsPanel();
            }
            if (image.meta) {
                pieces.metaPanel.show().html(ips.templates.render('core.lightbox.meta', {
                    title: image.largeImage
                }));
            } else {
                pieces.metaPanel.hide();
            }
            $(elem).trigger('lightboxImageShown', {
                image: image,
                triggerElem: elem
            });
        }
          , _loadComments = function(image) {
            if (commentsAjax) {
                Debug.warn("Aborting comment load");
                commentsAjax.abort();
            }
            pieces.commentsPanel.html('').show().addClass('ipsLoading');
            pieces.imagePanel.addClass(options.className + '_withComments');
            commentsAjax = ips.getAjax()(image.commentsURL).done(function(response) {
                pieces.commentsPanel.html(response).removeClass('ipsLoading');
                $(document).trigger('contentChange', [pieces.commentsPanel]);
                $(elem).trigger('lightboxCommentsLoaded', {
                    image: image,
                    triggerElem: elem,
                    commentsArea: pieces.commentsPanel
                });
            });
        }
          , _hideCommentsPanel = function() {
            pieces.commentsPanel.hide();
            pieces.imagePanel.removeClass(options.className + '_withComments');
        }
          , _setLoading = function(status) {
            if (status === true) {
                pieces.imagePanel.addClass('ipsLoading ipsLoading_dark');
            } else {
                pieces.imagePanel.removeClass('ipsLoading ipsLoading_dark');
                $('.' + options.className + '_imagePanel > img, .' + options.className + '_fullSize').on('mouseover', function() {
                    $('.' + options.className + '_fullSize').show();
                }).on('mouseout', function() {
                    $('.' + options.className + '_fullSize').hide();
                });
            }
        }
          , _imageLoaded = function(image) {
            image.css({
                opacity: "1"
            });
            _positionCenter(image);
            _setLoading(false);
            if (options.useEvents) {
                return;
            }
            if (imageCollection.length < 2) {
                pieces.next.hide();
                pieces.prev.hide();
            } else {
                var curPos = _.indexOf(imageCollection, currentImage);
                pieces.next.show();
                pieces.prev.show();
                if (curPos == 0) {
                    pieces.prev.hide();
                }
                if (curPos == (imageCollection.length - 1)) {
                    pieces.next.hide();
                }
            }
        }
          , _positionCenter = function(image) {
            var imageSize = {
                width: image.width(),
                height: image.height()
            }
              , panelSize = {
                width: pieces.imagePanel.width(),
                height: pieces.imagePanel.height()
            };
            Debug.log("Dimensions: " + imageSize.width + " x " + imageSize.height);
            image.css({
                left: '50%',
                marginLeft: '-' + Math.max((imageSize.width / 2), 0) + 'px',
                top: '50%',
                marginTop: '-' + Math.max((imageSize.height / 2), 0) + 'px'
            });
            if (pieces.fullSize) {
                pieces.fullSize.css({
                    left: '50%',
                    marginLeft: '-' + Math.max((imageSize.width / 2), 0) + 'px',
                    width: (imageSize.width + 2) + 'px',
                    top: '50%',
                    height: (imageSize.height + 2) + 'px',
                    marginTop: '-' + Math.max((imageSize.height / 2), 0) + 'px',
                    paddingTop: Math.max((imageSize.height / 2) - (imageSize.height / 2 / 2) + 50, 0) + 'px'
                });
            }
        }
          , clickedLightbox = function(e) {
            if ($(e.target).closest('a').length) {
                return;
            }
            var width = $(document).width();
            var halfPos = width / 2;
            if (e.pageX >= halfPos && pieces.next.is(':visible')) {
                pieces.next.click();
            } else if (e.pageX < halfPos && pieces.prev.is(':visible')) {
                pieces.prev.click();
            } else {
                close();
            }
        }
          , nextImage = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (options.useEvents) {
                $(document).trigger('lightboxNextImage');
                return;
            }
            currentImage = _getNextImage();
            _showImage(currentImage);
        }
          , prevImage = function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (options.useEvents) {
                $(document).trigger('lightboxPrevImage');
                return;
            }
            currentImage = _getPrevImage();
            _showImage(currentImage);
        }
          , _getPrevImage = function(e) {
            var curPos = _.indexOf(imageCollection, currentImage);
            if (curPos === 0) {
                return imageCollection[imageCollection.length - 1];
            }
            return imageCollection[curPos - 1];
        }
          , _getNextImage = function() {
            var curPos = _.indexOf(imageCollection, currentImage);
            if (curPos == (imageCollection.length - 1)) {
                return imageCollection[0];
            }
            return imageCollection[curPos + 1];
        }
          , close = function(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            $(document).off('imageUpdated', _updateImage);
            $(document).off('imageLoading', _mainImageLoading);
            modal.hide();
            pieces.lightbox.hide();
        }
          , _show = function() {
            ips.utils.anim.go('fadeIn fast', modal);
            ips.utils.anim.go('fadeIn fast', pieces.lightbox);
        }
          , _buildWrapper = function() {
            pieces = {
                lightbox: $('<div/>').addClass(options.className).css({
                    zIndex: ips.ui.zIndex()
                }),
                imagePanel: $('<div/>').addClass(options.className + '_imagePanel'),
                commentsPanel: $('<div/>').addClass(options.className + '_commentsPanel').html('').hide(),
                next: $('<a/>').addClass(options.className + '_next').html("<i class='fa fa-angle-right'></i>"),
                prev: $('<a/>').addClass(options.className + '_prev').html("<i class='fa fa-angle-left'></i>"),
                close: $('<a/>').addClass(options.className + '_close').html("&times;"),
                fullSize: $('<a/>').attr('href', '#').attr('target', '_blank').addClass(options.className + '_fullSize'),
                metaPanel: $('<div/>').addClass(options.className + '_meta').hide()
            };
            pieces.lightbox.append(pieces.imagePanel.append(pieces.next).append(pieces.prev).append(pieces.fullSize)).append(pieces.metaPanel).append(pieces.commentsPanel).append(pieces.close);
            $('body').append(pieces.lightbox);
        }
          , _getAllImages = function() {
            if (options.group) {
                var images = $('[data-ipslightbox-group="' + options.group + '"]');
            } else {
                var images = $(elem);
            }
            $.each(images, function(i, thisElem) {
                imageCollection.push(_returnImageData(thisElem));
            });
        }
          , _returnImageData = function(thisElem) {
            var origImage, largeImage;
            if (thisElem.tagName != 'IMG') {
                origImage = $(thisElem).find('img').attr('src');
            } else {
                origImage = $(thisElem).attr('src');
            }
            if ($(thisElem).attr('data-fullURL')) {
                largeImage = $(thisElem).attr('data-fullURL');
            } else if (thisElem.tagName == 'A' && $(thisElem).attr('href')) {
                largeImage = $(thisElem).attr('href');
            }
            return {
                elem: thisElem,
                originalImage: origImage,
                largeImage: largeImage || origImage,
                meta: $(thisElem).attr('data-ipsLightbox-meta'),
                commentsURL: $(thisElem).attr('data-ipsLightbox-commentsURL')
            };
        }
          , _buildModal = function() {
            modal = ips.ui.getModal();
            modal.css({
                zIndex: ips.ui.zIndex()
            });
        };
        init();
        return {
            destruct: destruct
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    ips.createModule('ips.ui.map', function() {
        var defaults = {
            zoom: 2,
            maxZoom: 16,
            markers: '[]',
            contentUrl: null
        };
        var respond = function(elem, options, e) {
            options = _.defaults(options, defaults);
            var callback = function() {
                if (ips.getSetting('mapProvider') == 'google') {
                    _google(elem, options);
                } else if (ips.getSetting('mapProvider') == 'mapbox') {
                    _mapbox(elem, options);
                }
            };
            if (ips.getSetting('lazyLoadEnabled')) {
                ips.utils.lazyLoad.observe(elem, {
                    loadCallback: callback
                });
            } else {
                callback();
            }
        };
        var _mapbox = function(elem, options) {
            $('head').append("<link rel='stylesheet' type='text/css' media='all' href='https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css'><link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/MarkerCluster.css' rel='stylesheet' /><link href='https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/MarkerCluster.Default.css' rel='stylesheet' />");
            var handlePopup = function(e) {
                var popup = e.target.getPopup();
                var clubID = e.target.options.clubID;
                ips.getAjax()(options.contentUrl + clubID).done(function(response) {
                    popup.setContent(response);
                    popup.update();
                });
            };
            ips.loader.get(['https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js']).then(function() {
                ips.loader.get(['https://api.mapbox.com/mapbox.js/plugins/leaflet-markercluster/v1.0.0/leaflet.markercluster.js']).then(function() {
                    L.mapbox.accessToken = ips.getSetting('mapApiKey');
                    var map = L.mapbox.map(elem.get(0)).setView([45, 0], options.zoom).addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));
                    var cluster = new L.MarkerClusterGroup();
                    map.addLayer(cluster);
                    var markers = $.parseJSON(options.markers);
                    for (var id in markers) {
                        var marker = L.marker([markers[id].lat, markers[id].long], {
                            icon: L.mapbox.marker.icon({
                                'marker-color': '#0000ff'
                            }),
                            clubID: id,
                            title: markers[id].title,
                            draggable: false
                        });
                        cluster.addLayer(marker);
                        if (options.contentUrl) {
                            marker.bindPopup(ips.getString('loading'));
                            marker.on('click', handlePopup);
                        }
                    }
                    map.fitBounds(cluster.getBounds().pad(0.5));
                });
            });
        };
        var _google = function(elem, options) {
            if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
                ips.loader.get(['https://maps.googleapis.com/maps/api/js?key=' + ips.getSetting('mapApiKey') + '&libraries=places&sensor=false&callback=ips.ui.map.googleCallback']);
            } else {
                ips.ui.map.googleCallback();
            }
            $(window).on('googleApiLoaded', function() {
                var mapOptions = {
                    zoom: options.zoom,
                    maxZoom: options.maxZoom,
                    scrollwheel: false
                };
                if (options.zoom) {
                    mapOptions.center = {
                        lat: 45,
                        lng: 0
                    };
                } else {
                    mapOptions.center = {
                        lat: 30,
                        lng: 0
                    };
                }
                var map = new google.maps.Map(elem.get(0),mapOptions);
                var bounds = new google.maps.LatLngBounds();
                var infowindow = new google.maps.InfoWindow({
                    content: ips.getString('loading')
                });
                var markers = $.parseJSON(options.markers);
                for (var id in markers) {
                    var marker = new google.maps.Marker({
                        position: {
                            lat: markers[id].lat,
                            lng: markers[id].long
                        },
                        map: map,
                        title: markers[id].title,
                        id: id
                    });
                    if (options.contentUrl) {
                        marker.addListener('click', function() {
                            infowindow.setContent(ips.getString('loading'))
                            infowindow.open(map, this);
                            ips.getAjax()(options.contentUrl + this.id).done(function(response) {
                                infowindow.setContent(response);
                            });
                        });
                    }
                    bounds.extend(marker.position);
                }
                map.fitBounds(bounds);
            });
        };
        var googleCallback = function() {
            $(window).trigger('googleApiLoaded');
        };
        ips.ui.registerWidget('map', ips.ui.map, ['zoom', 'maxZoom', 'markers', 'contentUrl']);
        return {
            respond: respond,
            googleCallback: googleCallback
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    ips.createModule('ips.ui.menu', function() {
        var defaults = {
            className: 'ipsMenu',
            activeClass: '',
            closeOnClick: true,
            closeOnBlur: true,
            selectable: false,
            withStem: true,
            stemOffset: 25,
            stopLinks: false,
            above: 'auto'
        };
        var stems = ['topLeft', 'topRight', 'topCenter', 'bottomLeft', 'bottomRight', 'bottomCenter'];
        if (!defaults.withStem) {
            defaults.stemOffset = 0;
        }
        var _menuRegistry = {};
        var respond = function(elem, options, e) {
            e.preventDefault();
            var elemID = $(elem).identify().attr('id')
              , options = _.defaults(options, defaults);
            if ($(elem).attr('data-disabled') || $(elem).is(':disabled')) {
                return;
            }
            if (!$(elem).data('_menuBody')) {
                var menu = _getMenu(elem, elemID, options);
                $(elem).data('_menuBody', menu);
            } else {
                var menu = $(elem).data('_menuBody');
            }
            if (!menu.length) {
                Debug.warn("Couldn't find or build a menu for " + elemID);
                return;
            }
            $(window).on('resize', function(e) {
                if (menu.is(':visible')) {
                    menu.hide();
                    _positionMenu(elem, elemID, options, menu, true);
                    menu.show();
                }
            });
            if (!menu.is(':visible')) {
                _showMenu(elem, elemID, options, menu, e);
            } else {
                _hideMenu(elem, elemID, options, menu, false);
            }
        }
          , _showMenu = function(elem, elemID, options, menu, e) {
            Debug.log(options);
            if (options.closeOnBlur) {
                $(document).on('click.' + elemID, _.partial(_closeOnBlur, elem, menu));
            }
            $(menu).on('closeMenu', _.partial(_hideMenu, elem, elemID, options, menu, false)).on('mouseenter', '.ipsMenu_subItems', _.bind(_showSubMenu, this, elem, elemID, options, menu));
            $(elem).on('closeMenu', _.partial(_hideMenu, elem, elemID, options, menu, false));
            _positionMenu(elem, elemID, options, menu);
            menu.show();
            $(elem).addClass(options.activeClass);
            $(elem).trigger('menuOpened', {
                elemID: elemID,
                originalEvent: e,
                menu: menu
            });
        }
          , _showSubMenu = function(elem, elemID, options, menu, e) {
            var menuItem = $(e.currentTarget).find('> a');
            var subMenu = menuItem.next('.ipsMenu');
            $(e.currentTarget).on('mouseleave', _.bind(_hideSubMenu, this, elem, elemID, options, menu));
            var itemPosition = ips.utils.position.getElemPosition(menuItem);
            var itemSize = ips.utils.position.getElemDims(menuItem);
            var subMenuSize = ips.utils.position.getElemDims(subMenu);
            if ($('html').attr('dir') == 'rtl') {
                var left = (itemSize.outerWidth - 5);
                var top = menuItem.position()['top'] - 5;
                if ((itemPosition.viewportOffset.left - subMenuSize.outerWidth - 5) < 0) {
                    if ((itemPosition.viewportOffset.right + 5 + subMenuSize.outerWidth) <= $(window).width()) {
                        left = (itemSize.outerWidth + 5);
                    } else {
                        left = 15 - itemPosition.absPos.left;
                        top = menuItem.position()['top'] + itemSize.height + 15;
                    }
                }
                subMenu.css({
                    left: left + 'px',
                    top: top + 'px'
                }).show();
            } else {
                var left = (itemSize.outerWidth - 5);
                var top = menuItem.position()['top'] - 5;
                if ((itemPosition.viewportOffset.left + itemSize.outerWidth + subMenuSize.outerWidth - 5) > $(window).width()) {
                    if ((itemPosition.viewportOffset.left + 5 - subMenuSize.outerWidth) >= 0) {
                        left = ((subMenuSize.outerWidth * -1) + 5);
                    } else {
                        left = ($(window).width() - subMenuSize.outerWidth) - itemPosition.absPos.left - 15;
                        top = menuItem.position()['top'] + itemSize.height + 15;
                    }
                }
                subMenu.css({
                    left: left + 'px',
                    top: top + 'px'
                }).show();
            }
        }
          , _hideSubMenu = function(elem, elemID, options, menu, e) {
            var subMenus = $(e.currentTarget).closest('.ipsMenu_item').find('.ipsMenu');
            subMenus.hide();
        }
          , _hideMenu = function(elem, elemID, options, menu, immediate) {
            if (options.closeOnBlur) {
                $(document).off('click.' + elemID);
            }
            $(elem).off('closeMenu');
            $(menu).off('closeMenu');
            $(elem).removeClass(options.activeClass);
            if (!immediate) {
                ips.utils.anim.go('fadeOut fast', menu);
            } else {
                menu.hide();
            }
            $(elem).trigger('menuClosed', {
                elemID: elemID,
                menu: menu
            });
        }
          , _positionMenu = function(elem, elemID, options, menu, repositioning) {
            var above = options.above;
            if (above == 'auto') {
                above = false;
                if (($(elem).offset().top + menu.height()) > $(window).height()) {
                    above = true;
                }
            }
            var positionInfo = {
                trigger: elem,
                target: menu,
                center: true,
                above: above,
                stemOffset: {
                    left: options.stemOffset,
                    top: -2
                }
            };
            menu.css({
                left: 'auto',
                top: 'auto',
                position: 'static'
            });
            if (menu.attr('data-originalWidth')) {
                menu.css({
                    width: menu.attr('data-originalWidth') + 'px'
                });
            }
            if (options.appendTo) {
                var appendTo = _getAppendContainer(elem, options.appendTo);
                if (appendTo.length) {
                    _.extend(positionInfo, {
                        targetContainer: appendTo
                    });
                }
            }
            var menuPosition = ips.utils.position.positionElem(positionInfo);
            var menuDims = ips.utils.position.getElemDims(menu);
            var triggerPosition = ips.utils.position.getElemPosition($(elem));
            menu.css({
                left: menuPosition.left + 'px',
                top: menuPosition.top + 'px',
                position: (menuPosition.fixed) ? 'fixed' : 'absolute',
            });
            if (!repositioning) {
                menu.css({
                    zIndex: ips.ui.zIndex()
                });
            }
            var newMenuPosition = ips.utils.position.getElemPosition(menu);
            if ((menuDims.width > $(document).width()) || newMenuPosition.viewportOffset.left < 0) {
                options.noStem = true;
                var left = "10px";
                if (options.appendTo && appendTo.length) {
                    var appendPosition = ips.utils.position.getElemPosition(appendTo);
                    left = (10 - appendPosition.viewportOffset.left) + 'px';
                }
                menu.attr('data-originalWidth', menuDims.width).css({
                    left: left,
                    width: ($(document).width() - 20) + 'px'
                });
            }
            _removeExistingStems(menu, options);
            if (!menu.hasClass(options.className + '_noStem') && !options.noStem) {
                var stemClass = '';
                stemClass += menuPosition.location.vertical;
                stemClass += menuPosition.location.horizontal.charAt(0).toUpperCase();
                stemClass += menuPosition.location.horizontal.slice(1);
                menu.addClass(options.className + '_' + stemClass);
            }
        }
          , _removeExistingStems = function(menu, options) {
            var stemClasses = [];
            $.each(stems, function(idx, value) {
                stemClasses[idx] = options.className + '_' + value;
            });
            menu.removeClass(stemClasses.join(' '));
        }
          , _getMenu = function(elem, elemID, options) {
            if ($('#' + options.menuID).length) {
                var menu = $('#' + options.menuID);
            } else if ($('#' + elemID + '_menu').length) {
                var menu = $('#' + elemID + '_menu');
            } else if (options.menuContent) {
                var menu = buildMenuFromJSON(elem, elemID, options.menuContent);
            } else {
                return false;
            }
            if (options.appendTo) {
                var appendTo = _getAppendContainer(elem, options.appendTo);
                if (appendTo.length) {
                    appendTo.append(menu);
                }
            } else {
                ips.getContainer().append(menu);
            }
            $(menu).on('click.' + elemID, _.partial(_menuClicked, elem, elemID, options, menu));
            $(menu).data('_owner', elem);
            _menuRegistry[elemID] = {
                elem: elem,
                options: options,
                menu: menu
            };
            return $(menu);
        }
          , _closeOnBlur = function(elem, menu, e) {
            var clickedOnTrigger = function() {
                if ($(e.target).is('[data-ipsMenu]')) {
                    Debug.log(e.target);
                    return e.target;
                } else if ($(e.target).parent('[data-ipsMenu]')) {
                    return $(e.target).parent('[data-ipsMenu]').get(0);
                }
            }();
            $.each(_menuRegistry, function(key, value) {
                var clickInMenu = _clickIsChildOfMenu(e.target, value.elem, value.menu.get(0));
                if (value.elem) {
                    if (clickInMenu || value.elem == clickedOnTrigger || $.contains(value.elem, e.target)) {
                        return;
                    }
                }
                if (value.menu.is(':visible')) {
                    _hideMenu(value.elem, key, value.options, value.menu, !!clickedOnTrigger);
                }
            });
        }
          , _clickIsChildOfMenu = function(clickTarget, triggerElem, menuElem) {
            if (_.isString($(clickTarget).get(0).className) && ($(clickTarget).get(0).className.startsWith('ui-datepicker') || $(clickTarget).closest('#ui-datepicker-div').length)) {
                return true;
            }
            if (clickTarget == menuElem || $.contains(menuElem, clickTarget)) {
                return true;
            }
            return false;
        }
          , _menuClicked = function(elem, elemID, options, menu, e) {
            if ($(e.target).hasClass(options.className + '_item')) {
                var itemClicked = $(e.target);
            } else {
                var itemClicked = $(e.target).parents('.' + options.className + '_item');
            }
            if (itemClicked.length === 0) {
                return;
            }
            if (options.stopLinks) {
                e.preventDefault();
            }
            if (itemClicked.hasClass(options.className + '_itemDisabled') || itemClicked.is(':disabled')) {
                return;
            }
            if (options.closeOnClick) {
                if (itemClicked.find('[data-action="ipsMenu_ping"]').length) {
                    e.preventDefault();
                    itemClicked.find('[data-action="ipsMenu_ping"]').each(function() {
                        ips.getAjax()($(this).attr('href')).done(function() {
                            $(elem).trigger('menuPingSuccessful', {});
                        });
                    });
                }
                var addItemClicked = function() {
                    itemClicked.addClass(options.className + '_itemClicked');
                };
                var removeItemClicked = function() {
                    itemClicked.removeClass(options.className + '_itemClicked');
                };
                if (e.button !== 1) {
                    _.delay(addItemClicked, 100);
                    _.delay(removeItemClicked, 200);
                    _.delay(_hideMenu, 300, elem, elemID, options, menu, false);
                }
            }
            if (itemClicked.find('[data-role="ipsMenu_selectedText"]').length) {
                $(elem).find('[data-role="ipsMenu_selectedText"]').html(itemClicked.find('[data-role="ipsMenu_selectedText"]').html());
            }
            if (itemClicked.find('[data-role="ipsMenu_selectedIcon"]').length) {
                $(elem).find('[data-role="ipsMenu_selectedIcon"]').replaceWith(itemClicked.find('[data-role="ipsMenu_selectedIcon"]').clone());
            }
            var data = {
                triggerElem: elem,
                triggerID: elemID,
                menuElem: $(menu[0]),
                originalEvent: e
            };
            if (options.selectable) {
                _.extend(data, _handleSelectableClick(elem, elemID, options, menu, e));
            }
            if (!_.isUndefined(itemClicked.attr('data-ipsmenuvalue'))) {
                _.extend(data, {
                    selectedItemID: itemClicked.attr('data-ipsmenuvalue')
                });
            }
            $(elem).trigger('menuItemSelected', data);
        }
          , _handleSelectableClick = function(elem, elemID, options, menu, e) {
            var thisItem = $(e.target).closest('.' + options.className + '_item');
            if (!thisItem.length) {
                return;
            }
            if (thisItem.attr('data-noselect')) {
                return;
            }
            if (options.selectable == 'radio') {
                menu.find('.' + options.className + '_itemChecked').removeClass(options.className + '_itemChecked');
                thisItem.addClass(options.className + '_itemChecked').find('input[type="radio"]').prop('checked', true).change();
            } else {
                if (thisItem.hasClass(options.className + '_itemChecked')) {
                    thisItem.removeClass(options.className + '_itemChecked').find('input[type="checkbox"]').prop('checked', false).change();
                } else {
                    thisItem.addClass(options.className + '_itemChecked').find('input[type="checkbox"]').prop('checked', true).change();
                }
            }
            var selectedItems = menu.find('.' + options.className + '_itemChecked')
              , selected = {};
            $.each(selectedItems, function(idx, item) {
                selected[$(item).identify().attr('id')] = item;
            });
            return {
                selectedItems: selected
            };
        }
          , _getAppendContainer = function(elem, appendTo) {
            var appends = appendTo.split(',');
            var elem = $(elem);
            for (var i = 0; i < appends.length; i++) {
                var selector = appends[i].trim();
                if (selector.startsWith('#')) {
                    if ($(selector).length) {
                        return $(selector);
                    }
                } else {
                    if (elem.closest(selector).length) {
                        return elem.closest(selector);
                    }
                }
            }
            ;
        };
        ips.ui.registerWidget('menu', ips.ui.menu, ['className', 'menuID', 'closeOnClick', 'closeOnBlur', 'menuContent', 'appendTo', 'activeClass', 'selectable', 'withStem', 'stemOffset', 'stopLinks', 'above'], {
            lazyLoad: true,
            lazyEvents: 'click'
        });
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.pageAction', function() {
        var defaults = {};
        var respond = function(elem, options) {
            if (!$(elem).data('_pageAction')) {
                $(elem).data('_pageAction', pageActionObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_pageAction')) {
                return $(elem).data('_pageAction');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        var pageActionObj = function(elem, options) {
            var wrapper = null
              , initialized = false
              , id = ''
              , _checkedItems = {};
            var init = function() {
                elem.find('[data-role="pageActionOptions"]').hide();
                _setUpEvents();
            }
              , destruct = function() {
                if (wrapper) {
                    wrapper.off('click', '[data-role="actionButton"]', _selectItem).off('menuItemSelected', '[data-role="actionMenu"]', _selectMenuItem);
                }
            }
              , refresh = function() {
                _refreshPageAction();
                _updateBar();
            }
              , reset = function() {
                _checkedItems = {};
                _updateBar();
            }
              , _setUpEvents = function() {
                elem.on('change', 'input[type="checkbox"][data-actions]', _toggleCheckbox);
                elem.on('refresh.pageAction', _refreshPageAction);
                elem.on('addManualItem.pageAction', _addManualItem);
            }
              , _addManualItem = function(e, data) {
                _checkedItems[data.id] = data.actions;
                _updateBar(true);
            }
              , _refreshPageAction = function() {
                _.each(_checkedItems, function(val, key) {
                    if (elem.find('input[type="checkbox"][name="' + key + '"]').length) {
                        elem.find('input[type="checkbox"][name="' + key + '"]').attr('checked', true).trigger('change');
                    }
                });
            }
              , _toggleCheckbox = function(e) {
                var checkbox = $(e.currentTarget);
                if (checkbox.is(':checked')) {
                    _checkedItems[checkbox.attr('name')] = checkbox.attr('data-actions');
                } else {
                    delete _checkedItems[checkbox.attr('name')];
                }
                _updateBar(true);
            }
              , _updateBar = function(doImmediate) {
                if (!initialized) {
                    _buildActionBar();
                    doImmediate = true;
                    initialized = true;
                }
                var possibleValues = _getActionValues();
                var size = _.size(_checkedItems);
                _showCorrectButtons(possibleValues);
                _positionBar();
                wrapper.find('[data-role="count"]').text(ips.pluralize(ips.getString('pageActionText_number'), size));
                if (!size) {
                    if (doImmediate) {
                        wrapper.hide();
                    } else {
                        ips.utils.anim.go('fadeOut fast', wrapper);
                    }
                } else if (initialized) {
                    if (wrapper.is(':visible')) {
                        ips.utils.anim.go('pulseOnce fast', wrapper);
                    } else {
                        if (doImmediate) {
                            wrapper.show();
                        } else {
                            ips.utils.anim.go('fadeIn', wrapper);
                        }
                    }
                }
            }
              , _positionBar = function() {
                var width = wrapper.outerWidth();
                var newLeft = width / 2;
                wrapper.css({
                    marginLeft: (newLeft * -1) + 'px'
                });
            }
              , _showCorrectButtons = function(possibleValues) {
                wrapper.find('[data-role="actionMenu"], [data-role="actionButton"]').each(function() {
                    var show = false;
                    var action = $(this).attr('data-action');
                    if ($(this).is('[data-role="actionButton"]')) {
                        if (_.indexOf(possibleValues, action) !== -1) {
                            show = true;
                        }
                    } else {
                        var menuID = id + '_' + action + '_menu';
                        $('#' + menuID).find('[data-ipsMenuValue]').each(function() {
                            var menuAction = $(this).attr('data-ipsMenuValue');
                            if (_.indexOf(possibleValues, menuAction) !== -1) {
                                show = true;
                                $(this).removeClass('ipsMenu_itemDisabled');
                            } else {
                                $(this).addClass('ipsMenu_itemDisabled');
                            }
                        });
                    }
                    if (show && !$(this).is(':visible')) {
                        $(this).removeClass('ipsHide');
                    } else if (!show && $(this).is(':visible')) {
                        $(this).addClass('ipsHide');
                    }
                });
            }
              , _selectItem = function(e) {
                e.preventDefault();
                _triggerAction($(e.currentTarget).attr('data-action'));
            }
              , _selectMenuItem = function(e, data) {
                e.preventDefault();
                if (!_.isUndefined(data.originalEvent)) {
                    data.originalEvent.preventDefault();
                }
                _triggerAction(data.selectedItemID);
            }
              , _triggerAction = function(action) {
                var tools = elem.find('[data-role="pageActionOptions"]');
                tools.find('select').val(action);
                _.each(_checkedItems, function(val, key) {
                    if (!elem.find('input[type="checkbox"][name="' + key + '"]').length && !elem.find('input[type="hidden"][name="' + key + '"]').length) {
                        elem.append($('<input/>').attr('type', 'hidden').attr('name', key).attr('data-role', "moderation").val(1));
                    }
                });
                var page = ips.utils.url.getPageNumber('page');
                if (!_.isUndefined(page)) {
                    var pageNumber = $('<input/>').attr('type', 'hidden').attr('name', 'page').attr('value', ips.utils.url.getPageNumber('page'));
                    tools.find('[type="submit"]').before(pageNumber);
                    tools.closest('form').attr('action', tools.closest('form').attr('action') + '&page=' + ips.utils.url.getPageNumber('page'));
                }
                tools.find('[type="submit"]').click();
            }
              , _buildActionBar = function() {
                var content = '';
                var select = elem.find('[data-role="pageActionOptions"] select');
                id = select.identify().attr('id');
                select.children().each(function() {
                    if ($(this).is('optgroup')) {
                        content += _buildOptGroup($(this), id);
                    } else {
                        content += _buildOption($(this), id);
                    }
                });
                var bar = ips.templates.render('core.pageAction.wrapper', {
                    content: content,
                    id: id,
                    selectedLang: ips.getString('pageActionText')
                });
                elem.after(bar);
                wrapper = elem.next();
                wrapper.on('click', '[data-role="actionButton"]', _selectItem).on('menuItemSelected', '[data-role="actionMenu"]', _selectMenuItem);
                $(document).trigger('contentChange', [wrapper]);
            }
              , _buildOptGroup = function(optgroup, id) {
                var content = '';
                var options = optgroup.find('option');
                options.each(function() {
                    content += ips.templates.render('core.menus.menuItem', {
                        value: $(this).attr('value'),
                        title: $(this).html(),
                        link: '#',
                    });
                });
                return ips.templates.render('core.pageAction.actionMenuItem', {
                    icon: optgroup.attr('data-icon'),
                    title: optgroup.attr('label'),
                    id: id,
                    action: optgroup.attr('data-action'),
                    menucontent: content
                });
            }
              , _buildOption = function(option, id) {
                return ips.templates.render('core.pageAction.actionItem', {
                    icon: option.attr('data-icon'),
                    id: id,
                    title: option.html(),
                    action: option.attr('value')
                });
            }
              , _getActionValues = function() {
                var values = [];
                _.each(_checkedItems, function(val, key) {
                    var splitValues = val.split(' ');
                    values = _.union(values, splitValues);
                });
                return values;
            }
              , _getCheckedBoxes = function() {
                return elem.find('input[type="checkbox"][data-actions]:checked');
            };
            init();
            return {
                refresh: refresh,
                destruct: destruct,
                bar: wrapper,
                reset: reset
            };
        };
        ips.ui.registerWidget('pageAction', ips.ui.pageAction, []);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.pagination', function() {
        var defaults = {
            ajaxEnabled: true,
            perPage: 25,
            pageParam: 'page',
            seoPagination: false,
        };
        var respond = function(elem, options) {
            options = _.defaults(options, defaults);
            if (!$(elem).data('_pagination')) {
                $(elem).data('_pagination', paginationObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('pagination', ips.ui.pagination, ['ajaxEnabled', 'perPage', 'pages', 'pageParam', 'seoPagination']);
        return {
            respond: respond
        };
    });
    var paginationObj = function(elem, options) {
        var init = function() {
            if (!options.ajaxEnabled) {
                return;
            }
            elem.on('click', '[data-page]', function(e) {
                var targetElem = $(e.currentTarget);
                $(elem).trigger('paginationClicked', {
                    href: targetElem.attr('href') || '#',
                    hrefTitle: targetElem.attr('title') || '',
                    paginationElem: $(elem),
                    seoPagination: options.seoPagination,
                    pageElem: targetElem,
                    perPage: options.perPage,
                    pageParam: options.pageParam,
                    pageNo: targetElem.attr('data-page'),
                    lastPage: (parseInt(targetElem.attr('data-page')) === parseInt(options.pages)),
                    originalEvent: e || null
                });
            });
            elem.on('menuOpened', function(e, data) {
                $(elem).find('input[type="number"]').focus();
            });
            elem.on('submit', '[data-role="pageJump"]', function(e) {
                var value = parseInt($(e.currentTarget).find('input[type="number"]').val());
                var href = $(e.currentTarget).closest('[data-baseURL]').attr('data-baseurl');
                if (value < 1 || value > options.pages) {
                    ips.ui.alert.show({
                        type: 'alert',
                        icon: 'warning',
                        message: ips.getString('not_valid_page', [options.pages]),
                        callbacks: {}
                    });
                    return;
                }
                $(elem).trigger('paginationJump', {
                    originalEvent: e || null,
                    href: href || '#',
                    paginationElem: $(elem),
                    seoPagination: options.seoPagination,
                    pageNo: value,
                    perPage: options.perPage,
                    pageParam: options.pageParam,
                    lastPage: (parseInt(value) === parseInt(options.pages))
                });
            });
        };
        init();
        return {
            init: init
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.passwordStrength', function() {
        var defaults = {};
        var respond = function(elem, options) {
            if (!$(elem).data('_passwordStrength')) {
                $(elem).data('__passwordStrength', passwordStrengthObj(elem, _.defaults(options, defaults)));
            }
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_passwordStrength')) {
                return $(elem).data('_passwordStrength');
            }
            return undefined;
        };
        ips.ui.registerWidget('passwordStrength', ips.ui.passwordStrength, ['enforced', 'enforcedStrength', 'checkAgainstMember', 'checkAgainstRequest']);
        return {
            respond: respond,
            getObj: getObj,
            destruct: destruct
        };
    });
    var passwordStrengthObj = function(elem, options) {
        var _popup = null
          , _passwordBlurred = false
          , _field = null
          , _dirty = false
          , _timer = null
          , _ajax = ips.getAjax();
        var init = function() {
            elem.on('focus', 'input[type="password"]', _passwordFocus);
            elem.on('blur', 'input[type="password"]', _passwordBlur);
            elem.on('keyup blur', 'input[type="password"]', _passwordKeyEvent);
            _field = elem.find('input[type="password"]');
            _field.after($('<span/>').attr('data-role', 'validationCheck'));
            if (_field.val() !== '') {
                _changePassword();
            }
        }
          , destruct = function() {
            if (_timer) {
                clearTimeout(_timer);
            }
            if (_ajax && _ajax.abort) {
                _ajax.abort();
            }
            elem.off('focus', 'input[type="password"]', _passwordFocus);
            elem.off('blur', 'input[type="password"]', _passwordBlur);
            elem.off('keyup blur', 'input[type="password"]', _passwordKeyEvent);
        }
          , _passwordFocus = function() {
            if (!elem.is(':visible')) {
                _field.blur();
                return;
            }
            if (_.isNull(_popup)) {
                _buildAdvicePopup();
            }
            _popup.show();
            _positionAdvicePopup();
            _passwordBlurred = false;
        }
          , _passwordBlur = function() {
            if (_popup) {
                _popup.hide();
            }
            _passwordBlurred = true;
        }
          , _clearResult = function() {
            _field.removeClass('ipsField_error').removeClass('ipsField_success').next('[data-role="validationCheck"]').html('');
        }
          , _passwordKeyEvent = function(e) {
            if (_timer) {
                clearTimeout(_timer);
            }
            if (_field.val().length > 2 || e.type != "keyup") {
                _timer = setTimeout(_changePassword, 750);
            } else {
                _clearResult();
            }
        }
          , _changePassword = function() {
            var value = _field.val();
            var resultElem = _field.next('[data-role="validationCheck"]');
            var wrapper = elem.find('[data-role="strengthInfo"]');
            var meter = elem.find('[data-role="strengthMeter"]');
            var text = elem.find('[data-role="strengthText"]');
            if (_ajax && _ajax.abort) {
                _ajax.abort();
            }
            if (value.length) {
                _dirty = true;
            } else {
                if (!_dirty) {
                    return;
                }
            }
            if (!meter.is(':visible')) {
                ips.utils.anim.go('fadeInDown fast', wrapper);
            }
            _field.addClass('ipsField_loading');
            var alsoCheckAgainst = new Array;
            if (options.checkAgainstRequest) {
                var requestNames = JSON.parse(options.checkAgainstRequest);
                _.each(requestNames, function(value) {
                    if (elem.closest('form').find('input[name="' + value + '"]')) {
                        alsoCheckAgainst.push(elem.closest('form').find('input[name="' + value + '"]').val());
                    }
                });
            }
            if (options.checkAgainstMember) {
                var memberValues = JSON.parse(options.checkAgainstMember);
                _.each(memberValues, function(value) {
                    alsoCheckAgainst.push(value);
                });
            }
            _ajax(ips.getSetting('baseURL') + '?app=core&module=system&controller=ajax&do=passwordStrength', {
                dataType: 'json',
                data: {
                    input: value,
                    checkAgainstRequest: alsoCheckAgainst
                },
                method: 'post'
            }).done(function(response) {
                if (response.result == 'ok') {
                    meter.val(response.granular);
                    meter.attr('data-adviceValue', response.score);
                    text.html(ips.getString('strength_' + response.score));
                    if (options.enforced) {
                        _clearResult();
                        if (response.score >= parseInt(options.enforcedStrength)) {
                            resultElem.hide().html('');
                            _field.addClass('ipsField_success');
                            _field.closest('.ipsFieldRow').removeClass('ipsFieldRow_error').find('.ipsType_warning').hide();
                        } else {
                            if (_passwordBlurred) {
                                resultElem.show().html(ips.templates.render('core.forms.validateFailText', {
                                    message: ips.getString('err_password_strength', {
                                        strength: ips.getString('strength_' + options.enforcedStrength)
                                    })
                                }));
                                _field.addClass('ipsField_error');
                            }
                        }
                    }
                } else {
                    resultElem.show().html(ips.templates.render('core.forms.validateFailText', {
                        message: response.message
                    }));
                    _field.removeClass('ipsField_success').addClass('ipsField_error');
                }
            }).fail(function() {}).always(function() {
                _field.removeClass('ipsField_loading');
            });
        }
          , _buildAdvicePopup = function() {
            var text = ips.getString('password_advice');
            var min = false;
            if (!_.isNull(_popup)) {
                return;
            }
            if (options.enforced) {
                min = ips.getString('err_password_strength', {
                    strength: ips.getString('strength_' + options.enforcedStrength)
                });
            }
            var tmpPopup = ips.templates.render('core.forms.advicePopup', {
                id: elem.identify().attr('id'),
                min: min,
                text: text
            });
            $('body').append(tmpPopup);
            _popup = $('body').find('#elPasswordAdvice_' + elem.identify().attr('id'));
            _popup.css({
                position: 'absolute'
            });
        }
          , _positionAdvicePopup = function() {
            var isRTL = $('html').attr('dir') == 'rtl';
            var position = ips.utils.position.getElemPosition(_field);
            var fieldWidth = _field.width();
            var fieldHeight = _field.height();
            var adviceWidth = _popup.width();
            var adviceHeight = _popup.height();
            var windowWidth = $(window).width();
            var stemOffset = 30;
            _popup.removeClass('cStem_rtl cStem_ltr cStem_above').css({
                zIndex: ips.ui.zIndex()
            });
            if (isRTL && (position.absPos.left - adviceWidth - stemOffset) > 0) {
                _popup.addClass('cStem_rtl').css({
                    top: (position.absPos.top - (stemOffset / 2)) + 'px',
                    left: (position.absPos.left - stemOffset - adviceWidth) + 'px'
                });
            } else if (!isRTL && (position.absPos.left + fieldWidth + adviceWidth + stemOffset) < windowWidth) {
                _popup.addClass('cStem_ltr').css({
                    top: (position.absPos.top - (stemOffset / 2)) + 'px',
                    left: (position.absPos.left + fieldWidth + stemOffset) + 'px'
                });
            } else {
                _popup.addClass('cStem_above').css({
                    top: (position.absPos.top - (stemOffset / 2) - adviceHeight) + 'px',
                    left: (position.absPos.left + (fieldWidth / 2) - (adviceWidth / 2)) + 'px'
                });
            }
        };
        init();
        return {
            destruct: destruct
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.patchwork', function() {
        var defaults = {
            items: '[data-role="patchworkItem"]',
            minColSize: 300,
            maxColSize: 600
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_patchwork')) {
                $(elem).data('_patchwork', patchWorkObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_patchwork')) {
                return $(elem).data('_patchwork');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        var patchWorkObj = function(elem, options) {
            var currentColCount = 1;
            var possibleSizes = [1, 2, 3, 4, 6, 12];
            var containerList = null;
            var itemList = null;
            var items = null;
            var init = function() {
                itemList = elem.find('[data-role="patchworkList"]');
                items = itemList.find(options.items);
                items.each(function(idx) {
                    $(this).attr('data-position', idx);
                });
                _buildList();
                $(window).on('resize', _checkItemWidth);
            }
              , destruct = function() {
                $(window).off('resize', _checkItemWidth);
            }
              , _redrawLayout = function(force) {
                var columnElems = containerList.find('> [class*="ipsGrid_span"]').hide();
                var elemSize = elem.outerWidth();
                var columns = Math.ceil(elemSize / options.maxColSize);
                if (possibleSizes.indexOf(columns) === -1) {
                    columns = _getCorrectColumnCount(columns);
                }
                if (currentColCount === columns && force !== true) {
                    columnElems.show();
                    return;
                }
                items.css({
                    'opacity': "0.001"
                });
                var spanClass = _getSpanFromCount(columns);
                for (var i = 0; i < columns; i++) {
                    containerList.append($('<li/>').addClass('ipsGrid_span' + spanClass).attr('data-working', true));
                }
                currentColCount = columns;
                var currentItems = _.sortBy(items, function(item) {
                    return parseInt($(item).attr('data-position'));
                });
                _distributeItems(currentItems);
                containerList.find('> [class*="ipsGrid_span"]:not( [data-working] )').remove();
                containerList.find('> [data-working]').removeAttr('data-working');
                setTimeout(function() {
                    items.animate({
                        opacity: "1"
                    });
                }, 250);
            }
              , _distributeItems = function(currentItems) {
                var columns = containerList.find('> [class*="ipsGrid_span"][data-working]');
                var itemCount = currentItems.length;
                var heights = [];
                var isLastRow = false;
                columns.each(function() {
                    heights.push({
                        column: $(this),
                        height: 0
                    });
                });
                _.each(currentItems, function(item, idx) {
                    if (((itemCount - (idx + 1)) % columns.length === 0) && (idx >= itemCount - columns.length)) {
                        isLastRow = true;
                    }
                    var shortest = _.min(heights, function(value) {
                        return value.height;
                    });
                    if (shortest) {
                        shortest.column.append($(item));
                        shortest.height += $(item).outerHeight();
                    }
                });
            }
              , _buildList = function() {
                var elemSize = elem.outerWidth();
                containerList = $('<ul/>').addClass('ipsGrid ipsGrid_collapsePhone ipsPatchwork');
                itemList.after(containerList);
                _redrawLayout(true);
            }
              , _getSpanFromCount = function(columns) {
                return possibleSizes[(possibleSizes.length - 1) - possibleSizes.indexOf(columns)];
            }
              , _getCorrectColumnCount = function(columns) {
                if (columns > 12) {
                    return 12;
                }
                for (var i = 0; i <= possibleSizes.length; i++) {
                    if (columns == possibleSizes[i]) {
                        return possibleSizes[i];
                    }
                    if (columns > i && columns <= possibleSizes[i + 1]) {
                        var diffA = columns - i;
                        var diffB = possibleSizes[i + 1] - columns;
                        if (diffA > diffB) {
                            return possibleSizes[i + 1];
                        } else {
                            return possibleSizes[i];
                        }
                    }
                }
            }
              , _getFirst = function() {
                return elem.find('.ipsPatchwork > [class*="ipsGrid_span"]').first();
            }
              , _checkItemWidth = function() {
                var firstItem = _getFirst();
                if (options.minColSize && firstItem.outerWidth() < parseInt(options.minColSize) || options.maxItemSize && firstItem.outerWidth() >= parseInt(options.maxItemSize)) {
                    _redrawLayout();
                }
            };
            init();
            return {
                init: init,
                destruct: destruct
            };
        };
        ips.ui.registerWidget('patchwork', ips.ui.patchwork, ['minColSize', 'maxColSize', 'items']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.photoLayout', function() {
        var defaults = {
            minHeight: 250,
            maxItems: 5,
            gap: 4,
            itemTemplate: 'core.patchwork.imageList'
        };
        var respond = function(elem, options, e) {
            options = _.defaults(options, defaults);
            if (!$(elem).data('_photoLayout')) {
                $(elem).data('_photoLayout', photoLayoutObj(elem, _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_photoLayout')) {
                return $(elem).data('_photoLayout');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        ips.ui.registerWidget('photoLayout', ips.ui.photoLayout, ['minHeight', 'maxItems', 'maxRows', 'gap', 'data', 'itemTemplate']);
        return {
            respond: respond,
            destruct: destruct,
            getObj: getObj
        };
    });
    var photoLayoutObj = function(elem, options) {
        var currentWidth = 0;
        var imageData;
        var noOfPhotos = 0;
        var dataStore = $('<div/>');
        var windowWidth = 0;
        var checkboxes = [];
        var timer = null;
        var init = function() {
            windowWidth = $(window).width();
            currentWidth = Math.floor(elem.width());
            imageData = _getData();
            noOfPhotos = imageData.length;
            elem.empty();
            run(imageData);
            timer = setInterval(function() {
                _checkCurrentWidth();
            }, 300);
            $(window).on('resize', _resizeWindow);
            $(document).trigger('contentChange', [elem]);
        }
          , _checkCurrentWidth = function() {
            var newWidth = Math.floor(elem.width());
            if (currentWidth !== newWidth) {
                currentWidth = newWidth;
                _resizeWindow(true);
            }
        }
          , destruct = function() {
            $(window).off('resize', _resizeWindow);
            clearInterval(timer);
        }
          , refresh = function() {
            imageData = _getData();
            noOfPhotos = imageData.length;
            elem.empty();
            run(imageData);
        }
          , run = function(data) {
            if (!elem.is(':visible')) {
                return;
            }
            var initialHeight = Math.max(options.minHeight, Math.floor(currentWidth / options.maxItems));
            var currentWidthForCalc = (currentWidth - options.gap);
            var relativeSizes = [];
            _.each(data, function(image) {
                var w = 0;
                var h = 0;
                if (!_.isString(image.filenames.small[0])) {
                    w = options.minHeight;
                    h = options.minHeight;
                } else {
                    w = parseInt(image.filenames.small[1], 10);
                    h = parseInt(image.filenames.small[2], 10);
                }
                if (!w) {
                    w = options.minWidth;
                }
                if (!h) {
                    w = options.minHeight;
                }
                if (h != initialHeight) {
                    w = Math.floor(w * (initialHeight / h));
                }
                relativeSizes.push(w);
            });
            var imagesSoFar = 0;
            var rowNum = 0;
            while (imagesSoFar < noOfPhotos) {
                rowNum++;
                if (options.maxRows && rowNum > options.maxRows) {
                    break;
                }
                var imagesInRow = 0;
                var widthOfRow = 0;
                while ((widthOfRow * 1.1 < currentWidthForCalc) && (imagesSoFar + imagesInRow < noOfPhotos)) {
                    var gap = options.gap * 2;
                    if (imagesInRow === 0) {
                        gap = options.gap;
                    }
                    widthOfRow += relativeSizes[imagesSoFar + imagesInRow++] + gap;
                }
                widthOfRow -= options.gap;
                var row = _getRow();
                var ratio = (currentWidthForCalc) / widthOfRow;
                var lastRowNotFit = false;
                var i = 0;
                widthOfRow = 0;
                var rowHeight = Math.floor(initialHeight * ratio);
                row.height(rowHeight + (options.gap * 2));
                while (i < imagesInRow) {
                    var thisImage = data[imagesSoFar + i];
                    var newWidth = Math.floor(relativeSizes[imagesSoFar + i] * ratio);
                    var thisWidth = (!_.isNull(thisImage.filenames.small[1]) && thisImage.filenames.small[1] > 0) ? thisImage.filenames.small[1] : options.minWidth;
                    var thisHeight = (!_.isNull(thisImage.filenames.small[2]) && thisImage.filenames.small[2] > 0) ? thisImage.filenames.small[2] : options.minHeight;
                    if (imagesSoFar + imagesInRow >= noOfPhotos && rowHeight >= initialHeight) {
                        rowHeight = initialHeight;
                        row.height(rowHeight + (options.gap * 2));
                        newWidth = Math.floor(thisWidth * (initialHeight / thisHeight));
                        lastRowNotFit = true;
                    }
                    widthOfRow += newWidth + (options.gap * 2);
                    var item = _buildItem(thisImage, {
                        width: newWidth,
                        height: rowHeight,
                        margin: options.gap,
                        marginLeft: (i === 0) ? 0 : options.gap,
                        marginRight: (i + 1 === imagesInRow) ? 0 : options.gap,
                        ratio: ((rowHeight / newWidth) * 100).toFixed(2)
                    });
                    row.append(item);
                    i++;
                }
                widthOfRow -= (options.gap * 2);
                imagesSoFar += imagesInRow;
                if (!lastRowNotFit) {
                    var smWidth = 0;
                    while (widthOfRow < currentWidthForCalc) {
                        var item = row.find('.cGalleryPatchwork_item:nth-child(' + (smWidth + 1) + ")");
                        item.css({
                            width: (item.width() + 1) + 'px'
                        });
                        smWidth = (smWidth + 1) % imagesInRow;
                        widthOfRow++;
                    }
                    var bigWidth = 0;
                    while (widthOfRow > currentWidthForCalc) {
                        var item = row.find('.cGalleryPatchwork_item:nth-child(' + (bigWidth + 1) + ")");
                        item.css({
                            width: (item.width() - 1) + 'px'
                        });
                        bigWidth = (bigWidth + 1) % imagesInRow;
                        widthOfRow--;
                    }
                }
            }
            if (checkboxes.length) {
                _.each(checkboxes, function(val) {
                    elem.find('input[type="checkbox"][name="' + val + '"]').prop('checked', true);
                });
                checkboxes = [];
            }
            elem.find('.cGalleryPatchwork_row').css({
                width: '100%'
            });
            if (ips.getSetting('lazyLoadEnabled')) {
                elem.find('img[data-src]').each(function() {
                    ips.utils.lazyLoad.observe(this);
                });
            }
        }
          , _buildItem = function(imageData, extra) {
            var multipliedWidth = extra.width;
            var multipliedHeight = extra.height;
            var showThumb = true;
            if (!_.isString(imageData.filenames.small[0])) {
                showThumb = false
            } else {
                if (multipliedWidth <= imageData.filenames.small[1] && multipliedHeight <= imageData.filenames.small[2]) {
                    imageData.src = imageData.filenames.small[0];
                } else {
                    imageData.src = imageData.filenames.large[0];
                }
            }
            if (!_.isUndefined(imageData.container)) {
                imageData.container = imageData.container.replace(/&apos;/ig, "'");
            }
            return ips.templates.render(options.itemTemplate, {
                showThumb: showThumb,
                lazyLoad: ips.getSetting('lazyLoadEnabled'),
                image: imageData,
                dims: extra
            });
        }
          , _getRow = function() {
            var row = $('<div/>').addClass('cGalleryPatchwork_row ipsClearfix');
            elem.append(row);
            return row;
        }
          , _getData = function() {
            if (options.data) {
                return $.parseJSON(options.data);
            }
            var data = [];
            elem.find('[data-role="patchworkImage"][data-json]').each(function() {
                try {
                    var _data = $.parseJSON($(this).attr('data-json'));
                } catch (err) {
                    return;
                }
                data.push(_data);
            });
            return data;
        }
          , _resizeWindow = function(force) {
            checkboxes = _getCheckedImages();
            if (force || $(window).width() !== windowWidth) {
                elem.empty();
                noOfPhotos = imageData.length;
                run(imageData);
            }
            windowWidth = $(window).width();
        }
          , _getCheckedImages = function() {
            var names = [];
            var checks = elem.find('input[type="checkbox"]:checked');
            if (checks.length) {
                checks.each(function() {
                    names.push($(this).attr('name'));
                });
            }
            return names;
        };
        init();
        return {
            init: init,
            destruct: destruct,
            refresh: refresh
        };
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.productZoom', function() {
        var defaults = {};
        var respond = function(elem, options) {
            if (!$(elem).data('_productZoom')) {
                $(elem).data('_productZoom', productZoomObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('productZoom', ips.ui.productZoom, ['largeURL']);
        return {
            respond: respond
        };
    });
    var productZoomObj = function(elem, options) {
        var initialized = false
          , wrapper = null
          , imageElem = null
          , zoomArea = null
          , currentlyOver = false
          , ratio = 0
          , zoomerSize = 0
          , thumbW = 0
          , thumbH = 0
          , wrapperW = 0
          , wrapperH = 0
          , fullW = 0
          , fullH = 0
          , triggerBuffer = 25
          , disabled = false
          , isRTL = $('html').attr('dir') == 'rtl';
        var init = function() {
            elem.on('mouseenter', _enterElem);
            elem.on('mouseleave', _leaveElem);
            elem.on('mousemove', _moveElem);
        }
          , _enterElem = function(e) {
            if (disabled) {
                return;
            }
            currentlyOver = true;
            if (!initialized) {
                _setUpZoomer();
                return;
            }
            if (!_checkAcceptableSize()) {
                disabled = true;
                return;
            }
            _showZoomer();
        }
          , _leaveElem = function(e) {
            if (disabled) {
                return;
            }
            currentlyOver = false;
            wrapper.fadeOut('fast');
            zoomArea.hide();
        }
          , _moveElem = function(e) {
            if (!initialized || !currentlyOver || disabled) {
                return;
            }
            var cursorPos = _cursorPos(e);
            var halfZoomer = (zoomerSize / 2);
            var halfWrapper = wrapper.width() / 2;
            var tLeft = 0;
            var tTop = 0;
            var fLeft = 0;
            var fTop = 0;
            if (cursorPos.left - halfZoomer < 0) {
                tLeft = 0;
            } else if (cursorPos.left + halfZoomer > thumbW) {
                tLeft = thumbW - zoomerSize;
            } else {
                tLeft = cursorPos.left - halfZoomer;
            }
            if (cursorPos.top - halfZoomer < 0) {
                tTop = 0;
            } else if (cursorPos.top + halfZoomer > thumbH) {
                tTop = thumbH - zoomerSize;
            } else {
                tTop = cursorPos.top - halfZoomer;
            }
            zoomArea.css({
                left: tLeft + 'px',
                top: tTop + 'px'
            });
            var reciprocal = 1 / ratio;
            var cursorPosLarge = {
                left: cursorPos.left * reciprocal,
                top: cursorPos.top * reciprocal
            };
            if (cursorPosLarge.left - halfWrapper < 0) {
                fLeft = 0;
            } else if (cursorPosLarge.left + halfWrapper > fullW) {
                fLeft = fullW - wrapperW;
            } else {
                fLeft = cursorPosLarge.left - halfWrapper;
            }
            if (cursorPosLarge.top - halfWrapper < 0) {
                fTop = 0;
            } else if (cursorPosLarge.top + halfWrapper > fullH) {
                fTop = fullH - wrapperH;
            } else {
                fTop = cursorPosLarge.top - halfWrapper;
            }
            imageElem.css({
                left: (fLeft * -1) + 'px',
                top: (fTop * -1) + 'px',
            });
        }
          , _imageLoaded = function() {
            wrapper.removeClass('ipsLoading');
            if (currentlyOver) {
                _showZoomer();
            }
        }
          , _showZoomer = function() {
            var elemPosition = ips.utils.position.getElemPosition(elem);
            var elemSize = ips.utils.position.getElemDims(elem);
            wrapper.css({
                width: elemSize.outerHeight + 'px',
                height: elemSize.outerHeight + 'px',
                top: elemPosition.absPos.top + 'px'
            });
            if (isRTL) {
                wrapper.css({
                    left: (elemPosition.absPos.left - elemSize.outerWidth - 20) + 'px',
                });
            } else {
                wrapper.css({
                    left: elemPosition.absPos.left + elemSize.outerWidth + 20 + 'px'
                });
            }
            wrapper.show();
            zoomArea.show();
            _getDimensions();
            if (!_checkAcceptableSize()) {
                disabled = true;
                wrapper.hide();
                zoomArea.hide();
                return;
            }
            ratio = thumbW / fullW;
            wrapper.css({
                opacity: "1"
            });
            zoomArea.css({
                width: (thumbW * ratio) + 'px',
                height: (thumbW * ratio) + 'px',
            });
            zoomerSize = zoomArea.width();
        }
          , _setUpZoomer = function() {
            $('#ipsZoomer, #ipsZoomer_area').remove();
            var elemPosition = ips.utils.position.getElemPosition(elem);
            var elemSize = ips.utils.position.getElemDims(elem);
            var imgURL = (options.largeURL) ? options.largeURL : elem.find('img').attr('src');
            wrapper = $('<div/>').attr('id', 'ipsZoomer');
            zoomArea = $('<div/>').attr('id', 'ipsZoomer_area').hide();
            imageElem = $('<img/>').attr('src', imgURL).css({
                position: 'absolute'
            });
            $('body').append(wrapper.append(imageElem));
            elem.append(zoomArea).css({
                position: 'relative'
            });
            wrapper.css({
                opacity: "0.0001",
                zIndex: ips.ui.zIndex()
            }).addClass('ipsLoading');
            imageElem.imagesLoaded(_imageLoaded);
            initialized = true;
            _getDimensions();
        }
          , _getDimensions = function() {
            thumbW = elem.width();
            thumbH = elem.height();
            wrapperW = wrapper.width();
            wrapperH = wrapper.height();
            fullW = imageElem.width();
            fullH = imageElem.height();
        }
          , _checkAcceptableSize = function() {
            if ((fullW - triggerBuffer) <= (wrapperW ? wrapperW : wrapper.width()) || (fullH - triggerBuffer) <= (wrapperH ? wrapperH : wrapper.height())) {
                return false;
            }
            return true;
        }
          , _cursorPos = function(e) {
            var offset = elem.offset();
            return {
                left: e.pageX - offset.left,
                top: e.pageY - offset.top
            };
        };
        init();
        return {};
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.quote', function() {
        var defaults = {
            timestamp: '',
            userid: 0,
            username: '',
            contenttype: '',
            contentclass: '',
            contentid: 0
        };
        var respond = function(elem, options) {
            if (elem.data('quoteBuilt') || elem.parents('.cke_wysiwyg_div').length) {
                return;
            }
            var existingCitation = elem.children('.ipsQuote_citation');
            var citation = ips.utils.getCitation(options, true, existingCitation.length ? existingCitation.text() : ips.getString('editorQuote'));
            var data = {
                citation: citation,
                contenturl: options.contentid && options.contentcommentid ? ips.getSetting('baseURL') + "?app=core&module=system&controller=content&do=find&content_class=" + options.contentclass + "&content_id=" + options.contentid + "&content_commentid=" + options.contentcommentid : ''
            };
            var citation = ips.templates.render('core.editor.citation', data);
            if (existingCitation.length) {
                existingCitation.replaceWith(citation);
            } else {
                elem.prepend(citation);
            }
            elem.find('> .ipsQuote_citation').on('click', _toggleQuote);
            elem.find('> .ipsQuote_contents').addClass('ipsClearfix').attr('data-ipsTruncate', true).attr('data-ipsTruncate-type', 'hide').attr('data-ipsTruncate-size', '7 lines').attr('data-ipsTruncate-expandText', ips.getString('expand_quote'));
            if (elem.is('blockquote.ipsQuote > blockquote.ipsQuote')) {
                elem.find('> *:not( .ipsQuote_citation )').hide().end().find('> .ipsQuote_citation').removeClass('ipsQuote_open').addClass('ipsQuote_closed');
            }
            elem.trigger('quoteBuilt.quote');
            elem.data('quoteBuilt', true);
            $(document).trigger('contentChange', [elem]);
        }
          , _toggleQuote = function(e) {
            var cite = $(e.currentTarget);
            var target = $(e.target);
            if (target.is('a:not( [data-action="toggleQuote"] )') || (target.closest('a').length && !target.closest('a').is('[data-action="toggleQuote"]'))) {
                return;
            }
            e.preventDefault();
            if (cite.hasClass('ipsQuote_closed')) {
                ips.utils.anim.go('fadeIn', cite.siblings());
                cite.removeClass('ipsQuote_closed').addClass('ipsQuote_open');
            } else {
                cite.siblings().hide();
                cite.removeClass('ipsQuote_open').addClass('ipsQuote_closed');
            }
            e.stopPropagation();
        };
        ips.ui.registerWidget('quote', ips.ui.quote, ['timestamp', 'userid', 'username', 'contentapp', 'contenttype', 'contentclass', 'contentid', 'contentcommentid']);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.rating', function() {
        var defaults = {
            changeRate: true,
            canRate: true
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_rating')) {
                $(elem).data('_rating', ratingObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('rating', ips.ui.rating, ['url', 'changeRate', 'canRate', 'size', 'value', 'userRated']);
        var ratingObj = function(elem, options) {
            var selected = null
              , max = 0
              , ratingElem = null
              , userRated = false
              , loading = false;
            var init = function() {
                elem.children().hide();
                if (options.value) {
                    selected = options.value;
                } else {
                    selected = elem.find('input[type="radio"]:checked').val();
                }
                var maxElem = _.max(elem.find('input[type="radio"]'), function(value) {
                    return parseInt($(value).attr('value'));
                });
                max = $(maxElem).attr('value');
                _buildRatingElem();
                ratingElem.on('mouseenter', 'li', _enterStar);
                ratingElem.on('mouseleave', 'li', _leaveStar);
                ratingElem.on('click', 'li', _clickStar);
            }
              , _buildRatingElem = function() {
                var content = '';
                for (var i = 1; i <= max; i++) {
                    if (i <= selected) {
                        content += ips.templates.render('core.rating.star', {
                            value: i,
                            className: 'ipsRating_on'
                        });
                    } else if ((i - 0.5) <= selected) {
                        content += ips.templates.render('core.rating.halfStar', {
                            value: i
                        });
                    } else {
                        content += ips.templates.render('core.rating.star', {
                            value: i,
                            className: 'ipsRating_off'
                        });
                    }
                }
                content = ips.templates.render('core.rating.wrapper', {
                    content: content,
                    status: (options.userRated) ? ips.pluralize(ips.getString('youRatedThis'), [options.userRated]) : ''
                });
                elem.append(content);
                ratingElem = elem.find('.ipsRating');
                if (options.size) {
                    ratingElem.addClass('ipsRating_' + options.size);
                }
            }
              , _enterStar = function(e) {
                if ((selected != null && !options.changeRate) || !options.canRate || loading) {
                    return;
                }
                _starActive($(e.currentTarget).attr('data-ratingValue'), true);
            }
              , _leaveStar = function(e) {
                if ((selected != null && !options.changeRate) || !options.canRate || loading) {
                    return;
                }
                _starActive(selected, false);
            }
              , _clickStar = function(e) {
                e.preventDefault();
                if ((selected != null && !options.changeRate) || !options.canRate || loading) {
                    return;
                }
                var value = $(e.currentTarget).attr('data-ratingValue');
                selected = value;
                userRated = true;
                _starActive(value);
                ips.utils.anim.go('pulseOnce', $(e.currentTarget));
                elem.find('[data-role="ratingStatus"]').text(ips.pluralize(ips.getString('youRatedThis'), [value]));
                if (options.url) {
                    _remoteRating(value);
                    return;
                }
                elem.find('input[type="radio"]').prop('checked', false).filter('input[type="radio"][value="' + value + '"]').prop('checked', true);
                elem.trigger('ratingSaved', {
                    value: value
                });
            }
              , _starActive = function(value, hover) {
                ratingElem.find('> ul[data-role="ratingList"]').toggleClass('ipsRating_mine', (hover || userRated)).end().find('.ipsRating_half').each(function() {
                    $(this).replaceWith(ips.templates.render('core.rating.star', {
                        value: $(this).attr('data-ratingValue'),
                        className: 'ipsRating_off'
                    }));
                }).end().find('li').removeClass('ipsRating_on').removeClass('ipsRating_hover').addClass('ipsRating_off').end().find('li[data-ratingValue="' + value + '"]').prevAll('li').andSelf().removeClass('ipsRating_off').addClass('ipsRating_on');
            }
              , _remoteRating = function(value) {
                _setLoading(true);
                var statusElem = elem.find('[data-role="ratingStatus"]');
                statusElem.html(ips.templates.render('core.rating.loading'));
                ips.getAjax()(options.url, {
                    data: {
                        rating: parseInt(value)
                    }
                }).done(function(response) {
                    statusElem.text(ips.getString('rating_saved'));
                    elem.trigger('ratingSaved', {
                        value: value
                    });
                }).fail(function(jqXHR) {
                    statusElem.text(ips.getString('rating_failed'));
                    elem.trigger('ratingFailed', {
                        value: value
                    });
                }).always(function() {});
            }
              , _setLoading = function(isLoading) {
                loading = isLoading;
                ratingElem.toggleClass('ipsRating_loading', isLoading);
            };
            init();
            return {};
        };
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.selectTree', function() {
        var defaults = {
            multiple: false,
            selected: false,
            searchable: true,
            placeholder: ips.getString('select')
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_selecttree')) {
                $(elem).data('_selecttree', selectTreeObj($(elem), _.defaults(options, defaults)));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_selecttree')) {
                return $(elem).data('_selecttree');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        var selectTreeObj = function(elem, options) {
            var results = null
              , elemID = null
              , selectedItems = []
              , name = '';
            var init = function() {
                elemID = elem.identify().attr('id');
                results = elem.find('.ipsSelectTree_nodes');
                name = elem.attr('data-name');
                elem.on('click', _toggleResults);
                elem.on('click', '[data-action="getChildren"]', _toggleChildren);
                elem.on('click', '[data-action="nodeSelect"]', _toggleNodeSelection);
                elem.on('click', '[data-action="nodeLoadMore"] a:not(.ipsButton_disabled)', _nodeLoadMore);
                if ($('input[name="' + name + '-zeroVal"]')) {
                    $('input[name="' + name + '-zeroVal"]').on('change', _zeroValChange);
                }
                if (options.selected) {
                    try {
                        var preSelected = $.parseJSON(options.selected);
                    } catch (err) {}
                    if (preSelected && _.isObject(preSelected) && _.size(preSelected)) {
                        _buildPreSelected(preSelected);
                        return;
                    }
                }
                elem.find('.ipsSelectTree_value').addClass('ipsSelectTree_placeholder').text((options.placeholder) ? options.placeholder : ips.getString('select'));
                _zeroValChange();
            }
              , destruct = function() {
                $(document).off('click.' + elemID);
            }
              , _buildPreSelected = function(preSelected) {
                if (_.size(preSelected)) {
                    _.each(preSelected, function(val, key) {
                        selectedItems.push(key);
                        if (options.multiple) {
                            var id = key;
                            if (val.id) {
                                id = val.id;
                            }
                            _addToken(val.title, id);
                        } else {
                            _setValue(val.title);
                        }
                        if (results.find('[data-id="' + key + '"]').length) {
                            results.find('[data-id="' + key + '"]').addClass('ipsSelectTree_selected');
                        }
                    });
                    _updateSelectedValues();
                    elem.trigger('nodeInitialValues', {
                        selectedItems: selectedItems
                    });
                }
            }
              , _zeroValChange = function(e) {
                elem.toggleClass('ipsSelectTree_disabled', $('input[name="' + name + '-zeroVal"]').is(':checked'));
                if (!$('input[name="' + name + '-zeroVal"]').is(':checked') && results.is(':visible')) {
                    _closeResults();
                }
            }
              , _toggleChildren = function(e, ignoreClosed) {
                e.preventDefault();
                e.stopPropagation();
                var item = $(e.currentTarget).closest('.ipsSelectTree_item');
                var listItem = item.closest('li');
                var id = item.attr('data-id');
                var url = options.url + '&_nodeSelect=children&_nodeId=' + id;
                if (!item.hasClass('ipsSelectTree_withChildren')) {
                    return;
                }
                if (item.hasClass('ipsSelectTree_itemOpen')) {
                    if (ignoreClosed !== true) {
                        item.removeClass('ipsSelectTree_itemOpen');
                        listItem.find('> [data-role="childWrapper"]').hide();
                        _positionResults();
                    }
                } else {
                    item.addClass('ipsSelectTree_itemOpen');
                    if (item.attr('data-childrenLoaded')) {
                        ips.utils.anim.go('fadeIn fast', listItem.find('> [data-role="childWrapper"]'));
                        _positionResults();
                    } else {
                        listItem.append($('<div/>').attr('data-role', 'childWrapper').html(ips.templates.render('core.general.loading', {
                            text: ips.getString('loading')
                        })));
                        _positionResults();
                        ips.getAjax()(url).done(function(response) {
                            item.attr('data-childrenLoaded', true);
                            listItem.find('[data-role="childWrapper"]').html(response.output);
                            listItem.find('[data-role="childWrapper"] .ipsSelectTree_item').each(function() {
                                if ($(this).attr('data-id') && selectedItems.indexOf($(this).attr('data-id')) != -1) {
                                    $(this).addClass('ipsSelectTree_selected');
                                }
                            });
                            _positionResults();
                        });
                    }
                }
            }
              , _toggleNodeSelection = function(e) {
                var node = $(e.currentTarget);
                if (node.hasClass('ipsSelectTree_selected')) {
                    _unselectNode(node, e);
                } else {
                    _selectNode(node, e);
                }
                _updateSelectedValues();
            }
              , _nodeLoadMore = function(e) {
                var offset = results.find('[data-action="nodeLoadMore"]').attr('data-offset');
                var url = options.url + '&_nodeSelect=loadMore&_nodeSelectOffset=' + offset;
                results.find('[data-action="nodeLoadMore"] span.ipsLoading').removeClass('ipsHide');
                results.find('[data-action="nodeLoadMore"] > a.ipsButton').addClass('ipsButton_disabled');
                ips.getAjax()(url).done(function(response) {
                    if (!_.isUndefined(response.globalOutput)) {
                        results.find('[data-role="globalNodeList"]').append(response.globalOutput);
                        if (!_.isUndefined(response.clubsOutput)) {
                            results.find('[data-role="clubNodeList"]').append(response.clubsOutput);
                        }
                    } else {
                        results.find('[data-role="nodeList"]').append(response.output);
                    }
                    results.find('[data-action="nodeLoadMore"] span.ipsLoading').addClass('ipsHide');
                    if (response.loadMore) {
                        results.find('[data-action="nodeLoadMore"]').attr('data-offset', response.loadMore);
                    } else {
                        results.find('[data-action="nodeLoadMore"]').addClass('ipsHide');
                    }
                    results.find('[data-action="nodeLoadMore"] > a.ipsButton').removeClass('ipsButton_disabled');
                    results.find('[data-role="nodeList"]').find('.ipsSelectTree_item').each(function() {
                        if ($(this).attr('data-id') && selectedItems.indexOf($(this).attr('data-id')) != -1) {
                            $(this).addClass('ipsSelectTree_selected');
                        }
                    });
                    _positionResults();
                });
            }
              , _selectNode = function(node, e) {
                if (!options.multiple) {
                    elem.find('.ipsSelectTree_selected').removeClass('ipsSelectTree_selected');
                }
                node.addClass('ipsSelectTree_selected');
                var title = node.find('[data-role="nodeTitle"]').text();
                var id = node.attr('data-id');
                if (!options.multiple) {
                    _setValue(title);
                } else {
                    _addToken(title, id);
                }
                if (options.multiple) {
                    selectedItems.push(node.attr('data-id'));
                } else {
                    selectedItems = [node.attr('data-id')];
                }
                if (e) {
                    _toggleChildren(e, true);
                }
                elem.trigger('nodeItemSelected', {
                    title: title,
                    id: id
                });
                if (!options.multiple && !node.hasClass('ipsSelectTree_withChildren')) {
                    setTimeout(function() {
                        _closeResults();
                    }, 200);
                }
            }
              , _unselectNode = function(node, e) {
                node.removeClass('ipsSelectTree_selected');
                selectedItems = _.without(selectedItems, node.attr('data-id'));
                elem.trigger('nodeItemUnselected', {
                    title: node.find('[data-role="nodeTitle"]').text(),
                    id: node.attr('data-id')
                });
                if (!options.multiple) {
                    _setValue();
                } else {
                    _removeToken(node);
                }
            }
              , _addToken = function(title, id) {
                var valueElem = elem.find('.ipsSelectTree_value');
                var elemHeight = elem.outerHeight();
                if (!elem.find('[data-role="tokenList"]').length) {
                    valueElem.html($('<ul/>').addClass('ipsList_inline').attr('data-role', 'tokenList'));
                }
                elem.find('[data-role="tokenList"]').append(ips.templates.render('core.selectTree.token', {
                    title: title,
                    id: id
                }));
                elem.find('.ipsSelectTree_value').removeClass('ipsSelectTree_placeholder');
                if (elemHeight != elem.outerHeight()) {
                    _positionResults();
                }
            }
              , _removeToken = function(node) {
                var id = node.attr('data-id');
                var tokenList = elem.find('[data-role="tokenList"]');
                var elemHeight = elem.outerHeight();
                var token = tokenList.find('[data-nodeId="' + id + '"]').closest('li').remove();
                if (!tokenList.find('[data-nodeId]').length) {
                    tokenList.remove();
                    _setValue();
                }
                if (elemHeight != elem.outerHeight()) {
                    _positionResults();
                }
            }
              , _updateSelectedValues = function() {
                elem.find('[data-role="nodeValue"]').val(_.uniq(selectedItems).join(','));
                elem.trigger('nodeSelectedChanged', {
                    selectedItems: selectedItems
                });
            }
              , _setValue = function(value) {
                if (value) {
                    elem.find('.ipsSelectTree_value').text(value).removeClass('ipsSelectTree_placeholder');
                } else {
                    elem.find('.ipsSelectTree_value').text((options.placeholder) ? options.placeholder : ips.getString('select')).addClass('ipsSelectTree_placeholder');
                }
            }
              , _toggleResults = function(e) {
                if (results.is(':visible')) {
                    _maybeHideResults(e);
                } else {
                    _showResults(e);
                }
            }
              , _maybeHideResults = function(e) {
                var rawResults = results.get(0);
                if ((!$.contains(rawResults, e.target) && rawResults != e.target)) {
                    _closeResults();
                }
            }
              , _closeResults = function() {
                ips.utils.anim.go('fadeOut fast', results);
                $(document).off('click.' + elemID);
                elem.removeClass('ipsSelectTree_active');
                elem.trigger('nodeSelectionClosed');
            }
              , _showResults = function() {
                $(document).on('click.' + elemID, _closeResultsOnBlur);
                _positionResults();
                results.show();
                elem.addClass('ipsSelectTree_active');
                if (elem.find('[data-role="nodeSearch"]')) {
                    elem.find('[data-role="nodeSearch"]').focus();
                }
            }
              , _positionResults = function() {
                var above = false;
                var selectWidth = elem.outerWidth();
                var elemTop = elem.offset().top;
                var elemHeight = elem.height();
                if ((elemTop + elemHeight + results.height()) > $(window).height()) {
                    above = true;
                    var scrollParent = _getScrollParent();
                    var scrollParentTop = $(scrollParent).offset().top;
                    Debug.log("elemTop: " + elemTop);
                    Debug.log("elemTop - resultsHeight: " + (elemTop - results.height()));
                    Debug.log("scrollParentTop: " + scrollParentTop);
                    if ((elemTop - results.height()) < scrollParentTop) {
                        above = false;
                    }
                }
                var positionInfo = {
                    trigger: elem,
                    target: results,
                    targetContainer: elem,
                    above: above
                };
                var resultsPosition = ips.utils.position.positionElem(positionInfo);
                results.css({
                    top: resultsPosition.top + 'px',
                    left: String(-parseFloat(results.css('borderLeftWidth')) - parseFloat(results.css('marginLeft'))),
                    position: 'absolute',
                    zIndex: ips.ui.zIndex(),
                    minWidth: selectWidth + 'px'
                });
                results.each(function() {
                    this.style.setProperty('--ipsSelectTree-offset', elemHeight + 'px');
                });
                if (resultsPosition.location.vertical == 'top') {
                    results.removeClass('ipsSelectTree_bottom').addClass('ipsSelectTree_top');
                    elem.removeClass('ipsSelectTree_bottom').addClass('ipsSelectTree_top');
                } else {
                    results.removeClass('ipsSelectTree_top').addClass('ipsSelectTree_bottom');
                    elem.removeClass('ipsSelectTree_top').addClass('ipsSelectTree_bottom');
                }
            }
              , _closeResultsOnBlur = function(e) {
                if (!_clickIsInElem(e.target)) {
                    _closeResults();
                }
            }
              , _clickIsInElem = function(target) {
                var rawElem = elem.get(0);
                var rawResults = results.get(0);
                if (target == rawElem || target == rawResults || $.contains(rawResults, target) || $.contains(rawElem, target)) {
                    return true;
                }
                return false;
            }
              , _getScrollParent = function(includeHidden) {
                var element = elem.get(0);
                var style = getComputedStyle(element);
                var excludeStaticParent = style.position === "absolute";
                var overflowRegex = /(auto|scroll|hidden)/;
                if (style.position === "fixed") {
                    return document.body;
                }
                for (var parent = element; (parent = parent.parentElement); ) {
                    style = getComputedStyle(parent);
                    if (excludeStaticParent && style.position === "static") {
                        continue;
                    }
                    if (overflowRegex.test(style.overflow + style.overflowY + style.overflowX)) {
                        return parent;
                    }
                }
                return document.body;
            }
            init();
            return {
                destruct: destruct
            };
        };
        ips.ui.registerWidget('selectTree', ips.ui.selectTree, ['placeholder', 'multiple', 'selected', 'url', 'searchable']);
        return {
            respond: respond,
            destruct: destruct
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.sideMenu', function() {
        var defaults = {
            type: 'radio',
            responsive: true,
            group: false
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_sidemenu')) {
                $(elem).data('_sidemenu', sideMenuObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('sideMenu', ips.ui.sideMenu, ['responsive', 'type', 'group']);
        var sideMenuObj = function(elem, options) {
            var init = function() {
                if (options.responsive && ips.utils.responsive.enabled()) {
                    $(elem).on('click', '[data-action="openSideMenu"]', _toggleSideMenu);
                    $(elem).find('.ipsSideMenu_mainTitle').after($('<div/>')).end().find('.ipsSideMenu_mainTitle + div').append($(elem).find('.ipsSideMenu_title, .ipsSideMenu_subTitle, .ipsSideMenu_list'));
                }
                $(elem).on('click', '.ipsSideMenu_item', _clickEvent);
                $(elem).on('selectItem.sideMenu', _selectItem);
            }
              , _clickEvent = function(e) {
                _doSelectItem($(e.currentTarget), e);
                _toggleSideMenu();
            }
              , _selectItem = function(e, data) {
                _doSelectItem(elem.find('[data-ipsMenuValue="' + data.value + '"]'), e);
            }
              , _doSelectItem = function(item, e) {
                if ((_.isUndefined(item.attr('data-ipsMenuValue')) && !item.find('input[type="radio"], input[type="checkbox"]').length) || !item.length) {
                    return;
                }
                if (e) {
                    e.preventDefault();
                }
                if (item.hasClass('ipsSideMenu_itemDisabled')) {
                    return;
                }
                var workingItems;
                if (!options.group) {
                    workingItems = $(elem).find('.ipsSideMenu_item');
                } else {
                    workingItems = item.closest('.ipsSideMenu_list').find('.ipsSideMenu_item');
                }
                if (options.type == 'check') {
                    item.toggleClass('ipsSideMenu_itemActive').find('input[type="radio"], input[type="checkbox"]').prop("checked", function(i, val) {
                        return !val;
                    }).change();
                } else {
                    workingItems.removeClass('ipsSideMenu_itemActive').find('input[type="radio"], input[type="checkbox"]').prop("checked", false);
                    item.addClass('ipsSideMenu_itemActive').find('input[type="radio"], input[type="checkbox"]').prop("checked", true).change();
                }
                var selectedItems = [];
                workingItems.filter('.ipsSideMenu_itemActive').each(function() {
                    selectedItems.push($(this).attr('data-ipsMenuValue'));
                });
                $(elem).trigger('itemClicked.sideMenu', {
                    id: $(elem).identify().attr('id'),
                    menuElem: $(elem),
                    selectedElem: item,
                    selectedItemID: item.attr('data-ipsMenuValue'),
                    selectedItems: selectedItems
                });
            }
              , _toggleSideMenu = function(e) {
                if (e) {
                    e.preventDefault();
                }
                var menuContainer = $(elem).find('.ipsSideMenu_mainTitle + div');
                if ($(elem).hasClass('ipsSideMenu_open')) {
                    $(elem).removeClass('ipsSideMenu_open');
                } else {
                    $(elem).addClass('ipsSideMenu_open');
                    ips.utils.anim.go('fadeIn', menuContainer);
                }
            };
            init();
            return {};
        };
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.spoiler', function() {
        var respond = function(elem, options, e) {
            if (!elem.find('.ipsSpoiler_contents').hasClass('ipsClearfix')) {
                elem.find('.ipsSpoiler_contents').addClass('ipsClearfix');
            }
            if (elem.parents('.cke_wysiwyg_div').length) {
                return;
            }
            elem.contents().hide();
            var existingHeader = elem.children('.ipsSpoiler_header');
            var header = ips.templates.render('core.editor.spoilerHeader');
            if (existingHeader.length) {
                existingHeader.replaceWith(header);
            } else {
                elem.prepend(header);
            }
            elem.find('> .ipsSpoiler_header').on('click', _toggleSpoiler);
        }
          , _toggleSpoiler = function(e) {
            var header = $(e.currentTarget);
            var target = $(e.target);
            var spoiler = $(e.target).closest('[data-ipsSpoiler]');
            if (target.is('a:not( [data-action="toggleSpoiler"] )') || (target.closest('a').length && !target.closest('a').is('[data-action="toggleSpoiler"]'))) {
                return;
            }
            e.preventDefault();
            if (header.hasClass('ipsSpoiler_closed')) {
                ips.utils.anim.go('fadeIn', header.siblings());
                header.removeClass('ipsSpoiler_closed').addClass('ipsSpoiler_open').find('span').text(ips.getString('spoilerClickToHide'));
                $(document).trigger('contentChange', [spoiler]);
            } else {
                header.siblings().hide();
                header.removeClass('ipsSpoiler_open').addClass('ipsSpoiler_closed').find('span').text(ips.getString('spoilerClickToReveal'));
            }
            e.stopPropagation();
        };
        ips.ui.registerWidget('spoiler', ips.ui.spoiler);
        return {
            respond: respond
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.stack', function() {
        var defaults = {
            sortable: true,
            itemTemplate: 'core.forms.stack'
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_stack')) {
                $(elem).data('_stack', stackObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('stack', ips.ui.stack, ['sortable', 'maxItems', 'itemTemplate']);
        return {
            respond: respond
        };
    });
    var stackObj = function(elem, options) {
        var stack = null;
        var currentIndex = 0;
        var init = function() {
            if (!elem.attr('data-initiated')) {
                stack = elem.find('[data-role="stack"]');
                currentIndex = _getItemCount();
                elem.on('click', '[data-action="stackAdd"]', _addItem);
                elem.on('click', '[data-action="stackDelete"]', _deleteItem);
                elem.on('keydown', '[data-role="stackItem"] input[type="text"]', _keyDown);
                if (options.sortable) {
                    ips.loader.get(['core/interface/jquery/jquery-ui.js']).then(function() {
                        stack.sortable({
                            handle: '[data-action="stackDrag"]'
                        });
                    });
                }
                elem.attr('data-initiated', 'true');
                $(elem).trigger('stackInitialized', {
                    count: _getItemCount()
                });
            }
        }
          , _keyDown = function(e) {
            if (e.keyCode == ips.ui.key.ENTER) {
                e.preventDefault();
                _addItem(null, $(e.currentTarget).closest('[data-role="stackItem"]'));
            }
        }
          , _addItem = function(e, after) {
            if (e) {
                e.preventDefault();
            }
            if (options.maxItems && _getItemCount() >= options.maxItems) {
                return;
            }
            currentIndex++;
            var field = stack.find('[data-ipsStack-wrapper]').first().html().replace(/(name=['"][a-zA-Z0-9\-_]+?)\[([^\]]+?)?\]/g, '$1[' + currentIndex + ']').replace(/data-ipsFormData=['"](.+?)['"]/ig, '').replace(/id=['"](.+?)['"]/g, 'id="$1_' + currentIndex + '"').replace(/data-toggles=['"](.+?)['"]/g, function(match, p1) {
                var pieces = p1.split(',');
                var newPieces = [];
                _.each(pieces, function(val) {
                    if (val.match(/_[0-9]+$/g)) {
                        newPieces.push(val + '_' + currentIndex);
                    } else {
                        newPieces.push(val);
                    }
                });
                return 'data-toggles="' + newPieces.join(',') + '"';
            });
            field = field.replace(/\<input(.+?)value=['"](.*?)['"](.*?)\>/g, '<input$1value=""$3>');
            if (stack.find('select').length) {
                field = field.replace(/\<option(.+?)selected(?:=['"]selected["'])?(.*?)\>/g, '<option$1$2>');
            }
            var html = ips.templates.render(options.itemTemplate, {
                field: field
            });
            if (after) {
                after.after(html).next('[data-role="stackItem"]').find('input,textarea').focus();
            } else {
                stack.append(html).find('[data-role="stackItem"] input,[data-role="stackItem"] textarea').last().focus();
            }
            if (options.maxItems && _getItemCount() >= options.maxItems) {
                elem.find('[data-action="stackAdd"]').hide();
            }
            $(document).trigger('contentChange', [elem]);
            $(elem).trigger('stackRowAdded', {
                count: _getItemCount()
            });
        }
          , _deleteItem = function(e) {
            e.preventDefault();
            var row = $(e.currentTarget).closest('[data-role="stackItem"]');
            if (_getItemCount() === 1) {
                row.find('input,textarea').val('');
                row.find("option:selected").removeAttr("selected");
                return;
            }
            ips.utils.anim.go('fadeOutDown', row).done(function() {
                row.hide();
                setTimeout(function() {
                    row.remove();
                    if (options.maxItems && _getItemCount() < options.maxItems) {
                        elem.find('[data-action="stackAdd"]').show();
                    }
                }, 100);
            });
        }
          , _getItemCount = function() {
            return stack.find('[data-role="stackItem"]').length;
        };
        init();
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.sticky', function() {
        var defaults = {
            stickyClass: 'ipsSticky',
            stickTo: 'top',
            spacing: 0,
            disableIn: 'phone'
        };
        var respond = function(elem, options) {
            $(elem).data('_sticky', stickyObj(elem, _.defaults(options, defaults)));
        }
          , getObj = function(elem) {
            if ($(elem).data('_sticky')) {
                return $(elem).data('_sticky');
            }
            return undefined;
        }
          , destruct = function(elem) {
            var obj = getObj(elem);
            if (!_.isUndefined(obj)) {
                obj.destruct();
            }
        };
        ips.ui.registerWidget('sticky', ips.ui.sticky, ['stickyClass', 'relativeTo', 'spacing', 'stickTo', 'width', 'disableIn']);
        var stickyObj = function(elem, options) {
            var relativeTo = false, originalStyles = {}, originalOffsetTop, status, dummyElem, locked = false;
            var _init = function() {
                if (!$(elem).is(':visible')) {
                    Debug.warn("Can't set up a sticky element if the element is hidden when init is called.");
                    return;
                }
                relativeTo = options.relativeTo ? $(options.relativeTo) : false;
                if (options.disableIn) {
                    options.disableIn = _.map(options.disableIn.split(','), function(item) {
                        return item.trim()
                    });
                }
                originalStyles = {
                    top: $(elem).css('top'),
                    bottom: $(elem).css('bottom'),
                    position: $(elem).css('position'),
                    width: $(elem).get(0).style.width
                };
                status = 'normal';
                originalOffsetTop = $(elem).offset().top;
                _scrollDocument();
                $(document).on('scroll', _scrollDocument).on('breakpointChange', _breakpointChange);
                $(window).on('resize', _windowResize);
                $(elem).trigger('stickyInit', {
                    id: $(elem).identify().attr('id'),
                    status: status
                });
            }
              , destruct = function() {
                $(document).off('scroll', _scrollDocument).off('breakpointChange', _breakpointChange);
                $(window).off('resize', _windowResize);
            }
              , _breakpointChange = function(e, data) {
                if (!ips.utils.responsive.enabled) {
                    return;
                }
                if (_.indexOf(options.disableIn, data.curBreakName) !== -1) {
                    _makeNormal();
                    locked = true;
                } else {
                    locked = false;
                }
            }
              , _windowResize = function() {
                if ($(elem).is(':visible')) {
                    _makeNormal();
                    originalOffsetTop = $(elem).offset().top;
                    _scrollDocument();
                }
            }
              , _scrollDocument = function() {
                var bodyScroll = $(document).scrollTop();
                var elemSize = $(elem).outerHeight();
                var originalBottom = originalOffsetTop + elemSize;
                var wrapperSize = $(elem).outerHeight();
                var viewportHeight = $(window).height();
                if (_.indexOf(options.disableIn, ips.utils.responsive.getCurrentKey()) !== -1) {
                    _makeNormal();
                    locked = true;
                } else {
                    locked = false;
                }
                if (options.stickTo == 'bottom') {
                    if (((viewportHeight + bodyScroll) <= (originalBottom + options.spacing)) && status == 'normal') {
                        _makeFixed();
                    } else if (((viewportHeight + bodyScroll) >= (originalBottom + options.spacing)) && status == 'fixed') {
                        _makeNormal();
                    }
                } else {
                    if (bodyScroll >= (originalOffsetTop - options.spacing)) {
                        if (relativeTo) {
                            var relativeHeight = relativeTo.height();
                            var relativePosition = relativeTo.offset();
                            if ((options.spacing + elemSize) > (relativePosition.top + relativeHeight - bodyScroll)) {
                                _makeFixed(-((elemSize) - (relativePosition.top + relativeHeight - bodyScroll)));
                            } else if (status == 'normal') {
                                _makeFixed();
                            }
                        } else if (status == 'normal') {
                            _makeFixed();
                        }
                    } else if (bodyScroll <= (originalOffsetTop - options.spacing)) {
                        if (status == 'fixed') {
                            _makeNormal();
                        }
                    }
                }
            }
              , _makeFixed = function(offset) {
                if (locked) {
                    return;
                }
                var width;
                if (!dummyElem && !relativeTo) {
                    _makeDummyElem();
                }
                if (status == 'fixed' && !_.isUndefined(offset)) {
                    $(elem).css({
                        top: (offset) + 'px'
                    });
                    $('#ipsStickySpacer').remove();
                    return;
                }
                var bottomSpacing = $(document).height() - $(window).height() - $(document).scrollTop() - 10;
                if (options.stickTo == 'top' && bottomSpacing < $(elem).outerHeight()) {
                    _makeBottomSpacer(bottomSpacing);
                }
                if (options.width && (options.width.indexOf('#') === 0 || options.width.indexOf('.') === 0)) {
                    width = $(options.width).first().outerWidth();
                } else if (options.width) {
                    width = parseInt(options.width);
                } else {
                    width = $(elem).css('width');
                }
                $(elem).css({
                    position: 'fixed',
                    width: width,
                    zIndex: ips.ui.zIndex()
                }).addClass(options.stickyClass);
                if (options.stickTo == 'bottom') {
                    $(elem).css({
                        bottom: options.spacing + 'px'
                    }).addClass(options.stickyClass + '_bottom');
                } else {
                    $(elem).css({
                        top: options.spacing + 'px'
                    }).addClass(options.stickyClass + '_top');
                }
                if (!relativeTo) {
                    dummyElem.css({
                        width: String($(elem).width()),
                        height: String($(elem).outerHeight())
                    }).show();
                }
                status = 'fixed';
                $(elem).trigger('stickyStatusChange.sticky', {
                    status: 'fixed'
                });
            }
              , _makeNormal = function() {
                $(elem).css({
                    position: String(originalStyles.position),
                    width: String(originalStyles.width)
                }).removeClass(options.stickyClass).removeClass(options.stickyClass + '_top')
                if (options.stickTo == 'bottom') {
                    $(elem).css({
                        bottom: String(originalStyles.bottom)
                    }).removeClass(options.stickyClass + '_bottom');
                } else {
                    $(elem).css({
                        top: String(originalStyles.bottom)
                    }).removeClass(options.stickyClass + '_top');
                }
                if (dummyElem) {
                    dummyElem.hide();
                }
                _makeBottomSpacer(0);
                status = 'normal';
                $(elem).trigger('stickyStatusChange.sticky', {
                    status: 'normal'
                });
            }
              , _makeDummyElem = function() {
                dummyElem = $('<div/>').insertBefore(elem).hide();
            }
              , _makeBottomSpacer = function(size) {
                if (!$('#ipsStickySpacer').length) {
                    $('<div/>').attr('id', 'ipsStickySpacer').insertAfter(elem);
                }
                $('#ipsStickySpacer').css({
                    height: (size + 10) + 'px'
                });
            };
            _init();
            return {
                destruct: destruct
            };
        };
        return {
            respond: respond,
            destruct: destruct
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.tabbar', function() {
        var defaults = {
            itemSelector: '.ipsTabs_item',
            activeClass: 'ipsTabs_activeItem',
            loadingClass: 'ipsLoading ipsTabs_loadingContent',
            panelClass: 'ipsTabs_panel',
            panelPrefix: 'ipsTabs',
            updateURL: true,
            updateTitle: false,
            disableNav: false
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_tabbar')) {
                $(elem).data('_tabbar', tabBarObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('tabbar', ips.ui.tabbar, ['contentArea', 'itemSelector', 'activeClass', 'loadingClass', 'disableNav', 'panelClass', 'updateURL', 'updateTitle', 'panelPrefix', 'defaultTab']);
        return {
            respond: respond
        };
    });
    var tabBarObj = function(elem, options) {
        var rawElem = elem.get(0), barId = rawElem.id, tabs = $(elem).find(options.itemSelector), active, ajaxObj, loadPanel;
        var init = function() {
            if (!barId) {
                barId = $(rawElem).identify().attr('id');
            }
            if (!options.contentArea || !$(options.contentArea).length) {
                options.contentArea = '#' + $(rawElem).next().identify().attr('id');
            }
            if (!tabs.length) {
                Debug.warn("No tabs found in tab bar" + barId);
                return;
            }
            active = _getActiveTab();
            _initializeActive();
            $(elem).on('click', options.itemSelector, _handleTabClick);
            $(elem).on('click', "[data-action='expandTabs']", _expandMenu);
        }
          , _handleTabClick = function(e) {
            if (options.disableNav) {
                return;
            }
            e.preventDefault();
            _tabClickPhone(e);
            if ($(this).hasClass(options.activeClass)) {
                return;
            }
            var thisId = $(this).identify().attr('id')
              , thisContent = $('#' + options.panelPrefix + '_' + barId + '_' + thisId + '_panel');
            if (!thisContent.length) {
                thisContent = _createTabPanel(thisId);
                _loadContent(this, thisContent).done(function() {
                    _switchTab(thisId);
                }).fail(function() {
                    Debug.log('failed');
                });
            } else {
                _hideAllPanels();
                _switchTab(thisId);
            }
            _updateURL(thisId);
        }
          , _expandMenu = function(e) {
            e.preventDefault();
            if ($(elem).find(options.itemSelector).length > 1) {
                if ($(elem).hasClass('ipsTabs_showMenu')) {
                    $(elem).removeClass('ipsTabs_showMenu');
                } else {
                    $(elem).addClass('ipsTabs_showMenu').css({
                        zIndex: ips.ui.zIndex()
                    });
                }
            }
        }
          , _tabClickPhone = function(e) {
            $(elem).removeClass('ipsTabs_showMenu');
        }
          , _switchTab = function(tabId, immediate) {
            _hideAllPanels();
            var thisContent = $('#' + options.panelPrefix + '_' + barId + '_' + tabId + '_panel');
            if (!immediate) {
                ips.utils.anim.go('fadeIn', thisContent).done(function() {
                    thisContent.attr('aria-hidden', 'false');
                    $(elem).trigger('tabShown', {
                        barID: barId,
                        tabID: tabId,
                        tab: active,
                        panel: thisContent
                    });
                    $(document).trigger('contentChange', [thisContent]);
                });
            } else {
                thisContent.show().attr('aria-hidden', 'false');
                $(elem).trigger('tabShown', {
                    barID: barId,
                    tabID: tabId,
                    tab: active,
                    panel: thisContent
                });
                $(document).trigger('contentChange', [thisContent]);
            }
            active = $('#' + tabId);
            _makeTabActive(active);
            $(elem).trigger('tabChanged', {
                barID: barId,
                tabID: tabId,
                tab: active,
                panel: thisContent
            });
        }
          , _updateURL = function(tabId) {
            if (!options.updateURL) {
                return;
            }
            var href = $('#' + tabId).attr('href')
              , title = (options.updateTitle && $('#' + tabId).attr('title')) ? $('#' + tabId).attr('title') : document.title;
            if (!_.isEmpty(href) && !href.startsWith('#')) {
                History.replaceState({}, title, href);
                ips.utils.analytics.trackPageView(href);
            }
        }
          , _getActiveTab = function() {
            var activeTab = elem.find('.' + options.activeClass);
            if (activeTab.length) {
                return activeTab.get(0);
            }
            if (options.defaultTab && $(elem).find(options.defaultTab)) {
                return $(elem).find(options.defaultTab).get(0);
            }
            return $(elem).find(options.itemSelector).first();
        }
          , _initializeActive = function() {
            var activeId = $(active).identify().attr('id');
            if (!$('#' + options.panelPrefix + '_' + barId + '_' + activeId + '_panel').length) {
                if ($(options.contentArea).children().length) {
                    $(options.contentArea).wrapInner(_createTabPanel(activeId, true));
                    _switchTab(activeId, true);
                } else {
                    var newPanel = _createTabPanel(activeId);
                    _loadContent(active, newPanel).done(function() {
                        _switchTab(activeId);
                    });
                }
            } else {
                _switchTab(activeId, true);
            }
        }
          , _makeTabActive = function(activeTab) {
            $(elem).find(options.itemSelector).removeClass(options.activeClass).removeAttr('aria-selected');
            $(activeTab).addClass(options.activeClass).attr('aria-selected', 'true');
        }
          , _loadContent = function(tab, container) {
            var deferred = $.Deferred();
            _hideAllPanels();
            if ($(tab).attr('data-tabURL')) {
                var url = $(tab).attr('data-tabURL');
            } else {
                var url = $(tab).attr('href');
            }
            $(options.contentArea).addClass(options.loadingClass);
            ajaxObj = ips.getAjax();
            ajaxObj(url).done(function(response) {
                container.html(response);
                deferred.resolve();
            }).fail(function(jqXHR, status, errorThrown) {
                window.location = $(tab).attr('href');
            }).always(function() {
                $(options.contentArea).removeClass(options.loadingClass);
            });
            return deferred.promise();
        }
          , _hideAllPanels = function() {
            $(options.contentArea).find('> .' + options.panelClass).hide().attr('aria-hidden', 'true');
        }
          , _createTabPanel = function(tabId, noAppend) {
            var newPanel = $('<div/>').attr({
                'id': options.panelPrefix + '_' + barId + '_' + tabId + '_panel'
            }).addClass(options.panelClass).attr({
                'aria-labelledby': tabId
            });
            if (!noAppend) {
                $(options.contentArea).append(newPanel);
            }
            return newPanel;
        };
        init();
        return {
            init: init
        }
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.toggle', function() {
        var defaults = {
            template: 'core.forms.toggle'
        };
        var respond = function(elem, options) {
            if (!$(elem).data('_toggle')) {
                $(elem).data('_toggle', toggleObj(elem, _.defaults(options, defaults)));
            }
        };
        ips.ui.registerWidget('toggle', ips.ui.toggle, ['template']);
        return {
            respond: respond
        };
    });
    var toggleObj = function(elem, options, e) {
        var checkID = $(elem).identify().attr('id'), wrapper;
        var init = function() {
            var status = $(elem).prop('checked')
              , className = (status) ? 'ipsToggle_on' : 'ipsToggle_off';
            $(elem).after(ips.templates.render(options.template, {
                id: checkID + '_wrapper',
                status: !!status,
                className: className
            })).hide();
            wrapper = $('#' + checkID + '_wrapper');
            wrapper.on('click', function(e) {
                if (!$(elem).is(':disabled')) {
                    if ($(elem).prop('checked')) {
                        _doToggle('off');
                    } else {
                        _doToggle('on');
                    }
                    $(elem).change();
                }
                e.preventDefault();
            }).on('keypress', _keyPress);
            if ($(elem).is('[data-ipstooltip]')) {
                wrapper.attr('data-ipsTooltip', '').attr('title', $(elem).attr('title'));
                $(document).trigger('contentChange', [wrapper]);
            }
            if ($(elem).is(':disabled')) {
                wrapper.addClass('ipsToggle_disabled');
            }
            $(elem).on('change', function(e) {
                if ($(elem).is(':checked')) {
                    _doToggle('on');
                } else {
                    _doToggle('off');
                }
            });
        }
          , _doToggle = function(type) {
            if (type == 'off') {
                wrapper.removeClass('ipsToggle_on').addClass('ipsToggle_off').attr('aria-checked', false);
                elem.get(0).checked = false;
            } else {
                wrapper.removeClass('ipsToggle_off').addClass('ipsToggle_on').attr('aria-checked', true);
                elem.get(0).checked = true;
            }
        }
          , _keyPress = function(e) {
            if (e.keyCode == ips.ui.key.SPACE || e.keyCode == ips.ui.key.ENTER) {
                e.preventDefault();
                if ($(elem).prop('checked')) {
                    _doToggle('off');
                } else {
                    _doToggle('on');
                }
                $(elem).change();
            }
        };
        init();
        return {
            init: init
        }
    };
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.tooltip', function() {
        var _animating = false
          , _tooltip = null
          , _timer = []
          , _currentElem = null;
        var respond = function(elem, options, e) {
            if (ips.utils.events.isTouchDevice()) {
                return;
            }
            if (!_tooltip) {
                _createTooltipElement();
            }
            var content = _getContent(elem, options);
            if (e.type == 'mouseleave' || e.type == 'blur' || e.type == 'focusout') {
                _hide();
            } else {
                if (content) {
                    _show(elem, options, content);
                }
            }
        }
          , _calculatePosition = function(elem, _tooltip) {
            var positionInfo = {
                trigger: elem,
                target: _tooltip,
                center: true,
                above: true,
                stemOffset: {
                    left: 10,
                    top: 0
                }
            };
            var tooltipPosition = ips.utils.position.positionElem(positionInfo);
            $(_tooltip).css({
                left: tooltipPosition.left + 'px',
                top: tooltipPosition.top + 'px',
                position: (tooltipPosition.fixed) ? 'fixed' : 'absolute',
                zIndex: ips.ui.zIndex()
            });
            if (tooltipPosition.location.vertical == 'top') {
                _tooltip.addClass('ipsTooltip_top').removeClass('ipsTooltip_bottom');
            } else {
                _tooltip.addClass('ipsTooltip_bottom').removeClass('ipsTooltip_top');
            }
            _tooltip.removeClass('ipsTooltip_left').removeClass('ipsTooltip_right');
            if (tooltipPosition.location.horizontal == 'left') {
                _tooltip.addClass('ipsTooltip_left');
            } else if (tooltipPosition.location.horizontal == 'right') {
                _tooltip.addClass('ipsTooltip_right');
            }
        }
          , _show = function(elem, options, content) {
            elem = $(elem);
            ips.utils.anim.cancel(_tooltip);
            if (options.safe) {
                _tooltip.hide().html(content);
            } else {
                _tooltip.hide().text(content);
            }
            if (options.ajax && !elem.data('_tooltip')) {
                ips.getAjax()(options.ajax).done(function(response) {
                    elem.data('_tooltip', response);
                    if (options.safe) {
                        _tooltip.html(response);
                    } else {
                        _tooltip.text(response);
                    }
                    _calculatePosition(elem, _tooltip);
                }
                .bind(this));
            }
            if (elem.attr('title')) {
                elem.attr('_title', elem.attr('title')).removeAttr('title');
            }
            _calculatePosition(elem, _tooltip);
            _tooltip.show();
            _currentElem = elem;
            _timer.push(setInterval(_checkForElemPresence, 100));
            $(elem).trigger('tooltipShown');
        }
          , _hide = function() {
            ips.utils.anim.go('fadeOut', _tooltip);
            _currentElem = null;
            if (_timer.length) {
                for (var i = 0; i < _timer.length; i++) {
                    clearInterval(_timer[i]);
                }
                _timer = [];
            }
        }
          , _checkForElemPresence = function(element) {
            if (!_currentElem || !_currentElem.length || !_currentElem.is(':visible')) {
                _hide();
            }
        }
          , _getContent = function(elem, options) {
            elem = $(elem);
            if (elem.data('_tooltip')) {
                return elem.data('_tooltip');
            } else if (options.label) {
                if (options.json) {
                    return $.parseJSON(options.label).join("<br>");
                } else {
                    return options.label;
                }
            } else if (elem.attr('aria-label')) {
                return elem.attr('aria-label');
            } else if (elem.attr('_title')) {
                return elem.attr('_title');
            } else if (elem.attr('title')) {
                return elem.attr('title');
            }
        }
          , _createTooltipElement = function() {
            var tooltip = ips.templates.render('core.tooltip', {
                id: 'ipsTooltip'
            });
            ips.getContainer().append(tooltip);
            _tooltip = $('#ipsTooltip');
        };
        ips.ui.registerWidget('tooltip', ips.ui.tooltip, ['label', 'extraClass', 'safe', 'json', 'ajax'], {
            lazyLoad: true,
            lazyEvents: 'mouseenter mouseleave focus blur'
        });
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.truncate', function() {
        var defaults = {
            type: 'remove',
            size: 100,
            expandText: ips.getString('show_more'),
            watch: true
        };
        var respond = function(elem, options) {
            if (options.type == 'remove') {
                _removeTruncate(elem, _.defaults(options, defaults));
            } else {
                _hideTruncate(elem, _.defaults(options, defaults));
            }
        }
          , _removeTruncate = function(elem, options) {
            if (elem.children().first().prop('tagName') == 'P') {
                elem.html(elem.children().first().html());
            }
            var size = _getSizeValue(options.size, elem);
            var clampTo = (size.lines) ? size.lines : size.pixels + 'px';
            elem.dotdotdot({
                height: size.pixels,
                watch: options.watch
            });
            elem.trigger('contentTruncated', {
                type: 'remove'
            });
        }
          , _hideTruncate = function(elem, options) {
            if (elem.attr('data-truncated')) {
                return;
            }
            var size = _getSizeValue(options.size, elem);
            var originalSize = elem.outerHeight();
            var originalPos = $(elem).css('position');
            if (originalSize <= size.pixels) {
                Debug.log('Smaller than the specified size, finishing...');
                return;
            }
            if (originalPos == 'static') {
                $(elem).css('position', 'relative');
            }
            $(elem).css({
                height: size.pixels + 'px'
            }).addClass('ipsTruncate');
            var showMore = ips.templates.render('core.truncate.expand', {
                text: options.expandText
            });
            $(elem).after(showMore);
            var expander = elem.next("[data-action='expandTruncate']");
            elem.trigger('contentTruncated', {
                type: 'hide'
            });
            elem.attr('data-truncated', true);
            expander.on('click', function(e) {
                elem.css({
                    position: originalPos,
                    height: ''
                });
                var newOriginalSize = elem.outerHeight();
                elem.css({
                    height: size.pixels + 'px',
                    position: (originalPos === 'static') ? 'relative' : originalPos
                });
                ips.utils.anim.go('fadeOutDown fast', expander).done(function() {
                    expander.remove();
                });
                if (newOriginalSize > size.pixels) {
                    elem.animate({
                        'height': newOriginalSize + 'px'
                    }, {
                        done: function() {
                            elem.css({
                                position: originalPos,
                                height: ''
                            });
                            elem.trigger('truncateExpanded');
                            elem.removeClass('ipsTruncate');
                        }
                    });
                } else {
                    elem.removeClass('ipsTruncate');
                }
            });
        }
          , _getSizeValue = function(value, elem) {
            try {
                if ($(value).length) {
                    return {
                        pixels: $(value).first().outerHeight()
                    };
                }
            } catch (err) {}
            if (String(value).indexOf('lines') !== -1) {
                var lines = parseInt(value.replace('lines', ''));
                var number = lines * _getLineHeight(elem);
                return {
                    lines: lines,
                    pixels: number
                };
            } else {
                return {
                    pixels: parseInt(value)
                };
            }
        }
          , _getLineHeight = function(elem) {
            var lH = $(elem).css('line-height');
            return parseFloat(lH);
        };
        ips.ui.registerWidget('truncate', ips.ui.truncate, ['type', 'size', 'expandText', 'watch']);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    var ipsUploaders = [];
    var iconMap = {
        'txt': 'file-text-o',
        'rtf': 'file-text-o',
        'csv': 'file-text-o',
        'pdf': 'file-pdf-o',
        'doc': 'file-word-o',
        'docx': 'file-word-o',
        'xls': 'file-excel-o',
        'xlsx': 'file-excel-o',
        'xlsm': 'file-excel-o',
        'zip': 'file-archive-o',
        'tar': 'file-archive-o',
        'gz': 'file-archive-o',
        'ppt': 'file-powerpoint-o',
        'pptx': 'file-powerpoint-o',
        'ico': 'file-image-o',
        'gif': 'file-image-o',
        'jpeg': 'file-image-o',
        'jpg': 'file-image-o',
        'jpe': 'file-image-o',
        'png': 'file-image-o',
        'psd': 'file-image-o',
        'webp': 'file-image-o',
        'aac': 'file-audio-o',
        'mp3': 'file-audio-o',
        'ogg': 'file-audio-o',
        'ogv': 'file-audio-o',
        'wav': 'file-audio-o',
        'm4a': 'file-audio-o',
        'avi': 'file-video-o',
        'flv': 'file-video-o',
        'mkv': 'file-video-o',
        'mp4': 'file-video-o',
        'mpg': 'file-video-o',
        'mpeg': 'file-video-o',
        '3gp': 'file-video-o',
        'webm': 'file-video-o',
        'wmv': 'file-video-o',
        'avi': 'file-video-o',
        'm4v': 'file-video-o',
        'mov': 'file-video-o',
        'css': 'file-code-o',
        'html': 'file-code-o',
        'js': 'file-code-o',
        'xml': 'file-code-o',
    };
    ips.createModule('ips.ui.uploader', function() {
        var defaults = {
            multiple: false,
            allowedFileTypes: null,
            maxFileSize: null,
            maxTotalSize: null,
            maxChunkSize: null,
            action: null,
            name: 'upload',
            button: '.ipsButton_primary',
            key: null,
            autoStart: true,
            insertable: false,
            template: 'core.attachments.fileItem',
            postkey: '',
            supportsDelete: true,
            maxImageDims: null,
            allowStockPhotos: false,
        };
        var respond = function(elem, options, e) {
            if (!$(elem).data('_uploader')) {
                $(elem).show();
                $(elem).data('_uploader', uploadObj(elem, _.defaults(options, defaults)));
            } else {
                try {
                    var obj = $(elem).data('_uploader');
                    obj.refresh();
                } catch (err) {
                    Debug.log("Couldn't refresh uploader " + $(elem).identify().attr('id'));
                }
            }
        }
          , refresh = function(elem) {
            try {
                var obj = $(elem).data('_uploader');
                obj.refresh();
            } catch (err) {
                Debug.log("Couldn't refresh uploader " + $(elem).identify().attr('id'));
            }
        }
          , getObj = function(elem) {
            if ($(elem).data('_uploader')) {
                return $(elem).data('_uploader');
            }
            return undefined;
        }
          , getExtensionIcon = function(filename) {
            var extRegex = /(?:\.([^.]+))?$/;
            var ext = extRegex.exec(filename);
            if (!_.isUndefined(iconMap[ext[1]])) {
                return iconMap[ext[1]];
            }
            return 'file-o';
        };
        ips.ui.registerWidget('uploader', ips.ui.uploader, ['multiple', 'allowedFileTypes', 'maxFileSize', 'maxTotalSize', 'maxChunkSize', 'action', 'name', 'button', 'key', 'maxFiles', 'dropTarget', 'listContainer', 'autoStart', 'insertable', 'template', 'existingFiles', 'postkey', 'supportsDelete', 'maxImageDims', 'allowStockPhotos']);
        return {
            respond: respond,
            refresh: refresh,
            getObj: getObj,
            getExtensionIcon: getExtensionIcon
        };
    });
    var uploadObj = function(elem, options, e) {
        var pluploadObj, runtime, listContainer, uploadCount = 0, totalSize = 0, injectIds = {}, uploaderID = '', sound = null;
        var init = function() {
            uploaderID = $(elem).identify().attr('id');
            if (options.listContainer) {
                listContainer = $(options.listContainer);
            } else if ($(elem).find('[data-role="fileList"]').length) {
                listContainer = $(elem).find('[data-role="fileList"]');
            } else {
                listContainer = $(elem);
            }
            if (ips.templates.get(options.template + 'Wrapper')) {
                listContainer.prepend(ips.templates.render(options.template + 'Wrapper'));
                var firstItem = listContainer.children().first();
                firstItem.append(listContainer.children().not(firstItem));
                listContainer = firstItem;
                $(document).trigger('contentChange', [listContainer.parent()]);
            }
            $(document).on('addUploaderFile', _addUploaderFile);
            $(document).on('removeAllFiles', _removeAllFiles);
            if (options.existingFiles) {
                try {
                    var files = $.parseJSON(options.existingFiles);
                    if (files.length) {
                        _buildExistingFiles(files);
                    }
                } catch (err) {
                    Debug.error("Couldn't build existing files: " + err);
                }
            }
            if (_supportsDraggable()) {
                $(elem).find('.ipsAttachment_supportDrag').show().end().find('.ipsAttachment_nonDrag').hide();
            }
            var load = ['core/interface/plupload/plupload.full.min.js'];
            if (!ips.getSetting('useCompiledFiles')) {
                load = ['core/interface/plupload/moxie.js', 'core/interface/plupload/plupload.dev.js'];
            }
            ips.loader.get(load).then(function() {
                _setUpUploader();
                _initUploader();
                _postInitEvents();
                _setUpFormEvents();
            });
        }
          , refresh = function() {
            if (pluploadObj) {
                Debug.log("Refreshing");
                pluploadObj.refresh();
            }
        }
          , _setUpFormEvents = function() {
            if (!elem.closest('form').length) {
                return;
            }
            if (options.allowStockPhotos !== false) {
                $(elem).find('[data-action="stockPhoto"]').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var dialogRef = ips.ui.dialog.create({
                        title: ips.getString("stockphoto_header"),
                        fixed: false,
                        destructOnClose: true,
                        url: ips.getSetting('baseURL') + '?app=core&module=system&controller=pixabay&uploader=' + $(elem).attr('data-ipsUploader-name'),
                    });
                    dialogRef.show();
                });
            }
            elem.closest('form').on('submit', function(e) {
                if (pluploadObj.state != plupload.STOPPED) {
                    e.preventDefault();
                    e.stopPropagation();
                    ips.ui.alert.show({
                        type: 'alert',
                        message: ips.getString('filesStillUploading'),
                        subText: ips.getString('filesStillUploadingDesc'),
                        icon: 'warn'
                    });
                    elem.trigger('fileStillUploading');
                }
            });
        }
          , _addUploaderFile = function(e, data) {
            if (data.uploaderID == uploaderID) {
                data.extIcon = ips.ui.uploader.getExtensionIcon(data.title);
                listContainer.append(ips.templates.render(_getTemplateName(data), data));
            }
        }
          , _getTemplateName = function(data) {
            if (options.template !== null) {
                return options.template;
            }
            let type = 'fileItem';
            if (data.isImage) {
                type = 'imageItem';
            } else if (data.isVideo) {
                type = 'videoItem';
            }
            return `core.attachments.${type}`;
        }
          , _removeAllFiles = function(e, data) {
            listContainer.find('[data-role="file"]').remove();
        }
          , _buildExistingFiles = function(files) {
            if (!files.length) {
                return;
            }
            for (var i = 0; i < files.length; i++) {
                var data = {
                    id: files[i].id,
                    imagesrc: files[i].imagesrc,
                    thumbnail: files[i].thumbnail ? files[i].thumbnail : '',
                    thumbnail_for_css: files[i].thumbnail ? files[i].thumbnail.replace('(', '\\(').replace(')', '\\)') : '',
                    title: files[i].originalFileName,
                    size: files[i].size,
                    field_name: elem.attr('data-ipsUploader-name'),
                    newUpload: false,
                    insertable: !options.insertable,
                    done: true,
                    'default': files[i].default ? files[i].default : null,
                    supportsDelete: options.supportsDelete,
                    extIcon: ips.ui.uploader.getExtensionIcon(files[i].originalFileName)
                };
                if (files[i].id == elem.attr('data-ipsUploader-default')) {
                    data['checked'] = "checked";
                }
                if (files[i]['hasThumb']) {
                    data['thumb'] = "<img src='" + (files[i]['thumbnail'] ? files[i]['thumbnail'] : files[i]['imagesrc']) + "' class='ipsImage'>";
                }
                listContainer.append(ips.templates.render(options.template, data));
                $('#' + files[i].id).trigger('newItem', [$('#' + files[i].id)]);
            }
            ;elem.trigger('fileAdded', {
                count: files.length,
                uploader: options.name
            });
        }
          , _setUpUploader = function() {
            pluploadObj = new plupload.Uploader(_getUploaderSettings());
            pluploadObj.bind('Init', events.init);
            listContainer.find('[data-role="file"]').each(function() {
                var fileElem = $(this);
                fileElem.on('click', '[data-role="deleteFile"]', _.bind(_deleteFile, fileElem, fileElem));
                uploadCount++;
            });
        }
          , _getUploaderSettings = function() {
            var form = elem.parentsUntil('', 'form');
            if (options.action === null) {
                options.action = form.attr('action');
            }
            if (options.key === null) {
                options.key = form.children("[name='plupload']").val();
            }
            var pluploadOptions = {
                runtimes: 'html5,flash,silverlight,html4',
                multi_selection: options.multiple,
                url: encodeURI(_decodeUrl(options.action)),
                file_data_name: options.name,
                flash_swf_url: 'applications/core/interface/plupload/Movie.swf',
                silverlight_xap_url: 'applications/core/interface/plupload/Movie.xap',
                browse_button: elem.find(options.button).identify().attr('id'),
                headers: {
                    'x-plupload': options.key
                },
                chunk_size: options.maxChunkSize + 'mb'
            };
            if (options.dropTarget) {
                pluploadOptions.drop_element = $(options.dropTarget).attr('id');
            } else if ($(elem).hasClass('ipsAttachment_dropZone')) {
                pluploadOptions.drop_element = $(elem).attr('id');
            } else if ($(elem).find('.ipsAttachment_dropZone').length) {
                pluploadOptions.drop_element = $(elem).find('.ipsAttachment_dropZone').identify().attr('id');
            }
            if (options.maxImageDims) {
                var maxImageDims = options.maxImageDims.split('x');
                pluploadOptions.resize = {
                    width: parseInt(maxImageDims[0]),
                    height: parseInt(maxImageDims[1]),
                    quality: parseInt(ips.getSetting('image_jpg_quality')),
                    fit: false
                };
            }
            return pluploadOptions;
        }
          , _isEncoded = function(url) {
            url = url || '';
            return url !== decodeURI(url);
        }
          , _decodeUrl = function(url) {
            while (_isEncoded(url)) {
                url = decodeURI(url);
            }
            return url;
        }
          , _initUploader = function() {
            pluploadObj.init();
        }
          , _postInitEvents = function() {
            pluploadObj.bind('Error', events.error);
            pluploadObj.bind('FilesAdded', events.filesAdded);
            pluploadObj.bind('FilesRemoved', events.filesRemoved);
            pluploadObj.bind('UploadFile', events.uploadFile);
            pluploadObj.bind('UploadProgress', events.uploadProgress);
            pluploadObj.bind('FileUploaded', events.fileUploaded);
            pluploadObj.bind('UploadComplete', events.uploadComplete);
            $(elem).on('injectFile', function(e, data) {
                var pluploadFile = new plupload.File(new moxie.file.File(getRuntimeUid(),data.file));
                injectIds[pluploadFile.id] = data.data;
                pluploadObj.addFile(pluploadFile);
            }).on('resetUploader', function(data) {
                _resetUploader(e, data);
            });
            $(window).on('resize', function() {
                pluploadObj.refresh();
            });
        }
          , getRuntimeUid = function() {
            if (!runtime) {
                runtime = new (moxie.runtime.Runtime.getConstructor(pluploadObj.runtime))();
                runtime.init();
            }
            return runtime.uid;
        }
          , _resetUploader = function(data) {
            uploadCount = 0;
            totalSize = 0;
            _updateCount();
            $(elem).trigger('removeAllFiles', {
                uploaderID: uploaderID
            });
        }
          , _startUpload = function() {
            Debug.log('Starting upload process...');
            pluploadObj.start();
        }
          , _getStatus = function(status) {
            switch (status) {
            case plupload.QUEUED:
                return ips.getString('attachQueued');
                break;
            case plupload.UPLOADING:
                return ips.getString('attachUploading');
                break;
            case plupload.FAILED:
                return ips.getString('attachFailed');
                break;
            case plupload.DONE:
                return ips.getString('attachDone');
                break;
            }
        }
          , _updateFileElement = function(file) {
            var fileElem = _findFileElem(file);
            _removeStatusClasses(fileElem);
            _updateStatus(fileElem, file.status);
            _updateCount();
            return fileElem;
        }
          , _findFileElem = function(file) {
            return $(elem).find('#' + file.id);
        }
          , _updateStatus = function(fileElem, status) {
            fileElem.find('[data-role="status"]').html(_getStatus(status));
            fileElem.toggleClass('ipsAttach_error', status === plupload.FAILED);
        }
          , _removeStatusClasses = function(fileElem) {
            _.each(['uploading', 'done', 'error', 'queued'], function(type) {
                fileElem.removeClass('ipsAttach_' + type);
            });
        }
          , _updateCount = function() {
            $(elem).find('[data-role="count"]').text(uploadCount);
            elem.trigger('uploadedCountChanged', {
                count: uploadCount,
                percent: pluploadObj.total.percent,
                uploader: options.name
            });
        }
          , _setPercent = function(fileElem, percent) {
            fileElem.find('[data-role="progressbar"]').css({
                width: percent + '%'
            });
            if (percent === 100) {
                fileElem.find('.ipsAttachment_progress').slideUp();
            }
        }
          , _buildThumb = function(fileElem, file, info) {
            var toInsert = '';
            if (info.imagesrc) {
                Debug.log(fileElem.find('[data-role="preview"]'));
                toInsert = $('<img/>').attr({
                    src: info.thumbnail ? info.thumbnail : info.imagesrc
                }).addClass('ipsImage');
                fileElem.attr('data-fullsizeurl', info.imagesrc).attr('data-thumbnailurl', info.thumbnail ? info.thumbnail : info.imagesrc).find('[data-role="preview"]').html(toInsert).css('background-image', 'url( "' + (info.thumbnail ? info.thumbnail : info.imagesrc) + '")');
            } else if (info.videosrc) {
                toInsert = $('<video/>').append($('<source/>').attr({
                    src: info.videosrc,
                    type: fileElem.attr('data-mimeType')
                }));
                fileElem.attr('data-fullsizeurl', info.videosrc).find('[data-role="preview"]').html(toInsert);
            }
            fileElem.attr('data-fileid', info.id);
            if (info.securityKey) {
                fileElem.attr('data-filekey', info.securityKey);
            }
        }
          , _deleteFile = function(fileElem, e) {
            e.preventDefault();
            e.stopPropagation();
            var baseUrl = options.action;
            if (baseUrl.match(/\?/)) {
                if (baseUrl.slice(-1) != '?') {
                    baseUrl += '&';
                }
            } else {
                baseUrl += '?';
            }
            ips.getAjax()(baseUrl + 'postKey=' + options.postkey + '&deleteFile=' + encodeURIComponent(fileElem.attr('data-fileid')));
            uploadCount--;
            totalSize = totalSize - fileElem.attr('data-filesize');
            _updateCount();
            fileElem.fadeOut(function() {
                fileElem.remove();
                elem.trigger('fileDeleted', {
                    fileElem: fileElem,
                    uploader: options.name,
                    count: uploadCount
                });
            });
        }
          , _supportsDraggable = function() {
            if ('draggable'in document.createElement('span') && typeof FileReader != 'undefined' && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            }
            return false;
        }
          , events = {
            init: function(up, err) {
                if (_supportsDraggable()) {
                    var dropElement = $(up.settings.drop_element);
                    var _drag = function() {
                        var currentElem = null;
                        $(document).on('dragenter', function(e) {
                            if (currentElem && !$(e.target).is(dropElement) && !$.contains(dropElement.get(0), currentElem)) {
                                dropElement.removeClass('ipsDragging');
                                currentElem = null;
                            }
                        });
                        dropElement.on('dragleave', function(e) {
                            if (!$(currentElem).is(dropElement) && !$.contains(dropElement.get(0), currentElem)) {
                                dropElement.removeClass('ipsDragging');
                                currentElem = null;
                            }
                        }).on('dragenter', function(e) {
                            var target = $(e.target);
                            if (target.is(dropElement) || $.contains(dropElement.get(0), e.target)) {
                                dropElement.addClass('ipsDragging');
                                currentElem = e.target;
                            }
                        }).on('drop', function(e) {
                            dropElement.removeClass('ipsDragging');
                            currentElem = null;
                        });
                    }();
                }
            },
            filesAdded: function(up, files) {
                if (!options.multiple) {
                    listContainer.find('[data-role="deleteFile"]').click();
                    if (files.length > 1) {
                        alert(ips.getString('uploadSingleErr'));
                        return false;
                    }
                } else if (options.maxFiles) {
                    if (files.length > options.maxFiles || (uploadCount + files.length) > options.maxFiles) {
                        ips.ui.alert.show({
                            type: 'alert',
                            icon: 'warn',
                            message: ips.pluralize(ips.getString('uploadMaxFilesErr'), options.maxFiles),
                            callbacks: {}
                        });
                        _.each(files, function(file, idx) {
                            up.removeFile(file);
                        });
                        return false;
                    }
                } else if (options.maxTotalSize && totalSize > (options.maxTotalSize * 1048576)) {
                    ips.ui.alert.show({
                        type: 'alert',
                        icon: 'warn',
                        message: ips.getString('uploadTotalErr', {
                            size: parseFloat((options.maxTotalSize >= 1) ? options.maxTotalSize : (options.maxTotalSize * 1024)).toLocaleString($('html').attr('lang')),
                            size_suffix: (options.maxTotalSize >= 1) ? ips.getString('size_mb') : ips.getString('size_kb')
                        }),
                        callbacks: {}
                    });
                    _.each(files, function(file, idx) {
                        up.removeFile(file);
                    });
                    return false;
                }
                var tooLarge = 0;
                var overTotalLimit = 0;
                var badType = 0;
                var allowedFileTypes = (options.allowedFileTypes !== null) ? $.parseJSON(options.allowedFileTypes).join(',').toLowerCase().split(',') : '';
                var sizeAllowance = options.maxTotalSize ? (options.maxTotalSize * 1048576) - totalSize : null;
                _.each(files, function(file, idx) {
                    if (options.maxFileSize !== null && ((file.size / 1024) > (options.maxFileSize * 1024))) {
                        tooLarge++;
                        up.removeFile(file);
                        return;
                    }
                    if (!_.isNull(sizeAllowance)) {
                        if ((sizeAllowance - file.size) < 0) {
                            overTotalLimit++;
                            up.removeFile(file);
                            return;
                        }
                        sizeAllowance -= file.size;
                    }
                    if (allowedFileTypes && allowedFileTypes.indexOf(file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2).toLowerCase()) === -1) {
                        badType++;
                        up.removeFile(file);
                        return;
                    }
                    var size = plupload.formatSize(file.size)
                      , status = _getStatus(file.status)
                      , isImage = false
                      , isVideo = false
                      , isAudio = false;
                    if (['jpg', 'jpeg', 'jpe', 'gif', 'png', 'webp'].indexOf(file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2).toLowerCase()) !== -1) {
                        isImage = true;
                    }
                    if (['mp4', '3gp', 'mov', 'ogg', 'ogv', 'mpg', 'mpeg', 'flv', 'webm', 'wmv', 'avi', 'm4v'].indexOf(file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2).toLowerCase()) !== -1) {
                        isVideo = true;
                    }
                    if (['mp3', 'ogg', 'wav', 'm4a'].indexOf(file.name.substr((~-file.name.lastIndexOf(".") >>> 0) + 2).toLowerCase()) !== -1) {
                        isAudio = true;
                    }
                    var data = {
                        uploaderID: uploaderID,
                        id: file.id,
                        title: file.name,
                        mime: file.type,
                        size: size,
                        sizeRaw: file.size,
                        status: status,
                        statusCode: file.status,
                        statusText: ips.getString('attachStatus', {
                            size: size,
                            status: status
                        }),
                        field_name: elem.attr('data-ipsUploader-name'),
                        newUpload: true,
                        insertable: true,
                        isImage: isImage,
                        isVideo: isVideo,
                        isAudio: isAudio,
                        supportsDelete: options.supportsDelete
                    };
                    $(elem).trigger('addUploaderFile', data);
                    $('#' + file.id).addClass('ipsAttach_queued').trigger('newItem', [$('#' + file.id)]);
                });
                if (tooLarge) {
                    var errorString = ips.getString('uploadSizeErr', {
                        max_file_size: parseFloat((options.maxFileSize > 1) ? options.maxFileSize : (options.maxFileSize * 1024)).toLocaleString($('html').attr('lang')),
                        size_suffix: (options.maxFileSize > 1) ? ips.getString('size_mb') : ips.getString('size_kb')
                    });
                    ips.ui.alert.show({
                        type: 'alert',
                        icon: 'warn',
                        message: ips.pluralize(errorString, [tooLarge, tooLarge]),
                        callbacks: {}
                    });
                }
                if (overTotalLimit) {
                    var errorString = ips.getString('uploadSizeTotalErr', {
                        max_file_size: parseFloat((options.maxTotalSize > 1) ? options.maxTotalSize : (options.maxTotalSize * 1024)).toLocaleString($('html').attr('lang')),
                        size_suffix: (options.maxTotalSize > 1) ? ips.getString('size_mb') : ips.getString('size_kb')
                    });
                    ips.ui.alert.show({
                        type: 'alert',
                        icon: 'warn',
                        message: ips.pluralize(errorString, [overTotalLimit, overTotalLimit]),
                        callbacks: {}
                    });
                }
                if (badType) {
                    var errorString = ips.getString('pluploaderr_-601', {
                        allowed_extensions: allowedFileTypes.join(', ')
                    });
                    ips.ui.alert.show({
                        type: 'alert',
                        icon: 'warn',
                        message: ips.pluralize(errorString, [tooLarge, tooLarge]),
                        callbacks: {}
                    });
                }
                if (up.files.length) {
                    elem.trigger('fileAdded', {
                        count: up.files.length,
                        uploader: options.name
                    });
                    if (options.autoStart) {
                        _startUpload();
                    }
                }
            },
            filesRemoved: function() {
                Debug.log('removed');
            },
            uploadFile: function(up, file) {
                var fileElem = _updateFileElement(file);
                fileElem.addClass('ipsAttach_uploading');
            },
            uploadProgress: function(up, file) {
                var fileElem = _updateFileElement(file);
                fileElem.addClass('ipsAttach_uploading');
                _setPercent(fileElem, file.percent);
                elem.trigger('uploadProgress', {
                    count: uploadCount,
                    percent: pluploadObj.total.percent,
                    uploader: options.name
                });
            },
            uploadComplete: function(up, files) {
                var success = 0;
                var error = 0;
                _.each(files, function(file) {
                    if (file.status === 5) {
                        success++;
                    } else if (file.status === 4) {
                        error++;
                    }
                });
                var total = success + error;
                elem.trigger('uploadComplete', {
                    success: success,
                    error: error,
                    total: total,
                    uploader: options.name
                });
                if (_.isUndefined(ips.utils.events.getVisibilityProp()) || !document[ips.utils.events.getVisibilityProp()]) {
                    return;
                }
                var text = [];
                if (!total) {
                    return;
                }
                if (success) {
                    text.push(ips.pluralize(ips.getString('notifyUploadSuccess'), [success]));
                }
                if (error) {
                    text.push(ips.pluralize(ips.getString('notifyUploadError'), [error]));
                }
                if (ips.utils.notification.hasPermission()) {
                    ips.utils.notification.create({
                        title: ips.pluralize(ips.getString('yourUploadsFinished'), [total]),
                        body: text.join(' '),
                        icon: ips.getSetting('upload_imgURL'),
                        onClick: function() {
                            try {
                                window.focus();
                            } catch (err) {}
                        }
                    }).show();
                }
                if (sound) {
                    try {
                        sound.play();
                    } catch (err) {}
                }
            },
            fileUploaded: function(up, file, info) {
                uploadCount++;
                totalSize += file.size;
                var fileElem = _updateFileElement(file);
                fileElem.addClass('ipsAttach_done');
                if (options.insertable) {
                    ips.utils.anim.go('fadeIn', fileElem.find('[data-role="insert"]'));
                }
                fileElem.find('[data-role="deleteFileWrapper"]').slideDown();
                if ($(elem).find('.ipsAttachment_loading').is(':visible')) {
                    $(elem).find('.ipsAttachment_loading').hide();
                    $(elem).find('.ipsAttachment_dropZoneSmall_info').show();
                }
                _setPercent(fileElem, 100);
                try {
                    var jsonInfo = $.parseJSON(info.response);
                    elem.before($('<input type="hidden">').attr('name', elem.attr('data-ipsUploader-name') + '_existing[' + file.id + ']').attr('value', jsonInfo.id));
                    if (jsonInfo['error']) {
                        fileElem.on('click', '[data-role="deleteFile"]', _.bind(_deleteFile, fileElem, fileElem));
                        file.status = plupload.FAILED;
                        up.trigger('error', {
                            code: jsonInfo['error'],
                            extra: jsonInfo['extra'],
                            subText: jsonInfo['sub'],
                            file: file,
                            uploader: options.name
                        });
                        return;
                    }
                    if (jsonInfo) {
                        _buildThumb(fileElem, file, jsonInfo);
                        fileElem.on('click', '[data-role="deleteFile"]', _.bind(_deleteFile, fileElem, fileElem));
                    }
                } catch (err) {
                    fileElem.on('click', '[data-role="deleteFile"]', _.bind(_deleteFile, fileElem, fileElem));
                    file.status = plupload.FAILED;
                    up.trigger('error', {
                        code: 'upload_error',
                        extra: err.message,
                        file: file,
                        uploader: options.name
                    });
                    Debug.warn(err);
                }
                if (file.id && injectIds[file.id]) {
                    $(elem).trigger('fileInjected', {
                        'fileElem': fileElem,
                        'data': injectIds[file.id]
                    });
                    delete injectIds[file.id];
                }
            },
            error: function(up, err) {
                if (err.file) {
                    _updateFileElement(err.file);
                }
                if (err.code == -600 || err.code == -601) {
                    return;
                }
                var errorMessage = ips.getString('pluploaderr_' + err.code, {
                    max_file_size: parseFloat((options.maxFileSize > 1) ? options.maxFileSize : (options.maxFileSize * 1024)).toLocaleString($('html').attr('lang')),
                    size_suffix: (options.maxFileSize > 1) ? ips.getString('size_mb') : ips.getString('size_kb'),
                    allowed_extensions: (options.allowedFileTypes !== null) ? $.parseJSON(options.allowedFileTypes).join(',') : '',
                    server_error_code: (err.extra !== null) ? err.extra : 0,
                });
                if (!errorMessage) {
                    errorMessage = ips.getString('pluploaderr_SERVER_CONFIGURATION', {
                        server_error_code: err.code
                    });
                    err.subText = ips.getString('pluploaderr_error_code', {
                        code: err.code
                    });
                }
                ips.ui.alert.show({
                    type: 'alert',
                    icon: 'warn',
                    message: errorMessage,
                    callbacks: {},
                    subTextHtml: err.subText ? err.subText : null
                });
            }
        };
        init();
        return {
            init: init,
            refresh: refresh
        };
    }
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.validation', function() {
        var defaults = {
            live: true,
            submit: true,
            characterLimit: 3,
            displayAs: 'list'
        };
        var respond = function(elem, options, e) {
            if (!$(elem).data('_validation')) {
                $(elem).data('_validation', validateObj(elem, _.defaults(options, defaults)));
            }
        };
        var validateObj = function(elem, options) {
            var init = function() {
                if (options.live) {
                    $(elem).on('keyup blur', 'input:not( [type="button"] ):not( [type="checkbox"] ):not( [type="hidden"] )' + ':not( [type="radio"] ):not( [data-validate-bypass] ), textarea:not( [data-validate-bypass] )', _textEvent);
                    $(elem).on('change', 'select', _selectEvent);
                }
                if (options.submit) {
                    $(elem).closest('form').on('submit', _submitEvent);
                }
            }
              , _submitEvent = function(e) {
                var errors = 0;
                var elements = $(elem).find('input:not( [type="submit"] ):not( [type="checkbox"] )' + ':not( [type="radio"] ):not( [type="hidden"] ), select, textarea');
                elements.each(function() {
                    if (!_validate($(this))) {
                        errors++;
                    }
                });
                if (errors > 0) {
                    e.preventDefault();
                    $(e.currentTarget).trigger('error.validation', {
                        count: errors
                    });
                } else {
                    $(e.currentTarget).trigger('success.validation');
                }
            }
              , _selectEvent = function(e) {}
              , _textEvent = function(e) {
                var field = $(e.currentTarget);
                if (e.type == 'blur' || e.type == 'focusout') {
                    if (field.val().length >= options.characterLimit || field.is('[type="number"], [type="range"]')) {
                        _validate(field);
                    }
                } else {
                    if (field.attr('data-hasErrors')) {
                        _validate(field);
                    }
                }
            }
              , _validate = function(target) {
                var result = ips.utils.validate.validate(target);
                if (result !== true && !result.result) {
                    _displayErrors(target, result);
                } else {
                    _clearErrors(target);
                }
                return result.result;
            }
              , _displayErrors = function(target, results) {
                var id = target.identify().attr('id');
                var errorList = $('#' + id + '_errors');
                if (!errorList.length) {
                    var wrapper = ips.templates.render('core.forms.validationWrapper', {
                        id: id + '_errors'
                    });
                    target.after(wrapper);
                    errorList = $('#' + id + '_errors');
                }
                errorList.html('');
                for (var i = 0; i < results.messages.length; i++) {
                    errorList.append(ips.templates.render('core.forms.validationItem', {
                        message: results.messages[i].message
                    }));
                }
                target.addClass('ipsField_error').attr('data-hasErrors', true);
            }
              , _clearErrors = function(target) {
                var id = target.identify().attr('id');
                if ($('#' + id + '_errors').length) {
                    $('#' + id + '_errors').remove();
                }
                target.removeClass('ipsField_error').removeAttr('data-hasErrors');
            }
            init();
            return {};
        };
        ips.ui.registerWidget('validation', ips.ui.validation);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.ui.wizard', function() {
        var respond = function(elem, options, e) {
            elem.on('click', '[data-action="wizardLink"]', _.bind(refresh, e, elem));
            elem.on('submit', 'form', _.bind(refresh, e, elem));
        };
        var refresh = function(elem, e) {
            var target = $(e.currentTarget);
            _showLoading(elem);
            if (target.is('form')) {
                if (target.attr('data-bypassAjax')) {
                    return true;
                }
                e.preventDefault();
                var data = target.serialize() + '&_wizardHeight=' + elem.find('[data-role="loading"]').outerHeight();
                if (e.originalEvent && e.originalEvent.submitter && e.originalEvent.submitter.name && e.originalEvent.submitter.value) {
                    data += '&' + e.originalEvent.submitter.name + '=' + e.originalEvent.submitter.value;
                }
                ips.getAjax()(target.attr('action'), {
                    data: data,
                    type: 'post'
                }).done(function(response) {
                    _insertHtml(response, elem);
                }).fail(function(response, textStatus, errorThrown) {
                    target.attr('data-bypassAjax', true);
                    target.submit();
                })
            } else {
                e.preventDefault();
                ips.getAjax()(target.attr('href')).done(function(response) {
                    _insertHtml(response, elem);
                });
            }
        }
          , _insertHtml = function(response, elem) {
            if (_.isObject(response) && response.redirect) {
                window.location = response.redirect;
                return;
            }
            var responseDiv = $('<div>' + response + '</div>');
            var responseWizard = responseDiv.find('[data-ipsWizard]').html();
            if (!responseWizard) {
                responseWizard = response;
            }
            responseDiv.find("link", "script").appendTo('head');
            ips.controller.cleanContentsOf(elem);
            elem.html(responseWizard);
            $(document).trigger('contentChange', [elem]);
            elem.trigger('wizardStepChanged');
        }
          , _showLoading = function(elem) {
            var loading = elem.find('[data-role="loading"]');
            var formContainer = elem.find('[data-role="wizardContent"]');
            if (!formContainer.is(':visible')) {
                return;
            }
            if (!loading.length) {
                loading = $('<div/>').attr('data-role', 'loading').addClass('ipsLoading').hide();
                elem.append(loading);
            }
            var dims = {
                width: formContainer.outerWidth(),
                height: formContainer.outerHeight()
            };
            loading.css({
                width: dims.width + 'px',
                height: dims.height + 'px'
            }).show();
            formContainer.hide().after(loading.show());
        }
          , _hideLoading = function() {
            var loading = elem.find('[data-role="loading"]');
            var formContainer = elem.find('[data-role="registerForm"]');
            loading.remove();
            formContainer.show();
        };
        ips.ui.registerWidget('wizard', ips.ui.wizard);
        return {
            respond: respond
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils', function(options) {
        var argsToArray = function(obj) {
            return Array.prototype.slice.call(obj);
        }
          , uppercaseFirst = function(fromString) {
            return fromString.charAt(0).toUpperCase() + fromString.slice(1);
        }
          , getIDsFromList = function(list) {
            if (!list) {
                return '';
            }
            if (!_.isArray(list)) {
                list = list.toString().split(',');
            }
            list = _.compact(list);
            if (!list.length) {
                return false;
            }
            return _.map(list, function(val) {
                return '#' + val;
            }).join(',');
        }
          , getCitation = function(data, html, defaultValue) {
            var citation = ips.getString('editorQuote');
            if (defaultValue) {
                var citation = defaultValue;
            }
            if (data.username) {
                var username = data.username;
                if (html && data.userid && ips.getSetting('viewProfiles')) {
                    username = ips.templates.render('core.editor.citationLink', {
                        baseURL: ips.getSetting('baseURL'),
                        userid: data.userid,
                        username: data.username
                    });
                } else {
                    username = _.escape(username);
                }
                if (data.timestamp) {
                    var citation = ips.getString('editorQuoteLineWithTime', {
                        date: ips.utils.time.readable(data.timestamp),
                        username: username
                    });
                } else {
                    var citation = ips.getString('editorQuoteLine', {
                        username: username
                    });
                }
            }
            return citation;
        }
          , escapeRegexp = function(toEscape) {
            return toEscape.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        }
          , urlBase64ToUint8Array = function(base64String) {
            var padding = '='.repeat((4 - base64String.length % 4) % 4);
            var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
            var rawData = window.atob(base64);
            var outputArray = new Uint8Array(rawData.length);
            for (var i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        };
        return {
            argsToArray: argsToArray,
            uppercaseFirst: uppercaseFirst,
            getIDsFromList: getIDsFromList,
            getCitation: getCitation,
            escapeRegexp: escapeRegexp,
            urlBase64ToUint8Array: urlBase64ToUint8Array
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.analytics', function() {
        var init = function() {}
          , trackPageView = function(url) {
            try {
                if (ips.getSetting('googleAnalyticsEnabled')) {
                    if (!_.isUndefined(window.ga)) {
                        var urlObj = ips.utils.url.getURIObject(url || document.location);
                        Debug.log("Manual page view tracked with Google Analytics: " + urlObj.relative);
                        ga('send', 'pageview', urlObj.relative);
                    }
                }
                if (ips.getSetting('matomoEnabled')) {
                    if (!_isUndefined(window._paq)) {
                        Debug.log("Manual page view tracked with Matomo");
                        _paq.push(['trackPageView']);
                    }
                }
                if (_.isFunction(ips.getSetting('paginateCode'))) {
                    ips.getSetting('paginateCode').call(url);
                }
            } catch (err) {
                Debug.log("Error tracking page view: " + err);
            }
        };
        return {
            init: init,
            trackPageView: trackPageView
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.anim', function() {
        var animationSupport = false;
        var elm = document.createElement('div')
          , animation = false
          , animationstring = 'animation'
          , keyframeprefix = ''
          , domPrefixes = 'Webkit Moz O ms Khtml'.split(' ')
          , pfx = '';
        if (elm.style.animationName) {
            animationSupport = true;
        }
        if (animationSupport === false) {
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                    pfx = domPrefixes[i];
                    animationstring = pfx + 'Animation';
                    keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    animationSupport = true;
                    break;
                }
            }
        }
        var init = function() {}
          , _transitions = {
            fadeIn: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.show().addClass(['ipsAnim', 'ipsAnim_fade', 'ipsAnim_in', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.fadeIn('fast');
                }
            },
            fadeOut: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_fade', 'ipsAnim_out', speed].join(' ')).animationComplete(function() {
                        elem.hide();
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.fadeOut('fast');
                }
            },
            fadeInDown: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.show().addClass(['ipsAnim', 'ipsAnim_fade', 'ipsAnim_in', 'ipsAnim_down', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.fadeIn('fast');
                }
            },
            fadeOutDown: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_fade', 'ipsAnim_out', 'ipsAnim_down', speed].join(' ')).animationComplete(function() {
                        elem.hide();
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.fadeOut('fast');
                }
            },
            slideLeft: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_slide', 'ipsAnim_left', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.show();
                }
            },
            blindDown: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.show().addClass(['ipsAnim', 'ipsAnim_blind', 'ipsAnim_down', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.show();
                }
            },
            blindUp: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.show().addClass(['ipsAnim', 'ipsAnim_blind', 'ipsAnim_up', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.hide();
                }
            },
            zoomIn: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.show().addClass(['ipsAnim', 'ipsAnim_zoom', 'ipsAnim_in', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.show();
                }
            },
            zoomOut: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_zoom', 'ipsAnim_out', speed].join(' ')).animationComplete(function() {
                        elem.hide();
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem.hide();
                }
            },
            wobble: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_wobble', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem;
                }
            },
            jiggle: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_jiggle'].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    })
                },
                fallback: function(elem) {
                    return elem;
                }
            },
            pulseOnce: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_pulseOnce', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem;
                }
            },
            pulseAndJiggle: {
                anim: function(elem, speed) {
                    cleanClasses(elem);
                    return elem.addClass(['ipsAnim', 'ipsAnim_pulseAndJiggle', speed].join(' ')).animationComplete(function() {
                        cleanClasses(elem);
                    });
                },
                fallback: function(elem) {
                    return elem;
                }
            }
        }
          , go = function(animationInfo) {
            var thisArgs = arguments
              , run = 'anim';
            thisArgs = ips.utils.argsToArray(thisArgs);
            thisArgs.shift();
            animationInfo = animationInfo.split(' ');
            var animName = animationInfo[0];
            var animSpeed = (animationInfo[1]) ? 'ipsAnim_' + animationInfo[1] : '';
            if (!_transitions[animName]) {
                Debug.warn("The animation '" + animName + "' doesn't exist");
                return;
            }
            if (!animationSupport) {
                run = 'fallback';
            }
            thisArgs.push(animSpeed);
            var elem = $(thisArgs[0]);
            var deferred = $.Deferred();
            var done = 0;
            var _checkCount = function() {
                done++;
                if (done >= elem.length) {
                    deferred.resolve();
                }
            };
            _.each(elem, function() {
                _addToQueue(elem, animName, run, thisArgs).always(_checkCount);
                _checkQueue(elem);
            });
            return deferred.promise();
        }
          , _addToQueue = function(elem, animName, toRun, args) {
            var deferred = $.Deferred();
            if (!elem.data('animQueue') || !_.isArray(elem.data('animQueue'))) {
                elem.data('animQueue', []);
            }
            elem.data('animQueue').push({
                animName: animName,
                run: toRun,
                args: args,
                deferred: deferred
            });
            return deferred.promise();
        }
          , _checkQueue = function(elem) {
            var queue = elem.data('animQueue');
            if (elem.attr('animating') == true || !queue || !_.isArray(queue) || !queue.length) {
                return;
            }
            var item = queue.shift();
            if (item.run == 'anim') {
                elem.animationComplete(function() {
                    elem.attr('animating', false);
                    item.deferred.resolve();
                    _checkQueue(elem);
                });
                elem.attr('animating', true);
                _transitions[item.animName][item.run].apply(this, item.args);
            } else {
                item.deferred.resolve();
                _transitions[item.animName][item.run].apply(this, item.args);
                _checkQueue(elem);
            }
            item.deferred.resolve();
        }
          , cleanClasses = function(elem) {
            $(elem).removeClass('ipsAnim').removeClass(function(index, css) {
                return (css.match(/ipsAnim[0-9a-z_\-]+/gi) || []).join(' ');
            });
            return elem;
        }
          , isTransition = function(name) {
            return !_.isUndefined(_transitions[name]);
        }
          , addTransition = function(name, cssAnimation, fallbackAnimation) {
            if (_transitions[name]) {
                Debug.warn("A transition with the name '" + name + "' already exists");
                return;
            }
            _transitions[name] = {
                anim: cssAnimation,
                fallback: fallbackAnimation
            };
        }
          , scrollTo = function(elem, options) {};
        return {
            init: init,
            cleanClasses: cleanClasses,
            animationSupport: animationSupport,
            isTransition: isTransition,
            addTransition: addTransition,
            go: go,
            cancel: cleanClasses
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.color', function() {
        var init = function() {};
        var convertHex = function(hex, toHue, toSat) {
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);
            }
            if (hex.length !== 6) {
                Debug.write(hex + " isn't a valid hex color");
                return false;
            }
            var r = (hexToRGB(hex.slice(0, 2)) / 255);
            var g = (hexToRGB(hex.slice(2, 4)) / 255);
            var b = (hexToRGB(hex.slice(4, 6)) / 255);
            var hsl = RGBtoHSL(r, g, b);
            hsl[0] = (1 / 360) * toHue;
            hsl[1] = (1 / 100) * toSat;
            var rgb = HSLtoRGB(hsl[0], hsl[1], hsl[2]);
            return RGBtoHex(rgb[0], rgb[1], rgb[2]);
        }
          , HSLtoRGB = function(h, s, l) {
            var red = 0;
            var green = 0;
            var blue = 0;
            var v2 = 0;
            if (s == 0) {
                red = l * 255;
                green = l * 255;
                blue = l * 255;
            } else {
                if (l < 0.5) {
                    v2 = l * (1 + s);
                } else {
                    v2 = (l + s) - (s * l);
                }
                var v1 = 2 * l - v2;
                red = 255 * hueToRGB(v1, v2, (h + (1 / 3)));
                green = 255 * hueToRGB(v1, v2, h);
                blue = 255 * hueToRGB(v1, v2, (h - (1 / 3)));
            }
            return [Math.round(red), Math.round(green), Math.round(blue)];
        }
          , hueToRGB = function(v1, v2, h) {
            if (h < 0) {
                h += 1;
            }
            if (h > 1) {
                h -= 1;
            }
            if ((6 * h) < 1) {
                return (v1 + (v2 - v1) * 6 * h);
            }
            if ((2 * h) < 1) {
                return v2;
            }
            if ((3 * h) < 2) {
                return (v1 + (v2 - v1) * ((2 / 3) - h) * 6);
            }
            return v1;
        }
          , RGBtoHSL = function(r, g, b) {
            var lightness, hue, saturation = 0;
            var min = _.min([r, g, b]);
            var max = _.max([r, g, b]);
            var delta = max - min;
            lightness = (max + min) / 2;
            if (delta == 0) {
                hue = 0;
                saturation = 0;
            } else {
                if (lightness < 0.5) {
                    saturation = delta / (max + min);
                } else {
                    saturation = delta / (2 - max - min);
                }
                var delta_r = (((max - r) / 6) + (delta / 2)) / delta;
                var delta_g = (((max - g) / 6) + (delta / 2)) / delta;
                var delta_b = (((max - b) / 6) + (delta / 2)) / delta;
                if (r == max) {
                    hue = delta_b - delta_g;
                } else if (g == max) {
                    hue = (1 / 3) + delta_r - delta_b;
                } else if (b == max) {
                    hue = (2 / 3) + delta_g - delta_r;
                }
                if (hue < 0) {
                    hue += 1;
                }
                if (hue > 1) {
                    hue -= 1;
                }
            }
            return [hue, saturation, lightness];
        }
          , hexToRGB = function(hex) {
            if (hex.length === 2) {
                return parseInt(hex, 16);
            }
            hex = hex.replace('#', '');
            if (hex.length === 3) {
                hex = hex.slice(0, 1) + hex.slice(0, 1) + hex.slice(1, 2) + hex.slice(1, 2) + hex.slice(2, 3) + hex.slice(2, 3);
            }
            if (hex.length !== 6) {
                Debug.write(hex + " isn't a valid hex color");
                return [0, 0, 0];
            }
            return [hexToRGB(hex.slice(0, 2)) / 255, hexToRGB(hex.slice(2, 4)) / 255, hexToRGB(hex.slice(4, 6)) / 255];
        }
          , RGBtoHex = function(r, g, b) {
            var hex = [r.toString(16), g.toString(16), b.toString(16)];
            _.each(hex, function(val, nr) {
                if (val.length == 1) {
                    hex[nr] = '0' + val;
                }
            });
            return hex.join('');
        };
        return {
            convertHex: convertHex,
            HSLtoRGB: HSLtoRGB,
            hueToRGB: hueToRGB,
            RGBtoHSL: RGBtoHSL,
            hexToRGB: hexToRGB,
            RGBtoHex: RGBtoHex
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.cookie', function() {
        var _store = {}
          , _init = false;
        var init = function() {
            var cookies = _parseCookies(document.cookie.replace(" ", ''))
              , cookieID = ips.getSetting('cookie_prefix') || false;
            $.each(cookies, function(key, cookie) {
                if (cookieID) {
                    if (key.startsWith(cookieID)) {
                        key = key.replace(cookieID, '');
                        _store[key] = unescape(cookie || '');
                    }
                }
            });
            _init = true;
        }
          , get = function(cookieKey) {
            if (!_init) {
                init();
            }
            if (_store[cookieKey]) {
                return _store[cookieKey];
            }
            return undefined;
        }
          , set = function(cookieKey, value, sticky) {
            var expires = ''
              , path = '/'
              , domain = ''
              , ssl = ''
              , prefix = '';
            if (!cookieKey) {
                return;
            }
            if (!_.isUndefined(sticky)) {
                if (sticky === true) {
                    var expirationDate = new Date();
                    expirationDate.setFullYear(expirationDate.getFullYear() + 100);
                    expires = "; expires=" + expirationDate.toUTCString();
                } else if (sticky === -1) {
                    expires = "; expires=Thu, 01-Jan-1970 00:00:01 GMT";
                } else if (sticky.length > 10) {
                    expires = "; expires=" + sticky;
                }
            }
            if (!_.isUndefined(ips.getSetting('cookie_domain')) && ips.getSetting('cookie_domain') != '') {
                domain = "; domain=" + ips.getSetting('cookie_domain');
            }
            if (!_.isUndefined(ips.getSetting('cookie_path')) && ips.getSetting('cookie_path') != '') {
                path = ips.getSetting('cookie_path');
            }
            if (!_.isUndefined(ips.getSetting('cookie_prefix')) && ips.getSetting('cookie_prefix') != '') {
                prefix = ips.getSetting('cookie_prefix');
            }
            if (!_.isUndefined(ips.getSetting('cookie_ssl')) && ips.getSetting('cookie_ssl') != '') {
                ssl = '; secure';
            }
            document.cookie = prefix + cookieKey + "=" + escape(value) + "; path=" + path + expires + domain + ssl + ';';
            _store[cookieKey] = value;
        }
          , unset = function(cookieKey) {
            if (_store[cookieKey]) {
                set(cookieKey, '', -1);
            }
        }
          , _parseCookies = function(cookieString) {
            var pairs = cookieString.split(";")
              , cookies = {};
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i].split("=");
                cookies[pair[0].trim()] = unescape(pair[1]).trim();
            }
            return cookies;
        };
        return {
            init: init,
            get: get,
            set: set,
            unset: unset
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.css', function() {
        var prefixes = ['webkit', 'moz', 'ms', 'o', 'w3c'];
        var init = function() {}
          , buildStyleBlock = function(selector, styles, important) {
            var output = selector + " {\n";
            var getValue = function(key, value) {
                return "\t" + key + ': ' + value + ((important) ? ' !important' : '') + ";\n";
            };
            _.each(styles, function(value, key) {
                if (_.isArray(value)) {
                    for (var i = 0; i < value.length; i++) {
                        output += getValue(key, value[i]);
                    }
                } else {
                    output += getValue(key, value);
                }
            });
            output += "}";
            return output;
        }
          , supportsTransform = function() {
            var bs = document.body.style;
            if (!_.isUndefined(bs.transform) || !_.isUndefined(bs.WebkitTransform) || !_.isUndefined(bs.MozTransform) || !_.isUndefined(bs.OTransform)) {
                return true;
            }
            return false;
        }
          , replaceStyle = function(stylesheetID, selector, styles) {
            var stylesheet = getStylesheetRef(stylesheetID);
            var styleBlock = buildStyleBlock(selector, styles);
            var rulesKey = (stylesheet['cssRules']) ? 'cssRules' : 'rules';
            var done = false;
            for (var rules = 0; rules < stylesheet[rulesKey].length; rules++) {
                if (stylesheet[rulesKey][rules].selectorText == selector) {
                    stylesheet.deleteRule(rules);
                    stylesheet.insertRule(styleBlock, rules);
                    done = true;
                }
            }
            if (!done) {
                var idx = stylesheet.insertRule(styleBlock, stylesheet[rulesKey].length);
            }
        }
          , getStylesheetRef = function(stylesheetID) {
            var stylesheets = document.styleSheets;
            for (var sheet = 0; sheet < stylesheets.length; sheet++) {
                if (stylesheets[sheet].ownerNode.id == stylesheetID) {
                    return stylesheets[sheet];
                }
            }
            return false;
        }
          , escapeSelector = function(selector) {
            return selector.replace(/(:|\.|\[|\]|,)/g, "\\$1");
        }
          , generateGradient = function(angle, stops, asPureCSS) {
            var stops = _buildStops(stops);
            var angles = _buildAngles(angle);
            var output = [];
            for (var i = 0; i < prefixes.length; i++) {
                output.push(_buildPrefix(prefixes[i], 'linear-gradient') + '(' + angles[prefixes[i]] + ', ' + stops + ')');
            }
            if (!asPureCSS) {
                return output;
            } else {
                var prefixOutput = [];
                for (var i = 0; i < output.length; i++) {
                    prefixOutput.push('background-image: ' + output[i] + ';');
                }
                return prefixOutput.join("\n");
            }
        }
          , _buildStops = function(stops) {
            var line = [];
            for (var i = 0; i < stops.length; i++) {
                if (stops[i][0].charAt(0) != '#') {
                    stops[i][0] = '#' + stops[i][0];
                }
                line.push(stops[i][0] + ' ' + stops[i][1] + '%');
            }
            return line.join(',');
        }
          , _buildAngles = function(angle) {
            var mapDegrees = {
                '0': 'right',
                '90': 'top',
                '-90': 'bottom',
                '180': 'left'
            };
            var opposites = {
                '0': '180',
                '90': '-90',
                '-90': '90',
                '180': '0'
            };
            var output = {};
            for (var i = 0; i < prefixes.length; i++) {
                if (!_.isUndefined(mapDegrees[angle])) {
                    if (prefixes[i] == 'w3c') {
                        output[prefixes[i]] = 'to ' + mapDegrees[opposites[angle]];
                    } else {
                        output[prefixes[i]] = mapDegrees[angle];
                    }
                } else {
                    output[prefixes[i]] = angle + 'deg';
                }
            }
            return output;
        }
          , _buildPrefix = function(vendor, style) {
            return ((vendor != 'w3c') ? '-' + vendor + '-' : '') + style;
        };
        return {
            generateGradient: generateGradient,
            replaceStyle: replaceStyle,
            getStylesheetRef: getStylesheetRef,
            buildStyleBlock: buildStyleBlock,
            escapeSelector: escapeSelector
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.db', function() {
        var enabled = null;
        var sessionStorageSupported = null;
        var init = function(queryString) {
            enabled = isEnabled();
        }
          , set = function(type, key, value, isPrivate) {
            if (enabled) {
                var storageEngine = localStorage;
                if (isPrivate && (!_.isUndefined(ips.getSetting('isAcp')) || (_.isUndefined(ips.utils.cookie.get('login_key')) && _.isUndefined(ips.getSetting('cookie_prefix') + ips.utils.cookie.get('login_key')))) && sessionStorageIsSupported()) {
                    storageEngine = sessionStorage;
                }
                if (value) {
                    try {
                        storageEngine.setItem(type + '.' + key, JSON.stringify(value));
                    } catch (err) {}
                } else {
                    storageEngine.removeItem(type + '.' + key);
                }
            }
        }
          , get = function(type, key) {
            if (_.isUndefined(key)) {
                return getByType(type);
            }
            var val = localStorage.getItem(type + '.' + key);
            if (_.isNull(val) && sessionStorageIsSupported()) {
                val = sessionStorage.getItem(type + '.' + key);
            }
            try {
                return JSON.parse(val);
            } catch (err) {
                return val;
            }
        }
          , remove = function(type, key) {
            if (_.isUndefined(key)) {
                removeByType(type);
                return;
            }
            localStorage.removeItem(type + '.' + key);
            if (sessionStorageIsSupported()) {
                sessionStorage.removeItem(type + '.' + key);
            }
        }
          , getByType = function(type) {
            try {
                var results = {};
                if (sessionStorageIsSupported() && sessionStorage.length) {
                    for (var key in sessionStorage) {
                        if (key.startsWith(type + '.')) {
                            var actualKey = key.replace(type + '.', '');
                            results[actualKey] = get(type, actualKey);
                        }
                    }
                }
                if (localStorage.length) {
                    for (var key in localStorage) {
                        if (key.startsWith(type + '.')) {
                            var actualKey = key.replace(type + '.', '');
                            results[actualKey] = get(type, actualKey);
                        }
                    }
                }
                return results;
            } catch (e) {
                return {};
            }
        }
          , removeByType = function(type) {
            var count = 0;
            for (var key in getByType(type)) {
                remove(type, key);
                count++;
            }
            return count;
        }
          , isEnabled = function() {
            if (!_.isBoolean(enabled)) {
                try {
                    if ('localStorage'in window && window['localStorage'] !== null && window.JSON) {
                        return _testEnabled();
                    } else {
                        return false;
                    }
                } catch (e) {
                    return false;
                }
            } else {
                return enabled;
            }
        }
          , _testEnabled = function() {
            try {
                localStorage.setItem('test', 1);
                localStorage.removeItem('test');
            } catch (err) {
                Debug.log("Writing to localstorage failed");
                return false;
            }
            return true;
        }
          , sessionStorageIsSupported = function() {
            if (!_.isBoolean(sessionStorageSupported)) {
                try {
                    if ('sessionStorage'in window && window['sessionStorage'] !== null && window.JSON) {
                        sessionStorageSupported = true;
                    } else {
                        sessionStorageSupported = false;
                    }
                } catch (e) {
                    sessionStorageSupported = false;
                }
            }
            return sessionStorageSupported;
        };
        init();
        return {
            set: set,
            get: get,
            getByType: getByType,
            remove: remove,
            removeByType: removeByType,
            enabled: enabled,
            isEnabled: isEnabled
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.defaultEditorPlugins', function() {
        return {
            inline: function(command, html) {
                return {
                    exec: function(editor) {
                        var range = editor.getSelection().getRanges()[0];
                        var selected = range.extractContents();
                        var element = new CKEDITOR.dom.element('span');
                        element.setHtml(html.replace(/\{contents\}/g, '<span data-content-marker="true"></span>').replace(/\{content\}/g, '<span data-content-marker="true"></span>'));
                        var spans = element.getElementsByTag('span');
                        for (var i = 0; i < spans.count(); i++) {
                            if (spans.getItem(i).hasAttribute('data-content-marker')) {
                                selected.insertAfterNode(spans.getItem(i));
                                spans.getItem(i).remove();
                            }
                        }
                        editor.insertHtml(element.getHtml());
                    }
                }
            },
            singleblock: function(command, tagName, tagAttributes, beforeContent, includeContent, afterContent, optionValue) {
                return {
                    exec: function(editor) {
                        editor.focus();
                        if (!_.isUndefined(optionValue)) {
                            beforeContent = beforeContent.replace(/\{option\}/g, optionValue);
                            afterContent = afterContent.replace(/\{option\}/g, optionValue);
                            var _tagAttributes = tagAttributes;
                            tagAttributes = {};
                            for (i in _tagAttributes) {
                                var newI = i.replace(/\{option\}/g, optionValue);
                                tagAttributes[newI] = _tagAttributes[i].replace(/\{option\}/g, optionValue);
                            }
                        }
                        var style = new CKEDITOR.style({
                            element: tagName,
                            attributes: tagAttributes
                        });
                        var elementPath = editor.elementPath();
                        if (style.checkActive(elementPath, editor)) {
                            editor['removeStyle'](style);
                        } else {
                            if (beforeContent || !includeContent || afterContent) {
                                var range = editor.getSelection().getRanges()[0];
                                var selected = range.extractContents();
                                var element = new CKEDITOR.dom.element(tagName);
                                element.setAttributes(tagAttributes);
                                var content = beforeContent;
                                if (includeContent) {
                                    content += "{content}";
                                }
                                content += afterContent;
                                element.setHtml(content.replace(/\{contents\}/g, '<span data-content-marker="true"></span>').replace(/\{content\}/g, '<span data-content-marker="true"></span>'));
                                var spans = element.getElementsByTag('span');
                                for (var i = 0; i < spans.count(); i++) {
                                    if (spans.getItem(i).hasAttribute('data-content-marker')) {
                                        selected.insertAfterNode(spans.getItem(i));
                                        spans.getItem(i).remove();
                                    }
                                }
                                editor.insertElement(element);
                            } else {
                                editor['applyStyle'](style);
                            }
                        }
                    }
                }
            },
            block: function(command, tagName, tagAttributes, beforeContent, includeContent, afterContent, optionValue) {
                if (tagName == 'p') {
                    tagName = 'div';
                }
                return {
                    exec: function(editor) {
                        var selection = editor.getSelection()
                          , range = selection && selection.getRanges(true)[0];
                        if (!range)
                            return;
                        var bookmarks = selection.createBookmarks();
                        if (CKEDITOR.env.ie) {
                            var bookmarkStart = bookmarks[0].startNode, bookmarkEnd = bookmarks[0].endNode, cursor;
                            if (bookmarkStart && bookmarkStart.getParent().getName() == tagName) {
                                cursor = bookmarkStart;
                                while ((cursor = cursor.getNext())) {
                                    if (cursor.type == CKEDITOR.NODE_ELEMENT && cursor.isBlockBoundary()) {
                                        bookmarkStart.move(cursor, true);
                                        break;
                                    }
                                }
                            }
                            if (bookmarkEnd && bookmarkEnd.getParent().getName() == tagName) {
                                cursor = bookmarkEnd;
                                while ((cursor = cursor.getPrevious())) {
                                    if (cursor.type == CKEDITOR.NODE_ELEMENT && cursor.isBlockBoundary()) {
                                        bookmarkEnd.move(cursor);
                                        break;
                                    }
                                }
                            }
                        }
                        var iterator = range.createIterator(), block;
                        iterator.enlargeBr = editor.config.enterMode != CKEDITOR.ENTER_BR;
                        var paragraphs = [];
                        while ((block = iterator.getNextParagraph()))
                            paragraphs.push(block);
                        if (paragraphs.length < 1) {
                            var para = editor.document.createElement(editor.config.enterMode == CKEDITOR.ENTER_P ? 'p' : 'div')
                              , firstBookmark = bookmarks.shift();
                            range.insertNode(para);
                            para.append(new CKEDITOR.dom.text('\ufeff',editor.document));
                            range.moveToBookmark(firstBookmark);
                            range.selectNodeContents(para);
                            range.collapse(true);
                            firstBookmark = range.createBookmark();
                            paragraphs.push(para);
                            bookmarks.unshift(firstBookmark);
                        }
                        var commonParent = paragraphs[0].getParent()
                          , tmp = [];
                        for (var i = 0; i < paragraphs.length; i++) {
                            block = paragraphs[i];
                            commonParent = commonParent.getCommonAncestor(block.getParent());
                        }
                        var denyTags = {
                            table: 1,
                            tbody: 1,
                            tr: 1,
                            ol: 1,
                            ul: 1
                        };
                        while (denyTags[commonParent.getName()])
                            commonParent = commonParent.getParent();
                        var lastBlock = null;
                        while (paragraphs.length > 0) {
                            block = paragraphs.shift();
                            while (!block.getParent().equals(commonParent))
                                block = block.getParent();
                            if (!block.equals(lastBlock))
                                tmp.push(block);
                            lastBlock = block;
                        }
                        while (tmp.length > 0) {
                            block = tmp.shift();
                            if (block.getName() == tagName) {
                                var docFrag = new CKEDITOR.dom.documentFragment(editor.document);
                                while (block.getFirst()) {
                                    docFrag.append(block.getFirst().remove());
                                    paragraphs.push(docFrag.getLast());
                                }
                                docFrag.replace(block);
                            } else
                                paragraphs.push(block);
                        }
                        if (!_.isUndefined(optionValue)) {
                            beforeContent = beforeContent.replace(/\{option\}/g, optionValue);
                            afterContent = afterContent.replace(/\{option\}/g, optionValue);
                            var _tagAttributes = tagAttributes;
                            tagAttributes = {};
                            for (i in _tagAttributes) {
                                var newI = i.replace(/\{option\}/g, optionValue);
                                tagAttributes[newI] = _tagAttributes[i].replace(/\{option\}/g, optionValue);
                            }
                        }
                        var bqBlock = editor.document.createElement(tagName);
                        bqBlock.setAttributes(tagAttributes);
                        bqBlock.insertBefore(paragraphs[0]);
                        var content = '';
                        if (beforeContent) {
                            content += beforeContent;
                        }
                        if (includeContent) {
                            content += '<span data-content-marker="true"></span>';
                        }
                        if (afterContent) {
                            content += afterContent;
                        }
                        bqBlock.appendHtml(content);
                        if (includeContent) {
                            var spans = bqBlock.getElementsByTag('span');
                            for (var i = 0; i < spans.count(); i++) {
                                if (spans.getItem(i).hasAttribute('data-content-marker')) {
                                    while (paragraphs.length > 0) {
                                        block = paragraphs.pop();
                                        block.insertAfter(spans.getItem(i));
                                    }
                                    spans.getItem(i).remove();
                                }
                            }
                        }
                        selection.selectBookmarks(bookmarks);
                        editor.focus();
                    }
                }
            }
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.emoji', function() {
        var _emoji = null
          , _categories = null
          , _testingCanvasContext = null
          , _ajax = null
          , _callbacks = []
          , init = function() {
            this._invalidCharacterImageData = ['0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0'];
        }
          , getEmoji = function(callback) {
            if (this._emoji && this._categories) {
                callback(this._emoji, this._categories);
                return;
            }
            var storage = ips.utils.db.get('emoji', ips.getSetting('baseURL') + '-' + ips.getSetting('emoji_cache'));
            var categories = ips.utils.db.get('emojiCategories', ips.getSetting('baseURL') + '-' + ips.getSetting('emoji_cache'));
            if (storage && categories) {
                this._emoji = storage;
                callback(storage, categories);
            } else {
                ips.utils.db.removeByType('emoji');
                if (callback) {
                    if (!this._callbacks) {
                        this._callbacks = [];
                    }
                    this._callbacks.push(callback);
                }
                if (this._ajax && this._ajax.abort) {
                    this._ajax.abort();
                }
                this._ajax = ips.getAjax()(ips.getSetting('baseURL') + 'index.php?app=core&module=system&controller=editor&do=emoji').done(function(emoji) {
                    this._emoji = {};
                    this._categories = [];
                    var canUseTones = null;
                    for (var category in emoji) {
                        var categoryName = emoji[category].category;
                        this._categories.push(categoryName);
                        this._emoji[categoryName] = [];
                        for (var i = 0; i < emoji[category].emoji.length; i++) {
                            if (this.canRender(emoji[category].emoji[i].code)) {
                                if (emoji[category].emoji[i].skinTone) {
                                    if (canUseTones === null) {
                                        if (!this.canRender(this.tonedCode(emoji[category].emoji[i].code, 'light'))) {
                                            canUseTones = false;
                                        } else {
                                            canUseTones = true;
                                        }
                                    }
                                    if (canUseTones === false) {
                                        emoji[category].emoji[i].skinTone = false;
                                    }
                                }
                                emoji[category].emoji[i].shortNames.push(ips.getString('emoji-' + emoji[category].emoji[i].name));
                                this._emoji[categoryName].push(emoji[category].emoji[i]);
                            }
                        }
                    }
                    ips.utils.db.set('emoji', ips.getSetting('baseURL') + '-' + ips.getSetting('emoji_cache'), this._emoji);
                    ips.utils.db.set('emojiCategories', ips.getSetting('baseURL') + '-' + ips.getSetting('emoji_cache'), this._categories);
                    for (var i = 0; i < this._callbacks.length; i++) {
                        this._callbacks[i](this._emoji, this._categories);
                    }
                }
                .bind(this));
            }
        }
          , canRender = function(code) {
            if (code.substr(0, 7) == 'custom-') {
                return true;
            } else if (ips.getSetting('emoji_style') == 'disabled') {
                return false;
            } else if (ips.getSetting('emoji_style') != 'native') {
                return true;
            }
            if (navigator.platform.indexOf('Win') > -1 && code.match(/^1F1(E[6-9A-F]|F[0-9A-F])/)) {
                return false;
            }
            if (this._testingCanvasContext == null) {
                var testingCanvas = document.createElement('canvas');
                testingCanvas.width = 8;
                testingCanvas.height = 6;
                if (testingCanvas && testingCanvas.getContext && typeof String.fromCodePoint == 'function') {
                    this._testingCanvasContext = testingCanvas.getContext('2d');
                    if (typeof this._testingCanvasContext.fillText == 'function') {
                        this._testingCanvasContext.textBaseline = 'top';
                        this._testingCanvasContext.font = '5px "Apple Color Emoji", "Segoe UI Emoji", "NotoColorEmoji", "Segoe UI Symbol", "Android Emoji", "EmojiSymbols"';
                        this._testingCanvasContext.fillText(String.fromCodePoint(parseInt('1F91F', 16)), 0, 0);
                        this._invalidCharacterImageData.push(Array.prototype.toString.call(this._testingCanvasContext.getImageData(0, 0, 6, 6).data));
                        this._testingCanvasContext.clearRect(0, 0, 8, 6);
                        this._testingCanvasContext.fillText(String.fromCodePoint(parseInt('1F91F', 16)) + String.fromCodePoint(parseInt('1F91F', 16)), 0, 0);
                        this._invalidCharacterImageData.push(Array.prototype.toString.call(this._testingCanvasContext.getImageData(0, 0, 6, 6).data));
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
            this._testingCanvasContext.clearRect(0, 0, 8, 6);
            var emoji = this.emojiFromHex(code);
            if (emoji == null) {
                return false;
            }
            this._testingCanvasContext.fillText(emoji, 0, 0);
            if (this._invalidCharacterImageData.indexOf(Array.prototype.toString.call(this._testingCanvasContext.getImageData(0, 0, 6, 6).data)) != -1) {
                return false;
            }
            if (Array.prototype.toString.call(this._testingCanvasContext.getImageData(7, 0, 1, 6).data) != '0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0') {
                return false;
            }
            return true;
        }
          , emojiFromHex = function(hex) {
            try {
                var decimals = [];
                var hexPoints = hex.split('-');
                for (var p = 0; p < hexPoints.length; p++) {
                    decimals.push(parseInt(hexPoints[p], 16));
                }
                return String.fromCodePoint.apply(null, decimals);
            } catch (err) {
                return null;
            }
        }
          , emojiImage = function(codeToUse, lazyLoad) {
            if (codeToUse.substr(0, 7) == 'custom-') {
                var parts = codeToUse.split('-');
                if (_.isUndefined(this._emoji[parts[1]])) {
                    return null;
                }
                for (var i = 0; i < this._emoji[parts[1]].length; i++) {
                    if (this._emoji[parts[1]][i].code == codeToUse) {
                        var imgTag = '<img src="' + this._emoji[parts[1]][i].image + '" loading="lazy"';
                        imgTag += 'title="' + this._emoji[parts[1]][i].name + '" alt="' + this._emoji[parts[1]][i].name + '"';
                        if (this._emoji[parts[1]][i].image2x) {
                            imgTag += ' srcset="' + this._emoji[parts[1]][i].image2x + ' 2x"';
                        }
                        if (parseInt(this._emoji[parts[1]][i].width) && parseInt(this._emoji[parts[1]][i].height)) {
                            imgTag += ' width="' + this._emoji[parts[1]][i].width + '" height="' + this._emoji[parts[1]][i].height + '"';
                        }
                        imgTag += ' data-emoticon="true">';
                        return imgTag;
                    }
                }
                return null;
            } else {
                var url;
                var image = codeToUse.toLowerCase();
                if (image.indexOf('200d') == -1 || ['1f441-fe0f-200d-1f5e8-fe0f'].indexOf(image) != -1) {
                    image = image.replace(/\-fe0f/g, '');
                }
                if (['0031-20e3', '0030-20e3', '0032-20e3', '0034-20e3', '0035-20e3', '0036-20e3', '0037-20e3', '0038-20e3', '0033-20e3', '0039-20e3', '0023-20e3', '002a-20e3', '00a9', '00ae'].indexOf(image) != -1) {
                    image = image.replace('00', '');
                }
                url = "https://twemoji.maxcdn.com/2/72x72/" + image + ".png";
                var character = this.emojiFromHex(codeToUse);
                return '<img src="' + url + '" alt="' + character + '" loading="lazy" class="ipsEmoji" data-emoticon="true">';
            }
        }
          , tonedCode = function(code, tone) {
            switch (tone) {
            case 'light':
                return code.replace(/^([0-9A-F]*)(\-|$)(?:FE0F\-)?/, '$1-1F3FB$2');
                break;
            case 'medium-light':
                return code.replace(/^([0-9A-F]*)(\-|$)(?:FE0F\-)?/, '$1-1F3FC$2');
                break;
            case 'medium':
                return code.replace(/^([0-9A-F]*)(\-|$)(?:FE0F\-)?/, '$1-1F3FD$2');
                break;
            case 'medium-dark':
                return code.replace(/^([0-9A-F]*)(\-|$)(?:FE0F\-)?/, '$1-1F3FE$2');
                break;
            case 'dark':
                return code.replace(/^([0-9A-F]*)(\-|$)(?:FE0F\-)?/, '$1-1F3FF$2');
                break;
            }
            return code;
        }
          , preview = function(code) {
            if (ips.getSetting('emoji_style') == 'native' && code.substr(0, 7) != 'custom-') {
                return "<span class='ipsEmoji'>" + this.emojiFromHex(code) + '</span>';
            } else {
                return this.emojiImage(code, true);
            }
        }
          , editorElement = function(code) {
            if (ips.getSetting('emoji_style') == 'native' && code.substr(0, 7) != 'custom-') {
                return CKEDITOR.dom.element.createFromHtml("<span class='ipsEmoji'>" + this.emojiFromHex(code) + "</span>");
            } else {
                return CKEDITOR.dom.element.createFromHtml(this.emojiImage(code, false));
            }
        }
          , logUse = function(code) {
            var recentEmoji = [];
            if (ips.utils.cookie.get('recentEmoji')) {
                recentEmoji = ips.utils.cookie.get('recentEmoji').split(',');
            }
            var index = recentEmoji.indexOf(code);
            if (index != -1) {
                recentEmoji.splice(index, 1);
            }
            recentEmoji.unshift(code);
            recentEmoji.splice(24);
            ips.utils.cookie.set('recentEmoji', recentEmoji.join(','), true);
        };
        return {
            init: init,
            getEmoji: getEmoji,
            canRender: canRender,
            emojiFromHex: emojiFromHex,
            emojiImage: emojiImage,
            tonedCode: tonedCode,
            preview: preview,
            editorElement: editorElement,
            logUse: logUse
        };
    });
}(jQuery, _));
if (!String.fromCodePoint) {
    (function() {
        var defineProperty = (function() {
            try {
                var object = {};
                var $defineProperty = Object.defineProperty;
                var result = $defineProperty(object, object, object) && $defineProperty;
            } catch (error) {}
            return result;
        }());
        var stringFromCharCode = String.fromCharCode;
        var floor = Math.floor;
        var fromCodePoint = function(_) {
            var MAX_SIZE = 0x4000;
            var codeUnits = [];
            var highSurrogate;
            var lowSurrogate;
            var index = -1;
            var length = arguments.length;
            if (!length) {
                return "";
            }
            var result = "";
            while (++index < length) {
                var codePoint = Number(arguments[index]);
                if (!isFinite(codePoint) || codePoint < 0 || codePoint > 0x10FFFF || floor(codePoint) != codePoint) {
                    throw RangeError("Invalid code point: " + codePoint);
                }
                if (codePoint <= 0xFFFF) {
                    codeUnits.push(codePoint);
                } else {
                    codePoint -= 0x10000;
                    highSurrogate = (codePoint >> 10) + 0xD800;
                    lowSurrogate = (codePoint % 0x400) + 0xDC00;
                    codeUnits.push(highSurrogate, lowSurrogate);
                }
                if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                    result += stringFromCharCode.apply(null, codeUnits);
                    codeUnits.length = 0;
                }
            }
            return result;
        };
        if (defineProperty) {
            defineProperty(String, "fromCodePoint", {
                "value": fromCodePoint,
                "configurable": true,
                "writable": true
            });
        } else {
            String.fromCodePoint = fromCodePoint;
        }
    }());
}
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.events', function() {
        var manualEvent = function(element, ev) {
            if (_.isObject(element)) {
                element.each(function() {
                    _fireEvent(this, ev);
                });
            } else {
                _fireEvent(element, ev);
            }
        }
          , isTouchDevice = function() {
            return (('ontouchstart'in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
        }
          , getVisibilityEvent = function() {
            if (!_.isUndefined(document.hidden)) {
                return 'visibilitychange';
            } else if (!_.isUndefined(document.mozHidden)) {
                return 'mozvisibilitychange';
            } else if (!_.isUndefined(document.msHidden)) {
                return 'msvisibilitychange';
            } else if (!_.isUndefined(document.webkitHidden)) {
                return 'webkitvisibilitychange';
            }
            return '_unsupported';
        }
          , getVisibilityProp = function() {
            if (!_.isUndefined(document.hidden)) {
                return 'hidden';
            } else if (!_.isUndefined(document.mozHidden)) {
                return 'mozHidden';
            } else if (!_.isUndefined(document.msHidden)) {
                return 'msHidden';
            } else if (!_.isUndefined(document.webkitHidden)) {
                return 'webkitHidden';
            }
            return undefined;
        }
          , _fireEvent = function(element, ev) {
            if (document.createEvent) {
                var evObj = document.createEvent('MouseEvents');
                evObj.initEvent(ev, true, false);
                element.dispatchEvent(evObj);
            } else if (document.createEventObject) {
                var evObj = document.createEventObject();
                element.fireEvent('on' + evt, evObj);
            }
        };
        return {
            manualEvent: manualEvent,
            isTouchDevice: isTouchDevice,
            getVisibilityEvent: getVisibilityEvent,
            getVisibilityProp: getVisibilityProp
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.form', function() {
        var serializeAsObject = function(jQueryObj, customSerializers) {
            var asArray = jQueryObj.serializeArray();
            var output = {};
            _.each(asArray, function(val) {
                var outValue = val.value;
                if (customSerializers && !_.isUndefined(customSerializers[val.name]) && _.isFunction(customSerializers[val.name])) {
                    outValue = customSerializers[val.name](val.name, val.value);
                }
                var keys = _splitFieldName(val.name);
                _addValueToKey(output, keys, outValue);
            });
            return output;
        };
        var _splitFieldName = function(name) {
            var parts = name.split('[');
            parts = _.map(parts, function(part) {
                return part.replace(/\]/g, '')
            });
            if (parts[0] === '') {
                parts.shift();
            }
            return parts;
        }
          , _addValueToKey = function(output, keys, value) {
            if (!_.isObject(output)) {
                output = {};
            }
            var currentPath = output;
            if (_.isArray(keys)) {
                for (var i = 0; i < keys.length; i++) {
                    if (_.isUndefined(currentPath[keys[i]])) {
                        currentPath[keys[i]] = (i == keys.length - 1) ? value : {};
                    }
                    currentPath = currentPath[keys[i]];
                }
            } else {
                output[keys] = value;
            }
        };
        return {
            serializeAsObject: serializeAsObject
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.lazyLoad', function() {
        var _observer;
        var _rootMargin = "150px";
        var _threshold = 0;
        var _supportsObserver = true;
        var _registry = {};
        var _document = $(document);
        var contentSelector = "img[data-src], [data-background-src], iframe[data-embed-src], video[data-video-embed], audio[data-audio-embed]";
        var init = function() {
            if (!window.IntersectionObserver || _.isUndefined(window)) {
                _supportsObserver = false;
            }
        }
          , observe = function(node, callbacks, config) {
            var rawNode = node;
            if (node instanceof $) {
                rawNode = node.get(0);
            }
            config = _.defaults(config || {}, {
                rootMargin: _rootMargin,
                threshold: _threshold
            });
            if (!_observer) {
                _observer = new IntersectionObserver(_intersection,{
                    rootMargin: config.rootMargin,
                    threshold: config.threshold
                });
            }
            if (rawNode.hasAttribute('data-loaded')) {
                return;
            }
            try {
                _observer.unobserve(rawNode);
            } catch (err) {}
            if (_.isUndefined(callbacks)) {
                callbacks = {};
            }
            if (!_supportsObserver) {
                if (!_.isUndefined(callbacks.loadCallback)) {
                    callbacks.loadCallback.call(null, rawNode)
                } else {
                    _load(rawNode);
                }
                return;
            }
            if (!_.isUndefined(callbacks.loadCallback) || !_.isUndefined(callbacks.loadedCallback) || !_.isUndefined(callbacks.imgLoadedCallback)) {
                _registry[$(rawNode).identify().attr('id')] = {
                    loadCallback: callbacks.loadCallback || null,
                    loadedCallback: callbacks.loadedCallback || null,
                    imgLoadedCallback: callbacks.imgLoadedCallback || null
                };
            }
            if (!_.isUndefined(callbacks.preloadCallback)) {
                callbacks.preloadCallback.call(null, rawNode);
            } else {
                preload(rawNode);
            }
            _observer.observe(rawNode);
        }
          , preload = function(rawNode) {
            if (_isImg(rawNode) && !rawNode.hasAttribute('data-loaded') && !rawNode.hasAttribute('data-loading')) {
                var lazyLoaded = [rawNode];
            } else {
                var lazyLoaded = rawNode.querySelectorAll('img[data-src]:not([data-loaded]):not([data-loading])');
            }
            _.each(lazyLoaded, function(element) {
                if (!element.hasAttribute('data-ratio')) {
                    return;
                }
                var ratio = element.getAttribute('data-ratio').replace(',', '.');
                if (((element.hasAttribute('style') && element.style.width) || element.hasAttribute('width'))) {
                    if (element.style.height !== 'auto') {
                        var width = element.hasAttribute('style') && element.style.width ? element.style.width : element.width;
                        element.style.height = parseInt((parseInt(width) / 100) * parseFloat(ratio)) + 'px';
                    }
                } else {
                    element.style.height = '0';
                    element.style.paddingBottom = parseFloat(ratio) + '%';
                }
            });
        }
          , _intersection = function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting || entries[i].intersectionRatio > 0) {
                    _observer.unobserve(entries[i].target);
                    if (!document.body.contains(entries[i].target)) {
                        continue;
                    }
                    if (entries[i].target.id && !_.isUndefined(_registry[entries[i].target.id]) && _.isFunction(_registry[entries[i].target.id].loadCallback)) {
                        _registry[entries[i].target.id].loadCallback.call(null, entries[i].target);
                    } else {
                        _load(entries[i].target);
                    }
                }
            }
        }
          , _load = function(rawNode, imgLoadedCallback) {
            if (_isImg(rawNode) || _isEmbed(rawNode) || _isBackgroundImg(rawNode) || _isVideo(rawNode)) {
                var itemsToLoad = [rawNode];
            } else {
                var itemsToLoad = rawNode.querySelectorAll(contentSelector);
            }
            Debug.log('Loading ' + itemsToLoad.length + ' items...');
            _.each(itemsToLoad, function(element) {
                if (_isImg(element)) {
                    if (((rawNode.id && !_.isUndefined(_registry[rawNode.id]) && _.isFunction(_registry[rawNode.id].imgLoadedCallback)) || _.isFunction(imgLoadedCallback))) {
                        replaceImg(element, imgLoadedCallback ? imgLoadedCallback : _registry[rawNode.id].imgLoadedCallback);
                    } else {
                        replaceImg(element);
                    }
                } else if (_isBackgroundImg(element)) {
                    replaceBackgroundImg(element);
                } else if (_isEmbed(element)) {
                    replaceEmbed(element);
                } else if (_isVideo(element)) {
                    replaceVideo(element);
                }
            });
            if (rawNode.id && !_.isUndefined(_registry[rawNode.id]) && _.isFunction(_registry[rawNode.id].loadedCallback)) {
                _registry[rawNode.id].loadedCallback.call(null, rawNode);
            }
        }
          , _isImg = function(rawNode) {
            return rawNode.tagName.toLowerCase() == 'img' && rawNode.hasAttribute('data-src');
        }
          , _isBackgroundImg = function(rawNode) {
            return rawNode.hasAttribute('data-background-src');
        }
          , _isEmbed = function(rawNode) {
            return rawNode.tagName.toLowerCase() == 'iframe' && rawNode.hasAttribute('data-embed-src');
        }
          , _isVideo = function(rawNode) {
            return rawNode.tagName.toLowerCase() == 'video' && rawNode.hasAttribute('data-video-embed');
        }
          , replaceImg = function(element, imgLoadedCallback) {
            if (element.hasAttribute('style') && element.style.height !== 'auto') {
                element.style.height = element.offsetHeight + 'px';
            }
            element.style.paddingBottom = '';
            element.addEventListener('load', function() {
                if (element.hasAttribute('data-ratio') && element.hasAttribute('style') && element.style.width && element.style.height && element.style.height !== 'auto') {
                    element.style.height = parseInt((parseInt(element.style.width) / 100) * element.getAttribute('data-ratio').replace(',', '.')) + 'px';
                } else {
                    element.style.height = 'auto';
                }
                element.removeAttribute('data-loading');
                element.setAttribute('data-loaded', true);
                if (_.isFunction(imgLoadedCallback)) {
                    imgLoadedCallback.call(null, element);
                }
            });
            element.src = element.getAttribute('data-src');
            element.setAttribute('data-loading', true);
        }
          , replaceBackgroundImg = function(element) {
            element.style.backgroundImage = "url('" + element.getAttribute('data-background-src') + "')";
        }
          , replaceEmbed = function(element) {
            var copy = element.cloneNode();
            var src = element.getAttribute('data-embed-src');
            copy.setAttribute('src', src);
            copy.removeAttribute('data-embed-src');
            var srcWithoutProtocol = src.replace(/(^\w+:|^)\/\//, '');
            var baseWithoutProtocol = ips.getSetting('baseURL').replace(/(^\w+:|^)\/\//, '');
            if (srcWithoutProtocol.startsWith(baseWithoutProtocol)) {
                copy.setAttribute('data-controller', 'core.front.core.autoSizeIframe');
            }
            element.parentNode.replaceChild(copy, element);
            _document.trigger('contentChange', [$(copy)]);
        }
          , replaceVideo = function(element) {
            var sources = element.querySelectorAll('[data-video-src]');
            var canPlay = false;
            if (sources.length) {
                for (var i = 0; i < sources.length; i++) {
                    if (element.canPlayType(sources[i].getAttribute('type'))) {
                        element.setAttribute('src', sources[i].getAttribute('data-video-src'));
                        sources[i].setAttribute('src', sources[i].getAttribute('data-video-src'));
                        _document.trigger('contentChange', [$(element)]);
                        canPlay = true;
                        break;
                    }
                }
            }
            if (!canPlay) {
                var embed = element.querySelector("embed");
                var link = element.querySelector(".ipsAttachLink");
                if (embed) {
                    element.parentNode.replaceChild(embed, element);
                } else if (link) {
                    element.parentNode.replaceChild(link, element);
                }
            }
        }
          , loadContent = function(rawNode, imgLoadedCallback) {
            if (typeof bypassLoadContent !== "undefined") {
                return;
            }
            if (rawNode instanceof $) {
                rawNode = rawNode.get(0);
            }
            _load(rawNode, imgLoadedCallback);
        }
          , applyLazyLoadAttributes = function(rawNode, dims, forceUpdate) {
            if (rawNode.tagName.toLowerCase() !== 'img' || ((rawNode.hasAttribute('data-loaded') || rawNode.hasAttribute('data-emoticon')) && !forceUpdate)) {
                return;
            }
            var _loadHandler = function() {
                dims = dims || {};
                var height = dims.height || rawNode.naturalHeight;
                var width = dims.width || rawNode.naturalWidth;
                if (height == 'auto') {
                    width = rawNode.offsetWidth;
                    height = rawNode.offsetHeight;
                }
                if (!_.isUndefined(ips.getSetting('maxImageDimensions'))) {
                    if (width > ips.getSetting('maxImageDimensions').width) {
                        width = ips.getSetting('maxImageDimensions').width;
                        if (height && height != 'auto') {
                            height = parseInt((parseInt(width) / 100) * ((height / width) * 100).toFixed(2));
                        }
                    }
                    if (height > ips.getSetting('maxImageDimensions').height) {
                        height = ips.getSetting('maxImageDimensions').height;
                        width = parseInt((parseInt(height) / 100) * ((width / height) * 100).toFixed(2));
                    }
                }
                if (!rawNode.hasAttribute('width') && width) {
                    rawNode.setAttribute('width', width);
                }
                var ratio = ((height / width) * 100).toFixed(2);
                if (ratio) {
                    rawNode.setAttribute('data-ratio', ratio);
                }
                rawNode.setAttribute('data-loaded', true);
            };
            if (rawNode.hasAttribute('data-loaded')) {
                _loadHandler();
            } else {
                rawNode.addEventListener('load', _loadHandler);
            }
        };
        init();
        return {
            observe: observe,
            preload: preload,
            loadContent: loadContent,
            applyLazyLoadAttributes: applyLazyLoadAttributes,
            replaceImg: replaceImg,
            replaceBackgroundImg: replaceBackgroundImg,
            replaceEmbed: replaceEmbed,
            replaceVideo: replaceVideo,
            contentSelector: contentSelector
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.links', function() {
        var updateExternalLinks = function(element) {
            if (ips.getSetting('links_external')) {
                if (_.isUndefined(element)) {
                    return;
                }
                element.find('a[rel*="external"]').each(function(index, elem) {
                    elem.target = "_blank";
                    elem.rel = elem.rel.replace(" noopener", "") + " noopener";
                });
            }
        };
        return {
            updateExternalLinks: updateExternalLinks
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.notification', function() {
        var _isSupported = function() {
            if ("safari"in window) {
                return false;
            }
            if (!("Notification"in window) || !Notification.requestPermission) {
                return false;
            }
            if (_.isNull(ips.getSetting('pushPublicKey'))) {
                return false;
            }
            if (Notification.permission == 'granted') {
                return true;
            }
            return true;
        }
          , supported = _isSupported()
          , requestPermission = function() {
            if (supported) {
                Notification.requestPermission(function(result) {
                    if (result == 'granted') {
                        $(document).trigger('permissionGranted.notifications');
                    } else {
                        $(document).trigger('permissionDenied.notifications');
                    }
                });
            }
        }
          , permissionGranted = function() {
            subscribeToPush();
        }
          , subscribeToPush = function() {
            $(document).trigger('subscribePending.notifications');
            return ips.utils.serviceWorker.registerServiceWorker('front', true).then((registration)=>{
                const options = {
                    userVisibleOnly: true,
                    applicationServerKey: ips.utils.urlBase64ToUint8Array(ips.getSetting('pushPublicKey'))
                };
                return registration.pushManager.subscribe(options);
            }
            ).then((pushSubscription)=>{
                Debug.log('Received PushSubscription: ', JSON.stringify(pushSubscription));
                ips.getAjax()(ips.getSetting('baseURL') + 'index.php?app=core&module=system&controller=notifications&do=subscribeToPush', {
                    type: 'post',
                    data: {
                        subscription: JSON.stringify(pushSubscription),
                        encoding: (PushManager.supportedContentEncodings || ['aesgcm'])[0]
                    }
                }).done((response)=>{
                    $(document).trigger('subscribeSuccess.notifications');
                }
                ).fail((jqXHR,textStatus,errorThrown)=>{
                    $(document).trigger('subscribeFail.notifications');
                }
                );
            }
            );
        }
          , hasPermission = function() {
            if (!supported || ips.utils.cookie.get('noBrowserNotifications') || Notification.permission == 'denied' || Notification.permission == 'default') {
                return false;
            }
            return true;
        }
          , getSubscription = function() {
            return ips.utils.serviceWorker.getRegistration().then((registration)=>{
                return registration.pushManager.getSubscription().then(subscription=>{
                    if (!subscription) {
                        return false;
                    }
                    return subscription;
                }
                ).catch(err=>{
                    Debug.log(err);
                }
                );
            }
            ).catch(err=>{
                Debug.log(err);
            }
            );
        }
          , needsPermission = function() {
            if (supported && !ips.utils.cookie.get('noBrowserNotifications') && Notification.permission == 'default') {
                return true;
            }
            return false;
        }
          , permissionLevel = function() {
            if (!supported) {
                return null;
            }
            return Notification.permission;
        }
          , create = function(options) {
            try {
                return new notification(options);
            } catch (e) {
                Debug.log(e);
                if (e.name == 'TypeError') {
                    try {
                        navigator.permissions.revoke({
                            name: "notifications"
                        });
                    } catch (e) {}
                    return false;
                }
            }
        }
          , playSound = function() {
            Debug.log("ips.utils.notification.playSound() is deprecated");
        };
        function notification(options) {
            this._notification = null;
            this._options = _.defaults(options, {
                title: '',
                body: '',
                icon: '',
                timeout: false,
                tag: '',
                dir: $('html').attr('dir') || 'ltr',
                lang: $('html').attr('lang') || '',
                onShow: $.noop,
                onHide: $.noop,
                onClick: $.noop,
                onError: $.noop
            });
            this._options.body = _.unescape(this._options.body.replace(/&#039;/g, "'").replace(/<[^>]*>?/g, ''));
            this._options.title = _.unescape(this._options.title.replace(/&#039;/g, "'"));
            this.show = function() {
                this._notification = new Notification(this._options.title,this._options);
                this._notification.addEventListener('show', this._options.onShow, false);
                this._notification.addEventListener('hide', this._options.onHide, false);
                this._notification.addEventListener('click', this._options.onClick, false);
                this._notification.addEventListener('error', this._options.onError, false);
                if (this._options.timeout !== false) {
                    setTimeout(_.bind(this.hide, this), this._options.timeout * 1000);
                }
            }
            ;
            this.hide = function() {
                this._notification.close();
                this._notification.removeEventListener('show', this._options.onShow, false);
                this._notification.removeEventListener('hide', this._options.onHide, false);
                this._notification.removeEventListener('click', this._options.onClick, false);
                this._notification.removeEventListener('error', this._options.onError, false);
            }
            ;
        }
        ;$(document).on('subscribeToPush.notifications', subscribeToPush);
        $(document).on('requestPermission.notifications', requestPermission);
        $(document).on('permissionGranted.notifications', permissionGranted);
        return {
            supported: supported,
            subscribeToPush: subscribeToPush,
            hasPermission: hasPermission,
            getSubscription: getSubscription,
            needsPermission: needsPermission,
            permissionLevel: permissionLevel,
            requestPermission: requestPermission,
            create: create,
            playSound: playSound
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.position', function() {
        var theWindow = $(window);
        var getElemPosition = function(elem) {
            if (!elem) {
                return false;
            }
            var elem = $(elem);
            var props = {};
            var hidden = !elem.is(':visible');
            var opacity = elem.css('opacity');
            if (hidden) {
                elem.css({
                    opacity: "0.0001"
                }).show();
            }
            var offset = elem.offset();
            var position = elem.position();
            var dims = getElemDims(elem);
            props.absPos = {
                left: offset.left,
                top: offset.top,
                right: (offset.left + dims.outerWidth),
                bottom: (offset.top + dims.outerHeight),
            };
            props.offsetPos = {
                left: position.left,
                top: position.top,
                right: (position.left + dims.outerWidth),
                bottom: (position.top + dims.outerHeight)
            };
            props.viewportOffset = {
                left: offset.left - theWindow.scrollLeft(),
                top: offset.top - theWindow.scrollTop()
            };
            props.offsetParent = elem.offsetParent();
            props.fixed = (hasFixedParents(elem, true));
            if (hidden) {
                elem.hide().css({
                    opacity: String(opacity)
                });
            }
            return props;
        }
          , positionElem = function(options) {
            var trigger = $(options.trigger);
            var triggerPos = getElemPosition(trigger);
            var triggerDims = getElemDims(trigger);
            var targetDims = getElemDims(options.target);
            var toReturn = {};
            var stemOffset = options.stemOffset || {
                top: 0,
                left: 0
            };
            var offsetParent;
            var positioned = false;
            if (options.targetContainer) {
                if (hasFixedParents(trigger)) {
                    offsetParent = triggerPos.viewportOffset;
                } else {
                    var containerPos = getElemPosition(options.targetContainer);
                    var containerOffset;
                    if ($(options.targetContainer).css('position') == 'static') {
                        containerOffset = $(options.targetContainer).position();
                    } else {
                        containerOffset = {
                            left: 0,
                            top: 0
                        };
                    }
                    offsetParent = {
                        left: (triggerPos.absPos.left - containerPos.absPos.left) + containerOffset.left,
                        top: (triggerPos.absPos.top - containerPos.absPos.top) + containerOffset.top
                    };
                }
                positioned = true;
            } else {
                offsetParent = triggerPos.viewportOffset;
            }
            var bestFit = _getBestFit(triggerPos.viewportOffset, triggerDims, targetDims, stemOffset, {
                horizontal: (options.center) ? 'center' : 'left',
                vertical: (options.above === true || options.above === 'force') ? 'top' : 'bottom'
            }, (options.above === 'force') ? false : !options.above, !(options.above === 'force'));
            switch (bestFit.horizontal) {
            case 'center':
                toReturn.left = offsetParent.left + (triggerDims.outerWidth / 2) - (targetDims.outerWidth / 2);
                break;
            case 'left':
                toReturn.left = offsetParent.left - stemOffset.left + (triggerDims.outerWidth / 2);
                break;
            case 'right':
                toReturn.left = offsetParent.left - targetDims.outerWidth + (triggerDims.outerWidth / 2) + stemOffset.left;
                break;
            }
            switch (bestFit.vertical) {
            case 'top':
                toReturn.top = offsetParent.top - targetDims.outerHeight + stemOffset.top;
                break;
            case 'bottom':
                toReturn.top = offsetParent.top + triggerDims.outerHeight - stemOffset.top;
                break;
            }
            if (!positioned && !triggerPos.fixed) {
                toReturn.top += theWindow.scrollTop();
            }
            toReturn.fixed = triggerPos.fixed;
            toReturn.location = bestFit;
            return toReturn;
        }
          , hasFixedParents = function(elem, andSelf) {
            elem = $(elem);
            var fixed = false;
            var parents = elem.parents();
            if (andSelf) {
                parents = parents.addBack();
            }
            parents.each(function() {
                if (this.style.position == 'fixed') {
                    fixed = true;
                }
            });
            return fixed;
        }
          , _getBestFit = function(viewportOffset, triggerDims, targetDims, offset, posDefaults, preferBottom, attemptToFit) {
            var position = _.defaults(posDefaults || {}, {
                vertical: 'bottom',
                horizontal: 'left'
            });
            if (position.horizontal == 'center') {
                var targetLeft = viewportOffset.left + (triggerDims.outerWidth / 2) - (targetDims.outerWidth / 2);
                var targetRight = targetLeft + targetDims.outerWidth;
                if (targetLeft < 0 || targetRight > theWindow.width()) {
                    position.horizontal = 'left';
                }
            }
            if (position.horizontal == 'left') {
                if ((viewportOffset.left + (triggerDims.outerWidth / 2) + targetDims.outerWidth - offset.left) > theWindow.width()) {
                    position.horizontal = 'right';
                }
            }
            if (position.horizontal == 'right') {
                if ((viewportOffset.right - (triggerDims.outerWidth / 2) - targetDims.outerWidth + offset.left) < 0) {
                    position.horizontal = 'left';
                }
            }
            if (attemptToFit) {
                if (position.vertical == 'top' || preferBottom) {
                    if ((viewportOffset.top - targetDims.outerHeight - offset.top) < 0) {
                        position.vertical = 'bottom';
                    }
                } else {
                    if ((viewportOffset.top + triggerDims.outerHeight + targetDims.outerHeight + offset.top) > theWindow.height()) {
                        position.vertical = 'top';
                    }
                }
            }
            return position;
        }
          , getElemDims = function(elem) {
            elem = $(elem);
            return {
                width: elem.width(),
                height: elem.height(),
                outerWidth: elem.outerWidth(),
                outerHeight: elem.outerHeight()
            };
        }
          , naturalWidth = function(elem) {
            return _getNatural(elem, 'Width');
        }
          , naturalHeight = function(elem) {
            return _getNatural(elem, 'Height');
        }
          , lineHeight = function(parent) {
            var newElem = $('<span/>').html('abc').css({
                opacity: "0.1"
            });
            parent.append(newElem);
            var height = newElem.height();
            newElem.remove();
            return height;
        }
          , _getNatural = function(elem, type) {
            if (('natural' + type)in new Image()) {
                return elem[0]['natural' + type];
            } else {
                var img = new Image();
                img.src = elem[0].src;
                return img['natural' + type];
            }
        };
        return {
            getElemPosition: getElemPosition,
            getElemDims: getElemDims,
            positionElem: positionElem,
            hasFixedParents: hasFixedParents,
            naturalWidth: naturalWidth,
            naturalHeight: naturalHeight,
            lineHeight: lineHeight
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.responsive', function(options) {
        options = $.extend({
            breakpoints: {
                980: 'desktop',
                768: 'tablet',
                0: 'phone'
            }
        });
        var self = this
          , previousBreakpoint = []
          , currentBreakpoint = []
          , breakpointsBySize = {}
          , breakpointsByKey = {}
          , callbacks = {};
        var currentIs = function(toCheck) {
            if (_.isNumber(toCheck)) {
                return currentBreakpoint[0] == toCheck;
            } else {
                return toCheck && currentBreakpoint[1] == toCheck;
            }
        }
          , getCurrentKey = function() {
            return currentBreakpoint[1];
        }
          , getAllBreakpoints = function() {
            return breakpointsBySize;
        }
          , addBreakpoint = function(breakpoint, name) {
            breakpointsBySize[breakpoint] = name;
            breakpointsByKey[name] = breakpoint;
            callbacks[breakpoint] = {
                enter: [],
                exit: []
            };
        }
          , addCallback = function(breakpoint, type, callback) {
            if (!breakpointsBySize[breakpoint] || (type != 'enter' && type != 'exit')) {
                return false;
            }
            callbacks[breakpoint][type].push(callback);
        }
          , checkForBreakpointChange = function() {
            var newBreak = getCurrentBoundary();
            if (newBreak != currentBreakpoint[0]) {
                executeCallbacks(newBreak, currentBreakpoint[0]);
                previousBreakpoint = currentBreakpoint;
                currentBreakpoint = [newBreak, breakpointsBySize[newBreak]];
                $(document).trigger('breakpointChange', {
                    curBreakSize: newBreak,
                    curBreakName: breakpointsBySize[newBreak]
                });
            }
        }
          , executeCallbacks = function(enterPoint, exitPoint) {
            if (!_.isUndefined(enterPoint) && !_.isUndefined(callbacks[enterPoint]) && !_.isUndefined(callbacks[enterPoint]['enter']) && callbacks[enterPoint]['enter'].length) {
                $.each(callbacks[enterPoint]['enter'], function(idx, thisCallback) {
                    thisCallback();
                });
            }
            if (!_.isUndefined(exitPoint) && !_.isUndefined(callbacks[exitPoint]) && !_.isUndefined(callbacks[exitPoint]['exit']) && callbacks[exitPoint]['exit'].length) {
                $.each(callbacks[exitPoint]['exit'], function(idx, thisCallback) {
                    thisCallback();
                });
            }
        }
          , getCurrentBoundary = function() {
            var curWidth = window.innerWidth || $(window).width();
            var curBreak;
            var possibleSizes = _.filter(breakpointsByKey, function(num) {
                return curWidth >= num;
            });
            if (possibleSizes.length) {
                curBreak = _.max(possibleSizes, function(num) {
                    return parseInt(num);
                });
            } else {
                curBreak = _.min(breakpointsByKey, function(num) {
                    return parseInt(num);
                });
            }
            return curBreak;
        }
          , init = function() {
            $.each(options.breakpoints, function(size, name) {
                addBreakpoint(size, name);
            });
            $(window).on('resize', windowResize);
            checkForBreakpointChange();
        }
          , windowResize = function() {
            checkForBreakpointChange();
        }
          , enabled = function() {
            return true;
        };
        init();
        return {
            addBreakpoint: addBreakpoint,
            addCallback: addCallback,
            currentIs: currentIs,
            getCurrentKey: getCurrentKey,
            getAllBreakpoints: getAllBreakpoints,
            enabled: enabled
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.selection', function() {
        var getSelectedText = function(querySelector, container) {
            var text = '';
            var container = container.get(0);
            var selection = getSelection();
            if (selection.isCollapsed) {
                return '';
            }
            if (selection.rangeCount > 0) {
                var range = selection.getRangeAt(0);
                var clonedSelection = range.cloneContents().querySelector(querySelector);
                for (var i = 0; i < selection.rangeCount; ++i) {
                    if (!_isChild(selection.getRangeAt(i).commonAncestorContainer, container)) {
                        return '';
                    }
                }
                if (clonedSelection) {
                    text = clonedSelection.innerHTML;
                } else {
                    clonedSelection = range.cloneContents();
                    var startNode = selection.getRangeAt(0).startContainer.parentNode;
                    if (_isChild(startNode, container)) {
                        var div = document.createElement('div');
                        div.appendChild(clonedSelection);
                        text = div.innerHTML;
                    }
                }
                return text;
            } else if (document.selection) {
                return document.selection.createRange().htmlText;
            }
            return '';
        };
        var getCommonAncestor = function() {
            var selection = getSelection();
            if (selection.isCollapsed) {
                return false;
            }
            var range = selection.getRangeAt(0);
            return $(range.commonAncestorContainer);
        };
        var getRange = function(container) {
            var selection = getSelection();
            if (selection.isCollapsed) {
                return false;
            }
            var range = selection.getRangeAt(0);
            var ancestor = $(range.commonAncestorContainer);
            if (ancestor != container && !$(range.commonAncestorContainer).closest(container).length) {
                return {
                    type: 'outside',
                    range: range
                };
            }
            return {
                type: 'inside',
                range: range
            };
        };
        var getSelection = function() {
            return (window.getSelection) ? window.getSelection() : document.getSelection();
        };
        var _isChild = function(child, parent) {
            if (child === parent) {
                return true;
            }
            var current = child;
            while (current) {
                if (current === parent) {
                    return true;
                }
                current = current.parentNode;
            }
            return false;
        };
        return {
            getSelectedText: getSelectedText,
            getSelection: getSelection,
            getRange: getRange,
            getCommonAncestor: getCommonAncestor
        };
    });
}(jQuery, _));
;(function($, _, undefined) {
    "use strict";
    ips.createModule("ips.utils.serviceWorker", function() {
        const SERVICE_WORKER_URL = ips.getSetting("baseURL") + "index.php?app=core&module=system&controller=serviceworker&v=" + ips.getSetting("jsAntiCache");
        const supported = "serviceWorker"in navigator;
        const registerServiceWorker = (type,loggedIn)=>{
            return navigator.serviceWorker.register(`${SERVICE_WORKER_URL}&type=${type}&loggedIn=${JSON.stringify(loggedIn)}`).then((registration)=>{
                Debug.log("ServiceWorker registration successful with scope: ", registration.scope);
                return registration;
            }
            ).catch((err)=>{
                Debug.log("ServiceWorker registration failed: ", err);
            }
            );
        }
        ;
        const getRegistration = ()=>{
            return navigator.serviceWorker.ready;
        }
        ;
        return {
            registerServiceWorker,
            supported,
            getRegistration,
        };
    });
}
)(jQuery, _);
;(function($, _, undefined) {
    "use strict";
    ips.createModule("ips.utils.sockets", function() {
        let socketIo;
        const init = function() {
            if (!enabled()) {
                return;
            }
            ips.loader.get(['cloud/interface/socketio/socket.io.min.js']).then(function() {
                initializeSocketIo();
            });
        }
          , enabled = function() {
            return ips.getSetting('memberID') && ips.getSetting('socketEnabled') && ips.getSetting('page_token');
        }
          , initializeSocketIo = function() {
            socketIo = io(`${ips.getSetting('socketUrl')}/site-${ips.getSetting('siteId')}`, {
                transports: ['websocket'],
                forceNew: true,
                multiplex: false,
                query: {
                    token: ips.getSetting('page_token')
                }
            });
            socketIo.on('connect', _eventConnect);
            socketIo.on('message', _eventMessage);
            socketIo.on('connect_error', _eventConnectError);
            socketIo.on('disconnect', _eventDisconnect);
        }
          , send = function(event, data={}) {
            if (!enabled() || !socketIo) {
                return;
            }
            socketIo.emit(event, data);
        }
          , _eventMessage = function(data={}) {
            if (typeof data !== 'object' || data.event === undefined) {
                Debug.log('Invalid message data');
                return;
            }
            const {event, type=null, ...rest} = data;
            let eventType = '';
            if (type !== null) {
                eventType = `:${type}`;
            }
            $(document).trigger(`socket.${event}${eventType}`, rest);
        }
          , _eventConnect = function() {
            Debug.log("Connected to socket server");
            $(document).trigger('socket.connected');
        }
          , _eventConnectError = function() {
            Debug.log("Error connecting to socket server");
            $(document).trigger('socket.error');
        }
          , _eventDisconnect = function() {
            Debug.log("Disconnected from socket server");
            $(document).trigger('socket.disconnected');
        };
        return {
            init,
            enabled,
            send
        };
    });
}
)(jQuery, _);
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.time', function() {
        var _supportsLocale = null;
        var readable = function(timestamp) {
            var date = new Date();
            var time = date.getTime() / 1000;
            var dst = 0;
            var now = time + dst;
            var elapsed = now - timestamp;
            if (ips.getSetting('relativeDates')) {
                if (elapsed < 60) {
                    return ips.getString('time_just_now');
                } else if (elapsed < 3600) {
                    return ips.pluralize(ips.getString('time_minutes_ago'), Math.floor(elapsed / 60));
                } else if (elapsed < 5400) {
                    return ips.getString('time_1_hour_ago');
                } else if (elapsed < 86400) {
                    return ips.pluralize(ips.getString('time_hours_ago'), Math.floor(elapsed / 3600));
                }
            }
            var dateObj = new Date(timestamp * 1000);
            var format = localeTimeFormat($('html').attr('lang'));
            var time = formatTime(dateObj, format);
            var timeParts = ips.getString('time_at') ? [localeDateString(dateObj), ips.getString('time_at')] : [localeDateString(dateObj)];
            timeParts.push(time);
            return ips.getString('time_other', {
                time: timeParts.join(' ')
            });
        }
          , getDateFromInput = function(input) {
            if (!ips.utils.time.supportsHTMLDate()) {
                try {
                    var thisDate = null;
                    if (input.hasClass('hasDatepicker')) {
                        thisDate = input.datepicker('getDate');
                        Debug.log('hasDatePicker: ' + thisDate.toString() + '(' + thisDate.getTime() + ')');
                    } else {
                        thisDate = new Date(input.attr('value'));
                        Debug.log('no datepicker yet: ' + thisDate.toString() + '(' + thisDate.getTime() + ')');
                    }
                    return thisDate;
                } catch (err) {
                    return new Date(input.attr('value'));
                }
            } else {
                return new Date(input.val());
            }
        }
          , removeTimezone = function(date) {
            if (ips.utils.time.supportsHTMLDate()) {
                date.setTime(new Date(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate(),0,0,0).getTime());
            }
            var offset = date.getTimezoneOffset();
            var adjustedOffset = offset * 60000;
            if (offset > 0) {
                date.setTime(date.getTime() + adjustedOffset);
            } else {
                date.setTime(date.getTime() - adjustedOffset);
            }
            return date;
        }
          , isDST = function() {
            var today = new Date();
            var jan = new Date(today.getFullYear(),0,1);
            var jul = new Date(today.getFullYear(),6,1);
            var stdOffset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
            return today.getTimezoneOffset() < stdOffset;
        }
          , isValidDateObj = function(d) {
            if (Object.prototype.toString.call(d) !== "[object Date]") {
                return false;
            }
            return !isNaN(d.getTime());
        }
          , timestamp = function() {
            return Date.now();
        }
          , localeDateString = function(date, options) {
            if (!_.isBoolean(_supportsLocale)) {
                _supportsLocale = _checkLocaleSupport();
            }
            if (_supportsLocale && _.isObject(options) && $('html').attr('lang')) {
                return date.toLocaleDateString($('html').attr('lang'), options);
            } else if (_supportsLocale && $('html').attr('lang')) {
                return date.toLocaleDateString($('html').attr('lang'));
            } else {
                return date.toLocaleDateString();
            }
        }
          , supportsHTMLDate = function() {
            var i = document.createElement('input');
            i.setAttribute('type', 'date');
            return i.type !== 'text';
        }
          , formatTime = function(dateObj, localeFormat) {
            if (!_.isDate(dateObj)) {
                dateObj = timestamp();
            }
            var formatters = {
                "a": function(d) {
                    return ips.getString('day_' + d.getDay() + '_short');
                },
                "A": function(d) {
                    return ips.getString('day_' + d.getDay());
                },
                "d": function(d) {
                    var day = d.getDate().toString();
                    return ((day.length === 1) ? '0' : '') + day;
                },
                "e": function(d) {
                    var day = d.getDate().toString();
                    return ((day.length === 1) ? ' ' : '') + day;
                },
                "j": function(d) {
                    var day = d.getDate();
                    var month = d.getMonth();
                    if (month > 0) {
                        day += 31;
                    }
                    if (month > 1) {
                        day += 28;
                        if (d.getFullYear() % 4 == 0) {
                            day += 1;
                        }
                    }
                    if (month > 2) {
                        day += 31;
                    }
                    if (month > 3) {
                        day += 30;
                    }
                    if (month > 4) {
                        day += 31;
                    }
                    if (month > 5) {
                        day += 30;
                    }
                    if (month > 6) {
                        day += 31;
                    }
                    if (month > 7) {
                        day += 31;
                    }
                    if (month > 8) {
                        day += 30;
                    }
                    if (month > 9) {
                        day += 31;
                    }
                    if (month > 10) {
                        day += 30;
                    }
                    if (month > 11) {
                        day += 31;
                    }
                    return day.toString().padStart(3, '0');
                },
                "u": function(d) {
                    return d.getDay() + 1;
                },
                "w": function(d) {
                    return d.getDay();
                },
                "U": function(d) {
                    var firstSundayDate = 1;
                    var firstSunday = new Date(d.getFullYear(),0,firstSundayDate,0,0,0,0);
                    while (firstSunday.getDay() != 0) {
                        firstSundayDate += 1;
                        firstSunday = new Date(d.getFullYear(),0,firstSundayDate,0,0,0,0);
                    }
                    var now = d.getTime() / 1000;
                    var weekNumber = 0;
                    var timestamp = firstSunday.getTime() / 1000;
                    while (timestamp < now) {
                        weekNumber++;
                        timestamp += 604800;
                    }
                    weekNumber = weekNumber.toString();
                    return ((weekNumber.length === 1) ? '0' : '') + weekNumber;
                },
                "V": function(d) {
                    var firstApplicableDate = 1;
                    var firstApplicable = new Date(d.getFullYear(),0,firstApplicableDate,0,0,0,0);
                    while ([2, 3, 4, 5].indexOf(firstApplicable.getDay()) == -1) {
                        firstApplicableDate += 1;
                        firstApplicable = new Date(d.getFullYear(),0,firstApplicableDate,0,0,0,0);
                    }
                    var now = d.getTime() / 1000;
                    var weekNumber = 0;
                    var timestamp = firstApplicable.getTime() / 1000;
                    while (timestamp < now) {
                        weekNumber++;
                        timestamp += 604800;
                    }
                    weekNumber = weekNumber.toString();
                    return ((weekNumber.length === 1) ? '0' : '') + weekNumber;
                },
                "W": function(d) {
                    var firstMondayDate = 1;
                    var firstMonday = new Date(d.getFullYear(),0,firstMondayDate,0,0,0,0);
                    while (firstMonday.getDay() != 1) {
                        firstMondayDate += 1;
                        firstMonday = new Date(d.getFullYear(),0,firstMondayDate,0,0,0,0);
                    }
                    var now = d.getTime() / 1000;
                    var weekNumber = 0;
                    var timestamp = firstMonday.getTime() / 1000;
                    while (timestamp < now) {
                        weekNumber++;
                        timestamp += 604800;
                    }
                    return weekNumber;
                },
                "b": function(d) {
                    return ips.getString('month_' + d.getMonth() + '_short');
                },
                "B": function(d) {
                    return ips.getString('month_' + d.getMonth());
                },
                "OB": function(d) {
                    return ips.getString('month_' + d.getMonth());
                },
                "h": function(d) {
                    return ips.getString('month_' + d.getMonth() + '_short');
                },
                "m": function(d) {
                    var month = d.getMonth() + 1;
                    var realMonth = month.toString();
                    return ((realMonth.length === 1) ? '0' : '') + realMonth;
                },
                "C": function(d) {
                    return parseInt((d.getFullYear() / 100).toString().substr(0, 2));
                },
                "g": function(d) {
                    var year = d.getFullYear();
                    if (d.getMonth() == 0 && d.getDate() < 3 && d.getDay() < 2) {
                        year--;
                    }
                    return parseInt(year.toString().substr(0, 2));
                },
                "G": function(d) {
                    var year = d.getFullYear();
                    if (d.getMonth() == 0 && d.getDate() < 3 && d.getDay() < 2) {
                        year--;
                    }
                    return year;
                },
                "y": function(d) {
                    return parseInt(d.getFullYear().toString().substr(0, 2));
                },
                "Y": function(d) {
                    return d.getFullYear();
                },
                "H": function(d) {
                    var hrs = d.getHours().toString();
                    return ((hrs.length === 1) ? '0' : '') + hrs;
                },
                "k": function(d) {
                    var hrs = d.getHours();
                    return ((hrs.length === 1) ? ' ' : '') + hrs;
                },
                "I": function(d) {
                    var hrs = d.getHours();
                    hrs = (hrs > 12) ? hrs - 12 : hrs;
                    if (hrs == 0) {
                        hrs = 12;
                    }
                    return ((hrs.length === 1) ? '0' : '') + hrs;
                },
                "l": function(d) {
                    var hrs = d.getHours();
                    hrs = (hrs > 12) ? hrs - 12 : hrs;
                    if (hrs == 0) {
                        hrs = 12;
                    }
                    return ((hrs.length === 1) ? ' ' : '') + hrs;
                },
                "M": function(d) {
                    var mins = d.getMinutes().toString();
                    return ((mins.length === 1) ? '0' : '') + mins;
                },
                "N": function(d) {
                    return d.getMinutes();
                },
                "p": function(d) {
                    var hrs = d.getHours();
                    if (!_.isFunction(localeFormat.meridiem)) {
                        return '';
                    }
                    return localeFormat.meridiem(hrs, false);
                },
                "P": function(d) {
                    var hrs = d.getHours();
                    if (!_.isFunction(localeFormat.meridiem)) {
                        return '';
                    }
                    return localeFormat.meridiem(hrs, true);
                },
                "r": function(d) {
                    var hrs = d.getHours();
                    hrs = (hrs >= 12) ? hrs - 12 : hrs;
                    var mins = d.getMinutes().toString();
                    var seconds = d.getSeconds().toString();
                    return ((hrs.length === 1) ? '0' : '') + hrs + ':' + ((mins.length === 1) ? '0' : '') + mins + ':' + ((seconds.length === 1) ? '0' : '') + seconds;
                },
                "R": function(d) {
                    var hrs = d.getHours().toString();
                    var mins = d.getMinutes().toString();
                    return ((hrs.length === 1) ? '0' : '') + hrs + ':' + ((mins.length === 1) ? '0' : '') + mins;
                },
                "S": function(d) {
                    var seconds = d.getSeconds().toString();
                    return ((seconds.length === 1) ? '0' : '') + seconds;
                },
                "T": function(d) {
                    var hrs = d.getHours().toString();
                    var mins = d.getMinutes().toString();
                    var seconds = d.getSeconds().toString();
                    return ((hrs.length === 1) ? '0' : '') + hrs + ':' + ((mins.length === 1) ? '0' : '') + mins + ':' + ((seconds.length === 1) ? '0' : '') + seconds;
                },
                "X": function(d) {
                    return d.toLocaleTimeString();
                },
                "z": function(d) {
                    var matches = d.toString().match(/GMT([+\-]\d{4}) \((.+)\)$/);
                    return matches[1];
                },
                "Z": function(d) {
                    var matches = d.toString().match(/GMT([+\-]\d{4}) \((.+)\)$/);
                    return matches[2];
                },
                "c": function(d) {
                    var hrs = d.getHours().toString();
                    var mins = d.getMinutes().toString();
                    var seconds = d.getSeconds().toString();
                    return ips.getString('day_' + d.getMonth() + '_short') + ' ' + ips.getString('month_' + d.getMonth() + '_short') + ' ' + d.getDate().toString() + ' ' + ((hrs.length === 1) ? '0' : '') + hrs + ':' + ((mins.length === 1) ? '0' : '') + mins + ':' + ((seconds.length === 1) ? '0' : '') + seconds + ' ' + d.getFullYear().toString();
                },
                "D": function(d) {
                    var month = d.getMonth().toString();
                    var day = d.getDate().toString();
                    return ((month.length === 1) ? '0' : '') + month + '/' + ((day.length === 1) ? '0' : '') + day + '/' + parseInt(d.getFullYear().toString().substr(0, 2)).toString();
                },
                "F": function(d) {
                    var month = d.getMonth().toString();
                    var day = d.getDate().toString();
                    return d.getFullYear().toString() + '-' + ((month.length === 1) ? '0' : '') + month + '-' + ((day.length === 1) ? '0' : '') + day;
                },
                "s": function(d) {
                    return parseInt(d.getTime() / 1000);
                },
                "x": function(d) {
                    return d.toLocaleDateString(0);
                },
                "n": function(d) {
                    return "\n";
                },
                "t": function(d) {
                    return "\t";
                },
                "%": function(d) {
                    return '%';
                }
            };
            return localeFormat.format.replace(/%([aAdejuwUVWbBhmCgGyYHkIlMNPprRSTXzZcDFsxnt%]|OB)/g, function(match0, match1) {
                if (formatters[match1]) {
                    return formatters[match1](dateObj);
                }
            });
        }
          , localeTimeFormat = function(locale) {
            var locales = _getLocaleTimeFormat();
            var language = locale.split('-');
            if (!_.isUndefined(locales[locale.toLowerCase()])) {
                return locales[locale.toLowerCase()];
            } else if (!_.isUndefined(locales[language[0].toLowerCase()])) {
                return locales[language[0].toLowerCase()];
            } else {
                return locales['en'];
            }
        }
          , _checkLocaleSupport = function() {
            try {
                new Date().toLocaleDateString("i");
            } catch (e) {
                return e.name === "RangeError";
            }
            return false;
        }
          , _getLocaleTimeFormat = function() {
            var defaultMeridiem = function(hour, lower) {
                if (hour < 12) {
                    return (lower ? 'am' : 'AM');
                } else {
                    return (lower ? 'pm' : 'PM');
                }
            };
            return {
                'af': {
                    format: '%H:%M'
                },
                'ar-ma': {
                    format: '%H:%M'
                },
                'ar-sa': {
                    format: '%H:%M'
                },
                'ar-tn': {
                    format: '%H:%M'
                },
                'ar': {
                    format: '%H:%M'
                },
                'az': {
                    format: '%H:%M'
                },
                'be': {
                    format: '%H:%M'
                },
                'bg': {
                    format: '%k:%M'
                },
                'bn': {
                    format: '%p %l:%M সময়',
                    meridiem: function(hour) {
                        if (hour < 4) {
                            return 'রাত';
                        } else if (hour < 10) {
                            return 'সকাল';
                        } else if (hour < 17) {
                            return 'দুপুর';
                        } else if (hour < 20) {
                            return 'বিকেল';
                        } else {
                            return 'রাত';
                        }
                    }
                },
                'bo': {
                    format: '%p %l:%M',
                    meridiem: function(hour) {
                        if (hour < 4) {
                            return 'མཚན་མོ';
                        } else if (hour < 10) {
                            return 'ཞོགས་ཀས';
                        } else if (hour < 17) {
                            return 'ཉིན་གུང';
                        } else if (hour < 20) {
                            return 'དགོང་དག';
                        } else {
                            return 'མཚན་མོ';
                        }
                    }
                },
                'br': {
                    format: '%le%M %p',
                    meridiem: defaultMeridiem
                },
                'bs': {
                    format: '%k:%M'
                },
                'ca': {
                    format: '%k:%M'
                },
                'cs': {
                    format: '%k:%M'
                },
                'cv': {
                    format: '%H:%M'
                },
                'cy': {
                    format: '%H:%M'
                },
                'da': {
                    format: '%H:%M'
                },
                'de-at': {
                    format: '%H:%M'
                },
                'de': {
                    format: '%H:%M'
                },
                'el': {
                    format: '%l:%M %p',
                    meridiem: function(hour, lower) {
                        if (hour > 11) {
                            return lower ? 'μμ' : 'ΜΜ';
                        } else {
                            return lower ? 'πμ' : 'ΠΜ';
                        }
                    }
                },
                'en-au': {
                    format: '%l:%M %p',
                    meridiem: defaultMeridiem
                },
                'en-ca': {
                    format: '%l:%M %p',
                    meridiem: defaultMeridiem
                },
                'en-gb': {
                    format: '%H:%M'
                },
                'en': {
                    format: '%l:%M %p',
                    meridiem: defaultMeridiem
                },
                'eo': {
                    format: '%H:%M'
                },
                'es': {
                    format: '%k:%M'
                },
                'et': {
                    format: '%k:%M'
                },
                'eu': {
                    format: '%H:%M'
                },
                'fa': {
                    format: '%H:%M'
                },
                'fi': {
                    format: '%H.%M'
                },
                'fo': {
                    format: '%H:%M'
                },
                'fr-ca': {
                    format: '%H:%M'
                },
                'fr': {
                    format: '%H:%M'
                },
                'fy': {
                    format: '%H:%M'
                },
                'gl': {
                    format: '%k:%M'
                },
                'he': {
                    format: '%H:%M'
                },
                'hi': {
                    format: '%p %l:%M बजे',
                    meridiem: function(hour) {
                        if (hour < 4) {
                            return 'रात';
                        } else if (hour < 10) {
                            return 'सुबह';
                        } else if (hour < 17) {
                            return 'दोपहर';
                        } else if (hour < 20) {
                            return 'शाम';
                        } else {
                            return 'रात';
                        }
                    }
                },
                'hr': {
                    format: '%k:%M'
                },
                'hu': {
                    format: '%k:%M'
                },
                'hy-am': {
                    format: '%H:%M'
                },
                'id': {
                    format: '%H.%M'
                },
                'is': {
                    format: '%k:%M'
                },
                'it': {
                    format: '%H:%M'
                },
                'ja': {
                    format: '%p%l時%N分',
                    meridiem: function(hour) {
                        if (hour < 12) {
                            return '午前';
                        } else {
                            return '午後';
                        }
                    }
                },
                'jv': {
                    format: '%H.%M'
                },
                'ka': {
                    format: '%l:%M %p',
                    meridiem: defaultMeridiem
                },
                'km': {
                    format: '%H:%M'
                },
                'ko': {
                    format: '%p %l시 %N분',
                    meridiem: function(hour) {
                        return hour < 12 ? '오전' : '오후';
                    }
                },
                'lb': {
                    format: '%k:%M Auer'
                },
                'lt': {
                    format: '%H:%M'
                },
                'lv': {
                    format: '%H:%M'
                },
                'me': {
                    format: '%k:%M'
                },
                'mk': {
                    format: '%k:%M'
                },
                'ml': {
                    format: '%p %l:%M -നു',
                    meridiem: function(hour) {
                        if (hour < 4) {
                            return 'രാത്രി';
                        } else if (hour < 12) {
                            return 'രാവിലെ';
                        } else if (hour < 17) {
                            return 'ഉച്ച കഴിഞ്ഞ്';
                        } else if (hour < 20) {
                            return 'വൈകുന്നേരം';
                        } else {
                            return 'രാത്രി';
                        }
                    }
                },
                'mr': {
                    format: '%p %l:%M वाजता',
                    meridiem: function(hour) {
                        if (hour < 4) {
                            return 'रात्री';
                        } else if (hour < 10) {
                            return 'सकाळी';
                        } else if (hour < 17) {
                            return 'दुपारी';
                        } else if (hour < 20) {
                            return 'सायंकाळी';
                        } else {
                            return 'रात्री';
                        }
                    }
                },
                'ms-my': {
                    format: '%H.%M'
                },
                'ms': {
                    format: '%H.%M'
                },
                'my': {
                    format: '%H:%M'
                },
                'nb': {
                    format: '%k.%M'
                },
                'ne': {
                    format: '%pको %l:%M बजे',
                    meridiem: function(hour) {
                        if (hour < 3) {
                            return 'राती';
                        } else if (hour < 10) {
                            return 'बिहान';
                        } else if (hour < 15) {
                            return 'दिउँसो';
                        } else if (hour < 18) {
                            return 'बेलुका';
                        } else if (hour < 20) {
                            return 'साँझ';
                        } else {
                            return 'राती';
                        }
                    }
                },
                'nl': {
                    format: '%H:%M'
                },
                'nn': {
                    format: '%H:%M'
                },
                'pl': {
                    format: '%H:%M'
                },
                'pt-br': {
                    format: '%H:%M'
                },
                'pt': {
                    format: '%H:%M'
                },
                'ro': {
                    format: '%k:%M'
                },
                'ru': {
                    format: '%H:%M'
                },
                'si': {
                    format: '%P %l:%M',
                    meridiem: function(hours, lower) {
                        if (hours > 11) {
                            return lower ? 'ප.ව.' : 'පස් වරු';
                        } else {
                            return lower ? 'පෙ.ව.' : 'පෙර වරු';
                        }
                    }
                },
                'sk': {
                    format: '%k:%M'
                },
                'sl': {
                    format: '%k:%M'
                },
                'sq': {
                    format: '%H:%M'
                },
                'sr-cyrl': {
                    format: '%k:%M'
                },
                'sr': {
                    format: '%k:%M'
                },
                'sv': {
                    format: '%H:%M'
                },
                'ta': {
                    format: '%H:%M'
                },
                'th': {
                    format: '%k นาฬิกา %N นาที'
                },
                'tl-ph': {
                    format: '%H:%M'
                },
                'tr': {
                    format: '%H:%M'
                },
                'tzl': {
                    format: '%H.%M'
                },
                'tzm-latn': {
                    format: '%H:%M'
                },
                'tzm': {
                    format: '%H:%M'
                },
                'uk': {
                    format: '%H:%M'
                },
                'uz': {
                    format: '%H:%M'
                },
                'vi': {
                    format: '%H:%M'
                },
                'zh-cn': {
                    format: '%p%l点%M分',
                    meridiem: defaultMeridiem
                },
                'zh-tw': {
                    format: '%p%l點%M分',
                    meridiem: defaultMeridiem
                }
            }
        };
        return {
            readable: readable,
            localeDateString: localeDateString,
            isValidDateObj: isValidDateObj,
            timestamp: timestamp,
            supportsHTMLDate: supportsHTMLDate,
            localeTimeFormat: localeTimeFormat,
            formatTime: formatTime,
            getDateFromInput: getDateFromInput,
            removeTimezone: removeTimezone
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.url', function() {
        var _skipped = ['s'], _store = {}, _origin;
        var init = function(queryString) {}
          , getParam = function(name, url) {
            return parseUri(url || window.location.href).queryKey[name];
        }
          , getPageNumber = function(param, url) {
            if (param == 'page') {
                var parsedurl = parseUri(url || window.location.href);
                if (parsedurl.path.match(/\/index\.php/)) {
                    var pageNum = null;
                    $.each(parsedurl.queryKey, function(key, value) {
                        if (pageNum === null && key.match(/\/page\/\d+?(\/|$)/) && !value) {
                            var match = key.match(/\/page\/(\d+?)(\/|$)/);
                            if (match !== null && !_.isUndefined(match[1])) {
                                pageNum = parseInt(match[1]);
                            }
                        }
                    });
                    if (pageNum !== null) {
                        return pageNum;
                    }
                } else {
                    var matches = parsedurl.path.match(/\/page\/(\d+?)\//);
                    if (matches !== null && !_.isUndefined(matches)) {
                        return parseInt(matches[1]);
                    }
                }
            }
            var paramPage = this.getParam(param, url || window.location.href);
            return !_.isUndefined(paramPage) ? parseInt(paramPage) : 1;
        }
          , pageParamToPath = function(url, name, number) {
            var uriObject = getURIObject(url);
            uriObject.queryKey = _.pick(uriObject.queryKey, function(value, key) {
                return (key != name);
            });
            if (uriObject.path.match(/\/index\.php/)) {
                var f = null;
                $.each(uriObject.queryKey, function(key, value) {
                    if (f === null && key.match(/^\//) && !value) {
                        f = key;
                    }
                });
                if (f !== null) {
                    uriObject.queryKey = _.omit(uriObject.queryKey, f);
                    var match = f.match(new RegExp('/' + name + '/\\d+?/$'));
                    if (match !== null && !_.isUndefined(match[0])) {
                        f = f.replace(new RegExp(match[0]), '/');
                    }
                    var newKey = {};
                    newKey[(number > 1) ? decodeURI(f) + name + '/' + number + '/' : f] = '';
                    uriObject.queryKey = _.extend(newKey, uriObject.queryKey);
                }
            } else {
                var match = uriObject.path.match(new RegExp('/' + name + '/\\d+?/$'));
                if (match !== null && !_.isUndefined(match[0])) {
                    uriObject.path = uriObject.path.replace(new RegExp(match[0]), '/');
                }
                if (number > 1) {
                    uriObject.path += name + '/' + number + '/';
                }
            }
            return rebuildUriObject(uriObject);
        }
          , removeParam = function(name, url) {
            return this.removeParams([name], url);
        }
          , removeParams = function(name, url) {
            var uriObject = parseUri(url || window.location.href);
            uriObject.queryKey = _.pick(uriObject.queryKey, function(value, key) {
                return (jQuery.inArray(key, name) == -1);
            });
            return this.rebuildUriObject(uriObject);
        }
          , rebuildUriObject = function(uriObject) {
            var returnUrl = uriObject.protocol + '://' + uriObject.host + ((uriObject.port !== '') ? ':' + uriObject.port : '') + uriObject.path;
            if (_.keys(uriObject.queryKey).length) {
                var qsParam = '?';
                _.each(uriObject.queryKey, function(value, key) {
                    if (value) {
                        returnUrl = returnUrl + qsParam + key + '=' + value;
                    } else {
                        returnUrl = returnUrl + qsParam + key;
                    }
                    qsParam = '&';
                })
            }
            return returnUrl;
        }
          , getURIObject = function(url) {
            return parseUri(url || window.location.href);
        }
          , getOrigin = function() {
            if (!_origin) {
                var url = getURIObject();
                _origin = url.protocol + '://' + url.host + ((url.port !== '') ? ':' + url.port : '');
            }
            return _origin;
        };
        function parseUri(str) {
            if ('URL'in window) {
                try {
                    if (str.indexOf('//') === 0) {
                        str = location.protocol + str;
                    }
                    var o = new URL(str);
                    var uri = {
                        'source': o.href,
                        'protocol': o.protocol.substring(0, (o.protocol.length - 1)),
                        'userInfo': (o.username ? o.username : '') + ((o.username && o.password) ? ':' : '') + (o.password ? o.password : ''),
                        'user': o.username,
                        'password': o.password,
                        'host': o.hostname,
                        'port': o.port,
                        'relative': o.pathname + (o.search ? o.search : ''),
                        'path': o.pathname,
                        'directory': '',
                        'file': '',
                        'query': o.search.substring(1),
                        'anchor': o.hash,
                        'queryKey': {}
                    };
                    uri.authority = uri.userInfo + (uri.userInfo ? '@' : '') + uri.host;
                    o.searchParams.forEach(function(v, k) {
                        uri.queryKey[k] = v;
                    });
                    var urlBits = uri.path.split('/');
                    uri.file = urlBits.pop();
                    uri.directory = urlBits.join('/');
                    return uri;
                } catch (err) {
                    Debug.log("Failed to parse URL: " + str + " ; " + err);
                }
            }
            var o = parseUri.options
              , m = o.parser[o.strictMode ? "strict" : "loose"].exec(str)
              , uri = {}
              , i = 14;
            while (i--)
                uri[o.key[i]] = m[i] || "";
            uri[o.q.name] = {};
            uri[o.key[12]].replace(o.q.parser, function($0, $1, $2) {
                if ($1)
                    uri[o.q.name][$1] = $2;
            });
            return uri;
        }
        ;parseUri.options = {
            strictMode: false,
            key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
            q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
            },
            parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
            }
        };
        return {
            getPageNumber: getPageNumber,
            getParam: getParam,
            removeParam: removeParam,
            removeParams: removeParams,
            getURIObject: getURIObject,
            getOrigin: getOrigin,
            rebuildUriObject: rebuildUriObject,
            pageParamToPath: pageParamToPath
        };
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.createModule('ips.utils.validate', function(options) {
        var formats = {
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i,
            url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
            alphanum: /^\w+$/,
            integer: /^\d+$/,
            number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
            creditcard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            hex: /^[0-9a-f]+$/i
        };
        var validators = {
            maxlength: function(val, max) {
                return val.length <= max;
            },
            minlength: function(val, min) {
                return val.length >= min;
            },
            rangelength: function(val, min, max) {
                return validators.maxlength(val, max) && validators.minlength(val, min);
            },
            min: function(val, min) {
                return Number(val) >= min;
            },
            max: function(val, max) {
                return Number(val) <= max;
            },
            range: function(val, min, max) {
                return validators.min(val, min) && validators.max(val, max);
            },
            required: function(val) {
                return val.length > 0
            },
            regex: function(val, regex) {
                return new RegExp(regex).test(val);
            },
            format: function(val, format) {
                return new RegExp(formats[format]).test(val);
            },
            remote: function(val, url) {
                var deferred = $.Deferred();
                ips.getAjax()(url, {
                    dataType: 'json',
                    data: {
                        input: encodeURI(val)
                    }
                }).done(function(response) {
                    if (response.result == 'ok') {
                        deferred.resolve();
                    } else {
                        deferred.reject(response.message || null);
                    }
                }).fail(function(jqHXR, textStatus) {
                    deferred.reject(textStatus);
                });
                return deferred.promise();
            }
        };
        var addFormat = function(name, format) {
            formats[name] = format;
        }
          , addValidator = function(name, fn) {
            validators[name] = fn;
        };
        var isUrl = function(url) {
            return validators.regex(url, formats.url);
        }
          , isAllowedUrl = function(url) {
            var returnValue;
            returnValue = true;
            if (ips.getSetting('blacklist')) {
                for (var i in ips.getSetting('blacklist')) {
                    var blacklistUrl = ips.getSetting('blacklist')[i];
                    blacklistUrl = escapeRegExp(blacklistUrl);
                    blacklistUrl = blacklistUrl.replace(/\\\*/g, '(.+?)');
                    var index = url.search(new RegExp(blacklistUrl,'ig'));
                    if (index >= 0) {
                        returnValue = false;
                        break;
                    }
                }
            }
            if (ips.getSetting('whitelist')) {
                returnValue = false;
                for (var i in ips.getSetting('whitelist')) {
                    var whitelistUrl = ips.getSetting('whitelist')[i];
                    whitelistUrl = escapeRegExp(whitelistUrl);
                    whitelistUrl = whitelistUrl.replace(/\\\*/g, '(.+?)');
                    var index = url.search(new RegExp(whitelistUrl,'ig'));
                    if (index >= 0) {
                        returnValue = true;
                        break;
                    }
                }
            }
            return returnValue;
        }
          , isEmail = function(email) {
            return validators.regex(email, formats.email);
        };
        var validate = function(field, conditions, ignoreHTML5) {
            if (!ignoreHTML5) {
                conditions = _.extend(_getAutomaticConditions(field), conditions || {});
            }
            if (!_.size(conditions)) {
                return true;
            }
            var validated = true;
            var messages = [];
            for (var i in conditions) {
                if (!_.isFunction(validators[i])) {
                    continue;
                }
                var value = field.val();
                var args = [];
                if (_.isObject(conditions[i])) {
                    args = _.values(conditions[i])
                    args.splice(0, 1);
                } else {
                    args = [conditions[i]];
                }
                args.unshift(value);
                if (validators[i].apply(this, args) !== true) {
                    validated = false;
                    messages.push({
                        condition: i,
                        message: _getMessage(i, args)
                    });
                }
            }
            return {
                result: validated,
                messages: messages
            }
        }
          , _getMessage = function(type, args) {
            return ips.pluralize(ips.getString('validation_' + type, {
                data: args
            }), [((type == 'rangelength') ? args[2] : args[1])]);
        }
          , _getAutomaticConditions = function(field) {
            var conditions = {};
            if (field.is('[required]')) {
                conditions.required = true;
            }
            if (field.is('input[type="number"], input[type="range"], input[type="email"], input[type="url"]')) {
                conditions.format = field.attr('type');
            }
            if (field.is('[max]')) {
                conditions.max = field.attr('max');
            }
            if (field.is('[min]')) {
                conditions.min = field.attr('min');
            }
            if (field.is('[pattern]')) {
                conditions.regex = field.attr('pattern');
            }
            return conditions;
        };
        return {
            isUrl: isUrl,
            isEmail: isEmail,
            addFormat: addFormat,
            addValidator: addValidator,
            validate: validate,
            isAllowedUrl: isAllowedUrl
        }
    });
}(jQuery, _));
var escapeRegExp;
(function() {
    var specials = ["-", "[", "]", "/", "{", "}", "(", ")", "*", "+", "?", ".", "\\", "^", "$", "|"]
      , regex = RegExp('[' + specials.join('\\') + ']', 'g');
    escapeRegExp = function(str) {
        return str.replace(regex, "\\$&");
    }
    ;
}());
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.stockart.pixabay', {
        initialize: function() {
            this.on('click', '.ipsPixabayImage', this.selectImage);
            this.on('focus', '[data-role="pixabaySearch"]', this.searchPixabay);
            this.on('blur', '[data-role="pixabaySearch"]', this.stopSearchPixabay);
            $('[data-role="pixabayResults"]').on('scroll', this.scrollEvent.bind(this));
            this.setup();
        },
        _typeTimer: null,
        _lastVal: '',
        _perPage: 20,
        _status: 'init',
        setup: function() {
            this.uploader = $(document).find('[data-ipsUploader-name="' + this.scope.attr('data-uploader') + '"]');
            this._doSearch(null);
        },
        searchPixabay: function(e) {
            this._typeTimer = setInterval(_.bind(this._typing, this), 1500);
        },
        scrollEvent: function(e) {
            var scrollScope = $('[data-role="pixabayResults"]');
            var scrollHeight = scrollScope[0].scrollHeight;
            var distanceFromBottom = scrollHeight - scrollScope.height() - scrollScope.scrollTop();
            if (this._status != 'ready') {
                return;
            }
            if (distanceFromBottom <= 150) {
                this._status = 'loading';
                var offset = parseInt(this.scope.find('[data-role="pixabayMore"]').attr('data-offset'));
                this.scope.find('[data-role="pixabayMore"]').attr('data-offset', offset + this._perPage);
                this.scope.find('[data-role="pixabayMoreLoading"]').removeClass('ipsHide');
                this._doSearch(this._lastVal);
            }
        },
        stopSearchPixabay: function(e) {
            if (this._typeTimer) {
                clearInterval(this._typeTimer);
                this._typeTimer = null;
            }
        },
        _typing: function() {
            var textElem = this.scope.find('[data-role="pixabaySearch"]');
            if (this._lastVal == textElem.val()) {
                return;
            }
            this.scope.find('[data-role="pixabayMore"]').attr('data-offset', 0);
            this.scope.find('.ipsMenu_innerContent').animate({
                scrollTop: "0"
            }, 250);
            this._doSearch(textElem.val());
            this._lastVal = textElem.val();
        },
        _doSearch: function(value) {
            var resultsbox = this.scope.find('[data-role="pixabayLoading"]');
            var offset = parseInt(this.scope.find('[data-role="pixabayMore"]').attr('data-offset'));
            Debug.log(offset + ',' + this._perPage);
            resultsbox.addClass('ipsLoading');
            var _self = this;
            this._status = 'loading';
            ips.getAjax()(ips.getSetting('baseURL') + '?app=core&module=system&controller=pixabay&do=search&offset=' + offset + '&limit=' + this._perPage, {
                type: 'POST',
                data: {
                    'search': value
                }
            }).done(function(response) {
                var data = response;
                var result = (offset > 0) ? resultsbox.html() : '';
                var pos = 0;
                var gifsForThisRow = '';
                if (data.error) {
                    result = data.error;
                } else {
                    _.each(data.images, function(term) {
                        gifsForThisRow += ips.templates.render('core.editor.pixabayThumb', {
                            thumb: term.thumb,
                            url: term.url,
                            imgid: term.imgid
                        });
                        pos++;
                        if (pos == 3) {
                            result += ips.templates.render('core.editor.pixabayRow', {
                                images: gifsForThisRow
                            });
                            pos = 0;
                            gifsForThisRow = '';
                        }
                    });
                    Debug.log(data.pagination.total_count);
                    Debug.log(offset + _self._perPage);
                    if (offset > 0 || data.pagination.total_count > offset + _self._perPage) {
                        _self.scope.find('[data-role="pixabayMoreLoading"]').addClass('ipsHide');
                        _self._status = 'ready';
                    }
                    if (data.pagination.total_count <= offset + _self._perPage) {
                        _self.scope.find('[data-role="pixabayMoreLoading"]').addClass('ipsHide');
                        _self._status = 'done';
                    }
                }
                resultsbox.removeClass('ipsLoading').html(result);
            });
        },
        selectImage: function(e) {
            var image = $(e.target);
            var pluploadObj = this.uploader;
            pluploadObj.find('.ipsAttachment_loading').show();
            pluploadObj.find('.ipsAttachment_dropZoneSmall_info').hide();
            ips.getAjax()(ips.getSetting('baseURL') + '?app=core&module=system&controller=pixabay&do=getById&id=' + image.attr('data-id')).done(function(response) {
                var randomId = Math.random().toString(36).substring(7);
                var bstr = atob(response.content);
                var n = bstr.length;
                var u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                var file = new File([u8arr],response.filename,{
                    type: response.type
                });
                pluploadObj.trigger('injectFile', {
                    file: file
                });
            });
            this._status = 'init';
            this.scope.find('[data-role="pixabaySearch"]').val('');
            this.scope.find('[data-role="pixabayLoading"]').addClass('ipsLoading').html('');
            this.scope.trigger('closeDialog');
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.censorBlock', {
        initialize: function() {
            jQuery.expr[':'].icontains = function(a, i, m) {
                return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
            }
            ;
            this._words = $.parseJSON(this.scope.attr('data-censorBlockWords'));
            this._editorId = $(this.scope).data('editorid');
            this.on(document, 'editorWidgetInitialized', this.setup);
        },
        _editorId: null,
        _editor: null,
        setup: function(e) {
            this._editor = CKEDITOR.instances[this._editorId];
            this._form = $(this._editor.container.$).closest('form');
            this._form.on('submit', this.checkCensorBlock.bind(this));
        },
        checkCensorBlock: function(e) {
            this._editor.updateElement();
            var value = this._editor.getData();
            var found = [];
            this.scope.find('[data-role="editorCensorBlockMessageInternal"]').html(value);
            var display = this.scope.find('[data-role="editorCensorBlockMessageInternal"]');
            if (this._words.length) {
                $(display).html(XRegExp.replace($(display).html(), new RegExp("<(pre|blockquote).+?</\\1>","sig"), '')).html($(display).text());
                found = 0;
                var index = 0;
                var exactWords = [];
                var looseWords = [];
                var reggie = null;
                for (var i in this._words) {
                    var word = this._words[i]['word'];
                    var type = this._words[i]['type'];
                    if ($(value).is(':icontains("' + word + '")')) {
                        if (type == 'exact') {
                            exactWords.push(word);
                        } else {
                            looseWords.push(word);
                        }
                    }
                }
                if (looseWords.length && exactWords.length) {
                    reggie = new RegExp("((?:\\b|\\s|^)([^\\b]*" + looseWords.join('|') + "[^\\b]*)(?:\\b|\\s|$)|(?:\\b|\\s|^)(" + exactWords.join('|') + ")(?:\\b|\\s|$))","ig");
                } else if (looseWords.length) {
                    reggie = new RegExp("(?:\\b|\\s|^)([^\\b]*" + looseWords.join('|') + "[^\\b]*)(?:\\b|\\s|$)","ig");
                } else if (exactWords.length) {
                    reggie = new RegExp("(?:\\b|\\s|^)(" + exactWords.join('|') + ")(?:\\b|\\s|$)","ig");
                }
                Debug.log(reggie);
                if ($(value).text().match(reggie)) {
                    $(display).each(function() {
                        $(this).contents().filter(function() {
                            return this.nodeType === 3
                        }).each(function() {
                            $(this).replaceWith(_.escape(XRegExp.replace($(this).text(), reggie, '<mark class="ipsMatchWarning ipsType_bold ipsType_large ipsMatch' + (index) + '">' + "$1" + '</mark>')).replace(new RegExp("&lt;mark class=&quot;ipsMatchWarning ipsType_bold ipsType_large ipsMatch" + (index) + "&quot;&gt;",'ig'), "<mark class='ipsMatchWarning ipsType_bold ipsType_large ipsMatch" + (index) + "'>").replace(new RegExp("&lt;/mark&gt;",'ig'), "</mark>").trim());
                        });
                        found++;
                    });
                }
            }
            if (found > 0) {
                e.preventDefault();
                this._form.find('input[type="submit"],button[type="submit"]').prop('disabled', false);
                $(display).html(XRegExp.replace($(display).html(), new RegExp("((\s+?)?(\r\n|\r|\n)(\s+?)?){1,}","g"), '<br><br>'));
                this.scope.show();
                var elemPosition = ips.utils.position.getElemPosition(this.scope);
                var windowScroll = $(window).scrollTop();
                var viewHeight = $(window).height();
                if (elemPosition.absPos.top < windowScroll || elemPosition.absPos.top > (windowScroll + viewHeight)) {
                    $('html, body').animate({
                        scrollTop: elemPosition.absPos.top + 'px'
                    });
                }
                return false;
            } else {
                this.scope.find('[data-role="editorCensorBlockMessage"]').html('<div data-role="editorCensorBlockMessageInternal"></div>');
                this.scope.hide();
                return true;
            }
        },
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.code', {
        languageMap: {
            'clike': 'c',
            'coffeescript': 'coffee',
            'css': 'css',
            'dart': 'dart',
            'erlang': 'erlang',
            'go': 'go',
            'haskell': 'hs',
            'htmlmixed': 'html',
            'javascript': 'javascript',
            'lua': 'lua',
            'mumps': 'mumps',
            'pascal': 'pascal',
            'r': 'r',
            'perl': 'perl',
            'php': 'php',
            'python': 'py',
            'ruby': 'ruby',
            'scala': 'scala',
            'shell': 'bash',
            'sql': 'sql',
            'swift': 'swift',
            'tcl': 'tcl',
            'vbscript': 'vb',
            'vhdl': 'vhdl',
            'xml': 'xml',
            'xquery': 'xq',
            'yaml': 'yaml',
            'stex': 'latex'
        },
        instance: null,
        initialize: function() {
            this.setup();
            this.on('click', '.cEditorURLButtonInsert', this.formSubmit);
            this.on('change', '[data-role="codeModeSelect"]', this.changeMode);
        },
        setup: function() {
            var self = this;
            ips.loader.get(['core/interface/codemirror/diff_match_patch.js', 'core/interface/codemirror/codemirror.js']).then(function() {
                var selectedMode = '';
                for (var i in self.languageMap) {
                    if (self.languageMap[i] == self.scope.find('[data-role="codeModeSelect"]').attr('data-codeLanguage')) {
                        selectedMode = i;
                        break;
                    }
                }
                self.scope.find('[data-role="codeModeSelect"]').empty();
                for (var i in CodeMirror.modes) {
                    var languageName = ips.getString('editor_code_' + i);
                    if (!languageName) {
                        languageName = i.toUpperCase();
                    }
                    var option = $('<option/>').attr('name', i).text(languageName);
                    if (selectedMode == i) {
                        option.attr('selected', 'selected');
                    }
                    self.scope.find('[data-role="codeModeSelect"]').append(option);
                }
                self.instance = CodeMirror.fromTextArea(document.getElementById('elCodeInput' + self.scope.attr('data-randomstring')), {
                    autofocus: true,
                    mode: selectedMode,
                    lineWrapping: true
                });
                self.instance.on("beforeChange", function(codemirrorInstance, changeObj) {
                    var newText = changeObj.text;
                    var modified = false;
                    _.each(changeObj.text, function(text, index) {
                        if (text.match(/[\ufeff]/g)) {
                            modified = true;
                            newText[index] = text.replace(/[\ufeff]/g, '');
                        }
                    });
                    if (modified) {
                        changeObj.update(changeObj.from, changeObj.to, newText);
                    }
                });
                self.scope.find('[data-role="codeLoading"]').remove();
                self.scope.find('[data-role="codeContainer"]').removeClass('ipsLoading');
            });
        },
        changeMode: function(e) {
            this.instance.setOption('mode', this.scope.find('[data-role="codeModeSelect"] option:selected').attr('name'));
        },
        formSubmit: function(e) {
            e.preventDefault();
            $(e.target).prop('disabled', true);
            this.insertCode(e);
        },
        insertCode: function(e) {
            var value = this.instance.getValue();
            var editor = CKEDITOR.instances[$(this.scope).data('editorid')];
            if (this.scope.find('[data-role="codeModeSelect"] option:selected').attr('name') == 'null') {
                var element = CKEDITOR.dom.element.createFromHtml("<pre class='ipsCode'></pre>");
            } else {
                var lang = '';
                for (var i in this.languageMap) {
                    if (i == this.scope.find('[data-role="codeModeSelect"] option:selected').attr('name')) {
                        lang = 'lang-' + this.languageMap[i];
                        break;
                    }
                }
                var element = CKEDITOR.dom.element.createFromHtml("<pre class='ipsCode prettyprint " + lang + "'></pre>");
            }
            element.setText(value);
            this.scope.find('textarea').val('');
            editor.insertElement(element);
            editor.widgets.initOn(element, 'ipscode');
            this.trigger('closeDialog');
            $(document).trigger('contentChange', [$(element.$)]);
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.codePreview', {
        _origin: '',
        initialize: function() {
            this.on('click', '[data-action="preview"]', this.fetchPreview);
        },
        fetchPreview: function(data) {
            var scope = $(this.scope);
            $('#' + scope.attr('data-name') + '_preview').addClass('ipsLoading').html('');
            ips.getAjax()(scope.attr('data-preview-url'), {
                type: 'POST',
                data: {
                    'value': scope.find('textarea').data('CodeMirrorInstance').getValue()
                }
            }).done(function(response) {
                $('#' + scope.attr('data-name') + '_preview').removeClass('ipsLoading').html(response);
            });
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.customtags', {
        editorWrap: null,
        editorSidebar: null,
        editorSidebarHeader: null,
        editorSidebarList: null,
        initialize: function() {
            this.on('click', '[data-tagKey]', this.insertTag);
            this.on('click', '[data-action="tagsToggle"]', this.toggleSidebar);
            this.setup();
        },
        setup: function() {
            var self = this;
            this.editorWrap = this.scope.find('[data-role="editor"]');
            this.editorSidebar = this.scope.find('.ipsComposeArea_sidebar');
            this.editorSidebarList = this.editorSidebar.find('[data-role="tagsList"]');
            this.editorSidebarHeader = this.editorSidebar.find('[data-role="tagsHeader"]');
            this.reloadTags();
            setInterval(function() {
                var editorHeight = self.editorWrap.outerHeight();
                var headerHeight = self.editorSidebarHeader.outerHeight();
                self.editorSidebarList.css({
                    height: (editorHeight - headerHeight) + 'px'
                });
            }, 300);
        },
        toggleSidebar: function(e) {
            e.preventDefault();
            if (this.editorSidebar.hasClass('ipsComposeArea_sidebarOpen')) {
                this.editorSidebar.removeClass('ipsComposeArea_sidebarOpen').addClass('ipsComposeArea_sidebarClosed');
                ips.utils.cookie.unset('tagSidebar');
            } else {
                this.editorSidebar.removeClass('ipsComposeArea_sidebarClosed').addClass('ipsComposeArea_sidebarOpen');
                ips.utils.cookie.set('tagSidebar', true, true);
            }
        },
        insertTag: function(e) {
            var content = $(e.currentTarget).attr('data-tagKey');
            if (this.scope.attr('data-tagFieldType') == 'editor') {
                $('textarea[name="' + this.scope.attr('data-tagFieldID') + '"]').closest('[data-ipsEditor]').data('_editor').insertHtml(content);
            } else if (this.scope.attr('data-tagFieldType') == 'codemirror') {
                this.scope.trigger('codeMirrorInsert', {
                    elemID: $(e.currentTarget).closest('[data-codemirrorid]').attr('data-codemirrorid'),
                    tag: content
                });
            } else {
                var textField = $('#' + this.scope.attr('data-tagFieldID'));
                textField.focus().insertText(content, textField.getSelection().start, 'collapseToEnd');
            }
        },
        reloadTags: function() {
            if (this.scope.attr('data-tagSource')) {
                ips.getAjax()(this.scope.attr('data-tagSource')).done(function(response, status, jqXHR) {
                    $('ul[data-role="tagsList"]').html(response)
                });
            }
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.emoticons', {
        initialize: function() {
            this.on('click', '[data-emoji]', this.insertEmoji);
            this.on('menuItemSelected', '[data-role="skinToneMenu"]', this.changeSkinTone);
            this.on(document, 'menuOpened', this.menuOpened);
            this.on(document, 'menuClosed', this.menuClosed);
            this.on('focus', '[data-role="emoticonSearch"]', this.searchEmoticons);
            this.on('blur', '[data-role="emoticonSearch"]', this.stopSearchEmoticons);
            this.on('menuItemSelected', '[data-role="categoryTrigger"]', this.changeCategory);
            this.setup();
        },
        setup: function() {
            this.editorID = this.scope.attr('data-editorID');
            ips.utils.emoji.getEmoji(function(emoji, categories) {
                setTimeout(function() {
                    this._buildEmoji(emoji, ips.utils.cookie.get('emojiSkinTone'), null, categories);
                }
                .bind(this), 100);
            }
            .bind(this));
        },
        insertEmoji: function(e) {
            this.trigger($(document), 'insertEmoji', {
                editorID: this.editorID,
                emoji: $(e.currentTarget).attr('data-emoji'),
            });
            this.scope.find('[data-role="emoticonSearch"]').val('');
            this.scope.trigger('closeMenu');
            ips.utils.emoji.getEmoji(function(emoji, categories) {
                this._buildEmoji(emoji, ips.utils.cookie.get('emojiSkinTone'), null, categories);
            }
            .bind(this));
        },
        _buildEmoji: function(emoji, tone, search, categories) {
            ips.controller.cleanContentsOf(this.scope.find('.ipsMenu_innerContent'));
            var finalHtml = '';
            var categoryHtml = '';
            var pos = 0;
            var emojiForThisRow = '';
            var menuContent = [];
            if (!search && ips.utils.cookie.get('recentEmoji')) {
                var recentlyUsed = ips.utils.cookie.get('recentEmoji').split(',');
                var newRecentlyUsed = [];
                if (recentlyUsed.length) {
                    for (var i = 0; i < recentlyUsed.length; i++) {
                        if (ips.utils.emoji.canRender(recentlyUsed[i])) {
                            var displayHtml = ips.utils.emoji.preview(recentlyUsed[i]);
                            if (displayHtml) {
                                newRecentlyUsed.push(recentlyUsed[i]);
                                emojiForThisRow += ips.templates.render('core.editor.emoji', {
                                    display: displayHtml,
                                    name: null,
                                    code: recentlyUsed[i]
                                });
                                if (newRecentlyUsed.length == 8 || newRecentlyUsed.length == 16) {
                                    categoryHtml += ips.templates.render('core.editor.emoticonRow', {
                                        emoticons: emojiForThisRow
                                    });
                                    emojiForThisRow = '';
                                }
                            }
                        }
                    }
                    if (emojiForThisRow) {
                        categoryHtml += ips.templates.render('core.editor.emoticonRow', {
                            emoticons: emojiForThisRow
                        });
                    }
                    if (categoryHtml) {
                        finalHtml += ips.templates.render('core.editor.emoticonCategory', {
                            title: ips.getString('emoji-category-recent'),
                            categoryID: category,
                            emoticons: categoryHtml
                        });
                        categoryHtml = '';
                        emojiForThisRow = '';
                    }
                }
                if (newRecentlyUsed != recentlyUsed) {
                    ips.utils.cookie.set('recentEmoji', newRecentlyUsed.join(','), true);
                }
            }
            for (var i in categories) {
                var category = categories[i];
                var categoryCount = 0;
                for (var i = 0; i < emoji[category].length; i++) {
                    if (search) {
                        var match = false;
                        if (emoji[category][i].name.match(search)) {
                            match = true;
                        }
                        if (!match && emoji[category][i].shortNames) {
                            for (var j = 0; j < emoji[category][i].shortNames.length; j++) {
                                if (emoji[category][i].shortNames[j].match(search)) {
                                    match = true;
                                }
                            }
                        }
                        if (!match && emoji[category][i].ascii) {
                            for (var j = 0; j < emoji[category][i].ascii.length; j++) {
                                if (emoji[category][i].ascii[j].match(search)) {
                                    match = true;
                                }
                            }
                        }
                        if (!match) {
                            continue;
                        }
                    }
                    var codeToUse = emoji[category][i].code;
                    if (emoji[category][i].skinTone && tone && tone != 'none') {
                        codeToUse = ips.utils.emoji.tonedCode(codeToUse, tone);
                    }
                    emojiForThisRow += ips.templates.render('core.editor.emoji', {
                        display: ips.utils.emoji.preview(codeToUse),
                        name: ips.haveString('emoji-' + emoji[category][i].name) ? ips.getString('emoji-' + emoji[category][i].name) : emoji[category][i].name,
                        code: codeToUse
                    });
                    pos++;
                    categoryCount++;
                    if (pos == 8) {
                        categoryHtml += ips.templates.render('core.editor.emoticonRow', {
                            emoticons: emojiForThisRow
                        });
                        pos = 0;
                        emojiForThisRow = '';
                    }
                }
                if (!search) {
                    if (pos) {
                        categoryHtml += ips.templates.render('core.editor.emoticonRow', {
                            emoticons: emojiForThisRow
                        });
                    }
                    if (categoryHtml) {
                        var categoryTitle = ['smileys_emotion', 'people_body', 'animals_nature', 'food_drink', 'activities', 'travel_places', 'objects', 'symbols', 'flags'].indexOf(category) == -1 ? emoji[category][0].categoryName : ips.getString('emoji-category-' + category);
                        finalHtml += ips.templates.render('core.editor.emoticonCategory', {
                            title: categoryTitle,
                            categoryID: category,
                            emoticons: categoryHtml
                        });
                        categoryHtml = '';
                        pos = 0;
                        emojiForThisRow = '';
                        menuContent.push(ips.templates.render('core.editor.emoticonMenu', {
                            title: categoryTitle,
                            count: categoryCount,
                            categoryID: category
                        }));
                    }
                }
            }
            if (search) {
                this.scope.find('[data-role="categoryTrigger"]').hide();
                if (pos) {
                    categoryHtml += ips.templates.render('core.editor.emoticonRow', {
                        emoticons: emojiForThisRow
                    });
                }
                if (categoryHtml) {
                    finalHtml = ips.templates.render('core.editor.emoticonSearch', {
                        emoticons: categoryHtml
                    });
                } else {
                    finalHtml = ips.templates.render('core.editor.emoticonNoResults');
                }
            } else {
                this.scope.find('[data-role="categoryTrigger"]').show();
                this.scope.find('[data-role="categoryMenu"]').get(0).innerHTML = menuContent.join('');
            }
            this.scope.find('.ipsEmoticons_content').get(0).innerHTML = finalHtml;
            if (ips.getSetting('emoji_style') != 'disabled' && (ips.getSetting('emoji_style') != 'native' || ips.utils.emoji.canRender('1F44D-1F3FB'))) {
                this.scope.find("[data-role='skinToneMenu']").show();
                switch (tone) {
                case 'light':
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)) + String.fromCodePoint(parseInt('1F3FB', 16)));
                    break;
                case 'medium-light':
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)) + String.fromCodePoint(parseInt('1F3FC', 16)));
                    break;
                case 'medium':
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)) + String.fromCodePoint(parseInt('1F3FD', 16)));
                    break;
                case 'medium-dark':
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)) + String.fromCodePoint(parseInt('1F3FE', 16)));
                    break;
                case 'dark':
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)) + String.fromCodePoint(parseInt('1F3FF', 16)));
                    break;
                default:
                    this.scope.find("[data-role='skinToneIndicator']").text(String.fromCodePoint(parseInt('1F44D', 16)));
                    break;
                }
            }
        },
        changeSkinTone: function(e, data) {
            ips.utils.emoji.getEmoji(function(emoji, categories) {
                this._buildEmoji(emoji, data.selectedItemID, this._lastVal ? new RegExp(this._lastVal.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),'i') : null, categories);
            }
            .bind(this));
            ips.utils.cookie.set('emojiSkinTone', data.selectedItemID, true);
        },
        _typeTimer: null,
        _lastVal: '',
        menuOpened: function(e, data) {
            if (data.menu.attr('data-controller') == 'core.global.editor.emoticons') {
                setTimeout(function() {
                    this.scope.find('.ipsEmoticons_content').show();
                    this.scope.find('.ipsMenu_innerContent').css({
                        height: 'auto'
                    });
                    this.scope.find('[data-role="emoticonSearch"]').focus();
                }
                .bind(this), 100);
            }
        },
        menuClosed: function(e, data) {
            if (data.menu.attr('data-controller') == 'core.global.editor.emoticons') {
                var inner = this.scope.find('.ipsMenu_innerContent');
                var content = this.scope.find('.ipsEmoticons_content');
                inner.css({
                    height: content.outerHeight() + 'px'
                });
                content.hide();
            }
        },
        searchEmoticons: function(e) {
            this._typeTimer = setInterval(_.bind(this._typing, this), 200);
        },
        stopSearchEmoticons: function(e) {
            if (this._typeTimer) {
                clearInterval(this._typeTimer);
                this._typeTimer = null;
            }
        },
        _typing: function() {
            var textElem = this.scope.find('[data-role="emoticonSearch"]');
            if (this._lastVal == textElem.val()) {
                return;
            }
            if (textElem.val() == '') {
                this._clearSearch();
            } else {
                this._doSearch(textElem.val());
            }
            this._lastVal = textElem.val();
        },
        _clearSearch: function() {
            ips.utils.emoji.getEmoji(function(emoji, categories) {
                this._buildEmoji(emoji, ips.utils.cookie.get('emojiSkinTone'), null, categories);
            }
            .bind(this));
        },
        _doSearch: function(value) {
            ips.utils.emoji.getEmoji(function(emoji, categories) {
                this._buildEmoji(emoji, ips.utils.cookie.get('emojiSkinTone'), new RegExp(value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"),'i'), categories);
            }
            .bind(this));
        },
        changeCategory: function(e, data) {
            this.scope.find('.ipsMenu_innerContent').scrollTop(this.scope.find('.ipsMenu_innerContent').scrollTop() + this.scope.find('[data-categoryid="' + data.selectedItemID + '"]').position().top - 85);
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.giphy', {
        initialize: function() {
            this.on('click', '.ipsGiphyImage', this.insertImage);
            this.on('focus', '[data-role="giphySearch"]', this.searchGiphy);
            this.on('blur', '[data-role="giphySearch"]', this.stopSearchGiphy);
            $('[data-role="giphyResults"]').on('scroll', this.scrollEvent.bind(this));
            this.on(document, 'menuOpened', this.menuOpened);
            this.setup();
        },
        _typeTimer: null,
        _lastVal: '',
        _perPage: 30,
        _status: 'init',
        setup: function() {
            this._editorId = $(this.scope).data('editorid');
            this._editor = CKEDITOR.instances[this._editorId];
        },
        searchGiphy: function(e) {
            this._typeTimer = setInterval(_.bind(this._typing, this), 1500);
        },
        scrollEvent: function(e) {
            var scrollScope = $('[data-role="giphyResults"]');
            var scrollHeight = scrollScope[0].scrollHeight;
            var distanceFromBottom = scrollHeight - scrollScope.height() - scrollScope.scrollTop();
            if (this._status != 'ready') {
                return;
            }
            if (distanceFromBottom <= 150) {
                this._status = 'loading';
                var offset = parseInt(this.scope.find('[data-role="giphyMore"]').attr('data-offset'));
                this.scope.find('[data-role="giphyMore"]').attr('data-offset', offset + this._perPage);
                this.scope.find('[data-role="giphyMoreLoading"]').removeClass('ipsHide');
                this._doSearch(this._lastVal);
            }
        },
        stopSearchGiphy: function(e) {
            if (this._typeTimer) {
                clearInterval(this._typeTimer);
                this._typeTimer = null;
            }
        },
        _typing: function() {
            var textElem = this.scope.find('[data-role="giphySearch"]');
            if (this._lastVal == textElem.val()) {
                return;
            }
            this.scope.find('[data-role="giphyMore"]').attr('data-offset', 0);
            this.scope.find('.ipsMenu_innerContent').animate({
                scrollTop: "0"
            }, 250);
            this._doSearch(textElem.val());
            this._lastVal = textElem.val();
        },
        _doSearch: function(value) {
            var resultsbox = this.scope.find('[data-role="giphyLoading"]');
            var offset = parseInt(this.scope.find('[data-role="giphyMore"]').attr('data-offset'));
            Debug.log(offset + ',' + this._perPage);
            resultsbox.addClass('ipsLoading');
            var _self = this;
            this._status = 'loading';
            ips.getAjax()(this._editor.config.controller + '&do=giphy&offset=' + offset + '&limit=' + this._perPage, {
                type: 'POST',
                data: {
                    'search': value
                }
            }).done(function(response) {
                var data = response;
                var result = (offset > 0) ? resultsbox.html() : '';
                var pos = 0;
                var gifsForThisRow = '';
                if (data.error) {
                    result = data.error;
                } else {
                    _.each(data.images, function(term) {
                        gifsForThisRow += ips.templates.render('core.editor.giphyThumb', {
                            thumb: term.thumb,
                            url: term.url,
                            title: term.title
                        });
                        pos++;
                        if (pos == 3) {
                            result += ips.templates.render('core.editor.giphyRow', {
                                gifs: gifsForThisRow
                            });
                            pos = 0;
                            gifsForThisRow = '';
                        }
                    });
                    Debug.log(data.pagination.total_count);
                    Debug.log(offset + _self._perPage);
                    if (offset > 0 || data.pagination.total_count > offset + _self._perPage) {
                        _self.scope.find('[data-role="giphyMoreLoading"]').addClass('ipsHide');
                        _self._status = 'ready';
                    }
                    if (data.pagination.total_count <= offset + _self._perPage) {
                        _self.scope.find('[data-role="giphyMoreLoading"]').addClass('ipsHide');
                        _self._status = 'done';
                    }
                }
                resultsbox.removeClass('ipsLoading').html(result);
            });
        },
        insertImage: function(e) {
            var image = $(e.target);
            var element = CKEDITOR.dom.element.createFromHtml('<img src="' + image.attr('data-url') + '">');
            this._editor.insertElement(element);
            element.$.alt = image.attr('alt');
            element.$.title = image.attr('title');
            ips.utils.lazyLoad.applyLazyLoadAttributes(element.$);
            ips.utils.lazyLoad.loadContent(element.$);
            this.scope.find('[data-role="giphySearch"]').val('');
            this.scope.find('[data-role="giphyLoading"]').addClass('ipsLoading').html('');
            this.scope.trigger('closeMenu');
        },
        menuOpened: function(e, data) {
            if (data.menu.attr('data-controller') == 'core.global.editor.giphy') {
                this._doSearch("");
                setTimeout(function() {
                    this.scope.find('[data-role="giphySearch"]').focus();
                }
                .bind(this), 100);
            }
        },
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.image', {
        _typingTimer: null,
        _textTypingTimer: null,
        _ajaxObj: null,
        _imageWidth: null,
        _ratioWidth: 1,
        _ratioHeight: 1,
        initialize: function() {
            this.on('submit', 'form', this.formSubmit);
            this.on('change', '[data-role="imageHeight"]', this.changeHeight);
            this.on('change', '[data-role="imageWidth"]', this.changeWidth);
            this.on('click', 'label[for^="image_align"]', this.toggleAlign);
            this.on('change', 'input[name="image_aspect_ratio"]', this.toggleRatio);
            this.setup();
        },
        setup: function() {
            this._ratioWidth = this.scope.attr('data-imageWidthRatio');
            this._ratioHeight = this.scope.attr('data-imageHeightRatio');
            if (this.scope.find('input[name="image_aspect_ratio"]').is(':checked')) {
                this.scope.find('[data-role="imageHeight"]').prop('disabled', true);
            }
        },
        toggleAlign: function(e) {
            var thisLabel = $(e.currentTarget);
            this.scope.find('label[for^="image_align"]').removeClass('ipsButton_primary').addClass('ipsButton_light');
            thisLabel.removeClass('ipsButton_light').addClass('ipsButton_primary');
        },
        toggleRatio: function(e) {
            var sameRatio = $(e.currentTarget).is(':checked');
            if (sameRatio) {
                this.changeWidth();
            }
            this.scope.find('[data-role="imageHeight"]').prop('disabled', sameRatio);
        },
        changeHeight: function() {
            var sameRatio = this.scope.find('input[name="image_aspect_ratio"]').is(':checked');
            var thisVal = parseInt(this.scope.find('[data-role="imageHeight"]').val());
            var width = this.scope.find('[data-role="imageWidth"]');
            var widthVal = parseInt(width.val());
            if (sameRatio) {
                width.val(Math.floor(thisVal * this._ratioWidth));
            }
        },
        changeWidth: function() {
            var sameRatio = this.scope.find('input[name="image_aspect_ratio"]').is(':checked');
            var thisVal = parseInt(this.scope.find('[data-role="imageWidth"]').val());
            var height = this.scope.find('[data-role="imageHeight"]');
            var heightVal = parseInt(height.val());
            if (sameRatio) {
                height.val(Math.floor(thisVal * this._ratioHeight));
            }
        },
        formSubmit: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this._updateImage(e);
        },
        _updateImage: function(e) {
            var widthInput = this.scope.find('[data-role="imageWidth"]');
            var heightInput = this.scope.find('[data-role="imageHeight"]');
            var sameRatio = this.scope.find('input[name="image_aspect_ratio"]').is(':checked');
            var error = false;
            if (parseInt(widthInput.val()) > parseInt(widthInput.attr('max'))) {
                error = true;
                widthInput.closest('.ipsFieldRow').addClass('ipsFieldRow_error');
                this.scope.find('[data-role="imageSizeWarning"]').text(ips.getString('editorImageMaxWidth', {
                    'maxwidth': widthInput.attr('max')
                }));
            }
            if (parseInt(heightInput.val()) > parseInt(heightInput.attr('max'))) {
                error = true;
                widthInput.closest('.ipsFieldRow').addClass('ipsFieldRow_error');
                this.scope.find('[data-role="imageSizeWarning"]').text(ips.getString('editorImageMaxHeight', {
                    'maxheight': heightInput.attr('max')
                }));
            }
            if (!error) {
                var editor = $('.cke.' + this.scope.attr('data-editorUniqueId')).closest('[data-ipsEditor]').data('_editor');
                editor.updateImage(widthInput.val(), (sameRatio ? 'auto' : heightInput.val()), this.scope.find('[data-role="imageAlign"]:checked').val(), this.scope.find('[data-role="imageLink"]').val(), this.scope.find('[data-role="imageAlt"]').val());
                this.trigger('closeDialog');
            }
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.insertable', {
        _editorID: '',
        _selectedItems: {},
        _tooltip: null,
        _tooltipTimer: null,
        initialize: function() {
            this.on('click', '[data-action="insertFile"]', this.insertFile);
            this.on('click', '[data-action="selectFile"]', this.selectFile);
            this.on('click', '[data-action="insertSelected"]', this.insertSelected);
            this.on('click', '[data-action="clearAll"]', this.clearSelection);
            this.on('fileInjected', this.fileInjected);
            this.setup();
        },
        setup: function() {
            this._editorID = this.scope.attr('data-editorID');
            this._selectedItems = {};
        },
        destruct: function() {
            Debug.log('destruct insertable');
        },
        selectFile: function(e) {
            e.preventDefault();
            var thisAttach = $(e.currentTarget).closest('.ipsAttach');
            var thisToggle = thisAttach.find('[data-action="selectFile"]');
            var thisDataRow = thisAttach.closest('.ipsDataItem');
            if (thisToggle.hasClass('ipsAttach_selectionOn')) {
                thisToggle.removeClass('ipsAttach_selectionOn');
                if (thisDataRow.length) {
                    thisDataRow.removeClass('ipsDataItem_selected');
                } else {
                    thisAttach.removeClass('ipsAttach_selected');
                }
                this._removeSelectedItem(thisAttach);
            } else {
                thisToggle.addClass('ipsAttach_selectionOn');
                if (thisDataRow.length) {
                    thisDataRow.addClass('ipsDataItem_selected');
                } else {
                    thisAttach.addClass('ipsAttach_selected');
                }
                this._addSelectedItem(thisAttach);
            }
        },
        clearSelection: function(e) {
            if (e) {
                e.preventDefault();
            }
            if (!_.size(this._selectedItems)) {
                return;
            }
            this._selectedItems = {};
            this.scope.find('.ipsAttach_selectionOn').removeClass('ipsAttach_selectionOn').closest('.ipsAttach').removeClass('ipsAttach_selected').end().closest('.ipsDataItem').removeClass('ipsDataItem_selected');
            this._checkSelectedButton();
        },
        insertSelected: function(e) {
            e.preventDefault();
            var self = this;
            if (!_.size(this._selectedItems)) {
                return;
            }
            if (!this.scope.closest('[data-role="attachmentArea"]').length) {
                this.trigger('closeDialog');
            }
            var editor = $('textarea[name="' + this._editorID + '"]').closest('[data-ipsEditor]').data('_editor');
            _.each(this._selectedItems, function(item) {
                editor.insertHtml(self._buildInsert(item));
            });
            this.clearSelection();
        },
        insertFile: function(e) {
            if (e) {
                e.preventDefault();
            }
            var editor = $('textarea[name="' + this._editorID + '"]').closest('[data-ipsEditor]').data('_editor');
            var insertData = this._buildInsertData($(e.target));
            var insertHtml = this._buildInsert(insertData);
            editor.insertHtml(insertHtml);
            if (!this.scope.closest('[data-role="attachmentArea"]').length) {
                this.trigger('closeDialog');
            }
            if (insertData.type == 'image') {
                this._showImageTooltip(insertData.fileID);
            }
        },
        fileInjected: function(e, data) {
            $(this.scope).trigger('injectedFileReadyForInsert', {
                content: this._buildInsert(this._buildInsertData(data.fileElem)),
                data: data.data
            });
        },
        _showImageTooltip: function(fileID) {
            if (!this._tooltip) {
                var tooltipHTML = ips.templates.render('core.tooltip', {
                    id: 'elEditorImageTooltip_' + this.controllerID,
                    content: ips.getString('editorEditImageTip')
                });
                ips.getContainer().append(tooltipHTML);
                this._tooltip = $('#elEditorImageTooltip_' + this.controllerID);
            } else {
                this._tooltip.hide();
            }
            if (this._tooltipTimer) {
                clearTimeout(this._tooltipTimer);
            }
            var imageFile = $('#cke_' + this._editorID).find('[data-fileID="' + fileID + '"]').last();
            var self = this;
            var positionInfo = {
                trigger: imageFile,
                target: this._tooltip,
                center: true,
                above: true
            };
            var tooltipPosition = ips.utils.position.positionElem(positionInfo);
            $(this._tooltip).css({
                left: tooltipPosition.left + 'px',
                top: tooltipPosition.top + 'px',
                position: (tooltipPosition.fixed) ? 'fixed' : 'absolute',
                zIndex: ips.ui.zIndex()
            });
            if (tooltipPosition.location.vertical == 'top') {
                this._tooltip.addClass('ipsTooltip_top');
            } else {
                this._tooltip.addClass('ipsTooltip_bottom');
            }
            this._tooltip.show();
            setTimeout(function() {
                if (self._tooltip && self._tooltip.is(':visible')) {
                    ips.utils.anim.go('fadeOut', self._tooltip);
                }
            }, 3000);
        },
        _addSelectedItem: function(element) {
            var fileID = element.attr('data-fileid');
            this._selectedItems[fileID] = this._buildInsertData(element);
            this._checkSelectedButton();
        },
        _removeSelectedItem: function(element) {
            var fileID = element.attr('data-fileid');
            if (!_.isUndefined(this._selectedItems[fileID])) {
                delete this._selectedItems[fileID];
            }
            this._checkSelectedButton();
        },
        _checkSelectedButton: function() {
            var button = this.scope.find('[data-action="insertSelected"]');
            this.scope.find('[data-action="clearAll"]').toggleClass('ipsButton_disabled', !(_.size(this._selectedItems) > 0));
            button.toggleClass('ipsButton_disabled', !(_.size(this._selectedItems) > 0));
            if (!_.size(this._selectedItems)) {
                button.text(ips.getString('insertSelected'));
            } else {
                button.text(ips.pluralize(ips.getString('insertSelectedNum'), _.size(this._selectedItems)));
            }
        },
        _buildInsertData: function(element) {
            var element = element.closest('.ipsAttach');
            var fileID = element.attr('data-fileid');
            var fileKey = element.attr('data-filekey');
            var type = (element.attr('data-fileType')) ? element.attr('data-fileType') : 'file';
            var url = '';
            var image = '';
            var extension = '';
            var mimeType = '';
            if (type == 'image') {
                url = (element.attr('data-thumbnailurl')) ? element.attr('data-thumbnailurl') : element.attr('data-fullsizeurl');
                if (url != element.attr('data-fullsizeurl')) {
                    image = element.attr('data-fullsizeurl');
                }
            } else if (type == 'video') {
                image = element.attr('data-fullsizeurl');
                mimeType = element.attr('data-mimeType');
            } else if (type == 'audio') {
                mimeType = element.attr('data-mimeType');
            } else {
                url = (element.attr('data-filelink')) ? element.attr('data-filelink') : '';
            }
            extension = element.closest('[data-extension]').attr('data-extension');
            return {
                fileID: fileID,
                fileKey: fileKey,
                type: type,
                title: (type != 'image') ? element.find('[data-role="title"]').html() : '',
                link: url,
                fullImage: image,
                extension: extension,
                mimeType: mimeType
            };
        },
        _buildInsert: function(item) {
            var element = null;
            if (item.type == 'image') {
                element = $('<img/>').attr({
                    'data-fileid': item.fileID,
                    'src': item.link,
                    'data-unique': Math.random().toString(36).substr(2, 9)
                }).addClass('ipsImage ipsImage_thumbnailed');
                if (item.extension) {
                    element.attr('data-extension', item.extension);
                }
                if (item.fullImage) {
                    var link = $('<a>').attr('href', item.fullImage).addClass('ipsAttachLink ipsAttachLink_image');
                    element.addClass('ipsImage_thumbnailed');
                    link.append(element);
                    element = link;
                }
            } else if (item.type == 'video') {
                var element = $('<video controls>').attr({
                    'class': 'ipsEmbeddedVideo',
                    'data-controller': 'core.global.core.embeddedvideo',
                    'data-fileid': item.fileID,
                    'data-unique': Math.random().toString(36).substr(2, 9)
                });
                var sourceElement = $('<source>').attr({
                    'src': item.fullImage,
                    'type': item.mimeType
                });
                element.append(sourceElement);
                var fallbackLink = $('<a>').addClass('ipsAttachLink').attr('href', ips.getSetting('baseURL') + 'applications/core/interface/file/attachment.php?id=' + item.fileID + (item.fileKey ? '&key=' + item.fileKey : '')).html(item.title);
                element.append(fallbackLink);
            } else if (item.type == 'audio') {
                var element = $('<audio controls>').attr({
                    'data-controller': 'core.global.core.embeddedaudio',
                    'src': ips.getSetting('baseURL') + 'applications/core/interface/file/attachment.php?id=' + item.fileID + (item.fileKey ? '&key=' + item.fileKey : ''),
                    'data-fileid': item.fileID,
                    'data-unique': Math.random().toString(36).substr(2, 9),
                    'type': item.mimeType
                });
                var fallbackLink = $('<a>').addClass('ipsAttachLink').attr('href', ips.getSetting('baseURL') + 'applications/core/interface/file/attachment.php?id=' + item.fileID + (item.fileKey ? '&key=' + item.fileKey : '')).html(item.title);
                element.append(fallbackLink);
            } else {
                element = $('<a>').addClass('ipsAttachLink').html(item.title).attr('data-fileid', item.fileID).attr('data-fileext', item.extension);
                if (item.link) {
                    element.attr('href', item.link);
                } else {
                    var url = ips.getSetting('baseURL') + 'applications/core/interface/file/attachment.php?id=' + item.fileID;
                    if (item.fileKey) {
                        url = url + '&key=' + item.fileKey;
                    }
                    element.attr('href', url);
                }
            }
            if (item.extension) {
                element.attr('data-extension', item.extension);
            }
            let html = $('<div/>').append(element).html();
            if (item.type === 'video' || item.type === 'audio') {
                html += "&nbsp;<p>&nbsp;</p>";
            }
            return html;
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.link', {
        _typingTimer: null,
        _textTypingTimer: null,
        _ajaxObj: null,
        initialize: function() {
            this.on('submit', 'form', this.formSubmit);
            this.on('click', '.cEditorURLButtonInsert', this.formSubmit);
            this.on('click', '[data-action="linkRemoveButton"]', this.removeLink);
            this.scope.find('[data-role="linkURL"]').focus();
        },
        formSubmit: function(e) {
            e.preventDefault();
            this.insertLink(e);
        },
        insertLink: function(e) {
            var url = this.scope.find('[data-role="linkURL"]').val().replace(/'/g, '%27').replace(/"/g, '%22').replace(/</g, '%3C').replace(/>/g, '%3E');
            if (!url) {
                $(this.scope).find('.ipsFieldRow.ipsFieldRow_fullWidth').addClass('ipsFieldRow_error');
                return;
            } else {
                $(this.scope).find('.ipsFieldRow.ipsFieldRow_fullWidth').removeClass('ipsFieldRow_error');
            }
            $(this.scope).find('.elLinkError').remove();
            if (!url.match(/^[a-z]+\:\/\//i) && !url.match(/^mailto\:/i) && !url.match(/^\#/)) {
                url = 'http://' + url.replace(/^\/*/, '');
            }
            var editor = CKEDITOR.instances[$(this.scope).data('editorid')];
            var selection = editor.getSelection();
            if (!_.isUndefined(editor._linkBookmarks)) {
                selection.selectBookmarks(editor._linkBookmarks);
                delete editor._linkBookmarks;
            }
            var selectedElement = selection.getSelectedElement();
            if (selectedElement && selectedElement.is('img')) {
                var selectedElement = $(selection.getSelectedElement().$);
                if (!selectedElement.parent().is('a')) {
                    var element = CKEDITOR.dom.element.createFromHtml("<a href='" + url + "'>" + selectedElement[0].outerHTML + "</a>");
                    editor.insertElement(element);
                } else {
                    selectedElement.parent().attr('href', url).removeAttr('data-cke-saved-href');
                }
                this.scope.find('input.cEditorURL').val('');
                this.trigger('closeDialog');
            } else if (selectedElement && (selectedElement.is('a') && $(selection.getSelectedElement().$).children().is('img'))) {
                selectedElement.setAttribute('href', url).removeAttribute('data-cke-saved-href');
                this.scope.find('input.cEditorURL').val('');
                this.trigger('closeDialog');
            } else {
                if ($(this.scope).data('image')) {
                    this.scope.find('[data-role="linkURL"]').addClass('ipsField_loading');
                    this.scope.find('[data-action="linkButton"]').prop('disabled', true);
                    var scope = this.scope;
                    var self = this;
                    var img = new Image();
                    img.onerror = function() {
                        scope.find('[data-role="linkURL"]').removeClass('ipsField_loading');
                        scope.find('[data-action="linkButton"]').prop('disabled', false);
                        scope.find('.ipsFieldRow.ipsFieldRow_fullWidth').addClass('ipsFieldRow_error');
                    }
                    ;
                    img.onload = function() {
                        var ajaxUrl = editor.config.controller + '&do=validateLink'
                        if ($(this.scope).attr('data-image')) {
                            ajaxUrl += '&image=1';
                        }
                        ips.getAjax()(ajaxUrl, {
                            data: {
                                url: url,
                                width: img.width,
                                height: img.height,
                                image: 1
                            },
                            type: 'post'
                        }).done(function(response) {
                            if (response.embed) {
                                scope.find('[data-role="linkURL"]').removeClass('ipsField_loading');
                                scope.find('[data-action="linkButton"]').prop('disabled', false);
                                scope.find('input.cEditorURL').val('');
                                editor.insertHtml(response.preview);
                                self.trigger('closeDialog');
                            } else {
                                scope.find('[data-role="linkURL"]').removeClass('ipsField_loading');
                                scope.find('[data-action="linkButton"]').prop('disabled', false);
                                scope.find('.ipsFieldRow.ipsFieldRow_fullWidth').addClass('ipsFieldRow_error');
                                if (!_.isUndefined(response.errorMessage)) {
                                    scope.find('.ipsFieldRow.ipsFieldRow_fullWidth').append("<span class='elLinkError ipsType_warning'>" + response.errorMessage + "</span>");
                                }
                            }
                        }).fail(function() {
                            scope.find('[data-role="linkURL"]').removeClass('ipsField_loading');
                            scope.find('[data-action="linkButton"]').prop('disabled', false);
                            scope.find('.ipsFieldRow.ipsFieldRow_fullWidth').addClass('ipsFieldRow_error');
                        });
                    }
                    img.src = url;
                } else {
                    if (this.scope.find('[data-role="linkText"]').length) {
                        var title = this.scope.find('[data-role="linkText"]').val().replace(/ {2}/g, ' &nbsp;');
                        if (!title) {
                            title = decodeURI(url);
                        }
                        title = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                        var element = CKEDITOR.dom.element.createFromHtml("<a>" + title + "</a>");
                    } else {
                        element = selectedElement;
                    }
                    element.setAttribute('href', url);
                    editor.insertElement(element);
                    this.scope.find('input.cEditorURL').val('');
                    this.trigger('closeDialog');
                }
            }
        },
        removeLink: function(e) {
            e.preventDefault();
            e.stopPropagation();
            var editor = CKEDITOR.instances[$(this.scope).data('editorid')];
            editor.focus();
            editor.execCommand('ipsLinkRemove');
            this.trigger('closeDialog');
        },
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.mymedia', {
        initialize: function() {
            this.on(window, 'resize', _.bind(this._resizeContentArea, this));
            this.setup();
        },
        setup: function() {
            this._resizeContentArea();
        },
        _resizeContentArea: function() {
            var dialogHeight = this.scope.closest('.ipsDialog_content').outerHeight();
            var controlsHeight = this.scope.find('.cMyMedia_controls').outerHeight();
            this.scope.find('[data-role="myMediaContent"]').css({
                height: (dialogHeight - controlsHeight - 10) + 'px'
            });
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.mymediasection', {
        _timer: null,
        _ajax: null,
        _value: '',
        initialize: function() {
            this.on('focus', '[data-role="myMediaSearch"]', this.focusMediaSearch);
            this.on('blur', '[data-role="myMediaSearch"]', this.blurMediaSearch);
            this.on('paginationClicked paginationJump', this.paginationClicked);
        },
        paginationClicked: function(e, data) {
            var self = this;
            var results = this.scope.find('[data-role="myMediaResults"]');
            var url = data.href;
            data.originalEvent.preventDefault();
            if (url == '#') {
                url = data.paginationElem.find('[data-role="pageJump"]').attr('action') + '&page=' + data.pageNo;
            }
            this._ajax = ips.getAjax()(url, {
                showLoading: true,
                data: {
                    search: this._value
                }
            }).done(function(response) {
                results.html(response);
                $(document).trigger('contentChange', [results]);
            });
        },
        focusMediaSearch: function() {
            this._timer = setInterval(_.bind(this._checkValue, this), 700);
        },
        blurMediaSearch: function() {
            clearInterval(this._timer);
        },
        _checkValue: function() {
            var value = this.scope.find('[data-role="myMediaSearch"]').val();
            if (value == this._value) {
                return;
            }
            this._value = value;
            this._loadResults();
        },
        _loadResults: function() {
            var self = this;
            var url = this.scope.attr('data-url');
            if (this._ajax && this._ajax.abort) {
                this._ajax.abort();
            }
            this.scope.find('[data-role="myMediaSearch"]').addClass('ipsField_loading');
            this._ajax = ips.getAjax()(url, {
                data: {
                    search: this._value
                }
            }).done(function(response) {
                self.scope.find('[data-role="myMediaResults"]').html(response);
                $(document).trigger('contentChange', [self.scope.find('[data-role="myMediaResults"]')]);
            }).always(function() {
                self.scope.find('[data-role="myMediaSearch"]').removeClass('ipsField_loading');
            });
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.preview', {
        _origin: '',
        initialize: function() {
            this.on(window, 'message', this.processMessage);
            this.on('click', 'a', this.handleLinks);
            this.setup();
        },
        setup: function() {
            this.scope.find('[data-role="previewContainer"]').html(ips.templates.get('core.editor.previewLoading'));
            this._origin = ips.utils.url.getOrigin();
            this._editorID = this.scope.attr('data-editorID');
            this._sendMessage({
                message: "iframeReady",
            });
            this._startTimer();
        },
        handleLinks: function(e) {
            if ($(e.target).is('[data-page]')) {
                return;
            }
            if ($(e.target).attr('href') && $(e.target).attr('href') == '#') {
                return;
            }
            e.preventDefault();
        },
        processMessage: function(e, data) {
            var oE = e.originalEvent;
            var json = $.parseJSON(oE.data);
            if (oE.origin !== this._origin) {
                return;
            }
            if (_.isUndefined(json.message)) {
                return;
            }
            switch (json.message) {
            case 'fetchPreview':
                this._fetchPreview(json);
                break;
            case 'previewClosed':
                this._closedPreview();
                break;
            }
        },
        _sendMessage: function(data) {
            window.parent.postMessage(JSON.stringify(_.extend(data, {
                editorID: this._editorID
            })), this._origin);
        },
        _closedPreview: function() {
            if (this._timer) {
                clearInterval(this._timer);
            }
        },
        _startTimer: function() {
            this._timer = setInterval(_.bind(this._sendHeight, this), 150);
        },
        _fetchPreview: function(data) {
            this.cleanContents();
            this.scope.find('[data-role="previewContainer"]').html('');
            this._startTimer();
            var self = this;
            var ajaxData = {
                type: 'POST',
                data: {
                    _previewField: this._editorID
                }
            };
            ajaxData.data[this._editorID] = data.editorContent;
            ips.getAjax()(data.url, ajaxData).done(function(response) {
                var preview = self.scope.find('[data-role="previewContainer"]');
                preview.html(self._processResponse(response));
                ips.utils.lazyLoad.loadContent(preview);
            });
        },
        _processResponse: function(response) {
            response = response.replace(/data\-ipshover/, '');
            return response;
        },
        _sendHeight: function() {
            this._sendMessage({
                message: 'previewHeight',
                height: $(document).height()
            });
        }
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.stockReplies', {
        initialize: function() {
            this.on('click', '.ipsStockReplies_row', this.insertTemplate);
            this.on(document, 'menuOpened', this.menuOpened);
            this.setup();
        },
        setup: function() {
            this._editorId = $(this.scope).data('editorid');
            this._editor = CKEDITOR.instances[this._editorId];
        },
        insertTemplate: function(e) {
            e.stopPropagation();
            e.preventDefault();
            var template = $(e.target);
            var _self = this;
            ips.getAjax()(this._editor.config.controller + '&do=storedReplies&id=' + template.attr('data-templatesId'), {
                type: 'POST'
            }).done(function(response) {
                if (!response.error) {
                    _self._editor.insertElement(CKEDITOR.dom.element.createFromHtml('<div>' + response.reply + '</div>'));
                }
            });
            this.scope.trigger('closeMenu');
        },
        menuOpened: function(e, data) {
            if (data.menu.attr('data-controller') == 'core.global.editor.stockReplies') {
                setTimeout(function() {
                    var resultsbox = this.scope.find('[data-role="stockRepliesLoading"]');
                    if (resultsbox.hasClass('ipsLoading')) {
                        var _self = this;
                        ips.getAjax()(this._editor.config.controller + '&do=storedReplies', {
                            type: 'POST'
                        }).done(function(response) {
                            var data = response;
                            var result = '';
                            if (data.error) {
                                result = data.error;
                            } else {
                                _.each(data, function(template) {
                                    result += ips.templates.render('core.editor.editorStockRepliesRow', {
                                        title: template.title,
                                        id: template.id
                                    });
                                });
                            }
                            resultsbox.removeClass('ipsLoading').html(ips.templates.render('core.editor.editorStockRepliesWrap', {
                                content: result
                            }));
                        });
                    }
                }
                .bind(this), 100);
            }
        },
    });
}(jQuery, _));
;;(function($, _, undefined) {
    "use strict";
    ips.controller.register('core.global.editor.uploader', {
        initialize: function() {
            this.on('addUploaderFile', this.addUploaderFile);
            this.on('removeAllFiles', this.removeAllFiles);
            this.on('fileDeleted', this.fileDeleted);
            this.setup();
        },
        setup: function() {
            this.scope.find('[data-role="fileContainer"]').each(function() {
                if ($(this).children().length > 0) {
                    $(this).parent().removeClass('ipsHide');
                }
            });
        },
        removeAllFiles: function(e, data) {
            this.scope.find('[data-role="files"], [data-role="images"], [data-role="videos"], [data-role="audio"]').hide();
            this.scope.find('[data-role="fileList"]').hide();
        },
        addUploaderFile: function(e, data) {
            e.stopPropagation();
            var container = null;
            var template = 'core.attachments.';
            this.scope.find('[data-role="fileList"]').show();
            if (data.isImage) {
                container = this.scope.find('[data-role="images"]');
                template += 'imageItem';
            } else if (data.isVideo) {
                container = this.scope.find('[data-role="videos"]');
                template += 'videoItem';
            } else if (data.isAudio) {
                container = this.scope.find('[data-role="audio"]');
                template += 'audioItem';
            } else {
                container = this.scope.find('[data-role="files"]');
                template += 'fileItem';
            }
            data.extIcon = ips.ui.uploader.getExtensionIcon(data.title);
            container.show().find('[data-role="fileContainer"]').append(ips.templates.render(template, data));
        },
        fileDeleted: function(e, data) {
            var count = 0;
            this.scope.find('[data-role="fileContainer"]').each(function() {
                if (!$(this).find('.ipsAttach').length) {
                    $(this).closest('[data-role="files"], [data-role="images"], [data-role="videos"], [data-role="audio"]').hide();
                    count++;
                }
            });
            if (count == 4) {
                this.scope.find('[data-role="fileList"]').hide();
            }
        }
    });
}(jQuery, _));
;