(function() {var type_impls = {
"esp_idf_hal":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#234\">source</a><a href=\"#impl-Clone-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Clone for <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Config.html\" title=\"struct esp_idf_hal::spi::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#234\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Config.html\" title=\"struct esp_idf_hal::spi::config::Config\">Config</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","esp_idf_hal::spi::SpiConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#252-316\">source</a><a href=\"#impl-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Config.html\" title=\"struct esp_idf_hal::spi::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#253-255\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section><section id=\"method.baudrate\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#258-261\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.baudrate\" class=\"fn\">baudrate</a>(self, baudrate: <a class=\"struct\" href=\"esp_idf_hal/units/struct.Hertz.html\" title=\"struct esp_idf_hal::units::Hertz\">Hertz</a>) -&gt; Self</h4></section><section id=\"method.data_mode\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#264-267\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.data_mode\" class=\"fn\">data_mode</a>(self, data_mode: <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Mode.html\" title=\"struct esp_idf_hal::spi::config::Mode\">Mode</a>) -&gt; Self</h4></section><section id=\"method.write_only\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#270-273\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.write_only\" class=\"fn\">write_only</a>(self, write_only: bool) -&gt; Self</h4></section><section id=\"method.duplex\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#276-279\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.duplex\" class=\"fn\">duplex</a>(self, duplex: <a class=\"enum\" href=\"esp_idf_hal/spi/config/enum.Duplex.html\" title=\"enum esp_idf_hal::spi::config::Duplex\">Duplex</a>) -&gt; Self</h4></section><section id=\"method.bit_order\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#282-285\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.bit_order\" class=\"fn\">bit_order</a>(self, bit_order: <a class=\"enum\" href=\"esp_idf_hal/spi/config/enum.BitOrder.html\" title=\"enum esp_idf_hal::spi::config::BitOrder\">BitOrder</a>) -&gt; Self</h4></section><section id=\"method.cs_active_high\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#288-291\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.cs_active_high\" class=\"fn\">cs_active_high</a>(self) -&gt; Self</h4></section><section id=\"method.input_delay_ns\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#294-297\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.input_delay_ns\" class=\"fn\">input_delay_ns</a>(self, input_delay_ns: i32) -&gt; Self</h4></section><section id=\"method.polling\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#300-303\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.polling\" class=\"fn\">polling</a>(self, polling: bool) -&gt; Self</h4></section><section id=\"method.allow_pre_post_delays\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#306-309\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.allow_pre_post_delays\" class=\"fn\">allow_pre_post_delays</a>(self, allow_pre_post_delays: bool) -&gt; Self</h4></section><section id=\"method.queue_size\" class=\"method\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#312-315\">source</a><h4 class=\"code-header\">pub fn <a href=\"esp_idf_hal/spi/config/struct.Config.html#tymethod.queue_size\" class=\"fn\">queue_size</a>(self, queue_size: usize) -&gt; Self</h4></section></div></details>",0,"esp_idf_hal::spi::SpiConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#234\">source</a><a href=\"#impl-Debug-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Debug for <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Config.html\" title=\"struct esp_idf_hal::spi::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#234\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fmt</a>(&amp;self, f: &amp;mut Formatter&lt;'_&gt;) -&gt; Result</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a>Read more</a></div></details></div></details>","Debug","esp_idf_hal::spi::SpiConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#318-333\">source</a><a href=\"#impl-Default-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Default for <a class=\"struct\" href=\"esp_idf_hal/spi/config/struct.Config.html\" title=\"struct esp_idf_hal::spi::config::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/esp_idf_hal/spi.rs.html#319-332\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","esp_idf_hal::spi::SpiConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()