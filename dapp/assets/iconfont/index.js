!(function(n) {
  var c,
    e =
      '<svg><symbol id="icon-locked" viewBox="0 0 1024 1024"><path d="M967.111111 427.406222V893.44C967.111111 964.437333 916.053333 1024 849.436444 1024H174.563556C110.165333 1024 56.888889 964.437333 56.888889 893.44V427.377778c0-70.997333 51.057778-130.56 117.674667-130.56h69.688888V264.760889C244.252444 99.811556 359.139556 0 512 0c152.860444 0 268.629333 102.115556 268.629333 264.760889v32.085333h-102.343111V264.760889c0-109.966222-80.270222-159.488-164.067555-159.488-83.797333 0-165.063111 49.521778-165.063111 159.488 0 11.463111 0 20.622222 2.218666 32.085333h498.062222c64.398222 0 117.674667 59.562667 117.674667 130.56zM806.741333 398.222222H219.278222C180.593778 398.222222 170.666667 427.576889 170.666667 451.754667v404.935111C170.666667 894.293333 190.862222 910.222222 219.278222 910.222222H804.693333C844.458667 910.222222 853.333333 888.974222 853.333333 856.689778V451.754667C853.333333 420.124444 842.268444 398.222222 806.741333 398.222222zM512 853.333333a199.111111 199.111111 0 1 1 0-398.222222 199.111111 199.111111 0 0 1 0 398.222222z m0-326.087111l-120.689778 120.661334L512 768.597333l120.689778-120.689777L512 527.246222z" fill="#399C7E" ></path></symbol><symbol id="icon-withdraw" viewBox="0 0 1024 1024"><path d="M746.24 312.888889H852.878222c32.483556 2.787556 58.88 14.620444 79.217778 35.555555 20.337778 20.906667 32 46.648889 34.986667 77.312l0.028444 14.620445V894.293333c0.227556 41.728-12.088889 73.784889-37.034667 96.142223-24.917333 22.414222-53.418667 33.592889-85.475555 33.592888H175.075556c-34.787556-2.161778-62.862222-14.364444-84.167112-36.608C69.973333 966.087111 58.624 938.296889 56.888889 904.049778V428.060444c2.816-33.479111 15.132444-60.672 36.977778-81.521777 21.873778-20.849778 49.493333-32.056889 82.830222-33.621334H266.695111v86.670223h-27.818667c-21.788444-0.995556-38.798222 5.148444-51.029333 18.432-12.231111 13.283556-17.92 28.529778-17.066667 45.767111V948.536889v-103.025778c0.199111 19.541333 5.888 35.015111 17.066667 46.478222 11.207111 11.434667 25.031111 17.521778 41.528889 18.204445H790.869333c18.488889 0.256 33.678222-5.831111 45.568-18.204445 11.889778-12.401778 17.521778-28.444444 16.896-48.128v102.286223V464.270222c-0.455111-19.911111-6.4-35.697778-17.806222-47.303111-11.406222-11.605333-25.6-17.351111-42.524444-17.123555l-13.368889-0.056889-33.393778-0.227556V312.888889zM458.837333 21.902222C476.558222 7.253333 492.828444 0 507.676444 0c14.819556 0 29.667556 7.281778 44.487112 21.902222l134.257777 118.698667c24.376889 18.887111 28.928 38.257778 13.653334 58.055111-15.303111 19.797333-34.531556 21.617778-57.742223 5.489778l-7.054222-5.489778-83.114666-66.503111v172.771555a42.666667 42.666667 0 0 1-42.666667 42.666667h-7.964445a42.666667 42.666667 0 0 1-42.666666-42.666667V132.181333l-82.488889 66.133334-7.281778 5.831111c-18.545778 12.316444-35.356444 10.467556-50.403555-5.546667-22.584889-24.035556-11.235556-45.738667 4.209777-57.998222 10.268444-8.163556 55.608889-47.729778 135.964445-118.727111zM512 824.888889a199.111111 199.111111 0 1 1 0-398.222222 199.111111 199.111111 0 0 1 0 398.222222z m0-326.087111l-120.689778 120.661333L512 740.152889l120.661333-120.689778L512 498.801778z" fill="#476EEA" ></path></symbol><symbol id="icon-apply-vote" viewBox="0 0 1024 1024"><path d="M540.020196 696.718222h196.067555c13.710222 0 31.886222 17.351111 31.886222 44.202667 0 26.823111-18.176 41.130667-31.886222 41.130667H289.339307C275.60064 782.051556 255.973973 768.426667 255.973973 740.920889c0-27.534222 19.626667-44.202667 33.365334-44.202667h162.787555l-100.636444-100.750222v1.137778H186.910862a15.928889 15.928889 0 0 0-15.473778 15.502222v282.282667a15.928889 15.928889 0 0 0 15.473778 15.473777H837.947307a15.928889 15.928889 0 0 0 15.473777-15.473777v-282.282667a15.928889 15.928889 0 0 0-15.473777-15.502222h-195.214223v-3.100445l-102.712888 102.712889zM267.636196 512l-88.376889-88.519111a27.761778 27.761778 0 0 1 0-38.684445L555.892196 8.192A27.249778 27.249778 0 0 1 575.006862 0c7.281778 0 14.108444 2.730667 19.114667 8.192L891.991751 306.062222a27.761778 27.761778 0 0 1 0 38.684445L724.738418 512h181.361778c25.088 0 44.259556 8.362667 53.333333 25.770667 8.362667 15.928889 7.623111 39.850667 7.623111 63.715555v361.528889C967.085084 996.693333 939.778418 1024 906.100196 1024H117.847751A60.984889 60.984889 0 0 1 56.862862 962.986667v-361.528889c0-18.631111 1.905778-44.743111 15.075556-63.715556C82.57664 522.439111 102.772196 512 117.847751 512H267.636196z m-14.876445-107.633778l243.484445 243.484445 322.218666-322.218667-243.484444-243.484444L252.788196 404.366222z m232.391111 68.437334c-12.8 0-24.661333-6.826667-34.503111-15.928889l-0.483555-0.483556-55.04-49.152c-9.358222-9.585778-5.546667-28.871111 5.319111-38.656 11.320889-9.102222 30.862222-9.102222 40.732444 0l43.975111 38.940445a3.811556 3.811556 0 0 0 1.962667 0.483555l128.768-115.825778c9.841778-9.585778 30.264889-11.150222 42.154667 0 11.889778 11.150222 11.719111 32.028444 1.877333 41.614223l-137.813333 122.595555c-9.870222 9.585778-23.665778 16.412444-36.977778 16.412445z" fill="#6083F2" ></path></symbol><symbol id="icon-recall-voter" viewBox="0 0 1024 1024"><path d="M540.020196 696.718222h196.067555c13.710222 0 31.886222 17.351111 31.886222 44.202667 0 26.823111-18.176 41.130667-31.886222 41.130667H289.339307C275.60064 782.051556 255.973973 768.426667 255.973973 740.920889c0-27.534222 19.626667-44.202667 33.365334-44.202667h162.787555l-100.636444-100.750222v1.137778H186.910862a15.928889 15.928889 0 0 0-15.473778 15.502222v282.282667a15.928889 15.928889 0 0 0 15.473778 15.473777H837.947307a15.928889 15.928889 0 0 0 15.473777-15.473777v-282.282667a15.928889 15.928889 0 0 0-15.473777-15.502222h-195.214223v-3.100445l-102.712888 102.712889zM267.636196 512l-88.376889-88.519111a27.761778 27.761778 0 0 1 0-38.684445L555.892196 8.192A27.249778 27.249778 0 0 1 575.006862 0c7.281778 0 14.108444 2.730667 19.114667 8.192L891.991751 306.062222a27.761778 27.761778 0 0 1 0 38.684445L724.738418 512h181.361778c25.088 0 44.259556 8.362667 53.333333 25.770667 8.362667 15.928889 7.623111 39.850667 7.623111 63.715555v361.528889C967.085084 996.693333 939.778418 1024 906.100196 1024H117.847751A60.984889 60.984889 0 0 1 56.862862 962.986667v-361.528889c0-18.631111 1.905778-44.743111 15.075556-63.715556C82.57664 522.439111 102.772196 512 117.847751 512H267.636196z m-14.876445-107.633778l243.484445 243.484445 322.218666-322.218667-243.484444-243.484444L252.788196 404.366222z m201.955556 53.617778c-9.927111-6.798222-21.105778-20.309333-10.268445-35.982222l44.942222-58.851556-55.978666-46.933333c-9.386667-9.614222-9.272889-28.216889 1.621333-37.973333 12.515556-12.117333 30.833778-9.102222 40.704 0l46.449778 39.736888a3.811556 3.811556 0 0 0 1.991111 0.483556l41.841778-53.76c9.870222-9.585778 28.501333-12.401778 40.391111-2.56 11.889778 9.870222 12.913778 28.074667 2.901333 41.528889L566.018418 354.702222c32.199111 27.960889 49.635556 42.951111 52.280889 44.942222 10.24 7.708444 15.388444 20.622222 7.964444 33.649778-8.362667 14.620444-23.324444 18.261333-41.358222 8.334222-1.080889-0.568889-18.744889-14.563556-53.020445-41.984-19.484444 23.182222-31.288889 37.176889-35.384888 41.984-6.144 7.224889-13.169778 15.132444-20.764445 18.062223a25.429333 25.429333 0 0 1-20.992-1.678223z" fill="#968CF4" ></path></symbol><symbol id="icon-vote-percent" viewBox="0 0 1024 1024"><path d="M117.847599 1024A61.013181 61.013181 0 0 1 56.862862 962.92993V544.143422c0-18.659509 1.905773-44.771444 15.075518-63.772285 10.638196-15.359962 30.833701-25.770602 45.909219-25.770602h176.753336v85.190898H186.910537a15.957293 15.957293 0 0 0-15.473739 15.502183v339.483596c0 8.19198 7.28176 15.473739 15.473739 15.473739H837.945354a15.957293 15.957293 0 0 0 15.473739-15.473739V555.293616a15.957293 15.957293 0 0 0-15.473739-15.502183h-109.880614v-85.190898h178.033332c25.087937 0 44.259445 8.362646 53.3332 25.770602 8.362646 15.957293 7.623092 39.907456 7.623093 63.772285v418.786508C967.082809 996.693402 939.77621 1024 906.098072 1024H117.847599z m618.238454-298.836586H289.338725c-13.738632 0-33.36525-13.653299-33.365249-41.187453s19.626618-44.202556 33.365249-44.202556h446.747328c13.710188 0 31.886143 17.351068 31.886143 44.202556 0 26.879933-18.175955 41.187453-31.886143 41.187453z m53.475422-389.46036c0 37.575017-9.272866 66.417612-29.297705 87.694003-20.024839 21.304836-45.681664 31.943031-76.970474 31.943031-33.36525 0-59.647851-10.439085-78.847803-31.28881-18.773286-21.33328-28.15993-50.972317-28.159929-88.974 0-36.721686 9.386643-67.214054 28.159929-91.44866 19.199952-23.779496 45.510997-35.697689 78.847803-35.697689 32.995473 0 59.050519 11.918192 78.222027 35.697689 19.199952 24.234606 28.017708 55.324306 28.017708 92.074436z m-98.218421-276.706864c-171.718682 244.792277-267.661553 384.966149-295.309484 424.446939-11.150194 15.900405-36.494131 28.842595-62.975843 5.404431-17.663956-15.615961-20.849726-33.393694-9.557309-53.361644l283.874846-405.531431c9.386643-11.832859 15.587517-19.086175 18.659509-21.78839 7.111093-6.314651 19.911061-8.248868 27.591042-8.163535 10.524418 0.170666 18.574176 3.612435 23.182164 6.456873 30.378591 18.85862 15.87196 50.630985 14.535075 52.536757z m-235.462523 79.21758c0 38.001683-10.012419 67.64072-30.037258 88.945555-19.626618 21.703057-45.254998 32.568807-76.970474 32.568808-32.967029 0-59.022075-10.66664-78.222027-31.943031-19.199952-21.33328-28.785706-51.171428-28.785706-89.599776 0-36.29502 9.585754-66.360723 28.785706-90.168664C289.82228 24.180277 315.90577 12.318974 348.872799 12.318974s59.022075 11.889748 78.222027 35.697688c19.199952 23.80794 28.785706 53.873643 28.785705 90.168664z m255.54425 194.559514c0-39.338568-9.386643-59.022075-28.245262-59.022075-8.362646 0-15.274628 5.233765-20.764393 15.67285-5.233765 10.467529-7.879091 24.917271-7.879091 43.377669 0 17.407956 2.645327 30.805256 7.879091 40.220344 5.262209 9.75642 12.174192 14.620408 20.764393 14.620408 18.830175 0 28.245263-18.289732 28.245262-54.840752zM377.004284 137.161328c0-39.338568-9.415088-58.99363-28.273707-58.99363-8.106646 0-14.791074 5.00621-20.024839 15.018629-5.745763 11.036417-8.590201 25.685269-8.590201 43.975001 0 17.265735 2.73066 30.719923 8.248869 40.39101 5.233765 9.671087 12.03197 14.50663 20.366171 14.506631 18.85862 0 28.273707-18.318176 28.273707-54.897641z" fill="#5272D7" ></path></symbol><symbol id="icon-mine" viewBox="0 0 1024 1024"><path d="M515.7632 512C866.688 512 1024 687.5648 1024 811.008V1024H0c0-57.1648 0.3328-128.1792 1.024-212.992C2.048 683.7504 164.8128 512 515.7632 512zM512 460.8a230.4 230.4 0 1 1 0-460.8 230.4 230.4 0 0 1 0 460.8z" fill="#A9AFC3" ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M511.858727 0.001024c10.876998 0.179151 36.546713 17.249639 77.034738 51.211465L998.124518 389.371957c8.036182 6.321455 14.229673 13.743407 18.529286 22.265855 4.299613 8.522448 6.654163 18.04302 7.089243 28.561717v544.489721c0.051186 11.798344-2.917595 20.807057-8.880749 27.026141-5.937561 6.219084-15.68847 10.211582-29.227133 12.003087H703.9849c-11.41445-1.535576-20.21842-5.528074-26.41191-12.003087s-9.571758-15.176611-10.10921-26.104796l1.202868-306.987271c-0.332708-13.103583-4.120463-23.161607-11.388857-30.199665-7.293987-7.012465-17.403197-10.416325-30.404408-10.160396H397.97016c-13.820186 0.127965-23.980581 3.531825-30.455594 10.160396-6.475013 6.654163-9.367015 16.609816-8.62482 29.866957v307.319979c0.153558 11.388857-2.866409 20.090455-9.034306 26.104796-6.193491 6.01434-16.046771 10.006838-29.559842 12.003087H40.948698c-13.51307-0.460673-23.596687-3.890126-30.250851-10.262768-6.654163-6.398234-10.237175-16.021178-10.697847-28.920018l0.895753-546.23004c0.691009-12.847654 3.22471-23.929395 7.601102-33.296411 4.401985-9.367015 10.851405-17.454383 19.399446-24.287696L435.489405 51.212489C475.516757 16.917955 501.007322-0.178127 511.858727 0.001024z" fill="#A9AFC3" ></path></symbol><symbol id="icon-vote" viewBox="0 0 1024 1024"><path d="M281.6 435.2V66.048c0-13.7472 1.4848-33.024 11.776-47.0272C301.6448 7.68 317.44 0 329.216 0h182.4-22.4512 205.6192c19.584 0 34.56 6.1696 41.6512 19.0208 6.5024 11.776 5.9648 29.44 5.9648 47.0528v369.1008H955.3664c28.2368 0 49.792 9.4208 60.032 28.9792 9.3952 17.9456 8.576 44.8512 8.576 71.68v419.5328A68.608 68.608 0 0 1 955.392 1024H68.608A68.608 68.608 0 0 1 0 955.3664V535.8336c0-20.9664 2.1504-50.3296 16.9472-71.68C28.9024 446.8992 51.6608 435.2 68.608 435.2H281.6z m0 128H233.728c-17.1776 0-53.7088 22.7072-53.7088 64 0 41.2672 36.5312 64 53.6832 64h558.4384c17.152 0 46.7968-23.7568 46.7968-64 0-40.2688-29.6448-64-46.7968-64H742.4v6.144c0 24.8576-21.3248 45.056-47.616 45.056H329.216C302.9248 614.4 281.6 594.176 281.6 569.344V563.2z" fill="#A9AFC3" ></path></symbol><symbol id="icon-selected" viewBox="0 0 1024 1024"><path d="M512 0c282.760533 0 512 229.239467 512 512 0 282.760533-229.239467 512-512 512-282.760533 0-512-229.239467-512-512C0 229.239467 229.239467 0 512 0z m-38.161067 696.251733l311.637334-286.549333c18.978133-17.476267 21.162667-46.660267 5.051733-66.7648a43.008 43.008 0 0 0-62.5664-4.881067l-276.48 251.904-148.036267-124.8256a48.4352 48.4352 0 0 0-67.2768 4.744534 46.08 46.08 0 0 0 4.3008 65.672533l188.0064 161.450667a34.133333 34.133333 0 0 0 45.3632-0.750934z" fill="#476BDC" ></path></symbol><symbol id="icon-help" viewBox="0 0 1024 1024"><path d="M512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m0-51.2c254.487273 0 460.8-206.312727 460.8-460.8S766.487273 51.2 512 51.2 51.2 257.512727 51.2 512 257.512727 972.8 512 972.8z m34.094545-218.321455c-10.007273 9.006545-21.527273 13.521455-34.606545 13.521455a51.898182 51.898182 0 0 1-35.444364-13.358545c-10.100364-8.913455-15.127273-21.364364-15.127272-37.376 0-14.196364 4.887273-26.135273 14.615272-35.84 9.774545-9.681455 21.76-14.545455 35.956364-14.545455 13.963636 0 25.739636 4.864 35.281455 14.545455 9.541818 9.704727 14.312727 21.643636 14.312727 35.84 0 15.778909-5.003636 28.183273-14.987637 37.21309z m124.299637-313.157818a153.832727 153.832727 0 0 1-27.275637 37.376c-10.542545 10.472727-29.463273 28.113455-56.738909 52.922182-7.563636 6.981818-13.591273 13.125818-18.152727 18.432-4.538182 5.282909-7.912727 10.146909-10.146909 14.545455a72.145455 72.145455 0 0 0-5.166545 13.172363c-1.210182 4.375273-3.025455 12.101818-5.492364 23.179637-4.189091 23.435636-17.384727 35.165091-39.586909 35.165091-11.566545 0-21.248-3.84-29.137455-11.496728-7.889455-7.68-11.799273-19.060364-11.799272-34.164363 0-18.920727 2.885818-35.328 8.610909-49.198546a125.207273 125.207273 0 0 1 22.993454-36.538182c9.541818-10.472727 22.411636-22.923636 38.586182-37.352727 14.196364-12.637091 24.482909-22.155636 30.813091-28.578909 6.306909-6.423273 11.636364-13.591273 15.965091-21.480727 4.328727-7.889455 6.493091-16.430545 6.493091-25.693091 0-18.036364-6.609455-33.256727-19.805091-45.661091-13.218909-12.357818-30.254545-18.571636-51.083637-18.571636-24.436364 0-42.379636 6.260364-53.922909 18.78109-11.543273 12.497455-21.294545 30.906182-29.300363 55.296-7.540364 25.437091-21.876364 38.167273-42.938182 38.167273-12.427636 0-22.900364-4.445091-31.418182-13.358545-8.564364-8.890182-12.8-18.548364-12.8-28.904728 0-21.410909 6.749091-43.124364 20.293818-65.093818 13.521455-21.992727 33.28-40.192 59.229091-54.621091 25.972364-14.429091 56.226909-21.643636 90.856727-21.643636 32.186182 0 60.555636 6.050909 85.201455 18.082909 24.622545 12.078545 43.659636 28.462545 57.088 49.221818 13.428364 20.712727 20.130909 43.287273 20.130909 67.630546 0 19.153455-3.816727 35.956364-11.473454 50.385454z" fill="#4C4F54" ></path></symbol><symbol id="icon-withdraw-detail" viewBox="0 0 1024 1024"><path d="M649.402182 356.840727H706.676364c17.431273 1.536 31.604364 7.982545 42.519272 19.386182 10.938182 11.403636 17.175273 25.483636 18.804364 42.170182V673.978182c0.139636 22.760727-6.516364 40.238545-19.874909 52.433454-13.381818 12.218182-28.695273 18.315636-45.917091 18.315637H342.714182c-18.664727-1.163636-33.722182-7.842909-45.149091-19.968-11.287273-11.636364-17.361455-26.763636-18.292364-45.451637V419.653818c1.512727-18.269091 8.145455-33.093818 19.851637-44.450909 11.752727-11.403636 26.577455-17.501091 44.474181-18.362182h48.314182v47.266909H377.018182c-11.706182-0.535273-20.829091 2.839273-27.392 10.077091a33.512727 33.512727 0 0 0-9.169455 24.948364V703.557818v-56.180363c0.093091 10.635636 3.141818 19.083636 9.169455 25.344 6.004364 6.237091 13.428364 9.541818 22.272 9.937454h301.498182c9.914182 0.139636 18.082909-3.188364 24.459636-9.937454 6.4-6.749091 9.425455-15.499636 9.076364-26.251637v55.784727V439.412364c-0.232727-10.868364-3.421091-19.456-9.541819-25.786182a29.975273 29.975273 0 0 0-22.853818-9.355637l-7.168-0.023272-17.92-0.139637v-47.243636z m-154.298182-158.72C504.599273 190.161455 513.349818 186.181818 521.309091 186.181818c7.959273 0 15.941818 3.979636 23.901091 11.938909l72.075636 64.768c13.102545 10.286545 15.546182 20.852364 7.330909 31.650909-8.215273 10.798545-18.548364 11.799273-30.999272 2.978909l-3.793455-2.978909-44.613818-36.282181v92.462545a25.064727 25.064727 0 1 1-50.106182 0v-92.439273l-44.311273 36.072728-3.886545 3.16509c-9.960727 6.749091-18.967273 5.725091-27.066182-3.025454-12.125091-13.102545-6.050909-24.925091 2.257455-31.604364 5.515636-4.468364 29.858909-26.065455 73.006545-64.768z m28.532364 437.992728c-59.042909 0-106.914909-48.616727-106.914909-108.590546 0-59.997091 47.872-108.613818 106.914909-108.613818 59.042909 0 106.914909 48.64 106.914909 108.613818s-47.872 108.590545-106.914909 108.590546z m0-177.850182l-64.791273 65.815272 64.791273 65.815273 64.791272-65.815273-64.791272-65.815272zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m0-51.2c254.487273 0 460.8-206.312727 460.8-460.8S766.487273 51.2 512 51.2 51.2 257.512727 51.2 512 257.512727 972.8 512 972.8z" fill="#4C4F54" ></path></symbol><symbol id="icon-copyright" viewBox="0 0 1024 1024"><path d="M512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m0-51.2c254.487273 0 460.8-206.312727 460.8-460.8S766.487273 51.2 512 51.2 51.2 257.512727 51.2 512 257.512727 972.8 512 972.8z m104.168727-391.819636l77.102546 8.261818c-4.957091 45.218909-22.807273 82.432-53.597091 111.662545C608.907636 730.112 568.482909 744.727273 518.423273 744.727273c-42.146909 0-76.381091-10.356364-102.632728-31.092364-26.298182-20.736-54.458182-48.872727-68.654545-84.363636-14.196364-35.514182-21.317818-74.658909-21.317818-117.434182 0-68.817455 16.686545-124.765091 50.036363-167.889455C409.274182 300.823273 463.104 279.272727 521.495273 279.272727c45.777455 0 83.874909 13.777455 114.315636 41.355637 30.440727 27.554909 49.594182 67.025455 57.483636 118.434909l-77.102545 7.912727c-14.196364-68.119273-45.544727-102.213818-94.021818-102.213818-31.115636 0-63.232 14.196364-80.500364 42.519273-17.221818 28.346182-25.856 69.422545-25.856 123.22909 0 54.690909 9.239273 96 27.717818 123.880728 18.501818 27.927273 50.897455 41.867636 81.338182 41.867636 24.366545 0 45.102545-9.378909 62.231273-28.136727 17.152-18.734545 26.833455-41.122909 29.090909-67.141818z" fill="#4C4F54" ></path></symbol><symbol id="icon-locked-detail" viewBox="0 0 1024 1024"><path d="M768 465.873455V720.058182c0 38.725818-27.415273 71.214545-63.185455 71.214545h-362.356363C307.874909 791.272727 279.272727 758.784 279.272727 720.058182V465.873455c0-38.749091 27.415273-71.237818 63.185455-71.237819h37.422545v-17.501091c0-89.972364 61.672727-144.407273 143.755637-144.407272 82.082909 0 144.221091 55.691636 144.221091 144.407272v17.501091h-54.923637v-17.501091c0-59.973818-43.101091-86.993455-88.110545-86.993454-44.986182 0-88.622545 27.019636-88.622546 86.993454 0 6.260364 0 11.264 1.186909 17.501091h267.426909c34.583273 0 63.185455 32.488727 63.185455 71.214546z m-86.109091-15.941819H366.452364c-20.759273 0-26.088727 16.034909-26.088728 29.207273v220.858182c0 20.526545 10.845091 29.207273 26.088728 29.207273h314.368c21.317818 0 26.088727-11.589818 26.088727-29.207273v-220.858182c0-17.268364-5.934545-29.207273-25.018182-29.207273z m-158.254545 238.056728c-56.250182 0-101.841455-44.683636-101.841455-99.746909 0-55.086545 45.614545-99.746909 101.818182-99.74691 56.250182 0 101.818182 44.660364 101.818182 99.74691 0 55.086545-45.568 99.746909-101.818182 99.746909z m0-163.374546l-61.719273 60.462546 61.696 60.462545 61.719273-60.462545-61.719273-60.439273zM512 1024C229.236364 1024 0 794.763636 0 512S229.236364 0 512 0s512 229.236364 512 512-229.236364 512-512 512z m0-51.2c254.487273 0 460.8-206.312727 460.8-460.8S766.487273 51.2 512 51.2 51.2 257.512727 51.2 512 257.512727 972.8 512 972.8z" fill="#4C4F54" ></path></symbol><symbol id="icon-back" viewBox="0 0 1024 1024"><path d="M209.746719 468.031724L728.688554 20.27872C745.099243 6.769054 761.680581 0 778.461009 0c25.113759 0 36.319671 7.110351 54.891907 28.469844 18.572236 21.331052 22.383384 40.95562 18.572236 59.414091-2.531285 12.315127-10.921499 24.886227-25.170641 37.7133L379.996956 511.262657l433.731392 378.839485c13.083045 10.523319 21.985204 20.392486 26.76336 29.635942 7.195675 13.850963 8.873718 20.6769 8.873718 39.476667 0 18.799767-10.352671 37.343562-32.309434 53.043216-21.956763 15.671213-62.485762 12.17292-70.079616 8.532421-5.06257-2.445961-13.879405-8.475538-26.393622-18.060291L184.718284 540.784833a57.935137 57.935137 0 0 1-10.893057-12.059155c-1.990898-3.299203-3.04323-9.101249-3.156996-17.463021 0.056883-6.370874 2.957906-12.37201 8.703069-18.03185 5.716722-5.688281 15.841861-14.050053 30.375419-25.199083z" fill="#FFFFFF" ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M137.693867 35.362133l373.896533 376.490667L893.815467 26.624l4.846933-4.642133c15.530667-14.677333 30.651733-21.981867 45.3632-21.981867 22.050133 0 46.1824 7.099733 62.464 28.330667 16.2816 21.2992 19.694933 40.823467 16.349867 59.221333-2.218667 12.253867-9.557333 24.7808-22.084267 37.546667L609.109333 512.068267 986.794667 886.647467c11.0592 10.717867 19.421867 20.821333 25.088 30.344533 8.4992 14.2336 11.605333 22.664533 11.605333 40.0384s-17.988267 36.078933-37.239467 51.712c-15.36 12.424533-36.590933 18.909867-52.6336 13.1072-9.3184-3.413333-20.821333-11.0592-34.474666-23.04l-22.664534-22.186667-364.680533-361.949866L119.330133 1001.506133c-14.677333 12.288-28.740267 18.432-42.257066 18.432a67.1744 67.1744 0 0 1-47.104-18.432C18.875733 991.0272 0 974.711467 0 948.087467c0-17.3056 5.666133-32.733867 17.032533-46.216534L414.5152 509.269333 29.730133 125.098667c-12.0832-12.151467-20.7872-24.6784-26.043733-37.546667C-4.266667 68.232533 3.584 50.4832 26.077867 26.624 48.571733 2.798933 64.238933 2.048 86.186667 4.5056c14.6432 1.672533 31.812267 11.946667 51.5072 30.856533z" fill="#FFFFFF" ></path></symbol><symbol id="icon-vote-selected" viewBox="0 0 1024 1024"><path d="M281.6 435.2V66.048c0-13.7472 1.4848-33.024 11.776-47.0272C301.6448 7.68 317.44 0 329.216 0h182.4-22.4512 205.6192c19.584 0 34.56 6.1696 41.6512 19.0208 6.5024 11.776 5.9648 29.44 5.9648 47.0528v369.1008H955.3664c28.2368 0 49.792 9.4208 60.032 28.9792 9.3952 17.9456 8.576 44.8512 8.576 71.68v419.5328A68.608 68.608 0 0 1 955.392 1024H68.608A68.608 68.608 0 0 1 0 955.3664V535.8336c0-20.9664 2.1504-50.3296 16.9472-71.68C28.928 446.8992 51.6608 435.2 68.608 435.2H281.6z m0 128H233.728c-17.1776 0-53.7088 22.7072-53.7088 64 0 41.2672 36.5312 64 53.6832 64h558.4384c17.152 0 46.7968-23.7568 46.7968-64 0-40.2688-29.6448-64-46.7968-64H742.4v6.144c0 24.8576-21.3248 45.056-47.616 45.056H329.216C302.9248 614.4 281.6 594.176 281.6 569.344V563.2z" fill="#0B1F5D" ></path></symbol><symbol id="icon-mine-selected" viewBox="0 0 1024 1024"><path d="M515.7632 512C866.688 512 1024 687.5648 1024 811.008V1024H0c0-57.1648 0.3328-128.1792 1.024-212.992C2.048 683.7504 164.8128 512 515.7632 512zM512 460.8a230.4 230.4 0 1 1 0-460.8 230.4 230.4 0 0 1 0 460.8z" fill="#0B1F5D" ></path></symbol><symbol id="icon-home-selected" viewBox="0 0 1024 1024"><path d="M511.858727 0.001024c10.876998 0.179151 36.546713 17.249639 77.034738 51.211465L998.124518 389.371957c8.036182 6.321455 14.229673 13.743407 18.529286 22.265855 4.299613 8.522448 6.654163 18.04302 7.089243 28.561717v544.489721c0.051186 11.798344-2.917595 20.807057-8.880749 27.026141-5.937561 6.219084-15.68847 10.211582-29.227133 12.003087H703.9849c-11.41445-1.535576-20.21842-5.528074-26.41191-12.003087s-9.571758-15.176611-10.10921-26.104796l1.202868-306.987271c-0.332708-13.103583-4.120463-23.161607-11.388857-30.199665-7.293987-7.012465-17.403197-10.416325-30.404408-10.160396H397.97016c-13.820186 0.127965-23.980581 3.531825-30.455594 10.160396-6.475013 6.654163-9.367015 16.609816-8.62482 29.866957v307.319979c0.153558 11.388857-2.866409 20.090455-9.034306 26.104796-6.193491 6.01434-16.046771 10.006838-29.559842 12.003087H40.948698c-13.51307-0.460673-23.596687-3.890126-30.250851-10.262768-6.654163-6.398234-10.237175-16.021178-10.697847-28.920018l0.895753-546.23004c0.691009-12.847654 3.22471-23.929395 7.601102-33.296411 4.401985-9.367015 10.851405-17.454383 19.399446-24.287696L435.489405 51.212489C475.516757 16.917955 501.007322-0.178127 511.858727 0.001024z" fill="#0B1F5D" ></path></symbol><symbol id="iconqianbaotubiao" viewBox="0 0 1024 1024"><path d="M718.628571 378.148571h60.233143c21.394286 0 38.912 16.932571 38.619429 38.034286v117.577143H841.142857v81.627429h-23.661714a360182.564571 360182.564571 0 0 1 0 114.614857c0 21.028571-17.188571 37.997714-38.619429 37.997714H295.131429a38.253714 38.253714 0 0 1-38.619429-38.034286v-153.929143A126197.248 126197.248 0 0 0 256 305.956571c0-14.848 3.876571-28.233143 15.981714-38.4C284.050286 257.389714 297.691429 256 318.646857 256h340.809143c13.275429 0 32.475429 2.194286 45.202286 11.556571 8.484571 6.217143 13.165714 19.017143 13.970285 38.4v72.192z m-49.664-34.998857c0.621714-13.897143-1.828571-23.296-7.350857-28.196571-5.558857-4.937143-15.36-7.241143-29.330285-6.948572l-285.842286-0.694857c-13.641143-0.804571-24.137143 1.755429-31.451429 7.643429-7.314286 5.851429-10.605714 15.286857-9.728 28.16v35.072h363.776l-0.073143-35.035429z m99.474286 376.100572l-0.256-103.68-49.444571-0.073143c-17.298286-1.206857-29.696-5.668571-37.266286-13.385143a43.52 43.52 0 0 1-12.288-28.891429c-0.292571-9.252571 3.803429-18.066286 12.288-26.404571 8.521143-8.338286 20.918857-12.726857 37.193143-13.165714h49.737143v-106.605715H305.481143v292.205715H768.365714zM512 1024C229.229714 1024 0 794.770286 0 512S229.229714 0 512 0s512 229.229714 512 512-229.229714 512-512 512z m0-36.571429c262.582857 0 475.428571-212.845714 475.428571-475.428571S774.582857 36.571429 512 36.571429 36.571429 249.417143 36.571429 512s212.845714 475.428571 475.428571 475.428571z" fill="#FFFFFF" ></path></symbol></svg>',
    l = (c = document.getElementsByTagName("script"))[
      c.length - 1
    ].getAttribute("data-injectcss");
  if (l && !n.__iconfont__svg__cssinject__) {
    n.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
      );
    } catch (c) {
      console && console.log(c);
    }
  }
  !(function(c) {
    if (document.addEventListener)
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState))
        setTimeout(c, 0);
      else {
        var l = function() {
          document.removeEventListener("DOMContentLoaded", l, !1), c();
        };
        document.addEventListener("DOMContentLoaded", l, !1);
      }
    else
      document.attachEvent &&
        ((t = c),
        (o = n.document),
        (i = !1),
        (a = function() {
          try {
            o.documentElement.doScroll("left");
          } catch (c) {
            return void setTimeout(a, 50);
          }
          e();
        })(),
        (o.onreadystatechange = function() {
          "complete" == o.readyState && ((o.onreadystatechange = null), e());
        }));
    function e() {
      i || ((i = !0), t());
    }
    var t, o, i, a;
  })(function() {
    var c, l;
    ((c = document.createElement("div")).innerHTML = e),
      (e = null),
      (l = c.getElementsByTagName("svg")[0]) &&
        (l.setAttribute("aria-hidden", "true"),
        (l.style.position = "absolute"),
        (l.style.width = 0),
        (l.style.height = 0),
        (l.style.overflow = "hidden"),
        (function(c, l) {
          l.firstChild
            ? (function(c, l) {
                l.parentNode.insertBefore(c, l);
              })(c, l.firstChild)
            : l.appendChild(c);
        })(l, document.body));
  });
})(window);
