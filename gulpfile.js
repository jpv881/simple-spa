var gulp = require("gulp"),
    browserSync = require("browser-sync");

gulp.task("default",["browser"]);

gulp.task("browser", function(){
    browserSync.init({
        server:{
            baseDir: "./"
        }
    })
});

gulp.watch(["index.html", "assets/css/estilos.css", "assets/js/main.js"]).on("change", function(){
    browserSync.reload();
});