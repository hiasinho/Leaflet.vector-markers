(function() {
  (function(window, document, undefined_) {
    "use strict";
    L.VectorMarkers = {};
    L.VectorMarkers.version = "1.0.0";
    L.VectorMarkers.MAP_PIN = 'M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z';
    L.VectorMarkers.Icon = L.Icon.extend({
      options: {
        iconSize: [30, 50],
        iconAnchor: [15, 50],
        popupAnchor: [2, -40],
        shadowAnchor: [7, 45],
        shadowSize: [54, 51],
        className: "vector-marker",
        prefix: "fa",
        spinClass: "fa-spin",
        extraClasses: "",
        icon: "home",
        markerColor: "blue",
        iconColor: "white"
      },
      initialize: function(options) {
        return options = L.Util.setOptions(this, options);
      },
      createIcon: function(oldIcon) {
            var div, icon, options, pin_path;
            div = (oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"));
            options = this.options;
            
            pin_path = L.VectorMarkers.MAP_PIN;
            // div.innerHTML = '<svg width="32px" height="52px" viewBox="0 0 32 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<path d="' + pin_path + '" fill="' + options.markerColor + '"></path>' + icon + '</svg>';
    		div.innerHTML = '<svg width="32px" height="52px" viewBox="0 0 32 52" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + '<path d="' + pin_path + '" fill="' + options.markerColor + '"></path></svg>';
    		if (options.icon) {
              // icon = this._createInner();
    		  div.appendChild(this._createInner());
            }
            this._setIconStyles(div, "icon");
            this._setIconStyles(div, "icon-" + options.markerColor);
            return div;
          },
          _createInner: function() {
    		var iconClass, iconColorClass, iconColorStyle, iconSpinClass, options, i = document.createElement('i');
            iconClass = void 0;
            iconSpinClass = "";
            iconColorClass = "";
            iconColorStyle = "";
            options = this.options;
    		i.classList.add(options.prefix);
    		if (options.extraClasses){
    			i.classList.add(options.extraClasses);
    		}
            if (options.icon.slice(0, options.prefix.length + 1) === options.prefix + "-") {
    		  i.classList.add(options.icon);
            } else {
    		  i.classList.add(options.prefix + "-" + options.icon);
            }
            if (options.spin && typeof options.spinClass === "string") {
    		  i.classList.add(options.spinClass);
            }
            if (options.iconColor) {
              if (options.iconColor === "white" || options.iconColor === "black") {
    			i.classList.add('icon-' + options.iconColor);
              } else {
    			i.style.color = options.iconColor;
              }
            }
    		return i;
      },
      _setIconStyles: function(img, name) {
        var anchor, options, size;
        options = this.options;
        size = L.point(options[(name === "shadow" ? "shadowSize" : "iconSize")]);
        anchor = void 0;
        if (name === "shadow") {
          anchor = L.point(options.shadowAnchor || options.iconAnchor);
        } else {
          anchor = L.point(options.iconAnchor);
        }
        if (!anchor && size) {
          anchor = size.divideBy(2, true);
        }
        img.className = "vector-marker-" + name + " " + options.className;
        if (anchor) {
          img.style.marginLeft = (-anchor.x) + "px";
          img.style.marginTop = (-anchor.y) + "px";
        }
        if (size) {
          img.style.width = size.x + "px";
          return img.style.height = size.y + "px";
        }
      },
      createShadow: function() {
        var div;
        div = document.createElement("div");
        this._setIconStyles(div, "shadow");
        return div;
      }
    });
    return L.VectorMarkers.icon = function(options) {
      return new L.VectorMarkers.Icon(options);
    };
  })(this, document);

}).call(this);
