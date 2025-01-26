const portss = [
    "assets/images/portss/p (1).jpeg",
    "assets/images/portss/p (2).jpeg",
    "assets/images/portss/p (3).jpeg",
    "assets/images/portss/p (4).jpeg",
    "assets/images/portss/p (5).jpeg",
    "assets/images/portss/p (6).jpeg",
    "assets/images/portss/p (7).jpeg",
    "assets/images/portss/p (8).jpeg",
    "assets/images/portss/p (9).jpeg",
    "assets/images/portss/p (10).jpeg",
    "assets/images/portss/p (11).jpeg",
    "assets/images/portss/p (12).jpeg",
    "assets/images/portss/p (13).jpeg",
    "assets/images/portss/p (14).jpeg",
    "assets/images/portss/p (15).jpeg",
    "assets/images/portss/p (16).jpeg",
   
];
portss.forEach((src) => {
    document.write(`
        <div class="col-md-4 col-sm-6">
            <div class="single-explore-item">
                <div class="single-explore-img">
                    <img style="object-fit: cover;" src="${src}" alt="explore image">
                </div>
            </div>
        </div>
    `);
});
