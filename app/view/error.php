
<body>
    <div style="background-image: url('https://lh3.googleusercontent.com/--OShQ8C_FRo/WUKcqSyem9I/AAAAAAAAHY4/Mc72rFmc-K8IeMsOD29ShCALKZ9GQzDTwCL0BGAYYCw/h606/2017-06-15.png')" class="main">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1 class="cursive">Huum... Você não deveria estar aqui</h1>
            <h2 class="sub">Volta pra olhar os horários, abestado!</h2>
          </div>
        </div>
        <!-- Inverso -->
        <div id="countdown" class="countdown">
          <div class="row">
            <div class="countdown-label">Direto</div>
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12">
              <div class="text-center">
              <div id="circular-direto" class="countdown-number">{{hora}} <span class="thinker-second" style="font-size: 15rem;">:</span> {{minuto}}</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="countdown-label">Inverso</div>
            <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 col-xl-12">
              <div class="text-center">
              <div id="circular-inverso" class="countdown-number">{{hora}} <span class="thinker-second" style="font-size: 15rem;">:</span> {{minuto}}</div>
              </div>
            </div>
          </div>
        </div>
        <!--/. inverso -->
        <div class="mailing-list">
          <h5 class="mailing-list-heading" style="font-size: 2.5rem"><a style="color: white" href="/app/view/lista-circulares.php">Click aqui para ver a lista completa dos horários</a></h5>
      </div>
      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy;2017 IMD</p>
            </div>
            <div class="col-md-6">
              <p style="font-size: 2rem" class="credit">Horário Atual: <span class="horarioAtual"></span></p>
              <!-- Please do not remove the backlink to us unless you support the development at https://bootstrapious.com/donate. It is part of the license conditions. Thanks for understanding :) -->
            </div>
          </div>
        </div>
      </div>
    </div>