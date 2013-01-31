// Generated by CoffeeScript 1.3.3
(function() {
  var $;

  $ = jQuery;

  $.fn.progressBarLabels = function() {
    return this.each(function() {
      var container, index, label, maximum, multiplier, progress, step, vertical_rule, _i, _ref;
      progress = $(this);
      maximum = progress.data('label-max');
      step = progress.data('label-step');
      if (!(maximum && step)) {
        return;
      }
      if (!progress.hasClass('progress')) {
        return;
      }
      container = $('<div></div>');
      container.addClass('label-group');
      container.width("100%");
      for (index = _i = 0, _ref = maximum / step; 0 <= _ref ? _i <= _ref : _i >= _ref; index = 0 <= _ref ? ++_i : --_i) {
        multiplier = container.width() / maximum;
        label = $("<label></label>");
        label.css({
          "left": "" + (index * (step * multiplier)) + "%",
          "width": "" + (step * multiplier) + "%",
          "display": "block",
          "text-align": "center",
          "position": "absolute",
          "margin-left": "-" + ((step * multiplier) / 2) + "%"
        });
        label.html(index * step);
        vertical_rule = $('<div></div>');
        vertical_rule.css({
          "position": "absolute",
          "left": "50%",
          "top": "-" + (progress.height()) + "px",
          "height": "" + (progress.height()),
          "border-left": "solid 2px #f5f5f5"
        });
        if (index === 0) {
          vertical_rule.css({
            "border-left": "none"
          });
        }
        if (index === (maximum / step)) {
          vertical_rule.css({
            "border-left": "none"
          });
        }
        label.prepend(vertical_rule);
        container.append(label);
      }
      progress.append(container);
      progress.css({
        "position": "relative",
        "overflow": "visible"
      });
      return container.css({
        "top": progress.height(),
        "position": "absolute"
      });
    });
  };

  $(function() {
    return $('.progress-labelled').progressBarLabels();
  });

}).call(this);
