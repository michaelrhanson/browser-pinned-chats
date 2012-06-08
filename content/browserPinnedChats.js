"use strict";

function pinnedChats_main() {
  window.addEventListener('load', function loadHandler(e) {
    window.removeEventListener('load', loadHandler);

    // The most sensible way to do this layout is to
    // wrap "content" in a stack.  That way we can
    // put things "above" "content" without worrying
    // about the rest of the layout.

    // This is likely to break a lot of assumptions
    // that are coded into addons, which is a bummer.

    try {
      var content = window.document.getElementById("content");
      var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
      //var newStack = window.document.createElementNS(XUL_NS, "stack");
      //newStack.setAttribute("flex", 1);
      //newStack.setAttribute("id", "content-stack");
      // content.parentNode.insertBefore(newStack, content.parentNode.firstChild);
      
      //var chatBox = window.document.getElementById("pinnedchats");
      //newStack.appendChild(chatBox);      
      //newStack.appendChild(content);


    } catch (e) {
      dump("Error while creating the stack for content: " + e + "\n");
    }

    dump("Created the stack for content\n");
  });
}


function addPinnedChat() {
  var XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var container = window.document.getElementById("pinnedchats");

  var box = window.document.createElementNS(XUL_NS, "div");
  box.setAttribute("style", "width:200px;height:200px;background-color:white;border:1px solid #888;" +
      "margin-right:8px;border-top-left-radius:4px;border-top-right-radius:4px;" +
      "margin-top:-200px");

  box.setAttribute("mousethrough", "never");

  var browser = window.document.createElementNS(XUL_NS, "browser");
  //browser.setAttribute("src", "http://www.google.com")
  browser.setAttribute("src", "resource://browserpinnedchats/content/demo.htm")
  browser.setAttribute("style", "width:196px;padding-left:2px;padding-right:2px;height:100%");
  box.appendChild(browser);

  // to shrink, we would reduce the "height" and "margin-top" of "box" simultaneously

  container.appendChild(box);
}
function removePinnedChat() {

}

pinnedChats_main();

dump("pinnedChats_main is loaded\n");
