[1mdiff --git a/src/pages/index.js b/src/pages/index.js[m
[1mindex 9b5d65c..6d58e37 100644[m
[1m--- a/src/pages/index.js[m
[1m+++ b/src/pages/index.js[m
[36m@@ -101,17 +101,22 @@[m [mconst IndexPage = ({ data }) => {[m
         const notLast = remainingProjects.length != 0;[m
 [m
         return ([m
[32m+[m[32m          // Image container[m
           <div[m
             key={project.title}[m
             className="image-container"[m
             onClick={isFirst ? displayNextProject : undefined}[m
             style={{ width: `${project.scale}%` }}[m
           >[m
[32m+[m
[32m+[m[32m            {/* Imange */}[m
             <Image[m
               className={isFirst && notLast ? "first-image" : ""}[m
               name={project.image}[m
             />[m
[31m-            {isFirst && notLast ? <div className="image-cross-overlay">＋</div> : ""}[m
[32m+[m
[32m+[m[32m            {/* + Sign */}[m
[32m+[m[32m            {isFirst && notLast ? <div className="image-cross-overlay" style={{fontSize: `${project.scale/2}vw`}}>＋</div> : ""}[m
             <figcaption>{project.caption}</figcaption>[m
           </div>[m
         )[m
[1mdiff --git a/src/style/style.css b/src/style/style.css[m
[1mindex b425615..ba4cf81 100644[m
[1m--- a/src/style/style.css[m
[1m+++ b/src/style/style.css[m
[36m@@ -46,7 +46,6 @@[m [mh2{[m
 .image-cross-overlay {[m
   pointer-events: none;[m
   color: white;[m
[31m-  font-size: 20vw;[m
   position: absolute;[m
   top: 45%;[m
   left: 50%;[m
