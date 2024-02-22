import React, {useState} from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');


  const data = {
    imageUrl: require('./me.jpg'),
    name: 'Excell I. Bautista',
    course: 'Bachelor of Science in Information Technology,                                                 Mechanical Engineering Technology',
    education: {
      elementary: 'Tañong Elementary School (Main)',
      elementaryYear: 2010,
      highSchool: 'Tañong Integrated School',
      highSchoolYear: 2014,
      college: 'City of Malabon University',
      collegeYear: 2017,
      college2: 'Global Reciprocal Colleges Caloocan',
      collegeYear2: 2025
    },
    about: 'Mechanical Engineering Technologist, CAD Designer, Electrician and Machinist. Hopefully, soon to be IT Professional.',

    profExperience1:
    {
      workName: 'CAD Operator',
      imageSrc: require('./cad.jpg'),
      description: 'Creating a plan based on customer\'s choices.  Giving quotations and other options to the customers. Assessing different materials and field works.'
    },
    profExperience2:
    {
      workName: 'Machinist',
      imageSrc: require('./site.jpg'),
      description: 'Fabricating different materials. Making custom-built materials for ships. Repairing different types of machine. Maintaining different kinds of ships and boats.'
    },
    contact:
    {
      email: 'excellbautista@gmail.com',
      description: '09069061516'
    }

  }

  const handlePress = () => {
    setCurrentSection((prevSection) => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about'
        case 'about':
          return 'profExperience1'
        case 'profExperience1':
          return 'profExperience2'
        case 'profExperience2':
          return 'contact'
        case 'contact':
          return 'name'
        default:
          return 'name'
      }
    });
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableOpacity onPress={handlePress} style={styles.mainContainer}>
          {currentSection === 'name' && (
            <>
              <View style={{alignItems:'center'}}>
                <Image source={data.imageUrl} style={styles.profileImg}/>
              </View>
              <View>
                <Text style={[styles.textHeader, {textAlign:'center'}]}>{data.name}</Text>
                <Text style={[styles.textBody, {textAlign:'center'}]}>{data.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View>
              <Text style={styles.textHeader}>Education: </Text>
              <Text style={styles.textHeaderSmall}>College:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college2}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear2}</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.college}</Text>
              <Text style={styles.textBodySubtle}>{data.education.collegeYear}</Text>
              <Text style={styles.textHeaderSmall}>High School:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.highSchool}</Text>
              <Text style={styles.textBodySubtle}>{data.education.highSchoolYear}</Text>
              <Text style={styles.textHeaderSmall}>Elementary:</Text>
              <Text style={[styles.textBody, {marginBottom:0}]}>{data.education.elementary}</Text>
              <Text style={styles.textBodySubtle}>{data.education.elementaryYear}</Text>
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style={styles.textHeader}>About Me: </Text>
              <Text>{data.about}</Text>
            </View>
          )}
          {currentSection === 'profExperience1' && (
            <View>
              <Text style={styles.textHeader}>Experience #1:</Text>
              <Text style={styles.textHeaderSmall}>{data.profExperience1.workName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.profExperience1.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.profExperience1.description}</Text>
            </View>
          )}
          {currentSection === 'profExperience2' && (
            <View>
              <Text style={styles.textHeader}>Experience #2:</Text>
              <Text style={styles.textHeaderSmall}>{data.profExperience2.workName}</Text>
              <View style={{alignItems:'center'}}>
                <Image style={styles.projectImg} source={data.profExperience2.imageSrc}/>
              </View>
               <Text style={styles.textBody}>{data.profExperience2.description}</Text>
            </View>
          )}
          {currentSection === 'contact' && (
            <View>
               <Text style={styles.textHeader}>Contact Me:</Text>
               <Text style={styles.textBodySubtle}>Email:</Text>
               <Text style={styles.textBody}>excellbautista@gmail.com</Text>
               <Text style={styles.textBodySubtle}>Contact Number:</Text>
               <Text style={styles.textBody}>09069061516</Text>
            </View>
          )}

        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    padding: 10,
    justifyContent: 'center',
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 150 / 2,
    marginBottom: 30,
  },
    projectImg: {
    height: 200,
    width: 200,
    marginBottom: 30,
  },
  textHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textHeaderSmall: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12
  },
  textBody: {
    fontSize: 18,
    marginBottom: 12
  },
  textBodySubtle: {
    fontSize: 18,
    marginBottom: 12,
    color: 'darkgray'
  },
  borderGray: {
    borderWidth: 1,
    borderColor: 'gray',
  }
})


export default App;