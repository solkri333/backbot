import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation(); // Keeps track of URL changes

  return (
    <>
      <Header />
      
<script charset="utf-8">
if (typeof eaCtrl =="undefined"){ 
	var eaCtrlRecs=[];
	var eaCtrl = {add:function(ag){eaCtrlRecs.push(ag)}};
	var js = document.createElement('script');
	js.setAttribute("src","//go.easrv.cl/loadeactrl.go?pid=148510&spaceid=8139049&ctrlid=797560");
	document.head.appendChild(js);
}

eaCtrl.add({"plugin":"fxim_banner","sid":8139049,"subid":"","default_icon":"","default_title":""});
</script>

      <div className="home">
        <Posts /> {/* This will automatically change when the URL changes */}
        <Sidebar />
      </div>
    </>
  );
}
