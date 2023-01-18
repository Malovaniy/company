import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';
import { EventsParams } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener("DOMContentLoaded", ready=>{
      let header: any = document.querySelector('header');
      let video: any = document.querySelector('video');
      video.muted = true;
      video.addEventListener('ended',(e:any)=>{
        video.play()
      })
      let hdContent:any= document.querySelector('.hd-content');
      window.addEventListener('mousewheel',(e:any)=>{
        if (e?.deltaY > 0) {
          header.style.transform= 'translate(0px, -10vh)';
        }
        else{
          header.style.transform= 'translate(0px, 0vh)';
        }
      })
      window.addEventListener('scroll',e=>{
        hdContent.children[1].style.transform= `translate(-${window.scrollY}px, 0vh)`
        hdContent.children[0].style.transform= `translate(${window.scrollY}px, 0vh)`
        hdContent.children[2].style.transform= `translate(${window.scrollY}px, 0vh)`

        if(window.scrollY> 50){
          header.style.backgroundColor= 'white'
        }
        else{
          header.style.backgroundColor= '#D2D7F0'
        }
      })
    });

  }



}
