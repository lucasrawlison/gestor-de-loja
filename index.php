<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/product-screen.css">
    <link rel="stylesheet" href="assets/css/loading-screen.css">
    <title>Document</title>
</head>
<body>
    <div id="productScreenBg" class="product-screen-bg">
        <div class="product-screen">
            <svg onclick="closeProductWindow();"id="closeButton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            <span id="productId">##</span>
            <div id="saveButton">SALVAR</div>
            <div id="loadingScreen" class="loading-screen">
                <div class="loader"></div>
            </div>
            <div class="option-container">
                <span>TÍTULO:</span>
                <input id="productTitle" type="text">
            </div>
            <div class="option-container">
                <span>DEPARTAMENTO:</span>
                <select name="departamento" id="productDepartamento">
                </select>
            </div>
            <div class="option-container">
                <span>TIPO:</span>
                <select name="departamento" id="productTipo">
                    
                </select>
            </div>
            <div class="option-container">
                <span>SEXO:</span>
                <select name="departamento" id="productSexo">
                    
                </select>
            </div>
            <div class="container">
                <div class="option-container">
                    <div class="button">P</div>
                    <input class="number" type="number">
                </div>
                <div class="option-container">
                    <div class="button">M</div>
                    <input class="number" type="number">
                </div>
                <div class="option-container">
                    <div class="button">G</div>
                    <input class="number" type="number">
                    
                </div>
                <div class="option-container">
                    <div class="button">GG</div>
                    <input class="number" type="number">
                    
                </div>
                <div class="option-container">
                    <div class="button">XGG</div>
                    <input class="number" type="number">
                    
                </div>
            </div>
            </div>
        </div>
    </div>

    
    <div class="bg">
        <div class="list-container">
            <div class="list">
                <div class="list-header">
                    <div class="row-container"><span>ID</span></div>
                    <div class="row-container"><span>TÍTULO</span></div>
                    <div class="row-container"><span>DEPARTAMENTO</span></div>
                    <div class="row-container"><span>TIPO</span></div>
                    <div class="row-container"><span>VALOR</span></div>
                </div>
                <div id="list-body">
                    <!-- <div class="list-row"></div> -->
                    
                    
                </div>
            </div>
        </div>
    </div>
</body>
<script src="assets/js/listProducts.js"></script>
<script src="assets/js/loadProduct.js"></script>
<script src="assets/js/productSizeSelect.js"></script>
<script src="assets/js/closeProductWindow.js"></script>
</html>