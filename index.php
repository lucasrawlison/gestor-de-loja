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
        <div class="product-screen show">
            <div id="loadingScreen" class="loading-screen">
                <div class="loader"></div>
            </div>
            <div class="option-container">
                <span>TÍTULO:</span>
                <input type="text">
            </div>
            <div class="option-container">
                <span>DEPARTAMENTO:</span>
                <select name="departamento" id="">
                    <option value="Roupa">Roupa</option>
                    <option value="Calçado">Calçado</option>
                </select>
            </div>
            <div class="option-container">
                <span>TIPO:</span>
                <select name="departamento" id="">
                    <option value="Roupa">Camisa</option>
                    <option value="Calçado">Regata</option>
                    <option value="Calçado">Calça</option>
                    <option value="Calçado">Bermuda</option>
                </select>
            </div>
            <div class="option-container">
                <span>SEXO:</span>
                <select name="departamento" id="">
                    <option value="Roupa">Camisa</option>
                    <option value="Calçado">Regata</option>
                    <option value="Calçado">Calça</option>
                    <option value="Calçado">Bermuda</option>
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
</html>