<html>
<head>
    <script type="text/javascript" src="jquery.min.js"></script>
    <style>
        body {
            height: 120px;
            width: 130px;
            background-color: white;
        };
    </style>
</head>

<body>
Question Viewed:
<div id="data"></div>

<script type="text/javascript">

    var url = "http://stackoverflow.com/questions/1936495/website-scraping-using-jquery-and-ajax"

    updateGadget();

    inervalID = setInterval("updateGadget();", 60 * 1000);

    function updateGadget(){

        $(document).ready(function(){
            $("#data").load(url + " .label-value:contains('times')");
        });

    }

</script>
