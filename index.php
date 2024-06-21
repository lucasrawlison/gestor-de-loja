<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/index.css">
    <link rel="stylesheet" href="assets/css/product-screen.css">
    <link rel="stylesheet" href="assets/css/loading-screen.css">
    <link rel="stylesheet" href="assets/css/inputAnimation.css">
    <link rel="stylesheet" href="assets/css/left-bar-product-screen.css">
    <link rel="stylesheet" href="assets/css/midia-screen.css">
    <title>Document</title>
</head>
<body>
    <div id="productScreenBg" class="product-screen-bg">
        <div class="left-bar-product-screen">
            <div onclick="optionSelect('cadastro');" class="screen-option">
                <span>CADASTRO</span>
            </div>
            <div onclick="optionSelect('midia');" class="screen-option">
                <span>MÍDIA / ARQUIVOS</span>
            </div>
        </div>
        <div id="productScreen" class="product-screen">
            <svg onclick="closeProductWindow();"id="closeButton" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
            <span id="productId">##</span>
            <div id="saveButtonContainer">

                <div id="saveButton">SALVAR</div>
            </div>
            <div onclick="fileUpload();" id="fileSubmitContainer" productId="";>

                <div id="fileSubmit">ENVIAR ARQUIVOS</div>
            </div>
            <div id="loadingScreen" class="loading-screen">
                <div class="loader"></div>
            </div>
            <div id="cadastroScreen" class="screen show">
                <div class="option-container">
                    <span>TÍTULO:</span>
                    <input class="input-design" id="productTitle" type="text">
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
                    <span>GÊNERO:</span>
                    <select name="departamento" id="productSexo">
                        
                    </select>
                </div>
                <div class="container">
                    <div class="option-container">
                        <span>VALOR:</span>
                        <input id="productValue" class="moneyValueInput" type="text">
                    </div>
                    <div class="option-container">
                        <span>VALOR ANTERIOR:</span>
                        <input id="productPreviousValue" class="moneyValueInput" type="text">
                    </div>
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
                <div id="midiaScreen" class="screen">
                    <div id="picturesDisplay" class="pictures-display">
                        <!-- <div class="pictures-container">
                            <img src="http://localhost/loja/assets/images/products/1/foto.jpg" alt="">
                        </div>
                        <div class="pictures-container">
                            <img src="http://localhost/loja/assets/images/products/1/foto.jpg" alt="">

                        </div>
                        <div class="add-picture">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                            </svg>
                        </div> -->
                            <!-- <form class="add-picture" action="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                                </svg>
                                <input type="file" name="fileInput" id="fileInput" accept="image/jpg, image/png, image/jpeg" placeholder="">
                                <button type="submit">Enviar</button>
                            </form> -->
                        
                    </div>

                </div>
            </div>
        </div>
    </div>

    
    <div class="bg">
        <div class="simple-container">
            
            <div id="refreshButton">
                <span id="refreshButton">Atualizar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
                </svg>
            </div>
            <div style="width:100%"></div>
            <div id="registerButton"  onclick="loadProduct();" class="no-select">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
                <span>PRODUTO</span>
            </div>
        </div>
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
<script src="assets/js/saveProduct.js"></script>
<script src="assets/js/inputAnimation.js"></script>
<script src="assets/js/convertValue.js"></script>
<script src="assets/js/productOptionSelect.js"></script>
<script src="assets/js/fileReader.js"></script>
<script src="assets/js/fileUpload.js"></script>
</html>