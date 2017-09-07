// find this script
var target_script;
var scripts = document.getElementsByTagName('script');
for (var i=0; i<scripts.length; i++) {
  if (scripts[i].src == 'https://www.sparkfun.com/wish_lists/135668.js') {
    target_script = scripts[i];
    break;
  }
}
var target_parent = target_script.parentNode;

// css
var styles = document.createElement('link');
styles.rel = 'stylesheet';
styles.type = 'text/css';
styles.href = 'https://www.sparkfun.com/css/embed/wish_list.css';
target_parent.insertBefore(styles, target_script);

// wrapper for innerHTML
var wrapper = document.createElement('div');

var html = '<div id="wish-list-135668" class="sfe-wish-list">';

html += '<div class="sfe-title"><a href="https://www.sparkfun.com/wish_lists/135668"><strong>Using the Arduino Pro Mini 3.3V</strong> <span class="sfewl">SparkFun Wish List</span></a>';

// only show add to cart if on sparkfun.com
if (document.domain.match(/sparkfun\.com/)) {
  html += '<form action="https://www.sparkfun.com/wish_lists/135668/dump" method="post"><input type=submit value="Add all to cart" class="btn btn-default" /></form>';
}

html += '</div>';

html += '<div class="sfe-inner"><div class="sfe-row"><a href="https://www.sparkfun.com/products/553"><img width="58" height="58" class="sfe-thumbnail" src="https://cdn.sparkfun.com/r/58-58/assets/parts/3/7/8/00553-03-L.jpg" /><span class="sfe-text"><span class="sfe-item-title">Break Away Male Headers - Right Angle <span class="sfe-sku"><span class="sfe-stock sfe-stock-in" title="in stock"></span> PRT-00553</span></span><span class="sfe-description">A row of right angle male headers - break to fit. 40 pins that can be cut to any size. Used with custom PCBs or general custom headers.**Features: ***&hellip;</span></span></a></div><div class="sfe-row"><a href="https://www.sparkfun.com/products/116"><img width="58" height="58" class="sfe-thumbnail" src="https://cdn.sparkfun.com/r/58-58/assets/parts/1/0/6/00116-02-L.jpg" /><span class="sfe-text"><span class="sfe-item-title">Break Away Headers - Straight <span class="sfe-sku"><span class="sfe-stock sfe-stock-in" title="in stock"></span> PRT-00116</span></span><span class="sfe-description">A row of headers - break to fit. 40 pins that can be cut to any size. Used with custom PCBs or general custom headers.**Features: *** Pin Style: Squar&hellip;</span></span></a></div><div class="sfe-row"><a href="https://www.sparkfun.com/products/9873"><img width="58" height="58" class="sfe-thumbnail" src="https://cdn.sparkfun.com/r/58-58/assets/parts/3/9/5/8/09873-01a.jpg" /><span class="sfe-text"><span class="sfe-item-title">SparkFun FTDI Basic Breakout - 3.3V <span class="sfe-sku"><span class="sfe-stock sfe-stock-in" title="in stock"></span> DEV-09873</span></span><span class="sfe-description">This is the newest revision of our [FTDI Basic](http://www.sparkfun.com/commerce/product_info.php?products_id=8772). We now use a SMD 6-pin header on &hellip;</span></span></a></div><div class="sfe-row"><a href="https://www.sparkfun.com/products/11114"><img width="58" height="58" class="sfe-thumbnail" src="https://cdn.sparkfun.com/r/58-58/assets/parts/6/5/4/0/11114-01.jpg" /><span class="sfe-text"><span class="sfe-item-title">Arduino Pro Mini 328 - 3.3V/8MHz <span class="sfe-sku"><span class="sfe-stock sfe-stock-in" title="in stock"></span> DEV-11114</span></span><span class="sfe-description">It\'s blue! It\'s thin! It\'s the Arduino Pro Mini! SparkFun\'s minimal design approach to Arduino. This is a 3.3V Arduino running the 8MHz bootloader. Ar&hellip;</span></span></a></div>';

html += '<div class="sfe-footer"><a class="button" href="https://www.sparkfun.com/wish_lists/135668">View <strong>Using the Arduino Pro Mini 3.3V</strong> on SparkFun.com</a></div>';

html += '</div>'; // end .sfe-inner

html += '</div>'; // end .sfe-wish-list

wrapper.innerHTML = html;

target_parent.insertBefore(wrapper, target_script);
