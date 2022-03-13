// check
    function check() {
        var password = document.querySelector("#password").value;
        var password_check = document.querySelector("#password_check").value;
        if (password === password_check) {
            return true;
        } else {
            alert('The passwords must match!');
            return false;
        };
    };
    // modal
    function modal() {
        $(function(){
                $('.mini.modal').modal('show');
        });
        $('.one_a').prop('required',false);
        $('.one_b').prop('required',true);
    };
