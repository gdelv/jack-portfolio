import React from 'react'
import '../styles/ZoomCard.scss'

export default function ZoomCard() {
    return (
        <>
        <div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <article class="blog-card">
        <div class="blog-card__background">
          <div class="card__background--wrapper">
            <div class="card__background--main">
              <div class="card__background--layer"></div>
            </div>
          </div>
        </div>
        <div class="blog-card__head">
          <span class="date__box">
            <span class="date__day">11</span>
            <span class="date__month">JAN</span>
          </span>
        </div>
        <div class="blog-card__info">
          <h5>HARVICK GETS WHAT HE NEEDS, JOHNSON AMONG THOSE</h5>
          <p>
            <a href="#" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> Tony Jahson</a>
            <a href="#" class="icon-link"><i class="fa fa-comments-o"></i> 150</a>
          </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vero libero voluptatibus earum? Alias dignissimos quo cum, nulla esse facere atque, blanditiis doloribus at sunt quas, repellendus vel? Et, hic!</p>
          <a href="#" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>READ MORE</a>
        </div>
      </article>
    </div>
  </div>
</div>

<section class="detail-page">
  <div class="container mt-5">
    
  </div>
</section>
        </>
    )
}
