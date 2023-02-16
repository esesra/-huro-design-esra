import React from "react";
import Card from "./card";
import Media from "./media";

const Cards = () => {
  return (
    <div>
      <div className="page-content is-relative">
        <div className="page-title has-text-centered">
          <div className="title-wrap">
            <h1 className="title is-4">Basic Cards</h1>
          </div>
        </div>
        <div className="page-content-inner">
          <Card
            is12
            demoCard
            isNarrow
            demoTitle
            cardHeader="Basic Cards"
            headerClass="title is-thin is-5"
          >
            <p>
              Huro cards are very versatile and can be used in any type of
              layout. Huro provides 3 main basic cards with the following
              classes: <code>.s-card</code>,<code>.r-card</code> and{" "}
              <code>.l-card</code>. The main difference each one of those is the
              border radius, giving a unique look and feel to each one of them.
            </p>
          </Card>
          {/* -----------------------Basic Cards -------------------*/}
          <div class="columns is-multiline">
            <Card is4 sCard cardHeader="Iam an S-Card" headerClass="title is-5">
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card is4 rCard cardHeader="Iam an R-Card" headerClass="title is-5">
              <p>
                I can be used as is in any layout. R Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card is4 lCard cardHeader="Iam an L-Card" headerClass="title is-5">
              <p>
                I can be used as is in any layout. L Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
          </div>
          {/* -----------------------Raised Cards -------------------*/}
          <div className="columns is-multiline">
            <Card
              is4
              sCard
              isRaised
              cardHeader="Raised S-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>

            <Card
              is4
              rCard
              isRaised
              cardHeader="Raised R-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              lCard
              isRaised
              cardHeader="Raised L-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
          </div>
          {/* -----------------------Colored Cards -------------------*/}
           <div className="columns is-multiline">
            <Card
              is4
              sCard
              isRaised
              isPrimary
              cardHeader="Primary S-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              rCard
              isSecondary
              isPrimary
              cardHeader="Secondary R-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              rCard
              isInfo
              isPrimary
              cardHeader="Info l-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              rCard
              isSuccess
              isPrimary
              cardHeader="Success R-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              sCard
              isWarning
              isPrimary
              cardHeader="Warning S-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
            <Card
              is4
              sCard
              isDanger
              isPrimary
              cardHeader="Danger L-Card"
              headerClass="title is-5"
            >
              <p>
                I can be used as is in any layout. S Cards are simple containers
                that can hold any type of content, from simple plain text to
                more structured markup.
              </p>
            </Card>
          </div>
          {/* --------------------Structured Cards -------------------*/}
          <div className="columns is-multiline">
            <Card is4 lCard headerClass="title is-5">
              <div className="card-head">
                <Media
                  divClassName="media-flex-center no-margin"
                  Type="h-avatar"
                  Src="https://via.placeholder.com/150x150"
                  demoSrc="assets/img/avatars/photos/19.jpg"
                >
                  <span>Greta K.</span>
                  <span>Sales Manager</span>
                </Media>
              </div>
              <div className="card-inner">
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content, from simple
                  plain text to more structured markup.
                </p>
              </div>
            </Card>

            <Card is4 rCard headerClass="title is-5">
              <div className="card-head">
                <Media
                  divClassName="media-flex-center no-margin"
                  Type="h-avatar"
                  Src="https://via.placeholder.com/150x150"
                  demoSrc="assets/img/avatars/photos/19.jpg"
                >
                  <span>Greta K.</span>
                  <span>Sales Manager</span>
                </Media>
              </div>
              <div className="card-inner">
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content, from simple
                  plain text to more structured markup.
                </p>
              </div>
            </Card>
            <Card is4 lCard headerClass="title is-5">
              <div className="card-head">
                <Media
                  divClassName="media-flex-center no-margin"
                  Type="h-avatar"
                  Src="https://via.placeholder.com/150x150"
                  demoSrc="assets/img/avatars/photos/19.jpg"
                >
                  <span>Greta K.</span>
                  <span>Sales Manager</span>
                </Media>
              </div>
              <div className="card-inner">
                <p>
                  I can be used as is in any layout. L Cards are simple
                  containers that can hold any type of content, from simple
                  plain text to more structured markup.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
