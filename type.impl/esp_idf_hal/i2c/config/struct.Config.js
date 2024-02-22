(function() {var type_impls = {
"esp_idf_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#46\">source</a><a href=\"#impl-Clone-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Clone for <a class=\"struct\" href=\"esp_idf_hal/i2c/config/struct.Config.html\" title=\"struct esp_idf_hal::i2c::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#46\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/i2c/config/struct.Config.html\" title=\"struct esp_idf_hal::i2c::config::Config\">Config</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","esp_idf_hal::i2c::I2cConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#55-89\">source</a><a href=\"#impl-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_hal/i2c/config/struct.Config.html\" title=\"struct esp_idf_hal::i2c::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#56-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section><section id=\"method.baudrate\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#61-64\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.baudrate\" class=\"fn\">baudrate</a>(self, baudrate: <a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>) -&gt; Self</h4></section><section id=\"method.sda_enable_pullup\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#67-70\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.sda_enable_pullup\" class=\"fn\">sda_enable_pullup</a>(self, enable: bool) -&gt; Self</h4></section><section id=\"method.scl_enable_pullup\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#73-76\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.scl_enable_pullup\" class=\"fn\">scl_enable_pullup</a>(self, enable: bool) -&gt; Self</h4></section><section id=\"method.timeout\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#79-82\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.timeout\" class=\"fn\">timeout</a>(self, timeout: <a class=\"struct\" href=\"esp_idf_hal/i2c/struct.APBTickType.html\" title=\"struct esp_idf_hal::i2c::APBTickType\">APBTickType</a>) -&gt; Self</h4></section><section id=\"method.intr_flags\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#85-88\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/i2c/config/struct.Config.html#tymethod.intr_flags\" class=\"fn\">intr_flags</a>(self, flags: <a class=\"struct\" href=\"enumset/set/struct.EnumSet.html\" title=\"struct enumset::set::EnumSet\">EnumSet</a>&lt;<a class=\"enum\" href=\"esp_idf_hal/interrupt/enum.InterruptType.html\" title=\"enum esp_idf_hal::interrupt::InterruptType\">InterruptType</a>&gt;) -&gt; Self</h4></section></div></details>",0,"esp_idf_hal::i2c::I2cConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#46\">source</a><a href=\"#impl-Debug-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Debug for <a class=\"struct\" href=\"esp_idf_hal/i2c/config/struct.Config.html\" title=\"struct esp_idf_hal::i2c::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#46\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","esp_idf_hal::i2c::I2cConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#91-101\">source</a><a href=\"#impl-Default-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Default for <a class=\"struct\" href=\"esp_idf_hal/i2c/config/struct.Config.html\" title=\"struct esp_idf_hal::i2c::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/i2c.rs.html#92-100\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","esp_idf_hal::i2c::I2cConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()