<?php
    session_start();

    if (isset($_SESSION['loggedIN']) && $_SESSION['loggedIN'] == true ) {
        $accessLink = "logged-in.php";
    } else {
        $accessLink = "register.php"; 
    
    }; 
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="nike.css">
    <link rel="stylesheet" href="cart.css">
    <title>Order Placement</title>
</head>

<body>
    <header>
        <!--Logo-->
        <a href="nike.html" class="logo-name">
            <img class="logo" src="imgs/nikeLogo.jpg" alt="logo">
            <span>NIKE</span>
        </a>
        <nav>
            <!--Responsive Navbar-->
            <input type="checkbox" id="active">
            <label for="active">
                <i class="fa fa-bars" id="open"></i>
                <i class="fa fa-times" id="close"></i>
            </label>
            <ul>
                <li><a class="underline" id="home" href="nike.html">Home</a></li>
                <li><a class="underline" href="#">About Us</a></li>
                <li class="browse">
                    <span id="browse-text"><a href="#">Products</a></span>
                    <ul class="browse-dropdown">
                        <li class="browse-dropdown-info">
                            <a class="browse-links" href="browseProCT.html">Browse Products by Category</a>
                        </li>
                        <li class="browse-dropdown-info">
                            <a class="browse-links" href="browseProC.html">Browse Stores by Created Time</a>
                        </li>
                    </ul>
                </li>
                <li><a class="underline" href="Contact.html">Contact</a></li>

            </ul>
        </nav>
    </header>

    <main>
        <h1><span class="vline">YOUR CART</span></h1>
        <div class="cart">
            <div class="pro-info">
                <div class="info">
                    <div class="title" id="title-one">
                        <p>PRODUCT</p>
                    </div>
                    <div class="title" id="title-two">
                        <p>PRICE</p>
                    </div>
                    <div class="title" id="title-three">
                        <p>QUANTITY</p>
                    </div>
                    <div class="title" id="title-four">
                        <p>TOTAL</p>
                    </div>
                </div>
                <hr>
                <div class="dispPro">
                    <div class="proInfo">
                        <div class="product"></div>
                        <div class="price"></div>
                        <div class="quantity"></div>
                        <div class="subtotal"></div>
                    </div>
                </div>
                <hr>
            </div>
            <div class="payment">
                <section>
                    <h3>Sub Total:</h3>
                    <p></p>
                </section>
                <section>
                    <h3>Discount:</h3>
                    <p></p>
                </section>
                <section>
                    <div class="discountSect">
                        <label for="discount">Have a promo code?</label>
                        <form onsubmit="event.preventDefault();">
                            <input id="discount" type="text" name="fname">
                            <input onclick="addCoupon()" type="submit" value="Apply">
                        </form>
                        <span id="correct-Msg"></span>
                        <span id="error-Msg"></span>
                    </div>
                </section>
                <section>
                    <h3>Total:</h3>
                    <p></p>
                </section>

                <button class="payBtn" onclick="location.href='ThankYou.html'" type="button">Order</button>
                <button class="payBtn" onclick="location.href='nikePro1.html'" type="button">Continue Shopping</button>

            </div>
        </div>
    </main>

    <footer>
        <a id="logoName" href="nike.html">
            <img class="logo" src="imgs/nikeLogo.jpg" alt="logo">
            <span>Nike</span>
        </a>
        <div class="policy">
            <ul>
                <li><a href="tos.html">Term of Service</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="copyright">
            <a href="copyright.html">Copyright &copy; Mall 2021</a>
        </div>
    </footer>
    <script src="products.js"></script>
</body>

</html>