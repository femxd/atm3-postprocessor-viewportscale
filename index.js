var __reg = /<meta\s*name="viewport"\s*content=.*>/i,
    viewport = '<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,maximum-scale=1">';

module.exports = function(content, file, conf) {
    var scale = (conf.scale && !isNaN(parseInt(conf.scale)) && parseInt(conf.scale)) || 1;

    if (scale !== 1) {
        viewport = '<meta name="viewport" content="initial-scale={scale},maximum-scale={scale},user-scalable=0,maximum-scale={scale}">'.replace(/\{scale\}/g, scale);
    }
    if (!file.isHtmlLike) {
        return content;
    }

    if (scale !== 1 && __reg.exec(content) !== null) {
        content = content.replace(__reg, viewport);
    }
    return content;
};