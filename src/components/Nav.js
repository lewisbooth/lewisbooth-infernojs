import { Link, IndexLink } from 'inferno-router';
import Component from 'inferno-component';

class Main extends Component {

  constructor(props, context) {
    super(props, context) 
    this.state = {
      navImage: this.getNavImage(),
      oldNavImage: this.getNavImage(),
      navImageLoading: false,
      navImageLoaded: false,
    }
  }

  getNavImage() {
    var navImage = this.context.router.location.pathname.replace('/', '-')
    if (navImage === '-') navImage = '-home';
    return `/images/nav-background${navImage}.jpg`;
  }

  handleImageLoaded() {
    if (this.state.navImageLoaded) return;
    setTimeout(function() { 
      this.setState({ 
        navImageLoaded: true
      }); }.bind(this)
    , 1);
    setTimeout(function() { 
      this.setState({ 
        oldNavImage: this.state.navImage,
        navImageLoading: false 
      }); }.bind(this)
    , 500);
  }

  componentDidUpdate() {
    const oldNavImage = this.state.navImage;
    const navImage = this.getNavImage();
    if (navImage !== oldNavImage) {
      this.setState({ 
        navImage,
        oldNavImage,
        navImageLoading: true,
        navImageLoaded: false
      })
    }
  }

  render() { 
    return (
      <div className="Nav">
        <img src={ this.state.oldNavImage } alt="The Orange Tree - Restauraunt Photography" className="Nav__background-image" />
        { this.state.navImageLoading ? 
          <img src={ this.state.navImage } alt="The Orange Tree - Restauraunt Photography" className={ `Nav__background-image ${ this.state.navImageLoaded ? 'loaded' : 'loading' }` } onload={ this.handleImageLoaded() } />
        : '' }
        <div className="Nav__wrapper">
          <IndexLink>
            <img src="/images/orange-tree-logo.jpg" alt="Orange Tree Logo" className="Nav__main-logo"/>
          </IndexLink>
          <div className="Nav__cta">
            <button className="Nav__cta--book-table">Book online</button>
            <p className='Nav__cta--divide'>or call us on</p>
            <div className="Nav__cta--phone">
              <img src='/images/nav-phone.svg' className="Nav__cta--phone--icon"/>
              <h3 className="Nav__cta--phone--text"><a href='tel:01782719222'>01782 719222</a></h3>
            </div>
          </div>
          <ul className="Nav__wrapper--menu">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/menu'>Menus</Link>
            </li>
            <li>
              <Link to='/gallery'>Gallery</Link>
            </li>
            <li>
              <a href='https://parogonpubs.co.uk/jobs/' target='_blank'>Jobs</a>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Main;