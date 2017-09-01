<?php
// Before removing this file, please verify the PHP ini setting `auto_prepend_file` does not point to this.

if (file_exists('/var/lib/openshift/5809a9197628e1dddd0001a3/app-root/data/plugins/wordfence/waf/bootstrap.php')) {
	define("WFWAF_LOG_PATH", '/var/lib/openshift/5809a9197628e1dddd0001a3/app-root/data/current/wp-content/wflogs/');
	include_once '/var/lib/openshift/5809a9197628e1dddd0001a3/app-root/data/plugins/wordfence/waf/bootstrap.php';
}
?>