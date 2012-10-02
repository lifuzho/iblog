/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("pagebreak",function(e){var t=this,n="pagebreak";t.clickToolbar(n,function(){var n=t.cmd,r=n.range;t.focus(),r.enlarge(!0),n.split(!0);var i=t.newlineTag=="br"||e.WEBKIT?"":'<p id="__kindeditor_tail_tag__"></p>';t.insertHtml('<hr style="page-break-after: always;" class="ke-pagebreak" />'+i);if(i!==""){var s=e("#__kindeditor_tail_tag__",t.edit.doc);r.selectNodeContents(s[0]),s.removeAttr("id"),n.select()}})});