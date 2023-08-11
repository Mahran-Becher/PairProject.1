$("#button").on({
    mouseenter: function () {
        $(this).css("color", "black")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$(document).ready(function() {
    $('#button').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});

$(".close").click(function() {
    $(".popup").css("display", "none");
});


$("#AddStudent").on({
    mouseenter: function () {
        $(this).css("color", "#FF66C4")
    },
    mouseleave: function () {
        $(this).css("color", "white")
    }
});

$("#AddStudent").click(function() {
    $(".popup").css("display", "flex");
});



 $(document).ready(function () {
        var row = 1; 
        $("#button").click(function () {
            var firstname = $("#FirstName").val();
            var lastname = $("#LastName").val();
            var dateofbirth = $("#DateOfBirth").val();
            var email = $("#Email").val();
    
            if (!firstname || !lastname || !dateofbirth || !email) {
                alert("Please fill all the boxes");
                return;
            }
            var display = $("#display");
            var newRow = display[0].insertRow(row)
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var cell4 = newRow.insertCell(3);
    
            cell1.innerHTML = firstname;
            cell2.innerHTML = lastname;
            cell3.innerHTML = dateofbirth;
            cell4.innerHTML = email;
    
            row++;
        });
});

$(document).ready(function() {
    $('.close').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});



$(document).ready(function() {
    $('#logout').hover(function() {
        $(this).css('transform', 'scale(1.1)');
    }, function() {
        $(this).css('transform', 'scale(1)');
    });
});

$("#logout").on('click',function(){
    window.location.href='../AllPagesHtml/2page.html'
})