$( function() {
    $( "#sortable > li" ).draggable({  snap: ".ui-widget-header", snapMode: "inner",  revert: "invalid"  });
    $( "#sortable").droppable({
       /* drop: function( event, ui ){
            ui.draggable.prependTo($( "#sortable" ))
        }*/
    })
    

//The reaminder of the code in this file is the code for the submission squares
//they each repeat the same code but with minor identifiers changing so in order 
//to save everyone some time I will only comment the first.



    $( "#droppable1" ).droppable({

        classes: {
            "ui-droppable-active": "ui-state-active",
            "ui-droppable-hover": "ui-state-hover"
        },
      
        drop: function( event, ui ){
            //upon a draggable being dropped this function will load in the
            //letter that was dropped into the array inpt
            inpt[0] = ui.draggable.attr('id');

            //this is just here to show the graders that each letter corresponds with its location
            document.getElementById("1").innerHTML =inpt[0];

            //disables the droppable for other droppables but not the one that was already placed
            $(this).droppable('option', 'accept', ui.draggable);

            //I use this function in all the droppable elements and I got it from https://stackoverflow.com/questions/26746823/jquery-ui-drag-and-drop-snap-to-center
            //its use is to center the scrabble pieces in the square in which they were placed
            var $this = $(this);
            ui.draggable.position({
                my: "center",
                at: "center",
                of: $this,
                using: function(pos) {
                    $(this).animate(pos, 200, "linear");
                }
            });
        },

        out: function( event, ui ) {
            //upon a draggable being removed, it's value is also removed from the array
            inpt[0] = '';
            document.getElementById("1").innerHTML =inpt[0];
            //permission is given back to the droppable so it can accept any draggable
            $(this).droppable('option', 'accept', '*');
        }

    });



    $( "#droppable2" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      
      drop: function( event, ui ) {
        inpt[1] = ui.draggable.attr('id');
        document.getElementById("2").innerHTML =inpt[1];

        $(this).droppable('option', 'accept', ui.draggable);

        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
      },

      out: function( event, ui ) {
        inpt[1] = '';
        document.getElementById("2").innerHTML =inpt[1];

        $(this).droppable('option', 'accept', '*');
      }

    });

    $( "#droppable3" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      
      drop: function( event, ui ) {

        inpt[2] = ui.draggable.attr('id');
        document.getElementById("3").innerHTML =inpt[2];

        $(this).droppable('option', 'accept', ui.draggable);

        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
    },

      out: function( event, ui ) {
        inpt[2] = '';
        document.getElementById("3").innerHTML =inpt[2];

        $(this).droppable('option', 'accept', '*');
      }

    });

    $( "#droppable4" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      
      drop: function( event, ui ) {

        inpt[3] = ui.draggable.attr('id');
        document.getElementById("4").innerHTML =inpt[3];

        $(this).droppable('option', 'accept', ui.draggable);

        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
    },

      out: function( event, ui ) {
        inpt[3] = '';
        document.getElementById("4").innerHTML =inpt[3];

        $(this).droppable('option', 'accept', '*');
      }

    });

    $( "#droppable5" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      
      drop: function( event, ui ) {

        inpt[4] = ui.draggable.attr('id');
        document.getElementById("5").innerHTML =inpt[4];

        $(this).droppable('option', 'accept', ui.draggable);

        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
      },

      out: function( event, ui ) {
        inpt[4] = '';
        document.getElementById("5").innerHTML =inpt[4];

        $(this).droppable('option', 'accept', '*');
      }

    });


    $( "#droppable6" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      
      drop: function( event, ui ) {

        inpt[5] = ui.draggable.attr('id');
        document.getElementById("6").innerHTML =inpt[5];

        $(this).droppable('option', 'accept', ui.draggable);


        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
      },

      out: function( event, ui ) {
        inpt[5] = '';
        document.getElementById("6").innerHTML =inpt[5];

        $(this).droppable('option', 'accept', '*');
      }

    });

    $( "#droppable7" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active"
      },
      
      drop: function( event, ui ) {

        inpt[6] = ui.draggable.attr('id');
        document.getElementById("7").innerHTML =inpt[6];

        $(this).droppable('option', 'accept', ui.draggable);


        var $this = $(this);
        ui.draggable.position({
            my: "center",
            at: "center",
            of: $this,
            using: function(pos) {
                $(this).animate(pos, 200, "linear");
            }
        });
      },

      out: function( event, ui ) {
        inpt[1] = '';
        document.getElementById("7").innerHTML =inpt[6];

        $(this).droppable('option', 'accept', '*');
      }

    });


  } );
