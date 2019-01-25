import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, Foundation, FontAwesome } from '@expo/vector-icons';

import { setFilters } from '../modules/campings';

const { width, height } = Dimensions.get('screen');

class Settings extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    sort: 'distance',
    type: 'all',
    price: 'free',
    option_full: true,
    option_rated: true,
    option_free: false,
  }

  renderHeader() {
    return (
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Campings')}>
            <Ionicons name="md-arrow-back" size={24} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.title}>Filter</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Campings')}>
            <Ionicons name="ios-search" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  render() {
    const {
      sort,
      type,
      price,
      option_full,
      option_rated,
      option_free,
    } = this.props.filters;

    const activeType = (key) => type === key;

    return (
      <SafeAreaView style={styles.container}>
        {this.renderHeader()}
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Sort By</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[styles.button, styles.first, sort === 'distance' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'distance' })}
              >
                <Text style={[styles.buttonText, sort === 'distance' ? styles.activeText : null]}>Distance</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, sort === 'ratings' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'ratings' })}
              >
                <Text style={[styles.buttonText, sort === 'ratings' ? styles.activeText : null]}>Ratings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.last, sort === 'reviews' ? styles.active : null]}
                onPress={() => this.props.setFilters({ sort: 'reviews' })}
              >
                <Text style={[styles.buttonText, sort === 'reviews' ? styles.activeText : null]}>Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Type</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[styles.button, styles.first, activeType('all') ? styles.active : null]}
                onPress={() => this.props.setFilters({ type: 'all' })}
              >
                <View style={{ flexDirection: 'row', }}>
                  <Foundation name="mountains" size={24} color={activeType('all') ? '#FFF' : '#FF7657' } />
                  <FontAwesome name="truck" size={24} color={activeType('all') ? '#FFF' : '#FFBA5A' } />
                </View>
                <Text style={[styles.buttonText, activeType('all') ? styles.activeText : null]}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, activeType('tent') ? styles.active : null]}
                onPress={() => this.props.setFilters({ type: 'tent' })}
              >
                <Foundation name="mountains" size={24} color={activeType('tent') ? '#FFF' : '#FF7657'} />
                <Text style={[styles.buttonText, activeType('tent') ? styles.activeText : null]}>Tenting</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.last, activeType('rv') ? styles.active : null]}
                onPress={() => this.props.setFilters({ type: 'rv' })}
              >
                <FontAwesome name="truck" size={24} color={activeType('rv') ? '#FFF' : '#FFBA5A'}/>
                <Text style={[styles.buttonText, activeType('rv') ? styles.activeText : null]}>RV Camping</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>Price</Text>
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={[styles.button, styles.first, price === 'free' ? styles.active : null]}
                onPress={() => this.props.setFilters({ price: 'free' })}
              >
                <Text style={[styles.buttonText, price === 'free' ? styles.activeText : null]}>Free</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, price === '$$' ? styles.active : null]}
                onPress={() => this.props.setFilters({ price: '$$' })}
              >
                <Text style={[styles.buttonText, price === '$$' ? styles.activeText : null]}>$$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, price === '$$$' ? styles.active : null]}
                onPress={() => this.props.setFilters({ price: '$$$' })}
              >
                <Text style={[styles.buttonText, price === '$$$' ? styles.activeText : null]}>$$$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.last, price === '$$$$' ? styles.active : null]}
                onPress={() => this.props.setFilters({ price: '$$$$' })}
              >
                  <Text style={[styles.buttonText, price === '$$$$' ? styles.activeText : null]}>$$$$</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View>
              <Text style={styles.title}>More Options</Text>
            </View>
            <View>
              <View style={styles.option}>
                <Text style={{ fontWeight: '500', }}>Show spots that are full</Text>
                <Switch
                  value={option_full}
                  ios_backgroundColor="#EAEAED"
                  trackColor={{false: "#EAEAED", true: "#FF7657"}}
                  onValueChange={() => this.props.setFilters({ option_full: !option_full })}
                />
              </View>
              <View style={styles.option}>
                <Text style={{ fontWeight: '500', }}>Show only highly rated spots</Text>
                <Switch
                  value={option_rated}
                  ios_backgroundColor="#EAEAED"
                  trackColor={{false: "#EAEAED", true: "#FF7657"}}
                  onValueChange={() => this.props.setFilters({ option_rated: !option_rated })}
                />
              </View>
              <View style={styles.option}>
                <Text style={{ fontWeight: '500', }}>Show only Free Spots</Text>
                <Switch
                  value={option_free}
                  ios_backgroundColor="#EAEAED"
                  trackColor={{false: "#EAEAED", true: "#FF7657"}}
                  onValueChange={() => this.props.setFilters({ option_free: !option_free })}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const moduleState = state => ({
  filters: state.campings.filters,
  loading: state.campings.loading,
});

const moduleActions = {
  setFilters,
}

export default connect(moduleState, moduleActions)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width: width,
    paddingHorizontal: 14,
  },
  section: {
    flexDirection: 'column',
    marginHorizontal: 14,
    marginBottom: 14,
    paddingBottom: 24,
    borderBottomColor: '#EAEAED',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 18,
    marginVertical: 14,
  },
  group: {
    flexDirection: 'row',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#FF7657',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 14,
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '500',
  },
  active: {
    backgroundColor: '#FF7657',
  },
  activeText: {
    color: '#FFF'
  },
  first: {
    borderTopLeftRadius: 13,
    borderBottomLeftRadius: 13,
  },
  last: {
    borderTopRightRadius: 13,
    borderBottomRightRadius: 13,
  },
  option: {
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
