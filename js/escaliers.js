const images = [    
    "assets/images/escaliers/p (1).jpeg",
    "assets/images/escaliers/p (2).jpeg",
    "assets/images/escaliers/p (3).jpeg",
    "assets/images/escaliers/p (4).jpeg",
    "assets/images/escaliers/p (5).jpeg",
    "assets/images/escaliers/p (6).jpeg",
    "assets/images/escaliers/p (7).jpeg",
    "assets/images/escaliers/p (8).jpeg",
    "assets/images/escaliers/p (9).jpeg",
    "assets/images/escaliers/p (10).jpeg",
    "assets/images/escaliers/p (11).jpeg",
    "assets/images/escaliers/p (12).jpeg",
    "assets/images/escaliers/p (13).jpeg",
    "assets/images/escaliers/p (14).jpeg",
    "assets/images/escaliers/p (15).jpeg",
    "assets/images/escaliers/p (16).jpeg",
    "assets/images/escaliers/p (17).jpeg",
    "assets/images/escaliers/p (18).jpeg",
    "assets/images/escaliers/p (19).jpeg",
    "assets/images/escaliers/p (20).jpeg",
    "assets/images/escaliers/p (21).jpeg",
    "assets/images/escaliers/p (22).jpeg",
    "assets/images/escaliers/p (23).jpeg",
    "assets/images/escaliers/p (24).jpeg",
   
];
images.forEach((src) => {
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
