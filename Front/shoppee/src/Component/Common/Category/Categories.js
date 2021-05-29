import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Category from './Category';
import './Arrow.css';
import { connect } from 'react-redux';
import { loadCategory } from '../../../Redux/actions/category.action';

const MenuItem = ({ cmp1, cmp2 }) => {
    if (cmp2.image === "" && cmp2.text === "") {
        return (
            <Grid container spacing={0} style={{
                margin: 0,
                width: '100%',
            }}>
                <Grid item xs={12}>
                    <Category image={cmp1.image} text={cmp1.text} style={{ width: 119, height: 150 }} />
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>

        )
    }
    else {
        return (
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <Category image={cmp1.image} text={cmp1.text} style={{ width: 119, height: 150 }} />
                </Grid>
                <Grid item xs={12}>
                    <Category image={cmp2.image} text={cmp2.text} style={{ width: 119, height: 150 }} />
                </Grid>
            </Grid>
        )
    }

}

// const component = Array.from(Array(this.props.componentsInfo.length)).map((x, i) => this.toCategory(i, this.props.componentsInfo))
const Menu = (list) => {
    var components = list.map((el, i) => {
        if (i + 1 == list.length) {
            return (<MenuItem key={i} cmp1={el} cmp2={{ image: "", text: "" }} />)
        }
        else {
            if (i % 2 == 0) {
                return (<MenuItem key={i} cmp1={list[i]} cmp2={list[i + 1]} />)
            }

        }
    });

    components = components.filter(function (x) {
        return x !== undefined;
    });

    return components
}

const Arrow = ({ text, className }) => {
    return (
        <div className={className}>
            <label>
                {text}
            </label>
        </div>
    )
}

const ArrowLeft = Arrow({ className: 'arrow-prev arrow', text: '<' });
const ArrowRight = Arrow({ className: 'arrow-next arrow', text: '>' });

export class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
        }
    }

    componentDidMount() {
        this.props.loadCategory();
      }

    onSelect = key => {
        this.setState({
            selected: key
        })
    }

    onUpdate = ({ translate }) => {
        this.setState({ translate });
    };

    render() {
        const { selected } = this.state;
        var defaultSetting = {
            alignCenter: true,
            clickWhenDrag: false,
            dragging: true,
            hideArrows: true,
            hideSingleArrow: true,
            itemsCount: 0,
            selected: '0',
            scrollToSelected: false,
            translate: 0,
            transition: 1,
            wheel: true,
            showList: true,
            inertiascrolling: true,
            slowdownFactor: 10,
        }
        
        var menu = Menu([], '0')
        if (this.props.categoryReducer.payload) {
            menu = Menu(this.props.categoryReducer.payload.data.data, selected);
            defaultSetting.itemsCount = this.props.categoryReducer.payload.data.data;
        }
        return (
            <Container>
                <Grid container direction="row" alignItems="center" spacing={1}>
                    <Grid item xs={12} sm={12}>
                        <label>
                            หมวดหมู่
                        </label>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Container style={{ height: "380px" }}>
                            <ScrollMenu
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                data={menu}
                                dragging={defaultSetting.dragging}
                                hideArrows={defaultSetting.hideArrows}
                                hideSingleArrow={defaultSetting.hideSingleArrow}
                                inertiaScrolling={defaultSetting.inertiascrolling}
                                inertiaScrollingSlowdown={defaultSetting.slowdownFactor}
                                selected={selected}
                                onSelect={this.onSelect}
                                onUpdate={this.onUpdate}
                                ref={el => (this.menu = el)}
                                rtl={false}
                                scrollBy={0}
                                scrollToSelected={defaultSetting.scrollToSelected}
                                translate={undefined}
                                useButtonRole={true}
                                transition={+defaultSetting.transition}
                            />
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = ({ categoryReducer }) => ({ categoryReducer });

const mapDispatchToProps = {
    loadCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);