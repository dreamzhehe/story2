!function(e){"use strict";e(function(){0<e("#commentform").length&&e("#commentform").attr("enctype","multipart/form-data"),e("#comment_image_reloaded").change(function(){if(""!==e.trim(e(this).val())){var i,o;if(i=e(this).val().split("."),console.log(i),o=i[i.length-1].toString().toLowerCase(),console.log(o),"png"!==o&&"gif"!==o&&"jpg"!==o&&"jpeg"!==o)return e("#comment-image-reloaded-error").html(cm_imgs.fileTypeError).css({color:"#bb0404","font-style":"italic"}).show(),void e(this).val("");if(e("#comment-image-reloaded-error").hide(),window.FileReader&&window.File&&window.FileList&&window.Blob){if(!(cm_imgs.limitFileSize>this.files[0].size))return e("#comment-image-reloaded-error").html(cm_imgs.fileSizeError+" "+parseInt(cm_imgs.limitFileSize/1048576)+" MB").css({color:"#bb0404","font-style":"italic"}).show(),void e(this).val("");if(e("#comment-image-reloaded-error").hide(),!(cm_imgs.limitFileCount>=this.files.length))return e("#comment-image-reloaded-error").html(cm_imgs.fileCountError+" "+parseInt(cm_imgs.limitFileCount)).css({color:"#bb0404","font-style":"italic"}).show(),void e(this).val("");e("#comment-image-reloaded-error").hide()}}})})}(jQuery);