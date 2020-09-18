////////////////////////////////////////////////////////////
////                                                    ////
////    FINDING                                         ////
////                                                    ////
////////////////////////////////////////////////////////////

equalheight = function(container, itemUnit, minWidth) {

  if (window.matchMedia('(min-width: ' + minWidth + ')').matches) {
    // wider than *minWidth*

    // Remove style="min-height:NNpx" attribute
    $(container).find(itemUnit).removeAttr('style');

    // Apply tallest one to all
    $(container).each(function() {

      var $self = $(this);
      var $target = $self.find(itemUnit);

      $target.each(function(index) {

        var currentTallest = 0;
        var $self = $(this);
        var selfHeight = $self.height();

    		if (selfHeight > currentTallest) {
    			currentTallest = selfHeight;
          //console.log('Current tallest is now ' + currentTallest);
    		}

        $target.css('min-height', currentTallest);

      });

    });

  } else {
    // narrower than *minWidth*
    $(container).find(itemUnit).removeAttr('style');

  }

};

equalheight('.eqh', '.cs-finding_bd', '768px');

$(window).resize(function(){
  equalheight('.eqh', '.cs-finding_bd', '768px');
});

