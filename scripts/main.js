chrome.extension.sendMessage({}, function (response) {
 
});
$(document).ready(function () {
    console.log(extensionConfig);
    $scriptTags = $('script[src*="'+extensionConfig.targetSelector +'"]');
    $scriptTags.each(function (index) {
        var debugTags = $(this).attr('src') + extensionConfig.parameter;
        var html = '<a target="_blank" href="' + debugTags + '">Debug ' + index + '</a>';
        $(this).next().wrap('<div class="adbutlerTags pulse-shrink"></div>').parent().append('<div class="adbutlerDebugging"><h4>AdButler</h4>' + html + '</div>');
    });
    $iFrameTags = $('iframe[src*="'+extensionConfig.targetSelector +'"]');
    $iFrameTags.each(function (index) {
        var debugTags = $(this).attr('src') + extensionConfig.parameter;
        var html = '<a target="_blank" href="' + debugTags + '">Debug ' + index + '</a>';
        $(this).wrap('<div class="adbutlerTags pulse-shrink"></div>').parent().append('<div class="adbutlerDebugging"><h4>AdButler</h4>' + html + '</div>');
    });

});