package com.snaackbox;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import android.os.PersistableBundle;

import org.devio.rn.splashscreen.SplashScreen;
import androidx.annotation.Nullable;

public class MainActivity extends ReactActivity {

  @Override
  public void onPostCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
    SplashScreen.show(this);
    super.onPostCreate(savedInstanceState, persistentState);

  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */


  @Override
  protected String getMainComponentName() {
    return "SnaackBox";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
